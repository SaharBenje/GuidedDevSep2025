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

	#region Class: UsrProcess_15b907cUsrSterne4MethodsWrapper

	/// <exclude/>
	public class UsrProcess_15b907cUsrSterne4MethodsWrapper : ProcessModel
	{

		public UsrProcess_15b907cUsrSterne4MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var userConnection = Get<UserConnection>("UserConnection");
			var rawj = Get<string>("repjson");
			var recordId = Get<Guid>("idS");
			if (userConnection == null) {
			throw new Exception("UserConnection est null"); 
			}
			if (string.IsNullOrEmpty(rawj)) {
				throw new Exception("5555555rrawj est null ou vide");
				
			}
			return true;
		}

		#endregion

	}

	#endregion

}

