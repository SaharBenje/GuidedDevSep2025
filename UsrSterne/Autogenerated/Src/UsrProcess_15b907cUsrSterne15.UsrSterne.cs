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

	#region Class: UsrProcess_15b907cUsrSterne15MethodsWrapper

	/// <exclude/>
	public class UsrProcess_15b907cUsrSterne15MethodsWrapper : ProcessModel
	{

		public UsrProcess_15b907cUsrSterne15MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
			AddScriptTaskMethod("ScriptTask2Execute", ScriptTask2Execute);
			AddScriptTaskMethod("ScriptTask3Execute", ScriptTask3Execute);
			AddScriptTaskMethod("ScriptTask4Execute", ScriptTask4Execute);
			AddScriptTaskMethod("ScriptTask5Execute", ScriptTask5Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			// Récupérer les paramètres
			var userConnection = Get<UserConnection>("UserConnection");
			var rawJson = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			var codePays = Get<string>("valcode");
			var provientde = Get<string>("Provientde");
			
			
			if (userConnection == null) throw new Exception("UserConnection est null");
			if (string.IsNullOrEmpty(rawJson)) throw new Exception("Le JSON (repjson) est null ou vide");
			if (recordId == Guid.Empty) throw new Exception("L'ID du compte (idS) est vide ou invalide");
			
			// Charger l'enregistrement Account
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var accountEntity = accountSchema.CreateEntity(userConnection);
			
			if (!accountEntity.FetchFromDB(recordId)) {
			    throw new Exception($"Compte avec Id {recordId} introuvable");
			}
			
			// Désérialisation JSON
			var sireneRoot = Terrasoft.Common.Json.Json.Deserialize<Terrasoft.Configuration.JsonModels.JsonSireneRoot>(rawJson);
			if (sireneRoot == null || sireneRoot.sirene == null) throw new Exception("Le nœud 'sirene' est introuvable ou vide");
			
			var dataSirene = sireneRoot.sirene;
			var uniteLegaleData = dataSirene.UniteLegale;
			
			string sirenValue = dataSirene.Siren;
			string siretValue = dataSirene.Siret;
			string statutDiffusionValue = dataSirene.StatutDiffusionEtablissement;
			string activitePrincipaleValue = dataSirene.ActivitePrincipaleRegistreMetiersEtablissement;
			string trancheEffectifValue = dataSirene.TrancheEffectifsEtablissement;
			
			// Construire Id Société
			string idSociete = ConstruireIdSociete(codePays, siretValue);
			
			// Récupération lookup
			Guid? typeId = GetLookupIdByName("AccountType", "Prestataire");
			Guid? sousTypeId = GetLookupIdByName("UsrSousTypeLookup", "Transporteur");
			Guid? secteurId = GetLookupIdByName("AccountIndustry", "Transport");
			string statutEntreprise = ConstruireStatutEntreprise(uniteLegaleData.EtatAdministratifUniteLegale);
			//Guid? statutId = GetLookupIdByName("UsrStatutLookupsCas", statutEntreprise);
			
			
			
			//lookup recupère Nom
			string libelleape = GetLookupNameByCode("UsrInseeNaf", "UsrCode", uniteLegaleData.ActivitePrincipaleUniteLegale);
			string formejuridique = GetLookupNameByCode("UsrInseeCategorieJuridique", "UsrCode", uniteLegaleData.CategorieJuridiqueUniteLegale);
			
			string test = GetLookupNameByCode("AccountEmployeesNumber", "UsrCode", trancheEffectifValue);
			Guid? nbemployeeId = GetLookupIdByName("AccountEmployeesNumber", test);
			
			
			
			// Construire raison sociale
			string raisonSociale = ConstruireRaisonSociale(uniteLegaleData);
			
			// TVA intracommunautaire
			string tvaIntra = "FR" + sirenValue;
			
			// Date de création
			DateTime? dateCreationValue = ParseDate(dataSirene.DateCreationEtablissement);
			
			// Affectation en un seul bloc
			accountEntity.SetColumnValue("UsrId", idSociete);
			//Code pays affecter automatiquement
			//code Duns UsrDuns pour le futur
			accountEntity.SetColumnValue("Usragencesiret", siretValue);
			accountEntity.SetColumnValue("UsrSiren", sirenValue);
			//Centre profit UsrCentreProfit
			
			//Si Création
			if(provientde == "Création") {
				accountEntity.SetColumnValue("TypeId", typeId);
				accountEntity.SetColumnValue("UsrSousTypeId", sousTypeId);
			}
			
			//Cathegory AccountCategory
			accountEntity.SetColumnValue("IndustryId", secteurId);
			accountEntity.SetColumnValue("Name", raisonSociale);
			//Entite bool UsrEntite
			//Agnece bool UsrAgence
			accountEntity.SetColumnValue("UsrPrestataire", true);
			//statut Connect
			//if (statutId != null) accountEntity.SetColumnValue("UsrStatutConnectId", statutId.Value);
			 accountEntity.SetColumnValue("UsrStatutConnect",statutEntreprise);
			if (!string.IsNullOrWhiteSpace(uniteLegaleData.DenominationUsuelle1UniteLegale))
			    accountEntity.SetColumnValue("AlternativeName", uniteLegaleData.DenominationUsuelle1UniteLegale);
			if (!string.IsNullOrEmpty(formejuridique)) accountEntity.SetColumnValue("UsrFormeJuridique", formejuridique); 
			if (dateCreationValue.HasValue) accountEntity.SetColumnValue("CreatedOn", dateCreationValue.Value);
			//Nb collaboratteur
			if (nbemployeeId != null) accountEntity.SetColumnValue("EmployeesNumberId", nbemployeeId.Value);
			//if (!string.IsNullOrEmpty(test)) 
			
			if (!string.IsNullOrEmpty(libelleape)) accountEntity.SetColumnValue("UsrLibelleAPE", libelleape); 
			
			
			accountEntity.SetColumnValue("UsrCodeAPE", uniteLegaleData.ActivitePrincipaleUniteLegale);
			accountEntity.SetColumnValue("UsrColumn10", CalculateTvaFromSiren(sirenValue));
			
			// Sauvegarder
			accountEntity.Save();
			
			// Sorties processus
			Set("Ville_txt", dataSirene.AdresseEtablissement.LibelleCommuneEtablissement);
			Set("Nomadr", string.IsNullOrEmpty(uniteLegaleData.DenominationUsuelle1UniteLegale) ? raisonSociale : uniteLegaleData.DenominationUsuelle1UniteLegale);
			
			return true;
			
			// --------------------------
			// Fonctions Utilitaires
			// --------------------------
			
			string ConstruireIdSociete(string pays, string siret) {
			    if (!string.IsNullOrEmpty(siret) && pays == "FR") return pays + siret;
			    return pays;
			}
			
			string ConstruireStatutEntreprise(string etatAdministratif) {
			    if ( etatAdministratif == "A") return "Active";
			    return "Cessée (Inactive)";
			}
			
			Guid? GetLookupIdByName(string schemaName, string lookupName) {
			    var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schemaName);
			    esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			    esq.AddColumn("Name");
			    esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", lookupName));
			    var collection = esq.GetEntityCollection(userConnection);
			    if (collection.Count > 0) return collection[0].PrimaryColumnValue;
			    return null;
			}
			
			
			
			
			string ConstruireRaisonSociale(Terrasoft.Configuration.JsonModels.UniteLegaleData unite) {
			    if (!string.IsNullOrWhiteSpace(unite.DenominationUniteLegale) && unite.DenominationUniteLegale != "[ND]") {
			        return unite.DenominationUniteLegale.ToUpper();
			    }
			    if (!string.IsNullOrWhiteSpace(unite.NomUniteLegale) && unite.NomUniteLegale != "[ND]") {
			        string prefixe = "";
			        if (unite.SexeUniteLegale == "M") prefixe = "M. ";
			        else if (unite.SexeUniteLegale == "F") prefixe = "Mme. ";
			
			        var prenoms = new List<string>();
			        if (!string.IsNullOrWhiteSpace(unite.Prenom1UniteLegale)) prenoms.Add(unite.Prenom1UniteLegale);
			        if (!string.IsNullOrWhiteSpace(unite.Prenom2UniteLegale)) prenoms.Add(unite.Prenom2UniteLegale);
			        if (!string.IsNullOrWhiteSpace(unite.Prenom3UniteLegale)) prenoms.Add(unite.Prenom3UniteLegale);
			        if (!string.IsNullOrWhiteSpace(unite.Prenom4UniteLegale)) prenoms.Add(unite.Prenom4UniteLegale);
			
			        return (prefixe + string.Join(" ", prenoms) + " " + unite.NomUniteLegale).Trim();
			    }
			    return string.Empty;
			}
			
			/*
			DateTime? ParseDate(string rawDate) {
			    DateTime parsedDate;
			    if (DateTime.TryParse(rawDate, out parsedDate)) return parsedDate;
			    return null;
			}
			*/
			DateTime? ParseDate(string rawDate) {
			    if (string.IsNullOrEmpty(rawDate)) {
			        return null;
			    }
			    DateTime parsedDate;
			    bool success = DateTime.TryParseExact(
			        rawDate,
			        "yyyy-MM-dd",
			        System.Globalization.CultureInfo.InvariantCulture,
			        System.Globalization.DateTimeStyles.None,
			        out parsedDate
			    );
			    if (success) {
			        return parsedDate;
			    }
			    return null;
			}
			
			
			string CalculateTvaFromSiren(string siren) {
			    if (string.IsNullOrEmpty(siren) || siren.Length != 9) {
			        return null;
			    }
			    foreach (char c in siren) {
			        if (!char.IsDigit(c)) {
			            return null;
			        }
			    }
			
			    long sirenNumber = long.Parse(siren);
			    long mod97 = sirenNumber % 97;
			    long cle = (12 + 3 * mod97) % 97;
			
			    string cleStr = cle < 10 ? "0" + cle.ToString() : cle.ToString();
			    return "FR" + cleStr + siren;
			}
			
			string GetLookupNameByCode(string schemaName, string codeColumnName, string codeValue) {
			    var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schemaName);
			    esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			    esq.AddColumn("Name");
			    esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, codeColumnName, codeValue));
			    var collection = esq.GetEntityCollection(userConnection);
			    if (collection.Count > 0) {
			        return collection[0].GetColumnValue("Name") as string;
			    }
			    return null;
			}
			
			
			
		}

		private bool ScriptTask2Execute(ProcessExecutingContext context) {
			
			// Récupérer la UserConnection, le JSON et l'ID du compte depuis les paramètres du processus
			var userConnection = Get<UserConnection>("UserConnection");
			var rawj = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			
			// Vérification des paramètres
			if (userConnection == null) {
			    throw new Exception("UserConnection est null"); 
			}
			if (string.IsNullOrEmpty(rawj)) {
			    throw new Exception("Le JSON (repjson) est null ou vide");
			}
			if (recordId == Guid.Empty) {
			    throw new Exception("L'ID du compte (idS) est vide ou invalide");
			}
			
			// Désérialisation du JSON en objet racine personnalisé
			var sireneRoot = Terrasoft.Common.Json.Json.Deserialize<Terrasoft.Configuration.JsonModels2.JsonSireneRoot>(rawj);
			
			// Vérification du nœud 'sirene'
			if (sireneRoot?.sirene == null) throw new Exception("Le nœud 'sirene' est introuvable ou vide");
			
			
			
			// Extraire les données de la section sirene
			var data = sireneRoot.sirene; 
			var siren = data.Siren; 
			var nic = data.Nic; 
			var siret = data.Siret; 
			var statut = data.StatutDiffusionEtablissement;
			
			// Charger l'enregistrement Account à partir de son ID
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var accountEntity = accountSchema.CreateEntity(userConnection); 
			if (!accountEntity.FetchFromDB(recordId)) {
			    throw new Exception($"Compte avec Id {recordId} introuvable");
			}
			
			
			
			
			// --------------------------
			// 🔁 TRAITEMENT DES DOCUMENTS
			// --------------------------
			
			
			
			var andcoDict = sireneRoot.andco;
			
			//pas de doc anco
			if (andcoDict == null || andcoDict.Count == 0) {
			    return true;
			}
			
			
			
			
			foreach (var kvp in andcoDict) {
			    string andcoKey = kvp.Key;
			    var andcoItem = kvp.Value;
			
			    if (andcoItem.user_docs != null && andcoItem.user_docs.Count > 0) {
			        foreach (var docKvp in andcoItem.user_docs) {
			            var doc = docKvp.Value;
			
			            // 🛡️ Vérifie que le doc_id n'est pas vide et que l'ID du compte est valide
			            if (string.IsNullOrWhiteSpace(doc.doc_id) || recordId == Guid.Empty) {
			                continue;
			            }
			
			            // 🔑 Création du nouvel identifiant concaténé : "andcoKey.doc_id"
			            string concatDocId = $"{andcoKey}.{doc.doc_id}";
			
			            Entity documentEntity = null;
			            bool isNew = false;
			
			            // 🔍 Recherche d'un document existant dans la table UsrDocumentJuridique avec concatDocId
			            var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrDocumentJuridique");
			            esq.AddAllSchemaColumns();
			
			            // Filtre combiné : UsrDocId + UsrParentSociete
			            var docIdFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrDocId", concatDocId);
			            var accountFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrParentSociete", recordId);
			            esq.Filters.Add(docIdFilter);
			            esq.Filters.Add(accountFilter);
			
			            var entities = esq.GetEntityCollection(userConnection);
			
			            if (entities != null && entities.Count > 0) {
			                documentEntity = entities[0];
			            } else {
			                var docSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrDocumentJuridique");
			                documentEntity = docSchema.CreateEntity(userConnection);
			                documentEntity.SetDefColumnValues();
			                isNew = true;
			            }
			
			            // 📝 Affectation des valeurs (avec concatDocId)
			            documentEntity.SetColumnValue("UsrDocId", concatDocId);
			            documentEntity.SetColumnValue("UsrLibelle", doc.libelle);
			            documentEntity.SetColumnValue("UsrDateValidation", ParseDate(doc.date_validation));
			            documentEntity.SetColumnValue("UsrDateDebutValidite", ParseDate(doc.date_debut_validite));
			            documentEntity.SetColumnValue("UsrDatePeremption", ParseDate(doc.date_peremption));
			            documentEntity.SetColumnValue("UsrRaisonRefus", doc.raison_refus);
			            documentEntity.SetColumnValue("UsrColumn12", ParseDate(doc.date_modification));
			            documentEntity.SetColumnValue("UsrAnalytiqueCode", andcoItem.code_analytique);
			
			            
			
			            // 🔍 Lookup UsrTypeDocId basé sur doc_id (pas concat)
			            string docidName = GetLookupNameByCode("UsrTypeDJLookup", "UsrCode", doc.doc_id);
			            Guid? docidId = GetLookupIdByName("UsrTypeDJLookup", docidName);
			            if (docidId != null)
			                documentEntity.SetColumnValue("UsrTypeDocId", docidId.Value);
			
			            // 🔗 Lien avec la société
			            documentEntity.SetColumnValue("UsrParentSocieteId", recordId);
			
			            // 🔍 Lookup UsrStatutDJId basé sur doc.statut
			            var esqStatut = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrStatutDJLookup");
			            esqStatut.AddAllSchemaColumns();
			            var filter2 = esqStatut.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", doc.statut);
			            esqStatut.Filters.Add(filter2);
			
			            var result = esqStatut.GetEntityCollection(userConnection);
			            if (result != null && result.Count > 0) {
			                var lookupEntity = result[0];
			                var statutId = lookupEntity.PrimaryColumnValue;
			                documentEntity.SetColumnValue("UsrStatutDJId", statutId);
			            }
			
			            // 💾 Sauvegarde
			            documentEntity.Save();
			        }
			    }
			}
			
			
			
			return true;
			
			
			
			// --------------------------
			// 🛠️ FONCTION UTILITAIRE : parse une date string en DateTime? 
			// --------------------------
			DateTime? ParseDate(string rawDate) {
			    if (DateTime.TryParse(rawDate, out var result)) {
			        return result;
			    }
			    return null;
			}
			
			
			
			
			string GetLookupNameByCode(string schemaName, string codeColumnName, string codeValue) {
			    var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schemaName);
			    esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			    esq.AddColumn("Name");
			    esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, codeColumnName, codeValue));
			    var collection = esq.GetEntityCollection(userConnection);
			    if (collection.Count > 0) {
			        return collection[0].GetColumnValue("Name") as string;
			    }
			    return null;
			}
			
			
			Guid? GetLookupIdByName(string schemaName, string lookupName) {
			    var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schemaName);
			    esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			    esq.AddColumn("Name");
			    esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", lookupName));
			    var collection = esq.GetEntityCollection(userConnection);
			    if (collection.Count > 0) return collection[0].PrimaryColumnValue;
			    return null;
			}
			
			string Truncate(string input, int maxLength) {
			    if (string.IsNullOrEmpty(input)) {
			        return input;
			    }
			    return input.Length <= maxLength ? input : input.Substring(0, maxLength);
			}
			
			
			
			
			
			
		}

		private bool ScriptTask3Execute(ProcessExecutingContext context) {
			
			var userConnection = Get<UserConnection>("UserConnection");
			var rawj = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			var code_pays = Get<string>("valcode");
			var nomAdresse = Get<string>("Nomadr");
			
			
			var recordIdAdresse = Get<Guid>("idA");
			// Charger l'enregistrement Account
			var adresseSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrAdresse");
			var adresseSocieteEntity = adresseSchema.CreateEntity(userConnection);
			
			
			
			if (!adresseSocieteEntity.FetchFromDB(recordIdAdresse)) {
			    throw new Exception($"Adressse avec Id {recordIdAdresse} introuvable");
			}
			
			
			// Vérification des paramètres
			if (userConnection == null) {
			    throw new Exception("UserConnection est null");
			}
			if (string.IsNullOrEmpty(rawj)) {
			    throw new Exception("Le JSON (repjson) est null ou vide");
			}
			if (recordId == Guid.Empty) {
			    throw new Exception("L'ID du compte (idS) est vide ou invalide");
			}
			if (string.IsNullOrEmpty(nomAdresse)) {
			    throw new Exception("Le nom de l'adresse (Nomadr) est vide");
			}
			
			// Charger l'enregistrement Account
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var accountEntity = accountSchema.CreateEntity(userConnection);
			if (!accountEntity.FetchFromDB(recordId)) {
			    throw new Exception($"Compte avec Id {recordId} introuvable");
			}
			
			// Désérialisation du JSON
			var sireneRoot = Terrasoft.Common.Json.Json.Deserialize<Terrasoft.Configuration.JsonModels.JsonSireneRoot>(rawj);
			if (sireneRoot?.sirene == null) {
			    throw new Exception("Le nœud 'sirene' est introuvable ou vide");
			}
			
			// Extraction des données
			var data = sireneRoot.sirene;
			var adresse = data.AdresseEtablissement;
			
			// Construction du champ "Numéro et Nom de la Voie"
			string numeroVoie = string.IsNullOrWhiteSpace(adresse.NumeroVoieEtablissement) ? "" : adresse.NumeroVoieEtablissement.Trim();
			string typeVoie = string.IsNullOrWhiteSpace(adresse.TypeVoieEtablissement) ? "" : adresse.TypeVoieEtablissement.Trim();
			string libelleVoie = string.IsNullOrWhiteSpace(adresse.LibelleVoieEtablissement) ? "" : adresse.LibelleVoieEtablissement.Trim();
			string numeroNomVoie = numeroVoie + " " + typeVoie + " " + libelleVoie;
			
			// Construction du champ "Type d'adresse"
			string typeAdresse = data.EtablissementSiege.HasValue && data.EtablissementSiege.Value ? "Siège social" : "Courant";
			
			// Normalisation de la ville
			string ville = NormalizeCity(adresse.LibelleCommuneEtablissement);
			Guid? VilleId = GetLookupIdByName("City", ville);
			
			//Pays 
			Guid? PaysId = GetRelatedLookupId("City", ville,"Country");
			
			//Région 
			Guid? RegionId = GetRelatedLookupId("City", ville,"Region");
			
			
			Guid? TypeadrId = GetLookupIdByName("UsrTypeadresse", typeAdresse);
			
			
			var adrcomplet = ConcatAvecVirgule(numeroNomVoie,adresse.ComplementAdresseEtablissement,adresse.CodePostalEtablissement,ville);
			
			
			//id societe 
			adresseSocieteEntity.SetColumnValue("UsrSocieteId", recordId);
			//nom 
			adresseSocieteEntity.SetColumnValue("UsrName", nomAdresse);
			//adresse complete 
			adresseSocieteEntity.SetColumnValue("UsrAdresseComplete", adrcomplet);
			//type adresse 
			adresseSocieteEntity.SetColumnValue("UsrTypeadresseId", TypeadrId);
			//numero nom voi 
			adresseSocieteEntity.SetColumnValue("UsrColumn6", numeroNomVoie);
			//adres 2 
			adresseSocieteEntity.SetColumnValue("UsrAdresse2", adresse.ComplementAdresseEtablissement ?? "");
			//code postal 
			adresseSocieteEntity.SetColumnValue("UsrCodePostal", adresse.CodePostalEtablissement ?? "");
			//ville
			adresseSocieteEntity.SetColumnValue("UsrVilleId", VilleId);
			//pays 
			adresseSocieteEntity.SetColumnValue("UsrPaysId", PaysId);
			//région
			adresseSocieteEntity.SetColumnValue("Usrdepartement_regionId", RegionId);
			
			 
			
			
			
			
			adresseSocieteEntity.Save();
			
			//Fonction
			
			Guid? GetLookupIdByName(string schemaName, string lookupName) {
			    var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schemaName);
			    esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			    esq.AddColumn("Name");
			    esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", lookupName));
			    var collection = esq.GetEntityCollection(userConnection);
			    if (collection.Count > 0) return collection[0].PrimaryColumnValue;
			    return null;
			}
			
			
			Guid? GetRelatedLookupId(string schemaName, string lookupName, string relatedColumnName) {
			    var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schemaName);
			    esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			    esq.AddColumn("Name");
			    esq.AddColumn(relatedColumnName); // Exemple : "UsrCategorie"
			
			    esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", lookupName));
			    
			    var collection = esq.GetEntityCollection(userConnection);
			
			    if (collection.Count > 0) {
			        var entity = collection[0];
			        if (entity.GetColumnValue(relatedColumnName + "Id") != null) {
			            return (Guid)entity.GetColumnValue(relatedColumnName + "Id");
			        }
			    }
			
			    return null;
			}
			
			
			string NormalizeCity(string NomCommune) {
			    string text = "";
			    if (!string.IsNullOrEmpty(NomCommune)) {
			        text = NomCommune.ToLower();
			
			        // Remplacement des accents
			        text = text.Replace("à", "a").Replace("â", "a").Replace("ä", "a")
			                   .Replace("é", "e").Replace("è", "e").Replace("ê", "e").Replace("ë", "e")
			                   .Replace("î", "i").Replace("ï", "i")
			                   .Replace("ô", "o").Replace("ö", "o")
			                   .Replace("ù", "u").Replace("û", "u").Replace("ü", "u")
			                   .Replace("ç", "c").Replace("œ", "oe");
			
			        // Nettoyage ponctuation
			        text = text.Replace("'", " ").Replace("’", " ").Replace("-", " ");
			
			        // Suppression des articles au début
			        if (text.StartsWith("le ")) {
			            text = text.Substring(3);
			        }
			        if (text.StartsWith("la ")) {
			            text = text.Substring(3);
			        }
			        if (text.StartsWith("les ")) {
			            text = text.Substring(4);
			        }
			        if (text.StartsWith("l ")) {
			            text = text.Substring(2);
			        }
			        if (text.EndsWith(" (la)")) {
			            text = text.Replace(" (la)", "");
			        }
			
			        // Remplacement "st" par "saint"
			        text = System.Text.RegularExpressions.Regex.Replace(text, @"\bst ", "saint ");
			
			        // Normalisation des arrondissements
			        text = text.Replace("0eme", "0e arrondissement")
			                   .Replace("1eme", "1e arrondissement")
			                   .Replace("2me", "2e arrondissement")
			                   .Replace("3eme", "3e arrondissement")
			                   .Replace("4eme", "4e arrondissement")
			                   .Replace("5eme", "5e arrondissement")
			                   .Replace("6eme", "6e arrondissement")
			                   .Replace("7eme", "7e arrondissement")
			                   .Replace("8eme", "8e arrondissement")
			                   .Replace("9eme", "9e arrondissement")
			                   .Replace("arrondissement arrondissement", "arrondissement");
			
			        // Passage en majuscules
			        text = text.ToUpper();
			    }
			
			    return text;
			}
			
			
			string ConcatAvecVirgule(params string[] valeurs) {
			    List<string> resultats = new List<string>();
			    for (int i = 0; i < valeurs.Length; i++) {
			        if (!string.IsNullOrWhiteSpace(valeurs[i])) {
			            resultats.Add(valeurs[i].Trim());
			        }
			    }
			    return string.Join(", ", resultats);
			}
			
			
			
			
			return true;
		}

		private bool ScriptTask4Execute(ProcessExecutingContext context) {
			// Récupérer les paramètres
			var userConnection = Get<UserConnection>("UserConnection");
			var rawJson = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			
			
			
			if (userConnection == null) throw new Exception("UserConnection est null");
			if (string.IsNullOrEmpty(rawJson)) throw new Exception("Le JSON (repjson) est null ou vide");
			if (recordId == Guid.Empty) throw new Exception("L'ID du compte (idS) est vide ou invalide");
			
			// Charger l'enregistrement Account
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var accountEntity = accountSchema.CreateEntity(userConnection);
			
			if (!accountEntity.FetchFromDB(recordId)) {
			    throw new Exception($"Compte avec Id {recordId} introuvable");
			}
			
			// Désérialisation JSON
			var sireneRoot = Terrasoft.Common.Json.Json.Deserialize<Terrasoft.Configuration.JsonModels.JsonSireneRoot>(rawJson);
			
			// Appel fonction de hash
			var newHash = ComputeSha256Hash(rawJson);
			
			// Récupérer l'ancien hash stocké dans le champ personnalisé
			var oldHash = accountEntity.GetTypedColumnValue<string>("UsrHashConnect");
			
			
			
			
			if (oldHash != newHash) {
				accountEntity.SetColumnValue("UsrHashConnect", newHash);
				Set("reshash", "faux");
				accountEntity.Save();
				//throw new Exception("/" +oldHash+"---"+newHash+"--"+accountEntity.GetTypedColumnValue<string>("UsrHashConnect"));
			
			
			}
			else {
					Set("reshash", "vrai");
					//throw new Exception("vra/" +oldHash+"---"+newHash);
			
			
			}
			
			
			
			
			
			
			
			
			
			
			//Fonction
			// === Calcul du hash SHA256 du JSON (rawJson trié par clé si nécessaire) ===
			string ComputeSha256Hash(string rawData) {
			    var sha256 = System.Security.Cryptography.SHA256.Create();
			    byte[] bytes = System.Text.Encoding.UTF8.GetBytes(rawData);
			    byte[] hashBytes = sha256.ComputeHash(bytes);
			
			    // Convertir en string hexadécimal
			    var stringBuilder = new System.Text.StringBuilder();
			    for (int i = 0; i < hashBytes.Length; i++) {
			        stringBuilder.Append(hashBytes[i].ToString("x2")); // hex format
			    }
			    return stringBuilder.ToString();
			}
			
			
			
			return true;
		}

		private bool ScriptTask5Execute(ProcessExecutingContext context) {
			
			
			Guid accountId = Get<Guid>("idS");
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
			
			
			
			//string url = tmp2+"/subcontractors/"+siret+"?organisationCodeType="+ConnectOrganisationcodetype+"&countryCode="+ConnectCountryCode;
			string url = tmp2+"/subcontractors/"+siret+"/externalsRef?countryCode="+ConnectCountryCode+"&organisationcodetype="+ConnectOrganisationcodetype;
			//https://pp-connect.groupe-sterne.com/subcontractors/90899204300012/externalsRef?countryCode=fr&organisationcodetype=siret
			
			
			
			string token = Get<string>("token");
			//lookup
			
			
			/*
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
			
			*/
			
			/*
			try
			{
			    // Création de la requête
			    System.Net.HttpWebRequest request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
			    request.Method = "GET";
			    request.ContentType = "application/json";
			
			    // Ajout des en-têtes
			    request.Headers["Authorization"] = "Bearer " + token;
			    request.Timeout = 100000; // timeout 100 sec max
			
			 
			
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
			
			*/
			
			try
			{
			    // Création de la requête GET
			    var request = (System.Net.HttpWebRequest)System.Net.WebRequest.Create(url);
			    request.Method = "GET";
			    request.ContentType = "application/json";
			    request.Headers["Authorization"] = "Bearer " + token;
			    request.Timeout = 100000; // 100 secondes max
			
			    // Récupération de la réponse
			    using (var response = (System.Net.HttpWebResponse)request.GetResponse())
			    {
			        int statusCode = (int)response.StatusCode;
			        Set("Retourconnect", statusCode);
			         Set("StatusDescription", response.StatusDescription);
			
			
			        if (statusCode == 200)
			        {
			            using (var reader = new System.IO.StreamReader(response.GetResponseStream()))
			            {
			                string responseJson = reader.ReadToEnd();
			                //Console.WriteLine("Réponse JSON :\n" + responseJson);
			                Set("repjson", responseJson);
			
			                
			            }
			        }
			        
			    }
			}
			catch (System.Net.WebException ex)
			{
			    if (ex.Response != null)
			    {
			        var httpResponse = (System.Net.HttpWebResponse)ex.Response;
			        int errorCode = (int)httpResponse.StatusCode;
			        Set("Retourconnect", errorCode);
			
			
			
			        using (var reader = new System.IO.StreamReader(httpResponse.GetResponseStream()))
			        {
			            string errorResponse = reader.ReadToEnd();
			         
			            Set("StatusDescription", errorResponse);
			
			        }
			    }
			    else
			    {
			        // Erreur réseau ou autre
			        Set("StatusDescription", ex.Message);
			
			        
			    }
			}
			
			
			
			
			
			return true;
			
			
			//fonction
			/*
			
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
			
			*/
			
			
		}

		#endregion

	}

	#endregion

}

