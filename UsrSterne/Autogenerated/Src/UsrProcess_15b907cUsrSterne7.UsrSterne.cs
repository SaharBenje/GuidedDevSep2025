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

	#region Class: UsrProcess_15b907cUsrSterne7MethodsWrapper

	/// <exclude/>
	public class UsrProcess_15b907cUsrSterne7MethodsWrapper : ProcessModel
	{

		public UsrProcess_15b907cUsrSterne7MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
			AddScriptTaskMethod("ScriptTask2Execute", ScriptTask2Execute);
			AddScriptTaskMethod("ScriptTask3Execute", ScriptTask3Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			// Récupérer la UserConnection, le JSON et l'ID du compte depuis les paramètres du processus
			var userConnection = Get<UserConnection>("UserConnection");
			var rawj = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			var code_pays = Get<string>("valcode");
			
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
			
			
			// Charger l'enregistrement Account
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var accountEntity = accountSchema.CreateEntity(userConnection);
			
			
			
			if (!accountEntity.FetchFromDB(recordId)) {
			    throw new Exception($"Compte avec Id {recordId} introuvable");
			}
			
			
			
			// Désérialisation du JSON en objet racine personnalisé
			var sireneRoot = Terrasoft.Common.Json.Json.Deserialize<Terrasoft.Configuration.JsonModels.JsonSireneRoot>(rawj);
			
			// Vérification du nœud 'sirene'
			if (sireneRoot?.sirene == null) {
			    throw new Exception("Le nœud 'sirene' est introuvable ou vide");
			}
			
			// Extraction des données
			var data = sireneRoot.sirene;
			var uniteLegale = data.UniteLegale;
			var unite = data.UniteLegale;
			
			
			
			var siren = data.Siren;
			var nic = data.Nic;
			var siret = data.Siret;
			var statutDiffusion = data.StatutDiffusionEtablissement;
			var dateCreationEtablissement = data.DateCreationEtablissement;
			var activitePrincipale = data.ActivitePrincipaleRegistreMetiersEtablissement;
			var trancheEffectif = data.TrancheEffectifsEtablissement;
			var id_societe = "";
			
			
			
			
			//Construction Id Société
			if(siret != null) {
				if(code_pays == "FR") {
					id_societe = code_pays + siret;
				}
				else {
					id_societe = code_pays;
				}
			}
			
			
			
			
			accountEntity.SetColumnValue("UsrId", id_societe);
			
			
			//lookup
			
			//type
			var type = GetLookupIdByName("AccountType", "Prestataire");
			if (type != null) {
			    accountEntity.SetColumnValue("TypeId", type.Value);
			}
			
			//sous type
			var sous_type = GetLookupIdByName("UsrSousTypeLookup", "Transporteur");
			if (sous_type != null) {
			    accountEntity.SetColumnValue("UsrSousTypeId", sous_type.Value);
			}
			
			//Secteur d'activite
			var secteur = GetLookupIdByName("AccountIndustry", "Transport");
			if (secteur != null) {
			    accountEntity.SetColumnValue("IndustryId", secteur.Value);
			}
			
			
			
			
			
			
			// Construction de la raison sociale
			string raisonSociale = string.Empty;
			
			if (!string.IsNullOrWhiteSpace(uniteLegale.DenominationUniteLegale) &&
			    uniteLegale.DenominationUniteLegale != "[ND]") {
			    
			    // Utilisation directe en majuscules (conformément au schéma)
			    raisonSociale = uniteLegale.DenominationUniteLegale.ToUpper();
			
			} else if (!string.IsNullOrWhiteSpace(uniteLegale.NomUniteLegale) &&
			           uniteLegale.NomUniteLegale != "[ND]") {
			
			    // Ajout du préfixe selon sexe
			    string prefixe = string.Empty;
			    if (uniteLegale.SexeUniteLegale == "M") {
			        prefixe = "M. ";
			    } else if (uniteLegale.SexeUniteLegale == "F") {
			        prefixe = "Mme. ";
			    }
			
			    var prenoms = new List<string>();
			    if (!string.IsNullOrWhiteSpace(uniteLegale.Prenom1UniteLegale)) prenoms.Add(uniteLegale.Prenom1UniteLegale);
			    if (!string.IsNullOrWhiteSpace(uniteLegale.Prenom2UniteLegale)) prenoms.Add(uniteLegale.Prenom2UniteLegale);
			    if (!string.IsNullOrWhiteSpace(uniteLegale.Prenom3UniteLegale)) prenoms.Add(uniteLegale.Prenom3UniteLegale);
			    if (!string.IsNullOrWhiteSpace(uniteLegale.Prenom4UniteLegale)) prenoms.Add(uniteLegale.Prenom4UniteLegale);
			
			    raisonSociale = prefixe + string.Join(" ", prenoms) + " " + uniteLegale.NomUniteLegale;
			}
			
			
			
			
			// Construction TVA intracommunautaire
			string tvaIntra = "FR" + siren;
			
			
			//en ??
			var statutEntreprise = "DESACTIVE";
			if (data.StatutDiffusionEtablissement == "O" && uniteLegale.EtatAdministratifUniteLegale == "A") {
			    statutEntreprise = "EN CRÉATION";
			}
			
			var statutId = GetLookupIdByName("UsrStatutLookupsCas", statutEntreprise);
			if (statutId != null) {
			    accountEntity.SetColumnValue("UsrStatutsCasId", statutId.Value);
			}
			
			
			// Date de création de l'entreprise
			DateTime? dateCreation = ParseDate(uniteLegale.DateCreationUniteLegale);
			if (dateCreation.HasValue) {
			    accountEntity.SetColumnValue("CreatedOn", dateCreation.Value);
			}
			
			// Forme juridique (code catégorie juridique)
			accountEntity.SetColumnValue("UsrFormeJuridique", uniteLegale.CategorieJuridiqueUniteLegale);
			
			// Tranche effectifs erruer
			//accountEntity.SetColumnValue("UsrTrancheEffectif", trancheEffectif);
			
			// Activité principale APE (code)
			accountEntity.SetColumnValue("UsrCodeAPE", activitePrincipale);
			
			// Également connu sous le nom de
			if (!string.IsNullOrWhiteSpace(uniteLegale.DenominationUsuelle1UniteLegale)) {
			    accountEntity.SetColumnValue("AlternativeName", uniteLegale.DenominationUsuelle1UniteLegale);
			}
			
			// Sauvegarder les changements
			
			
			//Tout les SetColumnValue
			
			accountEntity.SetColumnValue("UsrSiren", siren);
			accountEntity.SetColumnValue("Usragencesiret", siret);
			accountEntity.SetColumnValue("Name", raisonSociale);
			
			///erreur
			//accountEntity.SetColumnValue("UsrStatutsCas", statutEntreprise);
			accountEntity.SetColumnValue("UsrColumn10", tvaIntra);
			
			accountEntity.SetColumnValue("UsrPrestataire", true);
			
			
			
			
			
			accountEntity.Save();
			
			
			// Sorties pour la suite du processus
			Set("Ville_txt", data.AdresseEtablissement.LibelleCommuneEtablissement);
			if (string.IsNullOrEmpty(unite.DenominationUsuelle1UniteLegale)) {
			    Set("Nomadr", raisonSociale);
			} else {
			    Set("Nomadr", unite.DenominationUsuelle1UniteLegale);
			}
			
			
			// --------------------------
			// FONCTION UTILITAIRE
			// --------------------------
			DateTime? ParseDate(string rawDate) {
			    if (DateTime.TryParse(rawDate, out var result)) {
			        return result;
			    }
			    return null;
			}
			
			//cherche l'id lookup par son nom
			
			Guid? GetLookupIdByName(string lookupSchemaName, string name) {
			    var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, lookupSchemaName);
			    esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			    var nameColumn = esq.AddColumn("Name");
			    
			    esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", name));
			    
			    var collection = esq.GetEntityCollection(userConnection);
			    if (collection.Count > 0) {
			        return collection[0].PrimaryColumnValue;
			    }
			    return null;
			}
			
			
			
			
			
			
			
			
			
			return true;
			
			
			
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
			// ... autres champs à récupérer selon ton besoin
			
			// Charger l'enregistrement Account à partir de son ID
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var accountEntity = accountSchema.CreateEntity(userConnection); 
			if (!accountEntity.FetchFromDB(recordId)) {
			    throw new Exception($"Compte avec Id {recordId} introuvable");
			}
			
			/*
			// Affecter les champs de l'account avec les données extraites
			accountEntity.SetColumnValue("UsrSiren", siren);
			accountEntity.SetColumnValue("UsrDuns", siret);
			// ... autres affectations de champs
			
			// Sauvegarder les modifications sur le compte
			accountEntity.Save();
			*/
			
			
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
			
			        // Initialisation de la variable pour l'entité document
			        Entity documentEntity = null;
			        bool isNew = false;
			
			        // Création de la requête pour rechercher un document existant
			        var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrDocumentJuridique");
			        esq.AddAllSchemaColumns();
			
			        var filter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrDocId", doc.doc_id);
			        esq.Filters.Add(filter);
			
			        var entities = esq.GetEntityCollection(userConnection);
			
			        if (entities != null && entities.Count > 0) {
			            // Document existant
			            documentEntity = entities[0];
			        } else {
			            // Nouveau document
			            var docSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrDocumentJuridique");
			            documentEntity = docSchema.CreateEntity(userConnection);
			            documentEntity.SetDefColumnValues();
			            isNew = true;
			        }
			
			        // Affecter les champs dans tous les cas (existant ou nouveau)
			        documentEntity.SetColumnValue("UsrDocId", Truncate(doc.doc_id,50));
			        documentEntity.SetColumnValue("UsrLibelle", Truncate(doc.libelle,50));
			        //documentEntity.SetColumnValue("UsrStatutDJ", doc.statut);
			        //documentEntity.SetColumnValue("UsrDateModification", ParseDate(doc.date_modification));
			        documentEntity.SetColumnValue("UsrDateValidation", ParseDate(doc.date_validation));
			        documentEntity.SetColumnValue("UsrDateDebutValidite", ParseDate(doc.date_debut_validite));
			        documentEntity.SetColumnValue("UsrDatePeremption", ParseDate(doc.date_peremption));
			        documentEntity.SetColumnValue("UsrRaisonRefus", Truncate(doc.raison_refus,50));
			        
			        
			        
			        documentEntity.SetColumnValue("UsrParentSocieteId", recordId); // Lien avec le compte
			        
			        
			        
			        //Gestion des lookup
			        // Rechercher l'enregistrement dans le lookup "StatutDJLookup"
			var statutDJSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrStatutDJLookup");
			var esqStatut = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrStatutDJLookup");
			esqStatut.AddAllSchemaColumns();
			
			// Remplacer "Name" par le vrai nom du champ qui contient le libellé (souvent "Name" ou "UsrCode")
			var filter2 = esqStatut.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", doc.statut);
			esqStatut.Filters.Add(filter2);
			
			var result = esqStatut.GetEntityCollection(userConnection);
			
			// Vérifier si on a trouvé un résultat
			if (result != null && result.Count > 0) {
			    var lookupEntity = result[0];
			    var statutId = lookupEntity.PrimaryColumnValue;
			
			    // Affecter le champ lookup (note le "Id" à la fin)
			    documentEntity.SetColumnValue("UsrStatutDJId", statutId);
			} else {
			    // Si pas trouvé, tu peux logguer, lever une exception ou ignorer
			    // throw new Exception("Valeur de statut inconnue : " + doc.statut);
			}
			
			
			        // Sauvegarder
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
			/*// Récupérer la UserConnection, le JSON et l'ID du compte depuis les paramètres du processus
			var userConnection = Get<UserConnection>("UserConnection");
			var rawj = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			var code_pays = Get<string>("valcode");
			
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
			
			
			// Charger l'enregistrement Account
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var accountEntity = accountSchema.CreateEntity(userConnection);
			
			
			
			if (!accountEntity.FetchFromDB(recordId)) {
			    throw new Exception($"Compte avec Id {recordId} introuvable");
			}
			
			
			
			// Désérialisation du JSON en objet racine personnalisé
			var sireneRoot = Terrasoft.Common.Json.Json.Deserialize<Terrasoft.Configuration.JsonModels.JsonSireneRoot>(rawj);
			
			// Vérification du nœud 'sirene'
			if (sireneRoot?.sirene == null) {
			    throw new Exception("Le nœud 'sirene' est introuvable ou vide");
			}
			
			
			
			
			// Extraction des données
			var data = sireneRoot.sirene;
			var uniteLegale = data.UniteLegale;
			var siret = data.Siret;
			
			
			
			// Récupération des infos du JSON
			var adresse = data.AdresseEtablissement;
			
			// Construction du champ "Numéro et Nom de la Voie"
			string numeroVoie = string.IsNullOrWhiteSpace(adresse.NumeroVoieEtablissement) ? "" : adresse.NumeroVoieEtablissement.Trim();
			string typeVoie = string.IsNullOrWhiteSpace(adresse.TypeVoieEtablissement) ? "" : adresse.TypeVoieEtablissement.Trim();
			string libelleVoie = string.IsNullOrWhiteSpace(adresse.LibelleVoieEtablissement) ? "" : adresse.LibelleVoieEtablissement.Trim();
			
			string numeroNomVoie = ""+typeVoie+libelleVoie;
			//string.Join(" ", new[] { numeroVoie, typeVoie, libelleVoie }
			    //.Where(x => !string.IsNullOrWhiteSpace(x)));
			
			// Construction du champ "Type d'adresse"
			string typeAdresse = data.EtablissementSiege.HasValue && data.EtablissementSiege.Value ? "Siège social" : "Courant";
			
			// Normalisation de la ville (majuscules + nettoyage)
			string ville = adresse.LibelleCommuneEtablissement?.ToUpper().Trim();
			
			// Affectation dans l’entité `Adresse Société`
			//var adresseSocieteSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrAdresse");
			
			/*
			// Vérifier si l'adresse existe déjà
			var existingAdresse = adresseSocieteSchema.CreateEntity(userConnection);
			
			// Requête sur UsrSocieteId et UsrName
			var adresseExists = existingAdresse.FetchFromDB(
			    new Dictionary<string, object> {
			        { "UsrSocieteId", recordId },
			        { "UsrName", Get<string>("Nomadr") }
			    }
			);
			
			var adresseSocieteEntity = adresseExists;
			// Si l’adresse existe déjà, ne rien faire
			if (adresseExists) {
			    
			}
			else {
				var adresseSocieteEntity = adresseSocieteSchema.CreateEntity(userConnection);
			
			}
			*/
			/*
			//var adresseSocieteEntity = adresseSocieteSchema.CreateEntity(userConnection);
			adresseSocieteEntity.SetDefColumnValues();
			
			adresseSocieteEntity.SetColumnValue("UsrSocieteId", recordId);
			adresseSocieteEntity.SetColumnValue("UsrName", Get<string>("Nomadr"));
			//adresseSocieteEntity.SetColumnValue("UsrEmail", uniteLegale.Email ?? ""); // À adapter
			//adresseSocieteEntity.SetColumnValue("UsrTypeadresse", typeAdresse);
			adresseSocieteEntity.SetColumnValue("UsrColumn6", numeroNomVoie);
			adresseSocieteEntity.SetColumnValue("UsrAdresse2", adresse.ComplementAdresseEtablissement ?? "");
			adresseSocieteEntity.SetColumnValue("UsrCodePostal", adresse.CodePostalEtablissement ?? "");
			//adresseSocieteEntity.SetColumnValue("UsrVille", ville ?? "");
			//adresseSocieteEntity.SetColumnValue("UsrPays", code_pays);
			//adresseSocieteEntity.SetColumnValue("UsrCodeInsee", adresse.CodeCommuneEtablissement ?? "");
			
			// Sauvegarde
			adresseSocieteEntity.Save();
			
			/*
			
			// Récupérer les variables du processus
			var userConnection = Get<UserConnection>("UserConnection");
			var rawj = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			var code_pays = Get<string>("valcode");
			var nomAdresse = Get<string>("Nomadr");
			
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
			var uniteLegale = data.UniteLegale;
			var siret = data.Siret;
			var adresse = data.AdresseEtablissement;
			
			// Construction du champ "Numéro et Nom de la Voie"
			string numeroVoie = string.IsNullOrWhiteSpace(adresse.NumeroVoieEtablissement) ? "" : adresse.NumeroVoieEtablissement.Trim();
			string typeVoie = string.IsNullOrWhiteSpace(adresse.TypeVoieEtablissement) ? "" : adresse.TypeVoieEtablissement.Trim();
			string libelleVoie = string.IsNullOrWhiteSpace(adresse.LibelleVoieEtablissement) ? "" : adresse.LibelleVoieEtablissement.Trim();
			string numeroNomVoie = numeroVoie + " " + typeVoie + " " + libelleVoie;
			
			// Type d’adresse
			string typeAdresse = data.EtablissementSiege.HasValue && data.EtablissementSiege.Value ? "Siège social" : "Courant";
			
			// Normalisation de la ville
			string ville = adresse.LibelleCommuneEtablissement?.ToUpper().Trim();
			
			// Récupération du schéma d’adresse
			var adresseSocieteSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrAdresse");
			
			// Vérifier si une adresse avec même société + nom existe déjà
			var existingAdresse = adresseSocieteSchema.CreateEntity(userConnection);
			bool adresseExists = existingAdresse.FetchFromDB(new Dictionary<string, object> {
			    { "UsrSocieteId", recordId },
			    { "UsrName", nomAdresse }
			});
			
			if (!adresseExists) {
			    // Création uniquement si pas existante
			    var adresseSocieteEntity = adresseSocieteSchema.CreateEntity(userConnection);
			    adresseSocieteEntity.SetDefColumnValues();
			
			    adresseSocieteEntity.SetColumnValue("UsrSocieteId", recordId);
			    adresseSocieteEntity.SetColumnValue("UsrName", nomAdresse);
			    adresseSocieteEntity.SetColumnValue("UsrColumn6", numeroNomVoie);
			    adresseSocieteEntity.SetColumnValue("UsrAdresse2", adresse.ComplementAdresseEtablissement ?? "");
			    adresseSocieteEntity.SetColumnValue("UsrCodePostal", adresse.CodePostalEtablissement ?? "");
			
			    // Décommente si les colonnes existent
			    // adresseSocieteEntity.SetColumnValue("UsrVille", ville ?? "");
			    // adresseSocieteEntity.SetColumnValue("UsrTypeadresse", typeAdresse);
			    // adresseSocieteEntity.SetColumnValue("UsrPays", code_pays);
			    // adresseSocieteEntity.SetColumnValue("UsrCodeInsee", adresse.CodeCommuneEtablissement ?? "");
			
			    adresseSocieteEntity.Save();
			}
			
			return true;
			*/
			
			
			// Récupérer les variables du processus
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
			string ville = adresse.LibelleCommuneEtablissement?.ToUpper().Trim();
			
			// Création de l’adresse sans vérification
			/*
			var adresseSocieteSchema = userConnection.EntitySchemaManager.GetInstanceByName("UsrAdresse");
			var adresseSocieteEntity = adresseSocieteSchema.CreateEntity(userConnection);
			adresseSocieteEntity.SetDefColumnValues();
			*/
			
			adresseSocieteEntity.SetColumnValue("UsrSocieteId", recordId);
			adresseSocieteEntity.SetColumnValue("UsrName", nomAdresse);
			adresseSocieteEntity.SetColumnValue("UsrColumn6", numeroNomVoie);
			adresseSocieteEntity.SetColumnValue("UsrAdresse2", adresse.ComplementAdresseEtablissement ?? "");
			adresseSocieteEntity.SetColumnValue("UsrCodePostal", adresse.CodePostalEtablissement ?? "");
			
			// Décommente si les champs existent dans ton objet
			// adresseSocieteEntity.SetColumnValue("UsrVille", ville ?? "");
			// adresseSocieteEntity.SetColumnValue("UsrTypeadresse", typeAdresse);
			// adresseSocieteEntity.SetColumnValue("UsrPays", code_pays);
			// adresseSocieteEntity.SetColumnValue("UsrCodeInsee", adresse.CodeCommuneEtablissement ?? "");
			
			adresseSocieteEntity.Save();
			
			return true;
			
			
			
			
			return true;
		}

		#endregion

	}

	#endregion

}

