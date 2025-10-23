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

	#region Class: UsrProcess_15b907cUsrSterne5MethodsWrapper

	/// <exclude/>
	public class UsrProcess_15b907cUsrSterne5MethodsWrapper : ProcessModel
	{

		public UsrProcess_15b907cUsrSterne5MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			/*var userConnection = Get<UserConnection>("UserConnection");
			var rawj = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			
			if (userConnection == null) {
			throw new Exception("UserConnection est null"); 
			}
			if (string.IsNullOrEmpty(rawj)) {
				throw new Exception("5555555rrawj est null ou vide");
				
			}
			
			if (recordId == Guid.Empty) {
				throw new Exception("idS est vide ou invalide");
			}
			
			// Désérialiser le JSON en objet
			var sireneRoot = Terrasoft.Common.Json.Json.Deserialize<Terrasoft.Configuration.JsonModels.JsonSireneRoot>(rawj);
			if (sireneRoot?.sirene == null) throw new Exception("Le nœud 'sirene' est introuvable ou vide");
			// Extraire les valeurs
			var data = sireneRoot.sirene; 
			var siren = data.Siren; 
			var nic = data.Nic; 
			var siret = data.Siret; 
			var statut = data.StatutDiffusionEtablissement;
			// ... et tous les autres champs
			
			// Charger l'enregistrement Account 
			var accountSchema = userConnection.EntitySchemaManager.GetInstanceByName("Account");
			var accountEntity = accountSchema.CreateEntity(userConnection); 
			if (!accountEntity.FetchFromDB(recordId)) throw new Exception($"Compte avec Id {recordId} introuvable"); 
			// Affecter les champs 
			accountEntity.SetColumnValue("UsrSiren", siren);
			accountEntity.SetColumnValue("UsrDuns", siret);
			// ... autres affectations 
			// Sauvegarder 
			accountEntity.Save();
			
			
			
			
			return true;
			
			*/
			
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
			
			// Affecter les champs de l'account avec les données extraites
			accountEntity.SetColumnValue("UsrSiren", siren);
			accountEntity.SetColumnValue("UsrDuns", siret);
			// ... autres affectations de champs
			
			// Sauvegarder les modifications sur le compte
			accountEntity.Save();
			
			
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

		#endregion

	}

	#endregion

}

