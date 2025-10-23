define("UsrAdresse_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "remove",
				"name": "MainHeaderBottom"
			},
			{
				"operation": "remove",
				"name": "CardToolsContainer"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "remove",
				"name": "CardToggleContainer"
			},
			{
				"operation": "remove",
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SideContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CenterContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "Tabs",
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "CardToggleTabPanel"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "Input_0ak8kil",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrName_a5ga0rm",
					"labelPosition": "auto",
					"control": "$PDS_UsrName_a5ga0rm"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Usrentreebatiment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Usrentreebatiment_sxoa6es",
					"labelPosition": "auto",
					"control": "$PDS_Usrentreebatiment_sxoa6es",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTypeadresse",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrTypeadresse_pnua5ac",
					"labelPosition": "auto",
					"control": "$PDS_UsrTypeadresse_pnua5ac",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_4vnzj1e",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4vnzj1e_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrTypeadresse",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Usrnumerovoie",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn6_pjg41o5",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn6_pjg41o5",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrVille",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrVille_07rlq32",
					"labelPosition": "auto",
					"control": "$PDS_UsrVille_07rlq32",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_4vrzzh4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4vrzzh4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrVille",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCodePostal",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrCodePostal_30jmxy8",
					"labelPosition": "auto",
					"control": "$PDS_UsrCodePostal_30jmxy8",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrPays",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrPays_nj4m0lv",
					"labelPosition": "auto",
					"control": "$PDS_UsrPays_nj4m0lv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_yeqvoq0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_yeqvoq0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrPays",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Principale",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrPrincipale_vhrfvsk",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrincipale_vhrfvsk"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Usrdepartement_region",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Usrdepartement_region_p0fn05e",
					"labelPosition": "auto",
					"control": "$PDS_Usrdepartement_region_p0fn05e",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "addRecord_2gzxh6p",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2gzxh6p_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Usrdepartement_region",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrAdresse2",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrAdresse2_euw4wet",
					"labelPosition": "auto",
					"control": "$PDS_UsrAdresse2_euw4wet",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Input_ird4ato",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrAdresseComplete_hotv6mi",
					"labelPosition": "auto",
					"control": "$PDS_UsrAdresseComplete_hotv6mi",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "ComboBox_hi9bdiz",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrContact_fgwds61",
					"labelPosition": "auto",
					"control": "$PDS_UsrContact_fgwds61",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "addRecord_gplpyqx",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gplpyqx_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hi9bdiz",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_dtfkrff",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrSociete_aztdui0",
					"labelPosition": "auto",
					"control": "$PDS_UsrSociete_aztdui0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "addRecord_gbrylyz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gbrylyz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_dtfkrff",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_jaav02d",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "CardContentWrapper",
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
					"PDS_UsrColumn6_pjg41o5": {
						"modelConfig": {
							"path": "PDS.UsrColumn6"
						}
					},
					"PDS_UsrPays_nj4m0lv": {
						"modelConfig": {
							"path": "PDS.UsrPays"
						}
					},
					"PDS_UsrVille_07rlq32": {
						"modelConfig": {
							"path": "PDS.UsrVille"
						}
					},
					"PDS_Usrentreebatiment_sxoa6es": {
						"modelConfig": {
							"path": "PDS.Usrentreebatiment"
						}
					},
					"PDS_UsrCodePostal_30jmxy8": {
						"modelConfig": {
							"path": "PDS.UsrCodePostal"
						}
					},
					"PDS_UsrAdresseComplete_ols165g": {
						"modelConfig": {
							"path": "PDS.UsrAdresseComplete"
						}
					},
					"PDS_Usrdepartement_region_p0fn05e": {
						"modelConfig": {
							"path": "PDS.Usrdepartement_region"
						}
					},
					"PDS_UsrAdresseComplete_hotv6mi": {
						"modelConfig": {
							"path": "PDS.UsrAdresseComplete"
						}
					},
					"PDS_UsrPrincipale_vhrfvsk": {
						"modelConfig": {
							"path": "PDS.UsrPrincipale"
						}
					},
					"PDS_UsrTypeadresse_pnua5ac": {
						"modelConfig": {
							"path": "PDS.UsrTypeadresse"
						}
					},
					"PDS_UsrAdresse2_euw4wet": {
						"modelConfig": {
							"path": "PDS.UsrAdresse2"
						}
					},
					"PDS_UsrSociete_aztdui0": {
						"modelConfig": {
							"path": "PDS.UsrSociete"
						}
					},
					"PDS_UsrName_a5ga0rm": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrContact_fgwds61": {
						"modelConfig": {
							"path": "PDS.UsrContact"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CardState"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrAdresse",
							"attributes": {}
						},
						"scope": "page"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[


    {
        request: "crt.HandleViewModelAttributeChangeRequest",
        handler: async (request, next) => {
            if ([
                'PDS_UsrVille_07rlq32', 
                'PDS_UsrPays_nj4m0lv', 
                'PDS_UsrCodePostal_30jmxy8', 
                'PDS_Usrdepartement_region_p0fn05e', 
                'PDS_UsrColumn6_pjg41o5'
            ].includes(request.attributeName)) { 

                // Récupération des valeurs
                let ville = await request.$context.PDS_UsrVille_07rlq32;
                let pays = await request.$context.PDS_UsrPays_nj4m0lv;
                let codePostal = await request.$context.PDS_UsrCodePostal_30jmxy8;
                let region = await request.$context.PDS_Usrdepartement_region_p0fn05e;
                let rue = await request.$context.PDS_UsrColumn6_pjg41o5;

                // Extraction des `displayValue` pour les listes de sélection
                let villeNom = ville?.displayValue || "";
                let paysNom = pays?.displayValue || "";
                let codePostalVal = codePostal || "";
                let regionNom = region?.displayValue || "";
                let rueVal = rue || "";

                // Logs détaillés
                console.log("🏠 Rue :", rueVal || "Aucune valeur");
                console.log("📮 Code Postal :", codePostalVal || "Aucune valeur");
                console.log("🏙 Ville :", villeNom || "Aucune valeur");
                console.log("📍 Région :", regionNom || "Aucune valeur");
                console.log("🌍 Pays :", paysNom || "Aucune valeur");

                // Création de l'adresse complète
                let adresseComplete = [rueVal, codePostalVal, villeNom, regionNom, paysNom]
                    .filter(Boolean) // Supprime les valeurs vides
                    .join(", "); // Formate avec une virgule

                console.log("📌 Nouvelle adresse complète :", adresseComplete);

                // Mise à jour du champ adresse complète
                request.$context.PDS_UsrAdresseComplete_ols165g = adresseComplete;
            }
            return next?.handle(request);
        }
    }

]
/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});