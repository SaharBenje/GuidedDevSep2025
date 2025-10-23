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

	#region Class: UsrProcess_81898acMethodsWrapper

	/// <exclude/>
	public class UsrProcess_81898acMethodsWrapper : ProcessModel
	{

		public UsrProcess_81898acMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var NomCommune = Get<string>("Ville_txt");
			
			string text = string.IsNullOrEmpty(NomCommune) ? "" : NomCommune.ToLower();
			
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
			var NomCommuneFormate = text.ToUpper();
			
			Set("Ville_txt", NomCommuneFormate);
			return true;
			
		}

		#endregion

	}

	#endregion

}

