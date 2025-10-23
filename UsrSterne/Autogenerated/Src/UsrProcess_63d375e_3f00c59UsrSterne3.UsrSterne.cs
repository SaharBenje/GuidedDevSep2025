namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrProcess_63d375e_3f00c59UsrSterne3MethodsWrapper

	/// <exclude/>
	public class UsrProcess_63d375e_3f00c59UsrSterne3MethodsWrapper : ProcessModel
	{

		public UsrProcess_63d375e_3f00c59UsrSterne3MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			// === 1. Lire l'enregistrement dans UsrTokenStore ===
			var esq = new Terrasoft.Core.Entities.EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrTokenStore");
			esq.AddAllSchemaColumns();
			var collection = esq.GetEntityCollection(UserConnection);
			
			string token = "";
			DateTime lastUpdatedUtc = DateTime.MinValue;
			Terrasoft.Core.Entities.Entity tokenEntity = null;
			DateTime expirationDate = DateTime.MinValue;
			
			if (collection.Count > 0) {
			    tokenEntity = collection[0];
			    token = tokenEntity.GetTypedColumnValue<string>("UsrToken");
			
			    // Lecture UTC depuis colonne DateTime
			    DateTime dbLastUpdated = tokenEntity.GetTypedColumnValue<DateTime>("UsrLastUpdatedOn");
			    //lastUpdatedUtc = new DateTime(DateTime.SpecifyKind(dbLastUpdated, DateTimeKind.Utc));
			    lastUpdatedUtc = dbLastUpdated;
			
			    DateTime dbExpiration = tokenEntity.GetTypedColumnValue<DateTime>("UsrHeureExpiration");
			    //expirationDate = new DateTime(DateTime.SpecifyKind(dbExpiration, DateTimeKind.Utc));
			    expirationDate = dbExpiration;
			
			} else {
			    // Aucun enregistrement → on en crée un vide
			    var schema = UserConnection.EntitySchemaManager.GetInstanceByName("UsrTokenStore");
			    tokenEntity = schema.CreateEntity(UserConnection);
			    tokenEntity.SetDefColumnValues();
			
			    tokenEntity.SetColumnValue("UsrToken", "");
			    tokenEntity.SetColumnValue("UsrLastUpdatedOn", DateTime.Now); // UTC
			    tokenEntity.SetColumnValue("UsrHeureExpiration", DateTime.Now.AddHours(1)); // UTC
			    tokenEntity.SetColumnValue("UsrName", "Init");
			    tokenEntity.Save();
			
			    lastUpdatedUtc = DateTime.Now;
			    expirationDate = DateTime.Now.AddHours(1);
			}
			
			
			// Comparaison avec l'heure actuelle UTC
			DateTime maintenant = DateTime.Now;
			/*
			
			if (maintenant < expirationDate) {
			    // Pour debug uniquement — peut être supprimé
			     throw new Exception("Le token est encore valide. " + maintenant + " < " + expirationDate);
			} else {
			     throw new Exception("Le token est expiré. " + maintenant + " >= " + expirationDate);
			}
			*/
			
			// === 2. Vérifier si le token est encore valide (< 60 minutes) ===
			bool isTokenValid = !string.IsNullOrEmpty(token) && maintenant < expirationDate;
			
			if (isTokenValid) {
			    Set("AccessToken", token);
			    Set("AccessTokenJson", "{\"source\":\"UsrTokenStore\",\"status\":\"valid\"}");
			    return true;
			}
			
			// === 3. Appeler le Web Service pour générer un nouveau token ===
			try {
			    string tokenUrl = SysSettings.GetValue<string>(UserConnection, "UsrConnectTokenUrl", string.Empty);
			    string clientId = SysSettings.GetValue<string>(UserConnection, "UsrConnectClientId", string.Empty);
			    string clientSecret = SysSettings.GetValue<string>(UserConnection, "UsrConnectClientSecret", string.Empty);
			    
			    
			    if (tokenUrl == "") throw new Exception("La variable système UsrConnectTokenUrltoken est vide");
			    if (clientId == "") throw new Exception("La variable système UsrConnectClientId est vide");
			    if (clientSecret == "") throw new Exception("La variable système UsrConnectClientSecret est vide");
			
			
			
			
			    string postData = "grant_type=client_credentials&client_id=" +
			        System.Uri.EscapeDataString(clientId) +
			        "&client_secret=" + System.Uri.EscapeDataString(clientSecret);
			
			    byte[] dataBytes = System.Text.Encoding.UTF8.GetBytes(postData);
			
			    System.Net.WebRequest request = System.Net.WebRequest.Create(tokenUrl);
			    request.Method = "POST";
			    request.ContentType = "application/x-www-form-urlencoded";
			    request.ContentLength = dataBytes.Length;
			
			    using (System.IO.Stream stream = request.GetRequestStream()) {
			        stream.Write(dataBytes, 0, dataBytes.Length);
			    }
			
			    // === 4. Lire la réponse JSON ===
			    string responseText = "";
			    using (System.Net.WebResponse response = request.GetResponse())
			    using (System.IO.StreamReader reader = new System.IO.StreamReader(response.GetResponseStream())) {
			        responseText = reader.ReadToEnd();
			    }
			
			    // === 5. Extraire le token depuis la réponse JSON brute ===
			    string newToken = "";
			    string key = "\"access_token\":\"";
			    int start = responseText.IndexOf(key);
			    if (start >= 0) {
			        start += key.Length;
			        int end = responseText.IndexOf("\"", start);
			        if (end > start) {
			            newToken = responseText.Substring(start, end - start);
			        }
			    }
			
			    // === 6. Sauvegarder le nouveau token si valide ===
			    if (!string.IsNullOrEmpty(newToken)) {
			        tokenEntity.SetColumnValue("UsrToken", newToken);
			        tokenEntity.SetColumnValue("UsrLastUpdatedOn", DateTime.UtcNow);
			        tokenEntity.SetColumnValue("UsrHeureExpiration", DateTime.UtcNow.AddHours(1));
			        tokenEntity.SetColumnValue("UsrName", "Refreshed");
			        tokenEntity.Save();
			
			        Set("AccessToken", newToken);
			        Set("AccessTokenJson", responseText);
			        return true;
			    } else {
			        Set("AccessToken", "");
			        Set("AccessTokenJson", "{\"error\":\"token_empty_or_parse_failed\"}");
			        return false;
			    }
			
			} catch (Exception ex) {
			    Set("AccessToken", "");
			    Set("AccessTokenJson", "{\"error\":\"exception\",\"message\":\"" + ex.Message.Replace("\"", "'") + "\"}");
			    return false;
			}
		}

		#endregion

	}

	#endregion

}

