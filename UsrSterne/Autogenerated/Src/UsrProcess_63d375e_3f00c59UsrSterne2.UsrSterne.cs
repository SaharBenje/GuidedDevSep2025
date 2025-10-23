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

	#region Class: UsrProcess_63d375e_3f00c59UsrSterne2MethodsWrapper

	/// <exclude/>
	public class UsrProcess_63d375e_3f00c59UsrSterne2MethodsWrapper : ProcessModel
	{

		public UsrProcess_63d375e_3f00c59UsrSterne2MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			/*// 1. Lire le token et sa date d'expiration depuis SysSettings
			string token = Terrasoft.Core.Configuration.SysSettings.GetValue<string>(UserConnection, "UsrTokenConnect", string.Empty);
			System.DateTime expiry = Terrasoft.Core.Configuration.SysSettings.GetValue<System.DateTime>(UserConnection, "UsrTokenExpire", System.DateTime.MinValue);
			
			// 2. Vérifier si le token est encore valide
			bool hasToken = !string.IsNullOrEmpty(token);
			bool isExpired = expiry <= System.DateTime.UtcNow;
			
			if (hasToken && !isExpired) {
			    // Utiliser le token existant
			    Set("AccessToken", token);
			    return true;
			}
			*/
			// 3. Lire les paramètres du processus
			//string tokenUrl = Get<string>("TokenUrl");
			string tokenUrl = SysSettings.GetValue<string>(UserConnection, "UsrConnectTokenUrl", string.Empty);
			
			//string clientId = Get<string>("ClientId");
			string clientId = SysSettings.GetValue<string>(UserConnection, "UsrConnectClientId", string.Empty);
			
			
			
			//string clientSecret = Get<string>("ClientSecret");
			string clientSecret = SysSettings.GetValue<string>(UserConnection, "UsrConnectClientSecret", string.Empty);
			
			
			/*
			string tokenUrl = Terrasoft.Core.Configuration.SysSettings.GetValue<string>(UserConnection, "UsrTokenUrl", string.Empty);
			string clientId = Terrasoft.Core.Configuration.SysSettings.GetValue<string>(UserConnection, "UsrClientId", string.Empty);
			string clientSecret = Terrasoft.Core.Configuration.SysSettings.GetValue<string>(UserConnection, "UsrClientSecret", string.Empty);
			*/
			
			
			// 4. Préparer les données POST
			string postData = "grant_type=client_credentials&client_id=" + 
			    System.Uri.EscapeDataString(clientId) + 
			    "&client_secret=" + System.Uri.EscapeDataString(clientSecret);
			
			byte[] dataBytes = System.Text.Encoding.UTF8.GetBytes(postData);
			
			// 5. Construire la requête POST
			var request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(tokenUrl);
			request.Method = "POST";
			request.ContentType = "application/x-www-form-urlencoded";
			request.ContentLength = dataBytes.Length;
			
			using (var stream = request.GetRequestStream()) {
			    stream.Write(dataBytes, 0, dataBytes.Length);
			}
			
			// 6. Lire la réponse
			string responseText = "";
			using (var response = (System.Net.HttpWebResponse)request.GetResponse()) {
			    using (var reader = new System.IO.StreamReader(response.GetResponseStream())) {
			        responseText = reader.ReadToEnd();
			    }
			}
			
			// 7. Extraire le token de la réponse JSON
			string newToken = null;
			string key = "\"access_token\":\"";
			int start = responseText.IndexOf(key);
			if (start >= 0) {
			    start += key.Length;
			    int end = responseText.IndexOf("\"", start);
			    if (end > start) {
			        newToken = responseText.Substring(start, end - start);
			    }
			}
			
			// 8. Sauvegarder dans les SysSettings si le token est valide
			if (!string.IsNullOrEmpty(newToken)) {
			    Terrasoft.Core.Configuration.SysSettings.SetValue(UserConnection, "UsrTokenConnect", newToken);
			    Terrasoft.Core.Configuration.SysSettings.SetValue(UserConnection, "UsrTokenExpire", System.DateTime.UtcNow.AddHours(1));
			}
			
			// 9. Retourner les résultats dans le process
			Set("AccessToken", newToken);
			Set("AccessTokenJson", responseText);
			
			return true;
		}

		#endregion

	}

	#endregion

}

