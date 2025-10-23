define("UsrPage_9ubw9y9", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_016c46p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRelationDS_UsrCompte1_ut6va6g",
					"labelPosition": "above",
					"control": "$UsrRelationDS_UsrCompte1_ut6va6g",
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
				"name": "addRecord_g8o7hiu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_g8o7hiu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_016c46p",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_i90hpff",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRelationDS_UsrCompte2_lr0hpio",
					"labelPosition": "above",
					"control": "$UsrRelationDS_UsrCompte2_lr0hpio",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_g0i0scr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_g0i0scr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_i90hpff",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_6xepf9i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.UsrRelationDS_UsrActif_hhxrdux",
					"labelPosition": "above",
					"control": "$UsrRelationDS_UsrActif_hhxrdux"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_pbn4v7f",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRelationDS_UsrNom_4iw5rfp",
					"labelPosition": "above",
					"control": "$UsrRelationDS_UsrNom_4iw5rfp",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_3gw4urf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRelationDS_UsrContrat_rgajof7",
					"labelPosition": "above",
					"control": "$UsrRelationDS_UsrContrat_rgajof7",
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
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_ms9ie8h",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ms9ie8h_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_3gw4urf",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_kv42j1r",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRelationDS_UsrContratExecution_6zwmlxl",
					"labelPosition": "above",
					"control": "$UsrRelationDS_UsrContratExecution_6zwmlxl",
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
				"name": "addRecord_u4xacw4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_u4xacw4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_kv42j1r",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRelationDS_UsrCompte1_ut6va6g": {
						"modelConfig": {
							"path": "UsrRelationDS.UsrCompte1"
						}
					},
					"UsrRelationDS_UsrCompte2_lr0hpio": {
						"modelConfig": {
							"path": "UsrRelationDS.UsrCompte2"
						}
					},
					"UsrRelationDS_UsrActif_hhxrdux": {
						"modelConfig": {
							"path": "UsrRelationDS.UsrActif"
						}
					},
					"UsrRelationDS_UsrColumn4_y42fjm1": {
						"modelConfig": {
							"path": "UsrRelationDS.UsrColumn4"
						}
					},
					"UsrRelationDS_UsrColumn5_p4zckrt": {
						"modelConfig": {
							"path": "UsrRelationDS.UsrColumn5"
						}
					},
					"UsrRelationDS_UsrNom_4iw5rfp": {
						"modelConfig": {
							"path": "UsrRelationDS.UsrNom"
						}
					},
					"UsrRelationDS_UsrContrat_rgajof7": {
						"modelConfig": {
							"path": "UsrRelationDS.UsrContrat"
						}
					},
					"UsrRelationDS_UsrContratExecution_6zwmlxl": {
						"modelConfig": {
							"path": "UsrRelationDS.UsrContratExecution"
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
						"UsrRelationDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRelation"
							}
						}
					},
					"primaryDataSourceName": "UsrRelationDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});