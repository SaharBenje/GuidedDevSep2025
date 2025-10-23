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

	#region Class: UsrProcess_084fe24UsrSterne3_6eccc39UsrSterne2MethodsWrapper

	/// <exclude/>
	public class UsrProcess_084fe24UsrSterne3_6eccc39UsrSterne2MethodsWrapper : ProcessModel
	{

		public UsrProcess_084fe24UsrSterne3_6eccc39UsrSterne2MethodsWrapper(Process process)
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
			
			//code pays 
			var countryId = account.GetTypedColumnValue<Guid>("UsrColumn12Id");
			var countryName = GetLookupNameById("UsrCodePaysLookup", countryId);
			
			//nb employe
			var nbemployeId = account.GetTypedColumnValue<Guid>("EmployeesNumberId");
			var nbemployeCode = GetLookupValueById("AccountEmployeesNumber", "UsrCode",nbemployeId);
			
			
			
			//secteur d'activite 
			var secteuractId = account.GetTypedColumnValue<Guid>("IndustryId");
			var secteuractName = GetLookupNameById("AccountIndustry", secteuractId);
			
			
			/*
			var sb = new StringBuilder();
			
			sb.Append("{");
			
			//ok
			
			
			
			
			sb.Append("\"status\": \"Validé\",");
			sb.AppendFormat("\"name\": \"{0}\",", account.GetTypedColumnValue<string>("Name"));
			sb.AppendFormat("\"alternativeName\": \"{0}\",", account.GetTypedColumnValue<string>("AlternativeName"));
			sb.AppendFormat("\"countryCode\": \"{0}\",", countryName);
			sb.AppendFormat("\"siret\": \"{0}\",", account.GetTypedColumnValue<string>("Usragencesiret"));
			sb.AppendFormat("\"siren\": \"{0}\",", account.GetTypedColumnValue<string>("UsrSiren"));
			sb.AppendFormat("\"duns\": \"{0}\",", account.GetTypedColumnValue<string>("UsrDuns"));
			sb.AppendFormat("\"employeesNumber\": \"{0}\",", nbemployeCode);
			//sb.AppendFormat("\"web\": \"{0}\",", account.GetTypedColumnValue<string>("Web"));
			sb.AppendFormat("\"tvaEu\": \"{0}\",", account.GetTypedColumnValue<string>("UsrColumn10"));
			sb.AppendFormat("\"creationDate\": \"{0:O}\",", account.GetTypedColumnValue<DateTime>("CreatedOn"));
			sb.AppendFormat("\"createdOn\": \"{0:O}\",", account.GetTypedColumnValue<DateTime>("UsrDateCreation"));
			sb.AppendFormat("\"createdBy\": \"{0}\",", account.GetTypedColumnValue<string>("CreatedByName"));
			sb.AppendFormat("\"modifiedOn\": \"{0:O}\",", account.GetTypedColumnValue<DateTime>("ModifiedOn"));
			sb.AppendFormat("\"modifiedBy\": \"{0}\",", account.GetTypedColumnValue<string>("ModifiedByName"));
			//sb.AppendFormat("\"legalCategory\": \"{0}\",", account.GetTypedColumnValue<string>("LegalCategory"));
			sb.AppendFormat("\"legalCategory\": \"{0}\",", secteuractName);
			sb.AppendFormat("\"primaryActivityCode\": \"{0}\",", account.GetTypedColumnValue<string>("UsrCodeAPE"));
			sb.AppendFormat("\"primaryActivityLabel\": \"{0}\",", account.GetTypedColumnValue<string>("UsrLibelleAPE"));
			//sb.AppendFormat("\"accountLogo\": \"{0}\",", account.GetTypedColumnValue<string>("AccountLogo"));
			
			
			
			
			ubcontractorDto\": {}");
			
			
			sb.Append("}");
			
			string json = sb.ToString();
			Set("GeneratedJson", json); */
			
			var sb = new StringBuilder();
			
			sb.Append("{");
			
			// Champs simples
			sb.AppendFormat("\"name\": \"{0}\",", account.GetTypedColumnValue<string>("Name"));
			
			// ✅ Objet imbriqué : agencyDto
			sb.Append("\"agencyDto\": {");
			sb.Append("\"profitCenter\": \"CP20\"");
			sb.Append("},");
			
			// ✅ Objet vide : subcontractorDto
			sb.Append("\"subcontractorDto\": {},");
			
			// Champs simples
			sb.Append("\"subcontractorComptableId\": \"string\",");
			sb.Append("\"currency\": \"EUR\",");
			sb.Append("\"paymentTerm\": \"string\",");
			sb.Append("\"meansOfPayment\": \"string\",");
			sb.Append("\"isFactor\": true,");
			sb.Append("\"factorComptableId\": \"string\",");
			sb.Append("\"checkTransmissionMode\": \"string\",");
			sb.Append("\"isActive\": true,");
			
			// Dates ISO 8601
			DateTime startDate = new DateTime(2025, 9, 2, 9, 53, 7, 497, DateTimeKind.Utc);
			DateTime endDate = new DateTime(2025, 9, 2, 9, 53, 7, 497, DateTimeKind.Utc);
			
			sb.AppendFormat("\"startDate\": \"{0:O}\",", startDate);
			sb.AppendFormat("\"endDate\": \"{0:O}\"", endDate);
			
			// Fin
			sb.Append("}");
			
			string json = sb.ToString();
			Set("GeneratedJson", json);
			
			/*
			
			// Création de la requête HTTP POST
			var httpRequest = new XMLHttpRequest();
			var url = "https://pp-connect.groupe-sterne.com/subcontractors/7885/contractRelations/47834269400047";
			
			httpRequest.open("POST", url, false);  // false => synchro (ou true pour asynchrone)
			httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			
			// Envoi du body en JSON pur (stringifié)
			httpRequest.send(JSON.stringify(json));
			
			// Traitement de la réponse
			var responseStatus = httpRequest.status;
			var responseText = httpRequest.responseText;
			
			// Supposons que la réponse est un JSON avec les champs titre, statut, erreur
			var responseJson;
			try {
			  responseJson = JSON.parse(responseText);
			} catch (e) {
			  responseJson = {};
			}
			*/
			
			
			// Variables d'entrée
			//string url = Convert.ToString(Terrasoft.Configuration.SysSettings.GetValue(UserConnection, "MonParametreUrl")); // récupère l'URL depuis un paramètre système
			string url = "https://pp-connect.groupe-sterne.com/subcontractors/47834269400047/contractRelations/47834269400047";
			string token = Get<string>("token");
			//"eyJhbGciOiJSUzI1NiIsImtpZCI6IkIzMkI3RUM5OTczQTcwODUyMDE4OTM0MTkzMzQ4QTIwIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL3BwLWlkZW50aXR5Lmdyb3VwZS1zdGVybmUuY29tIiwibmJmIjoxNzYwMDE4NDYxLCJpYXQiOjE3NjAwMTg0NjEsImV4cCI6MTc2MDAyMjA2MSwiYXVkIjpbIkNvbm5lY3RBcGkiLCJTdGVybmVTdWJjb250cmFjdG9yc0FwaSIsImh0dHBzOi8vcHAtaWRlbnRpdHkuZ3JvdXBlLXN0ZXJuZS5jb20vcmVzb3VyY2VzIl0sInNjb3BlIjpbIkNvbm5lY3RBcGlTY29wZSIsIlN0ZXJuZVN1YmNvbnRyYWN0b3JzU2NvcGUiXSwiY2xpZW50X2lkIjoiRmVrcmEifQ.kN1CKv5qvXc1xvwSFJ4OUDe5pllQs4Eklazqpfw7TAG24FFz6bpVrZeqwYIpqIyb7eMJgLhMTH6MK-Sd-IjDUCB9YAMmf8s2mfySQak22M2jul4yB3IPyBkHthbt8ipIom4jfK3_3oDMXlCPJDuiysYK8ZTanGf51REAerdY4EAaYFynHUWsG8n7orwxDZOARgm7YhspAfyYNqOcreLZMWHA7_q9yrkR6ZQrVL2vsTRCKvaR7qbQvswviQTQ7xHPib6KJsRNOut6UHmQ1tHTXmZIChTHwaHpMD5UM6GlddKLfC9oMDSrCLknW-a9TVtjjU-0b8nQbkgCNe_jLVhGjQ";
			
			
			/*
			// Création manuelle du JSON
			string jsonBody = "{"
			  + "\"name\":\"string\","
			  + "\"agencyDto\":{ \"profitCenter\":\"CP20\" },"
			  + "\"subcontractorDto\":{},"
			  + "\"startDate\":\"2025-09-02T09:53:07.497Z\""
			  + "}";
			
			// Création de la requête HTTP
			System.Net.HttpWebRequest request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
			request.Method = "POST";
			request.ContentType = "application/json";
			request.Headers["Authorization"] = "Bearer " + token;
			
			// Ecriture du JSON dans le corps de la requête
			System.IO.Stream requestStream = request.GetRequestStream();
			System.Text.UTF8Encoding encoding = new System.Text.UTF8Encoding();
			byte[] bytes = encoding.GetBytes(jsonBody);
			requestStream.Write(bytes, 0, bytes.Length);
			requestStream.Close();
			
			// Lecture de la réponse
			System.Net.HttpWebResponse response = (System.Net.HttpWebResponse)request.GetResponse();
			System.IO.StreamReader reader = new System.IO.StreamReader(response.GetResponseStream());
			string responseText = reader.ReadToEnd();
			reader.Close();
			
			// Retourne la réponse pour usage éventuel
			
			*/
			
			
			
			// Corps du JSON à envoyer
			string jsonBody = "{"
			  + "\"name\":\"string\","
			  + "\"agencyDto\":{ \"profitCenter\":\"CP20\" },"
			  + "\"subcontractorDto\":{},"
			  + "\"startDate\":\"2025-09-02T09:53:07.497Z\""
			  + "}";
			  
			  
			  Set("GeneratedJson", jsonBody);
			
			
			try
			{
			    // Création de la requête
			    System.Net.HttpWebRequest request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
			    request.Method = "POST";
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
			
			    // Contrôle si réponse vide
			    //if (string.IsNullOrEmpty(responseText))
			    //{
			       // throw new System.Exception("Le corps de la réponse est vide.");
			   // }
			
			    // Stocke le résultat dans la variable du processus
			
			    // Affiche la réponse dans un popup (facultatif)
			    //Terrasoft.UI.WebControls.Controls.ScriptManager.AddScript("Terrasoft.utils.showInformation('" + responseText.Replace("'", "\\'") + "');");
			
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
			        throw new System.Exception("Erreur WebException HTTP " + (int)errorResponse.StatusCode + " : " + errorText);
			    }
			    else
			    {
			        throw new System.Exception("Erreur réseau : " + webEx.Message);
			    }
			}
			catch (System.Exception ex)
			{
			    // Gestion des autres erreurs
			    throw new System.Exception("Erreur lors de l'appel du web service : " + ex.Message);
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
			
			
			List<string> GetAddressesForAccount(Guid accountId2) {
			    var addresses = new List<string>();
			    var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrAdresse");
			
			    // Colonnes à récupérer
			    esq.AddColumn("UsrName");
			    esq.AddColumn("UsrAdresseComplete");
			    esq.AddColumn("UsrCodePostal");
			    esq.AddColumn("UsrColumn6");
			    esq.AddColumn("Usrentreebatiment");
			    esq.AddColumn("UsrAdresse2");
			    esq.AddColumn("UsrVille.Name");  // Lookup vers City
			    esq.AddColumn("UsrPays.Name");   // Lookup vers Country
			    esq.AddColumn("Usrdepartement_region.Name"); // Lookup vers Region
			    esq.AddColumn("UsrTypeadresse.Name"); // Lookup
			    esq.AddColumn("UsrPrincipale");
			
			    // Filtre sur l’account
			    esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrSociete", accountId2));
			
			    var collection = esq.GetEntityCollection(userConnection);
			    
			    foreach (var entity in collection) {
			        var sbAddr = new StringBuilder();
			        sbAddr.Append("{");
			
			        sbAddr.AppendFormat("\"name\": \"{0}\",", entity.GetTypedColumnValue<string>("UsrName"));
			        sbAddr.Append("\"normalizedPostalAdresse\": {");
			        sbAddr.AppendFormat("\"line1\": \"{0}\",", entity.GetTypedColumnValue<string>("UsrAdresseComplete"));
			        sbAddr.AppendFormat("\"line2\": \"{0}\",", entity.GetTypedColumnValue<string>("UsrColumn6")); // Numéro et nom de voie
			        sbAddr.AppendFormat("\"line3\": \"{0}\",", entity.GetTypedColumnValue<string>("Usrentreebatiment"));
			        sbAddr.AppendFormat("\"line4\": \"{0}\",", entity.GetTypedColumnValue<string>("UsrAdresse2"));
			        sbAddr.Append("\"line5\": \"\",");
			        sbAddr.Append("\"line6\": \"\"");
			        sbAddr.Append("},");
			
			        sbAddr.AppendFormat("\"postalCode\": \"{0}\",", entity.GetTypedColumnValue<string>("UsrCodePostal"));
			        sbAddr.AppendFormat("\"city\": \"{0}\",", entity.GetColumnValue("UsrVille_Name"));
			        sbAddr.AppendFormat("\"region\": \"{0}\",", entity.GetColumnValue("Usrdepartement_region_Name"));
			        sbAddr.AppendFormat("\"country\": \"{0}\",", entity.GetColumnValue("UsrPays_Name"));
			        sbAddr.AppendFormat("\"isMainAddress\": {0},", entity.GetTypedColumnValue<bool>("UsrPrincipale").ToString().ToLower());
			        sbAddr.AppendFormat("\"type\": \"{0}\"", entity.GetColumnValue("UsrTypeadresse_Name"));
			
			        sbAddr.Append("}");
			
			        addresses.Add(sbAddr.ToString());
			    }
			
			    return addresses;
			}
			
			List<string> GetContactsForAccount(Guid accId) {
			    var contacts = new List<string>();
			
			    var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Contact");
			
			    // Champs simples
			    esq.AddColumn("Name");
			    esq.AddColumn("GivenName");
			    esq.AddColumn("Surname");
			    esq.AddColumn("Phone");
			    esq.AddColumn("MobilePhone");
			    esq.AddColumn("Email");
			
			    // Lookup : UsrContratCadre
			    esq.AddColumn("UsrContratCadre.UsrIdcontrat"); // Champ personnalisé du contrat
			
			    // Filtre : Contact.Account = accId
			    esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accId));
			
			    var collection = esq.GetEntityCollection(userConnection);
			
			    foreach (var contact in collection) {
			        var sbContact = new StringBuilder();
			        sbContact.Append("{");
			
			        sbContact.AppendFormat("\"companyName\": \"{0}\",", account.GetTypedColumnValue<string>("Name"));
			        sbContact.AppendFormat("\"givenName\": \"{0}\",", contact.GetTypedColumnValue<string>("GivenName"));
			        sbContact.AppendFormat("\"familyName\": \"{0}\",", contact.GetTypedColumnValue<string>("Surname"));
			        sbContact.AppendFormat("\"phoneNumber\": \"{0}\",", contact.GetTypedColumnValue<string>("Phone"));
			        sbContact.AppendFormat("\"mobilePhoneNumber\": \"{0}\",", contact.GetTypedColumnValue<string>("MobilePhone"));
			        sbContact.AppendFormat("\"email\": \"{0}\",", contact.GetTypedColumnValue<string>("Email"));
			
			        // Champ du contrat cadre
			        var contratIdContrat = contact.GetColumnValue("UsrContratCadre_UsrIdcontrat") as string ?? "";
			        sbContact.AppendFormat("\"contratCadreId\": \"{0}\"", contratIdContrat);
			
			        sbContact.Append("}");
			
			        contacts.Add(sbContact.ToString());
			    }
			
			    return contacts;
			}
			
			
			
			
		}

		#endregion

	}

	#endregion

}

