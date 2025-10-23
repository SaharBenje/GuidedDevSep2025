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

	#region Class: UsrProcess_aa6f428MethodsWrapper

	/// <exclude/>
	public class UsrProcess_aa6f428MethodsWrapper : ProcessModel
	{

		public UsrProcess_aa6f428MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			string Request = "grant_type=client_credentials" + "&" +
			                 "client_id=" + System.Web.HttpUtility.UrlEncode("q54kF7X9FFGluEUDvAREgomKdfEa") + "&" +
			                 "client_secret=" + System.Web.HttpUtility.UrlEncode("c4H6_ukJO4GnnFxreU9Gh4HkmfQa");
			
			Set<string>("inseeRequest", Request);
			
			return true;
		}

		#endregion

	}

	#endregion

}

