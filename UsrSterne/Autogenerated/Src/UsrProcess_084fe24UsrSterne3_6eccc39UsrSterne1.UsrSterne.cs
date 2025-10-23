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

	#region Class: UsrProcess_084fe24UsrSterne3_6eccc39UsrSterne1MethodsWrapper

	/// <exclude/>
	public class UsrProcess_084fe24UsrSterne3_6eccc39UsrSterne1MethodsWrapper : ProcessModel
	{

		public UsrProcess_084fe24UsrSterne3_6eccc39UsrSterne1MethodsWrapper(Process process)
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
			sb.Append(",");
			
			/*
			
			sb.AppendFormat("\"type\": \"agency\",");
			sb.AppendFormat("\"establishmentSubType\": \"Agence\",");
			sb.AppendFormat("\"profitCenter\": \"{0}\"", "CP01"); // fixe ou récupérable ?
			sb.Append("},"); // fin "agency"
			
			// subcontractor vide
			sb.Append("\"subcontractor\": {},");
			sb.Append("\"subcontractorComptableId\": \"FP000000\",");
			sb.Append("\"currency\": \"EUR\",");
			sb.Append("\"paymentTerm\": \"30 jours fin de mois\",");
			sb.Append("\"meansOfPayment\": \"Virement\",");
			sb.Append("\"isFactor\": true,");
			sb.Append("\"factorComptableId\": \"FP000000\",");
			sb.Append("\"checkTransmissionMode\": \"Courrier\",");
			sb.Append("\"isActive\": true,");
			sb.Append("\"startDate\": \"01/01/2025\",");
			sb.Append("\"endDate\": \"01/01/2025\"");
			
			*/
			
			//currency
			var currencyId = relation.GetTypedColumnValue<Guid>("UsrDeviseId");
			var currencyShortName = GetLookupValueById("Currency", "ShortName",currencyId);
			
			sb.Append("\"subcontractor\": {},");
			sb.AppendFormat("\"subcontractorComptableId\": \"{0}\",", relation.GetTypedColumnValue<string>("UsrColumn9"));
			sb.AppendFormat("\"currency\": \"{0}\",", currencyShortName);
			sb.AppendFormat("\"paymentTerm\": \"{0}\",", relation.GetTypedColumnValue<string>("UsrDelaidePaiementName"));
			sb.AppendFormat("\"meansOfPayment\": \"{0}\",", relation.GetTypedColumnValue<string>("UsrMoyendePaiementName"));
			sb.AppendFormat("\"isFactor\": {0},", relation.GetTypedColumnValue<bool>("UsrFactor").ToString().ToLower());
			sb.AppendFormat("\"factorComptableId\": \"{0}\",", relation.GetTypedColumnValue<string>("UsrColumn9"));
			sb.AppendFormat("\"checkTransmissionMode\": \"{0}\",", relation.GetTypedColumnValue<string>("UsrTransmissionCheque"));
			sb.AppendFormat("\"isActive\": {0},", relation.GetTypedColumnValue<bool>("UsrActif").ToString().ToLower());
			sb.AppendFormat("\"startDate\": \"{0:dd/MM/yyyy}\",", relation.GetTypedColumnValue<DateTime>("CreatedOn"));
			sb.AppendFormat("\"endDate\": \"{0:dd/MM/yyyy}\"", relation.GetTypedColumnValue<DateTime>("ModifiedOn"));
			
			
			//Ajout agencyDto
			var cp = "";
			sb.Append(",");
			sb.Append("\"agencyDto\": {");
			sb.AppendFormat("\"profitCenter\": \"{0}\"", cp);
			sb.Append("},");
			sb.Append("\"subcontractorDto\": {}");
			
			
			sb.Append("}");
			
			string json = sb.ToString();
			Set("GeneratedJson", json);
			
			
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

