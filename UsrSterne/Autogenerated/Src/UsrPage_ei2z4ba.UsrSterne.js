define("UsrPage_ei2z4ba", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"caption": "#ResourceString(CancelButton_caption)#",
					"color": "default",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"caption": "#ResourceString(SaveButton_caption)#",
					"visible": false
				}
			},
			{
				"operation": "insert",
				"name": "ComboBox_jdrft8u",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountDS_UsrColumn12_tdleu6x",
					"labelPosition": "above",
					"control": "$AccountDS_UsrColumn12_tdleu6x",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_480svu9",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_480svu9_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_jdrft8u",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_m2u2qku",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AccountDS_Usragencesiret_02mr5j8",
					"labelPosition": "above",
					"control": "$AccountDS_Usragencesiret_02mr5j8",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_2ru6l0h",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AccountDS_UsrDuns_owzf409",
					"labelPosition": "above",
					"control": "$AccountDS_UsrDuns_owzf409",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Button_89muj5j",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_89muj5j_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.RunMyCustomBPRequest",
						"params": {
							"processName": "UsrProcess_2111380",
							"processRunType": "RegardlessOfThePage",
							"saveAtProcessStart": false,
							"showNotification": true,
							"processParameters": {
								"MonParamTexte": "$AccountDS_Usragencesiret_02mr5j8"
							}
						}
					},
					"clickMode": "default"
				},
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AccountDS_UsrCodeAPE_0awvcpr": {
						"modelConfig": {
							"path": "AccountDS.UsrCodeAPE"
						}
					},
					"AccountDS_UsrNuns_5a9a7b7": {
						"modelConfig": {
							"path": "AccountDS.UsrNuns"
						}
					},
					"AccountDS_UsrColumn12_tdleu6x": {
						"modelConfig": {
							"path": "AccountDS.UsrColumn12"
						}
					},
					"AccountDS_Usragencesiret_02mr5j8": {
						"modelConfig": {
							"path": "AccountDS.Usragencesiret"
						}
					},
					"AccountDS_UsrDuns_owzf409": {
						"modelConfig": {
							"path": "AccountDS.UsrDuns"
						}
					},
					"AccountDS_UsrColumn12_tdleu6x_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"AccountDS_UsrId_19yzs9p": {
						"modelConfig": {
							"path": "AccountDS.UsrId"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"AccountDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "Account"
							}
						}
					},
					"primaryDataSourceName": "AccountDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
	
	

			
  
			{
    request: "crt.CanDiscardUnsavedDataRequest",
    handler: async (request, next) => {
      // Chaque fois que le système demande si on peut ignorer les données non enregistrées,
      // on répond "oui" automatiquement
      return true;
    }
  },
			

			
		
	/*	
 {
  request: "usr.RunMyCustomBPRequest",
  handler: async (request, next) => {


	 
  

    try {

	  var codep = await request.$context.AccountDS_UsrColumn12_tdleu6x;
     
      if (!codep) {
        Terrasoft.showInformation("❌ Veuillez saisir un code pays.");
        return;
      }

		var tmp = codep.value;
		var tmpLabel = codep.displayValue;
      const siret = await request.$context.AccountDS_Usragencesiret_02mr5j8;
	  const duns =  await request.$context.AccountDS_UsrDuns_owzf409;

	// Code pays = "FR"
		if(codep.displayValue == "FR") {
			 if (!siret) {
		        Terrasoft.showInformation("❌ Veuillez saisir un SIRET.");
		        return;
		      }
		}
			//Code a completer pour DUNS
		else {
			if (!duns) {
		        Terrasoft.showInformation("❌ Veuillez saisir un DUNS.");
		        return;
		      }
			return;
		}
     

		
		
		
		
      // 1. Lancer le processus
      const result = await request.$context.executeRequest({
        type: "crt.RunBusinessProcessRequest",
        processName: "UsrProcess_4459073_Societe",
			//"UsrProcess_2111380", av
		  
        processParameters: {
          MonParamTexte: siret,
		  codepays: tmp,
			valcodepays: tmpLabel
        },
        $context: request.$context
      });

     

      // 2. (Optionnel) Fermer la page d'origine après ouverture de la fiche
      await request.$context.executeRequest({
        type: "crt.ClosePageRequest",
        $context: request.$context,
        closePageOptions: {
          discardChangesPolicy: "discard"
        }
      });


		
   

    } catch (error) {
      console.error("❌ Erreur dans le handler :", error);
      Terrasoft.showInformation("❌ Une erreur est survenue : " + error.message);
    }

    return;
  }
},*/
	  {
  request: "usr.RunMyCustomBPRequest",
  handler: async (request, next) => {
    try {
      // 🔹 Récupération du code pays
      const codep = await request.$context.AccountDS_UsrColumn12_tdleu6x;
      if (!codep || !codep.value) {
        Terrasoft.showInformation("❌ Veuillez saisir un code pays.");
        return;
      }

      const codePaysValue = codep.value;
      const codePaysLabel = codep.displayValue;

      // 🔹 Récupération des champs SIRET et DUNS
      var siretObj = await request.$context.AccountDS_Usragencesiret_02mr5j8;
      var dunsObj = await request.$context.AccountDS_UsrDuns_owzf409;

      // 🔹 Fonction de validation SIRET avec Luhn
      function isValidSiret(siret) {
        if (!siret || typeof siret !== 'string') return false;

        siret = siret.replace(/\s+/g, '');
        if (!/^\d{14}$/.test(siret)) return false;

        let sum = 0;
        for (let i = 0; i < 14; i++) {
          let digit = parseInt(siret.charAt(i), 10);
          if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) digit -= 9;
          }
          sum += digit;
        }

        return (sum % 10) === 0;
      }

      // 🔹 Si le pays est la France → vérifie SIRET
      if (codePaysLabel === "FR") {
        if (!siretObj) {
          Terrasoft.showInformation("❌ Veuillez saisir un numéro SIRET."+siretObj);
          return;
        }

        const siret = siretObj;
			//.value;

        if (!isValidSiret(siret)) {
          Terrasoft.showInformation("❌ Le numéro SIRET est invalide.");
          return;
        }
		
		 request.$context.AccountDS_UsrId_19yzs9p = codePaysLabel+siret;


        // ➤ Exécution du process avec SIRET
        await request.$context.executeRequest({
          type: "crt.RunBusinessProcessRequest",
          processName: "UsrProcess_4459073_Societe",
          processParameters: {
            MonParamTexte: siret,
            codepays: codePaysValue,
            valcodepays: codePaysLabel
          },
          $context: request.$context
        });
		  // ➤ Désactiver le bouton après clic
		  await request.$context.executeRequest({
  type: "crt.SetControlValueRequest",
  controlName: "Button_89muj5j",
  propertyName: "disabled",
  value: true
});


      } else {
        // 🔹 Autres pays → vérifie DUNS
        if (!dunsObj) {
          Terrasoft.showInformation("❌ Veuillez saisir un numéro DUNS.");
          return;
        }

        const duns = dunsObj;
			//.value;

        // ➤ Exécution du process avec DUNS 
       // await request.$context.executeRequest({
         // type: "crt.RunBusinessProcessRequest",
          //processName: "UsrProcess_4459073_Societe",
          //processParameters: {
           // MonParamTexte: duns,
           // codepays: codePaysValue,
            //valcodepays: codePaysLabel
         // },
         // $context: request.$context
        //});
      }

      // 🔚 Fermer la page après le process
      await request.$context.executeRequest({
        type: "crt.ClosePageRequest",
        $context: request.$context,
        closePageOptions: {
          discardChangesPolicy: "discard"
        }
      });

    } catch (error) {
      console.error("❌ Erreur dans le handler :", error);
      Terrasoft.showInformation("❌ Une erreur est survenue : " + error.message);
    }

    return;
  }
}



	








  





















]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});