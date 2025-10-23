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

	#region Class: UsrProcess_084fe24UsrSterne3_6eccc39UsrSterne3_899562fMethodsWrapper

	/// <exclude/>
	public class UsrProcess_084fe24UsrSterne3_6eccc39UsrSterne3_899562fMethodsWrapper : ProcessModel
	{

		public UsrProcess_084fe24UsrSterne3_6eccc39UsrSterne3_899562fMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			
			
			Guid relationId = Get<Guid>("IdR");
			
			var userConnection = this.UserConnection;
			
			
			var relationSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrRelation");
			var relation = relationSchema.CreateEntity(userConnection);
			
			if (!relation.FetchFromDB("Id", relationId)) {
			    throw new Exception("Relation non trouvé.");
			}
			
			Guid accountId = relation.GetTypedColumnValue<Guid>("UsrCompte1Id");
			//Get<Guid>("IdR");
			
			
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var account = accountSchema.CreateEntity(userConnection);
			
			if (!account.FetchFromDB("Id", accountId)) {
			    throw new Exception("Compte non trouvé.");
			}
			//lookup
			
			
			
			var siret = GetLookupValueById("Account", "Usragencesiret",accountId);
			
			Guid accountId2 = relation.GetTypedColumnValue<Guid>("UsrCompte2Id");
			var agencesiret = GetLookupValueById("Account", "Usragencesiret",accountId2);
			
			
			
			
			
			
			
			string tmp2 = SysSettings.GetValue<string>(UserConnection, "UsrURIserviceweb",string.Empty);
			string url = tmp2+"/subcontractors/"+siret+"/contractRelations/"+agencesiret;
			//string url = tmp2+"/subcontractors/47834269400047/contractRelations/47834269400047";
			
			if (tmp2 == "") throw new Exception("La variable système UsrURIserviceweb est vide");
			
			string token = Get<string>("token");
			
			
			
			var sb = new StringBuilder();
			
			// Déclaration des variables
			
			/*
			string name = account.GetTypedColumnValue<string>("Name");
			string profitCenter = relation.GetTypedColumnValue<string>("UsrProfitCenter");
			string subcontractorComptableId = agencesiret;
			var currencyId = relation.GetTypedColumnValue<Guid>("UsrDeviseId");
			var currency = GetLookupValueById("Currency", "ShortName",currencyId);
			string paymentTerm = relation.GetTypedColumnValue<string>("UsrDelaidePaiement");
			string meansOfPayment = relation.GetTypedColumnValue<string>("UsrMoyendePaiement");
			string isFactor = relation.GetTypedColumnValue<string>("UsrFactor");
			string factorComptableId = "account.GetTypedColumnValue<string>(code)";
			string checkTransmissionMode = account.GetTypedColumnValue<string>("Name");
			string isActive = account.GetTypedColumnValue<string>("UsrTransmissionCheque");
			DateTime startDate = account.GetTypedColumnValue<DateTime>("CreatedOn");
			DateTime endDate =account.GetTypedColumnValue<DateTime>("ModifiedOn");
			
			*/
			string name = account.GetTypedColumnValue<string>("Name");
			string profitCenter = relation.GetTypedColumnValue<string>("UsrProfitCenter");
			var subcontractorComptableId = relation.GetTypedColumnValue<string>("UsrColumn9");
			var currencyId = relation.GetTypedColumnValue<Guid>("UsrDeviseId");
			var currency = GetLookupValueById("Currency", "ShortName",currencyId);
			var paymentTerm = relation.GetTypedColumnValue<string>("UsrDelaidePaiementName");
			var meansOfPayment = relation.GetTypedColumnValue<string>("UsrMoyendePaiementName");
			var isFactor = relation.GetTypedColumnValue<bool>("UsrFactor");
			var factorComptableId = relation.GetTypedColumnValue<string>("UsrColumn9"); // même colonne que subcontractorComptableId ?
			var checkTransmissionMode = relation.GetTypedColumnValue<string>("UsrTransmissionCheque");
			var isActive = relation.GetTypedColumnValue<bool>("UsrActif");
			var startDate = relation.GetTypedColumnValue<DateTime>("CreatedOn");
			var endDate = relation.GetTypedColumnValue<DateTime>("ModifiedOn");
			
			
			
			// Début JSON
			sb.Append("{");
			
			sb.AppendFormat("\"name\": \"{0}\",", name);
			
			// agencyDto
			sb.Append("\"agencyDto\": {");
			sb.AppendFormat("\"profitCenter\": \"{0}\"", profitCenter);
			sb.Append("},");
			
			// subcontractorDto vide
			sb.Append("\"subcontractorDto\": {},");
			
			sb.AppendFormat("\"subcontractorComptableId\": \"{0}\",", subcontractorComptableId);
			sb.AppendFormat("\"currency\": \"{0}\",", currency);
			sb.AppendFormat("\"paymentTerm\": \"{0}\",", paymentTerm);
			sb.AppendFormat("\"meansOfPayment\": \"{0}\",", meansOfPayment);
			sb.AppendFormat("\"isFactor\": {0},", isFactor.ToString().ToLower());
			sb.AppendFormat("\"factorComptableId\": \"{0}\",", factorComptableId);
			sb.AppendFormat("\"checkTransmissionMode\": \"{0}\",", checkTransmissionMode);
			sb.AppendFormat("\"isActive\": {0},", isActive.ToString().ToLower());
			sb.AppendFormat("\"startDate\": \"{0:yyyy-MM-ddTHH:mm:ss.fffZ}\",", startDate);
			
			// 🔧 Dernière propriété SANS virgule
			sb.AppendFormat("\"endDate\": \"{0:yyyy-MM-ddTHH:mm:ss.fffZ}\"", endDate);
			
			sb.Append("}");
			
			// Résultat
			string jsonBody = sb.ToString();
			
			
			  
			  
			  Set("GeneratedJson", jsonBody);
			
			
			try
			{
			    // Création de la requête
			    System.Net.HttpWebRequest request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
			    request.Method = "PUT";
			    request.ContentType = "application/json";
			
			    // Ajout des en-têtes
			    request.Headers["Authorization"] = "Bearer " + token;
			    request.Timeout = 100000; // timeout 100 sec max
			
			    // Écriture du corps de la requête
			    System.Text.UTF8Encoding encoding = new System.Text.UTF8Encoding();
			    byte[] requestData = encoding.GetBytes(jsonBody);
			    System.IO.Stream requestStream = request.GetRequestStream();
			    requestStream.Write(requestData, 0, requestData.Length);
			    requestStream.Close();
			
			    // Lecture de la réponse
			    System.Net.HttpWebResponse response = (System.Net.HttpWebResponse)request.GetResponse();
			    int statusCode = (int)response.StatusCode;
			    
			    //throw new System.Exception("test "+statusCode+response.StatusDescription);
			
			            Set("codestatut", statusCode);
			            Set("test", response.StatusDescription);
			
			
			    // Si code de retour HTTP >= 400 => throw
			    if (statusCode >= 400)
			    {
			        //throw new System.Exception("Erreur HTTP : " + statusCode + " - " + response.StatusDescription);
			            return true;
			
			    }
			
			    System.IO.StreamReader reader = new System.IO.StreamReader(response.GetResponseStream());
			    string responseText = reader.ReadToEnd();
			    reader.Close();
			
			  
			
			    return true;
			}
			
			
			catch (System.Net.WebException webEx)
			{
				
				
			    // Gestion des erreurs réseau
			    System.Net.HttpWebResponse errorResponse = (System.Net.HttpWebResponse)webEx.Response;
			    if (errorResponse != null)
			    {
			        System.IO.StreamReader reader = new System.IO.StreamReader(errorResponse.GetResponseStream());
			        string errorText = reader.ReadToEnd();
			        reader.Close();
			        Set("codestatut", (int)errorResponse.StatusCode);
			        Set("test", errorText);
			        return true;
			        //throw new System.Exception("Erreur WebException HTTP " + (int)errorResponse.StatusCode + " : " + errorText);
			    }
			    else
			    {
			    	Set("codestatut", "Erreur réseau : " + webEx.Message);
			        return true;
			        //throw new System.Exception("Erreur réseau : " + webEx.Message);
			    }
			}
			catch (System.Exception ex)
			{
				
			    // Gestion des autres erreurs
			    Set("codestatut", "Erreur réseau : " + ex.Message);
			        return true;
			    //throw new System.Exception("Erreur lors de l'appel du web service : " + ex.Message);
			}
			
			
			
			
			
			
			
			
			return true;
			
			
			//fonction
			
			string GetLookupNameById(string schemaName, Guid? lookupId) {
				if (lookupId == null || lookupId == Guid.Empty) {
					return string.Empty;
				}
			
				var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schemaName);
				esq.PrimaryQueryColumn.IsAlwaysSelect = true;
				var nameColumn = esq.AddColumn("Name");
			
				// 🔧 Correction ici
				var primaryColumnName = esq.RootSchema.PrimaryColumn.Name;
				esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, primaryColumnName, lookupId));
			
				var collection = esq.GetEntityCollection(userConnection);
				if (collection.Count > 0) {
					return collection[0].GetColumnValue(nameColumn.Name) as string;
				}
				return string.Empty;
			}
			
			string GetLookupValueById(string schemaName, string columnName, Guid? lookupId) {
				if (lookupId == null || lookupId == Guid.Empty) {
					return string.Empty;
				}
			
				var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schemaName);
				esq.PrimaryQueryColumn.IsAlwaysSelect = true;
				var valueColumn = esq.AddColumn(columnName);
			
				var primaryColumnName = esq.RootSchema.PrimaryColumn.Name;
				esq.Filters.Add(esq.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					primaryColumnName,
					lookupId));
			
				var collection = esq.GetEntityCollection(userConnection);
				if (collection.Count > 0) {
					return collection[0].GetColumnValue(valueColumn.Name) as string;
				}
				return string.Empty;
			}
			
			
			
			
			
			
		}

		#endregion

	}

	#endregion

}

