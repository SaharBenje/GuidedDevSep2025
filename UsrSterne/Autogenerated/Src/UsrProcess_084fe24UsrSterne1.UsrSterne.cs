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

	#region Class: UsrProcess_084fe24UsrSterne1MethodsWrapper

	/// <exclude/>
	public class UsrProcess_084fe24UsrSterne1MethodsWrapper : ProcessModel
	{

		public UsrProcess_084fe24UsrSterne1MethodsWrapper(Process process)
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
			
			var sb = new StringBuilder();
			sb.Append("{");
			
			sb.Append("\"status\": \"Validé\",");
			sb.AppendFormat("\"name\": \"{0}\",", account.GetTypedColumnValue<string>("Name"));/*
			sb.AppendFormat("\"alternativeName\": \"{0}\",", account.GetTypedColumnValue<string>("AlternativeName"));
			sb.AppendFormat("\"countryCode\": \"{0}\",", account.GetTypedColumnValue<string>("CountryCode"));
			sb.AppendFormat("\"siret\": \"{0}\",", account.GetTypedColumnValue<string>("Siret"));
			sb.AppendFormat("\"siren\": \"{0}\",", account.GetTypedColumnValue<string>("Siren"));
			sb.AppendFormat("\"duns\": \"{0}\",", account.GetTypedColumnValue<string>("Duns"));
			sb.AppendFormat("\"employeesNumber\": {0},", account.GetTypedColumnValue<int>("EmployeesNumber"));
			sb.AppendFormat("\"web\": \"{0}\",", account.GetTypedColumnValue<string>("Web"));
			sb.AppendFormat("\"tvaEu\": \"{0}\",", account.GetTypedColumnValue<string>("TvaEu"));
			sb.AppendFormat("\"creationDate\": \"{0:O}\",", account.GetTypedColumnValue<DateTime>("CreatedOn"));
			sb.AppendFormat("\"createdOn\": \"{0:O}\",", account.GetTypedColumnValue<DateTime>("CreatedOn"));
			sb.AppendFormat("\"createdBy\": \"{0}\",", account.GetTypedColumnValue<string>("CreatedByName"));
			sb.AppendFormat("\"modifiedOn\": \"{0:O}\",", account.GetTypedColumnValue<DateTime>("ModifiedOn"));
			sb.AppendFormat("\"modifiedBy\": \"{0}\",", account.GetTypedColumnValue<string>("ModifiedByName"));
			sb.AppendFormat("\"legalCategory\": \"{0}\",", account.GetTypedColumnValue<string>("LegalCategory"));
			sb.AppendFormat("\"primaryActivityCode\": \"{0}\",", account.GetTypedColumnValue<string>("PrimaryActivityCode"));
			sb.AppendFormat("\"primaryActivityLabel\": \"{0}\",", account.GetTypedColumnValue<string>("PrimaryActivityLabel"));
			sb.AppendFormat("\"accountLogo\": \"{0}\",", account.GetTypedColumnValue<string>("AccountLogo"));
			
			// Placeholder vide pour les adresses
			sb.Append("\"addresses\": [");
			sb.Append("{");
			sb.Append("\"name\": \"string\",");
			sb.Append("\"normalizedPostalAdresse\": {");
			sb.Append("\"line1\": \"string\",");
			sb.Append("\"line2\": \"string\",");
			sb.Append("\"line3\": \"string\",");
			sb.Append("\"line4\": \"string\",");
			sb.Append("\"line5\": \"string\",");
			sb.Append("\"line6\": \"string\"");
			sb.Append("},");
			sb.Append("\"postalCode\": \"string\",");
			sb.Append("\"city\": \"string\",");
			sb.Append("\"region\": \"string\",");
			sb.Append("\"country\": \"string\",");
			sb.Append("\"isMainAddress\": true,");
			sb.Append("\"type\": \"Courant\"");
			sb.Append("}");
			sb.Append("],");
			
			// Placeholder vide pour les contacts
			sb.Append("\"contacts\": [");
			sb.Append("{");
			sb.Append("\"companyName\": \"string\",");
			sb.Append("\"givenName\": \"string\",");
			sb.Append("\"familyName\": \"string\",");
			sb.Append("\"phoneNumber\": \"string\",");
			sb.Append("\"mobilePhoneNumber\": \"string\",");
			sb.Append("\"email\": \"string\"");
			sb.Append("}");
			sb.Append("],");
			
			sb.Append("\"establishmentSubType\": \"Informatique\"");*/
			
			sb.Append("}");
			
			string json = sb.ToString();
			Set("GeneratedJson", json);
			return true;
		}

		#endregion

	}

	#endregion

}

