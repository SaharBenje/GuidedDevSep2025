define("UsrRELATIONS_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRelation"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "DataTable_Summaries",
				"values": {
					"expanded": "$DataTable_Summaries_Expanded"
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrRelation"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrNom",
							"caption": "#ResourceString(PDS_UsrNom)#",
							"dataValueType": 1
						},
						{
							"id": "5124185f-57e9-2509-5133-2a9d3f21c772",
							"code": "PDS_UsrCompte1",
							"caption": "#ResourceString(PDS_UsrCompte1)#",
							"dataValueType": 10
						},
						{
							"id": "d8b89c53-cb0a-c24b-69ca-04ce07fd7509",
							"code": "PDS_UsrColumn10",
							"caption": "#ResourceString(PDS_UsrColumn10)#",
							"dataValueType": 10
						},
						{
							"id": "8a0e52cb-7fb4-a27a-5306-471dc13936fe",
							"code": "PDS_ModifiedOn",
							"caption": "#ResourceString(PDS_ModifiedOn)#",
							"dataValueType": 7
						},
						{
							"id": "4cad3997-8525-508a-5d3d-4b7f8b03c537",
							"code": "PDS_ModifiedBy",
							"caption": "#ResourceString(PDS_ModifiedBy)#",
							"dataValueType": 10
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "SummaryItem_y0aa2d9",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_y0aa2d9_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_y0aa2d9_Value",
							"modelName": "PDS",
							"expression": {
								"function": "count",
								"columns": [
									{
										"type": "Column",
										"path": "Id"
									}
								],
								"resultDataValueType": 4
							}
						}
					}
				},
				"parentName": "DataTable_Summaries",
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
					"DataTable_Summaries_Expanded": {
						"value": true
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrNom": {
						"modelConfig": {
							"path": "PDS.UsrNom"
						}
					},
					"PDS_UsrCompte1": {
						"modelConfig": {
							"path": "PDS.UsrCompte1"
						}
					},
					"PDS_UsrColumn10": {
						"modelConfig": {
							"path": "PDS.UsrColumn10"
						}
					},
					"PDS_ModifiedOn": {
						"modelConfig": {
							"path": "PDS.ModifiedOn"
						}
					},
					"PDS_ModifiedBy": {
						"modelConfig": {
							"path": "PDS.ModifiedBy"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrRelation",
					"attributes": {
						"UsrNom": {
							"path": "UsrNom"
						},
						"UsrCompte1": {
							"path": "UsrCompte1"
						},
						"UsrColumn10": {
							"path": "UsrColumn10"
						},
						"ModifiedOn": {
							"path": "ModifiedOn"
						},
						"ModifiedBy": {
							"path": "ModifiedBy"
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