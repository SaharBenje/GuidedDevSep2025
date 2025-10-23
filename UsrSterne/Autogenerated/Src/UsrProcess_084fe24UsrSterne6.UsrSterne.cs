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

	#region Class: UsrProcess_084fe24UsrSterne6MethodsWrapper

	/// <exclude/>
	public class UsrProcess_084fe24UsrSterne6MethodsWrapper : ProcessModel
	{

		public UsrProcess_084fe24UsrSterne6MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			
			
			Guid accountId = Get<Guid>("IdS");
			var userConnection = this.UserConnection;
			
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var account = accountSchema.CreateEntity(userConnection);
			
			if (!account.FetchFromDB("Id", accountId)) {
			    throw new Exception("Compte non trouvé.");
			}
			
			
			string tmp2 = SysSettings.GetValue<string>(UserConnection, "UsrURIserviceweb",string.Empty);
			if (tmp2 == "") throw new Exception("La variable système UsrURIserviceweb est vide");
			
			string siret = account.GetTypedColumnValue<string>("Usragencesiret");
			
			var ConnectOrganisationcodetype = SysSettings.GetValue<string>(UserConnection, "UsrConnectOrganisationcodetype",string.Empty);
			if (ConnectOrganisationcodetype == "") throw new Exception("La variable système ConnectOrganisationcodetype est vide");
			
			
			var ConnectCountryCode = SysSettings.GetValue<string>(UserConnection, "UsrConnectCountryCode",string.Empty);
			if (ConnectCountryCode == "") throw new Exception("La variable système ConnectCountryCode est vide");
			
			
			
			string url = tmp2+"/subcontractors/"+siret+"?organisationCodeType="+ConnectOrganisationcodetype+"&countryCode="+ConnectCountryCode;
			//subcontractors/51394380300033?organisationCodeType=SIRET&countryCode=FR
			
			
			string token = Get<string>("token");
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
			
			
			string status = "Validé";
			string name = account.GetTypedColumnValue<string>("Name");
			string alternativeName = account.GetTypedColumnValue<string>("AlternativeName");
			string countryCode = countryName;
			string siren = account.GetTypedColumnValue<string>("UsrSiren");
			string duns = account.GetTypedColumnValue<string>("UsrDuns");
			string employeesNumber = nbemployeCode;
			string tvaEu = account.GetTypedColumnValue<string>("UsrColumn10");
			DateTime creationDate = account.GetTypedColumnValue<DateTime>("CreatedOn");
			DateTime createdOn = account.GetTypedColumnValue<DateTime>("UsrDateCreation");
			string createdBy = account.GetTypedColumnValue<string>("CreatedByName");
			DateTime modifiedOn = account.GetTypedColumnValue<DateTime>("ModifiedOn");
			string modifiedBy = account.GetTypedColumnValue<string>("ModifiedByName");
			string legalCategory = secteuractName;
			string primaryActivityCode = account.GetTypedColumnValue<string>("UsrCodeAPE");
			string primaryActivityLabel = account.GetTypedColumnValue<string>("UsrLibelleAPE");
			// string web = account.GetTypedColumnValue<string>("Web");
			// string legalCategoryFromDb = account.GetTypedColumnValue<string>("LegalCategory");
			// string accountLogo = account.GetTypedColumnValue<string>("AccountLogo");
			
			
			var sb = new StringBuilder();
			
			sb.Append("{");
			
			sb.AppendFormat("\"status\": \"{0}\",", status);
			sb.AppendFormat("\"name\": \"{0}\",", name);
			sb.AppendFormat("\"alternativeName\": \"{0}\",", alternativeName);
			sb.AppendFormat("\"countryCode\": \"{0}\",", countryCode);
			sb.AppendFormat("\"siret\": \"{0}\",", siret);
			sb.AppendFormat("\"siren\": \"{0}\",", siren);
			sb.AppendFormat("\"duns\": \"{0}\",", duns);
			sb.AppendFormat("\"employeesNumber\": \"{0}\",", employeesNumber);
			// sb.AppendFormat("\"web\": \"{0}\",", web);
			sb.AppendFormat("\"tvaEu\": \"{0}\",", tvaEu);
			sb.AppendFormat("\"creationDate\": \"{0:O}\",", creationDate);
			sb.AppendFormat("\"createdOn\": \"{0:O}\",", createdOn);
			sb.AppendFormat("\"createdBy\": \"{0}\",", createdBy);
			sb.AppendFormat("\"modifiedOn\": \"{0:O}\",", modifiedOn);
			sb.AppendFormat("\"modifiedBy\": \"{0}\",", modifiedBy);
			// sb.AppendFormat("\"legalCategory\": \"{0}\",", legalCategoryFromDb);
			sb.AppendFormat("\"legalCategory\": \"{0}\",", legalCategory);
			sb.AppendFormat("\"primaryActivityCode\": \"{0}\",", primaryActivityCode);
			sb.AppendFormat("\"primaryActivityLabel\": \"{0}\",", primaryActivityLabel);
			// sb.AppendFormat("\"accountLogo\": \"{0}\",", accountLogo);
			
			
			
			
			
			
			//ok
			/*
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
			*/
			
			
			
			
			// Ajouter les adresses
			var addressList = GetAddressesForAccount(accountId);
			sb.Append("\"addresses\": [");
			sb.Append(string.Join(",", addressList));
			sb.Append("],");
			
			
			//ajoute les contacts
			var contactList = GetContactsForAccount(accountId);
			sb.Append("\"contacts\": [");
			sb.Append(string.Join(",", contactList));
			sb.Append("],");
			
			
			
			sb.Append("\"establishmentSubType\": \"Informatique\"");
			
			sb.Append("}");
			
			string jsonBody = sb.ToString();
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
			            Set("StatusDescription", response.StatusDescription);
			
			
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
			        Set("StatusDescription", errorText);
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

