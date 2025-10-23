define("UsrPage_tqqxphi", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
				"operation": "insert",
				"name": "Input_unk4lax",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrTokenStoreDS_UsrName_u2p6aop",
					"labelPosition": "auto",
					"control": "$UsrTokenStoreDS_UsrName_u2p6aop"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_bjy98lw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrTokenStoreDS_UsrToken_ajq46fy",
					"labelPosition": "auto",
					"control": "$UsrTokenStoreDS_UsrToken_ajq46fy"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ldusa2k",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrTokenStoreDS_UsrLastUpdatedOn_xyk9df9",
					"labelPosition": "auto",
					"control": "$UsrTokenStoreDS_UsrLastUpdatedOn_xyk9df9"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_6pzg81c",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrTokenStoreDS_UsrHeureExpiration_qny7tp2",
					"labelPosition": "auto",
					"control": "$UsrTokenStoreDS_UsrHeureExpiration_qny7tp2"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_ek2cmre",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.UsrTokenStoreDS_UsrJsonPost_508hvcn",
					"labelPosition": "auto",
					"control": "$UsrTokenStoreDS_UsrJsonPost_508hvcn",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
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
					"UsrTokenStoreDS_UsrName_u2p6aop": {
						"modelConfig": {
							"path": "UsrTokenStoreDS.UsrName"
						}
					},
					"UsrTokenStoreDS_UsrToken_ajq46fy": {
						"modelConfig": {
							"path": "UsrTokenStoreDS.UsrToken"
						}
					},
					"UsrTokenStoreDS_UsrLastUpdatedOn_xyk9df9": {
						"modelConfig": {
							"path": "UsrTokenStoreDS.UsrLastUpdatedOn"
						}
					},
					"UsrTokenStoreDS_UsrHeureExpiration_qny7tp2": {
						"modelConfig": {
							"path": "UsrTokenStoreDS.UsrHeureExpiration"
						}
					},
					"UsrTokenStoreDS_UsrJsonPost_508hvcn": {
						"modelConfig": {
							"path": "UsrTokenStoreDS.UsrJsonPost"
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
					"primaryDataSourceName": "UsrTokenStoreDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"UsrTokenStoreDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "UsrTokenStore",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": []
									}
								}
							},
							"allowCopyingRecords": false
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