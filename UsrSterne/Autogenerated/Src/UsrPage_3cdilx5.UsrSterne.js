define("UsrPage_3cdilx5", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
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
				"name": "CloseButton",
				"values": {
					"caption": "#ResourceString(CloseButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
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
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentsTabContainer",
				"values": {
					"caption": "#ResourceString(AttachmentsTabContainer_caption)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentsTabContainerHeaderLabel",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(AttachmentsTabContainerHeaderLabel_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "ComboBox_lc4vnke",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrDocJurS_z1b5qes",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrDocJurS_z1b5qes",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_fd6xiy8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fd6xiy8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_lc4vnke",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_23bbame",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrTypeDoc_c0yk0ln",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrTypeDoc_c0yk0ln",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_rnnh8cf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rnnh8cf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_23bbame",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_lmla29q",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrParentSociete_buupkxd",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrParentSociete_buupkxd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_dqsoj9h",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dqsoj9h_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_lmla29q",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_w6m34uk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrLibelle_xg2emru",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrLibelle_xg2emru"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_2t8de97",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrStatutDJ_fvfth25",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrStatutDJ_fvfth25",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_5cwxu75",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5cwxu75_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2t8de97",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_aci0bdf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrDocId_18qvegr",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrDocId_18qvegr"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_9lpxrlu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrDateDebutValidite_nrhqagb",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrDateDebutValidite_nrhqagb"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_4e3rrhv",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrDatePeremption_b751isy",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrDatePeremption_b751isy"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_xdgtqwk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrDateValidation_8ojx6yl",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrDateValidation_8ojx6yl"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_fq5lkgr",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrVigilance_8ydga83",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrVigilance_8ydga83"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_z4ym6pd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrRaisonRefus_6xik2zy",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrRaisonRefus_6xik2zy"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_tv07ggs",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrColumn12_8rpf9p8",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrColumn12_8rpf9p8",
					"pickerType": "datetime"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_rjh3jly",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrDocumentJuridiqueDS_UsrAnalytiqueCode_wmg9o1z",
					"labelPosition": "auto",
					"control": "$UsrDocumentJuridiqueDS_UsrAnalytiqueCode_wmg9o1z",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrDocumentJuridiqueDS_UsrDocId_18qvegr": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrDocId"
						}
					},
					"UsrDocumentJuridiqueDS_UsrLibelle_xg2emru": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrLibelle"
						}
					},
					"UsrDocumentJuridiqueDS_UsrDateDebutValidite_nrhqagb": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrDateDebutValidite"
						}
					},
					"UsrDocumentJuridiqueDS_UsrDatePeremption_b751isy": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrDatePeremption"
						}
					},
					"UsrDocumentJuridiqueDS_UsrDateValidation_8ojx6yl": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrDateValidation"
						}
					},
					"UsrDocumentJuridiqueDS_UsrRaisonRefus_6xik2zy": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrRaisonRefus"
						}
					},
					"UsrDocumentJuridiqueDS_UsrVigilance_8ydga83": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrVigilance"
						}
					},
					"UsrDocumentJuridiqueDS_UsrStatutDJ_fvfth25": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrStatutDJ"
						}
					},
					"UsrDocumentJuridiqueDS_UsrColumn9_l3jwyio": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrColumn9"
						}
					},
					"UsrDocumentJuridiqueDS_UsrParentSociete_buupkxd": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrParentSociete"
						}
					},
					"UsrDocumentJuridiqueDS_UsrTypeDoc_c0yk0ln": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrTypeDoc"
						}
					},
					"UsrDocumentJuridiqueDS_UsrDocJurS_z1b5qes": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrDocJurS"
						}
					},
					"UsrDocumentJuridiqueDS_UsrColumn12_8rpf9p8": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrColumn12"
						}
					},
					"UsrDocumentJuridiqueDS_UsrAnalytiqueCode_wmg9o1z": {
						"modelConfig": {
							"path": "UsrDocumentJuridiqueDS.UsrAnalytiqueCode"
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
					"primaryDataSourceName": "UsrDocumentJuridiqueDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"UsrDocumentJuridiqueDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "UsrDocumentJuridique"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});