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

	#region Class: UsrProcess_15b907cUsrSterne9MethodsWrapper

	/// <exclude/>
	public class UsrProcess_15b907cUsrSterne9MethodsWrapper : ProcessModel
	{

		public UsrProcess_15b907cUsrSterne9MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
			AddScriptTaskMethod("ScriptTask2Execute", ScriptTask2Execute);
			AddScriptTaskMethod("ScriptTask3Execute", ScriptTask3Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			// Récupérer les paramètres
			var userConnection = Get<UserConnection>("UserConnection");
			var rawJson = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			var codePays = Get<string>("valcode");
			
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
			string statutEntreprise = ConstruireStatutEntreprise(statutDiffusionValue, uniteLegaleData.EtatAdministratifUniteLegale);
			Guid? statutId = GetLookupIdByName("UsrStatutLookupsCas", statutEntreprise);
			
			// Construire raison sociale
			string raisonSociale = ConstruireRaisonSociale(uniteLegaleData);
			
			// TVA intracommunautaire
			string tvaIntra = "FR" + sirenValue;
			
			// Date de création
			DateTime? dateCreationValue = ParseDate(uniteLegaleData.DateCreationUniteLegale);
			
			// Affectation en un seul bloc
			accountEntity.SetColumnValue("UsrId", idSociete);
			//Code pays affecter automatiquement
			//code Duns UsrDuns pour le futur
			accountEntity.SetColumnValue("Usragencesiret", siretValue);
			accountEntity.SetColumnValue("UsrSiren", sirenValue);
			//Centre profit UsrCentreProfit
			accountEntity.SetColumnValue("TypeId", typeId);
			accountEntity.SetColumnValue("UsrSousTypeId", sousTypeId);
			//Cathegory AccountCategory
			accountEntity.SetColumnValue("IndustryId", secteurId);
			accountEntity.SetColumnValue("Name", raisonSociale);
			//Entite bool UsrEntite
			//Agnece bool UsrAgence
			accountEntity.SetColumnValue("UsrPrestataire", true);
			if (statutId != null) accountEntity.SetColumnValue("UsrStatutsCasId", statutId.Value);
			if (!string.IsNullOrWhiteSpace(uniteLegaleData.DenominationUsuelle1UniteLegale))
			    accountEntity.SetColumnValue("AlternativeName", uniteLegaleData.DenominationUsuelle1UniteLegale);
			accountEntity.SetColumnValue("UsrFormeJuridique", uniteLegaleData.CategorieJuridiqueUniteLegale);
			if (dateCreationValue.HasValue) accountEntity.SetColumnValue("CreatedOn", dateCreationValue.Value);
			//Nb collaboratteur
			accountEntity.SetColumnValue("UsrLibelleAPE", uniteLegaleData.ActivitePrincipaleUniteLegale);
			accountEntity.SetColumnValue("UsrCodeAPE", activitePrincipaleValue);
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
			
			string ConstruireStatutEntreprise(string statutDiffusion, string etatAdministratif) {
			    if (statutDiffusion == "O" && etatAdministratif == "A") return "EN CRÉATION";
			    return "DESACTIVE";
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
			var sireneRoot = Terrasoft.Common.Json.Json.Deserialize<Terrasoft.Configuration.JsonModels.JsonSireneRoot>(rawj);
			
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
			
			string Truncate(string input, int maxLength) {
			    if (string.IsNullOrEmpty(input)) {
			        return input;
			    }
			    return input.Length <= maxLength ? input : input.Substring(0, maxLength);
			}
			
			
			
			var andco = sireneRoot.andco;
			
			if (andco != null && andco.user_docs != null && andco.user_docs.Count > 0) {
			    
			    foreach (var kvp in andco.user_docs) {
			        var doc = kvp.Value;
			
			        // 🛡️ Vérifie que le doc_id n'est pas vide et que l'ID du compte (société) est valide
			        if (string.IsNullOrWhiteSpace(doc.doc_id) || recordId == Guid.Empty) {
			            continue; // Ignore ce document et passe au suivant
			        }
			
			        // 📄 Initialisation de la variable pour l'entité document
			        Entity documentEntity = null;
			        bool isNew = false;
			
			        // 🔍 Recherche d'un document existant dans la table UsrDocumentJuridique avec ce doc_id
			       
			        var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrDocumentJuridique");
					esq.AddAllSchemaColumns();
					
					// Filtre combiné : UsrDocId + UsrParentSociete
					var docIdFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrDocId", doc.doc_id);
					var accountFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrParentSociete", recordId);
					esq.Filters.Add(docIdFilter);
					esq.Filters.Add(accountFilter);
					
					var entities = esq.GetEntityCollection(userConnection);
			
			
			        if (entities != null && entities.Count > 0) {
			            // ✅ Document déjà existant
			            documentEntity = entities[0];
			        } else {
			            // 🆕 Nouveau document à créer
			            var docSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrDocumentJuridique");
			            documentEntity = docSchema.CreateEntity(userConnection);
			            documentEntity.SetDefColumnValues();
			            isNew = true;
			        }
			
			        // 📝 Affectation des valeurs communes (que le doc soit nouveau ou existant)
			        /*
			        documentEntity.SetColumnValue("UsrDocId", Truncate(doc.doc_id, 50));
			        documentEntity.SetColumnValue("UsrLibelle", Truncate(doc.libelle, 50));
			        documentEntity.SetColumnValue("UsrDateValidation", ParseDate(doc.date_validation));
			        documentEntity.SetColumnValue("UsrDateDebutValidite", ParseDate(doc.date_debut_validite));
			        documentEntity.SetColumnValue("UsrDatePeremption", ParseDate(doc.date_peremption));
			        documentEntity.SetColumnValue("UsrRaisonRefus", Truncate(doc.raison_refus, 50));*/
			        documentEntity.SetColumnValue("UsrDocId", doc.doc_id);
			        documentEntity.SetColumnValue("UsrLibelle", doc.libelle);
			        documentEntity.SetColumnValue("UsrDateValidation", ParseDate(doc.date_validation));
			        documentEntity.SetColumnValue("UsrDateDebutValidite", ParseDate(doc.date_debut_validite));
			        documentEntity.SetColumnValue("UsrDatePeremption", ParseDate(doc.date_peremption));
			        documentEntity.SetColumnValue("UsrRaisonRefus", doc.raison_refus);
			        documentEntity.SetColumnValue("UsrColumn12", ParseDate(doc.date_modification));
			
			
			        // 🔗 Lien avec la société par son ID
			        documentEntity.SetColumnValue("UsrParentSocieteId", recordId);
			
			        // 🔍 Gestion du lookup UsrStatutDJId basé sur le champ doc.statut
			        var statutDJSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrStatutDJLookup");
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
			
			        // 💾 Sauvegarde du document (nouveau ou mis à jour)
			        documentEntity.Save();
			    }
			}
			
			
			
			// --------------------------
			// 🛠️ FONCTION UTILITAIRE : parse une date string en DateTime? 
			// --------------------------
			DateTime? ParseDate(string rawDate) {
			    if (DateTime.TryParse(rawDate, out var result)) {
			        return result;
			    }
			    return null;
			}
			
			
			
			return true;
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

		#endregion

	}

	#endregion

}

