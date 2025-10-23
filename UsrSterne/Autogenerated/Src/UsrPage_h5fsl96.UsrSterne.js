define("UsrPage_h5fsl96", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_4ikpfx1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrColumn8_6q6ac2n",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrColumn8_6q6ac2n",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_axtoq2k",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_axtoq2k_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4ikpfx1",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_sef7wyg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrIdContratE_294jzux",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrIdContratE_294jzux"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_0c80qff",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrPrestataire_hhvv7lq",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrPrestataire_hhvv7lq",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_jsor6gi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jsor6gi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0c80qff",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ml0dsi9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrNomAgenc_etm6jj7",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrNomAgenc_etm6jj7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_7gwnotf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7gwnotf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ml0dsi9",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_3natqer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrDatesignature_7loid12",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrDatesignature_7loid12"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_l8qw58q",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrColumn7_8dchpbz",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrColumn7_8dchpbz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_h5tjw57",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_h5tjw57_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_l8qw58q",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_pbcb9tn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrContactType_lxlp2kg",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrContactType_lxlp2kg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_ls65ihr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ls65ihr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_pbcb9tn",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_jd4koax",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrColumn12_8hga8sx",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrColumn12_8hga8sx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_464wwco",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_464wwco_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_jd4koax",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_8nfhz4z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 9,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrIdTournee_7d2u84v",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrIdTournee_7d2u84v"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_lf15i7y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 10,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrNomTournee_gbfzc27",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrNomTournee_gbfzc27"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Input_tgfcygv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 11,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrCodeComptable_puauxwm",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrCodeComptable_puauxwm",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Input_gggihch",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 12,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrContratExecutionDS_UsrUrlContratExecution_is5gs7z",
					"labelPosition": "above",
					"control": "$UsrContratExecutionDS_UsrUrlContratExecution_is5gs7z",
					"multiline": false
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 11
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrContratExecutionDS_UsrDatesignature_7loid12": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrDatesignature"
						}
					},
					"UsrContratExecutionDS_UsrColumn7_8dchpbz": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrStatut"
						}
					},
					"UsrContratExecutionDS_UsrColumn8_6q6ac2n": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrContratCadre"
						}
					},
					"UsrContratExecutionDS_UsrContactType_lxlp2kg": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrContactType"
						}
					},
					"UsrContratExecutionDS_UsrIdTournee_7d2u84v": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrIdTournee"
						}
					},
					"UsrContratExecutionDS_UsrNomTournee_gbfzc27": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrNomTournee"
						}
					},
					"UsrContratExecutionDS_UsrUrlContratExecution_is5gs7z": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrUrlContratExecution"
						}
					},
					"UsrContratExecutionDS_UsrPrestataire_hhvv7lq": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrPrestataire"
						}
					},
					"UsrContratExecutionDS_UsrNomAgenc_etm6jj7": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrNomAgenc"
						}
					},
					"UsrContratExecutionDS_UsrIdContratE_294jzux": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrIdContratE"
						}
					},
					"UsrContratExecutionDS_UsrCodeComptable_puauxwm": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrCodeComptable"
						}
					},
					"UsrContratExecutionDS_UsrColumn12_8hga8sx": {
						"modelConfig": {
							"path": "UsrContratExecutionDS.UsrChauffeur"
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
						"UsrContratExecutionDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrContratExecution"
							}
						}
					},
					"primaryDataSourceName": "UsrContratExecutionDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});