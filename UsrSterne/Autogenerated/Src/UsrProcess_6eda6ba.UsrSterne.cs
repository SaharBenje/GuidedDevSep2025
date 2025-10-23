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

	#region Class: UsrProcess_6eda6baMethodsWrapper

	/// <exclude/>
	public class UsrProcess_6eda6baMethodsWrapper : ProcessModel
	{

		public UsrProcess_6eda6baMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
			AddScriptTaskMethod("ScriptTask2Execute", ScriptTask2Execute);
			AddScriptTaskMethod("ScriptTask3Execute", ScriptTask3Execute);
			AddScriptTaskMethod("ScriptTask4Execute", ScriptTask4Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			
			var siret = Get<string>("siret");
			var duns = Get<string>("duns");
			var valcodepays = Get<string>("tmpcodepays");
			
			
			
			var codepaysId = Get<Guid>("codepays");
			
			
			// ID lookup FR
			Guid idOk = new Guid("7f438e44-3639-4960-8c78-680244855d4c");
			
			// Variable de résultat initialisée vide
			string res = null;
			
			
			
			
			
			
			
			if (!string.IsNullOrEmpty(siret)) {
			    if (codepaysId == idOk) {
			    	
			    	
			      
			        res = valcodepays + siret; 
			    } else  {
			        res = valcodepays + duns;
			    }
			}
			
			Set("idsocieteOut", res);
			return true;
			
		}

		private bool ScriptTask2Execute(ProcessExecutingContext context) {
			// IMPORTANT: When implementing
			// long-running operations,
			// it is crucial to enable timely and
			// responsive cancellation. To achieve
			// this, ensure that your code
			// is designed to respond appropriately
			// to cancellation requests using
			// the context.CancellationToken
			// mechanism. For more detailed
			// information and examples,
			// please, refer to our documentation.
			
			
			var denomination = Get<string>("denomination");
			var prenom = Get<string>("combineprenom");
			
			var tmpNomunitelegal = Get<string>("nomunite");
			var tmpsociete = Get<string>("societe_stt");
			
			//string res = denomination;
			//+ " "+tmpNomunitelegal  + " "+tmpsociete+" "+prenom;
			
			
			
			
			
			
			    if (denomination != null && denomination != "[ND]" ) {
			        Set("raisonsocial_out", denomination);
			    } else {
			    	if(tmpNomunitelegal == null || tmpNomunitelegal == "[ND]") {
			    		 Set("raisonsocial_out", tmpsociete);
					}
					else {
						Set("raisonsocial_out", prenom);
					}
			        
			    }
			    
			//Set("raisonsocial_out", res);    
			return true;
		}

		private bool ScriptTask3Execute(ProcessExecutingContext context) {
			/*// Récupération du SIREN en entrée
			var siren = Get<string>("siren_in");
			
			// Vérification de la validité
			if (!string.IsNullOrEmpty(siren) && siren.Length == 9 && siren.All(char.IsDigit)) {
				
			
			    // Conversion en entier
			    long sirenNumber = long.Parse(siren);
			
			    // Calcul de la clé TVA selon la formule officielle
			    long mod97 = sirenNumber % 97;
			    long cle = (12 + 3 * mod97) % 97;
			
			    // Formatage sur 2 chiffres
			    string cleStr = cle < 10 ? "0" + cle.ToString() : cle.ToString();
			    
			
			    // Construction du numéro TVA
			    string tva = "FR" + cleStr + siren;
			
			    // Enregistrement du résultat
			    Set("tva_out", tva);
			    
			    Set("tva_out", "fghj");
			}
			else {
			    // SIREN invalide → TVA non calculée
			    Set("tva_out", null);
			}
			
			return true;
			
			*/
			
			// Récupération du SIREN
			var siren = Get<string>("siren_in");
			
			// Fonction de validation manuelle (sans LINQ)
			bool IsValidSiren(string value) {
				if (string.IsNullOrEmpty(value) || value.Length != 9) {
					return false;
				}
				foreach (char c in value) {
					if (!char.IsDigit(c)) {
						return false;
					}
				}
				return true;
			}
			
			if (IsValidSiren(siren)) {
			
			    // Conversion en long
			    long sirenNumber = long.Parse(siren);
			
			    // Calcul de la clé TVA
			    long mod97 = sirenNumber % 97;
			    long cle = (12 + 3 * mod97) % 97;
			
			    // Format sur deux chiffres
			    string cleStr = cle < 10 ? "0" + cle.ToString() : cle.ToString();
			
			    // Construction du numéro TVA
			    string tva = "FR" + cleStr + siren;
			
			    // Définition explicite du type ici
			    Set<string>("tva_out", tva);
			}
			else {
			    Set<string>("tva_out", null); // ou tu peux mettre une valeur par défaut
			}
			
			return true;
			
		}

		private bool ScriptTask4Execute(ProcessExecutingContext context) {
			var dateStr = Get<string>("datecrea");
			
			// Variable de sortie
			DateTime parsedDate;
			
			if (!string.IsNullOrEmpty(dateStr) && DateTime.TryParseExact(dateStr, "yyyy-MM-dd", 
			    System.Globalization.CultureInfo.InvariantCulture, 
			    System.Globalization.DateTimeStyles.None, out parsedDate)) {
			
			    // Si la date est bien parsée, on la stocke dans le champ de sortie
			    Set<DateTime>("datecrea_out", parsedDate);
			} else {
			    // Si la date est invalide, on met null (ou on peut lever une erreur si besoin)
			    Set<DateTime?>("datecrea_out", null);
			}
			
			return true;
		}

		#endregion

	}

	#endregion

}

