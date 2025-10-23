define("UsrContact_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Contact"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Tag_Virtual_Schema",
						"defaultValue": null,
						"recordsFilter": null
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
					"sourceSchemaName": "ContactFolder",
					"rootSchemaName": "Contact"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "a5097333-a54f-def1-4bfe-d15ae3705ad2",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "bb6cbb41-62a6-245c-533d-3503b219be96",
							"code": "PDS_MobilePhone",
							"caption": "#ResourceString(PDS_MobilePhone)#",
							"dataValueType": 42
						},
						{
							"id": "063dc410-9d59-9aad-cb1e-2b063b8d9391",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "d3c96901-6586-8f15-9113-aa04015a62fc",
							"code": "PDS_AccountName",
							"caption": "#ResourceString(PDS_AccountName)#",
							"dataValueType": 28
						},
						{
							"id": "7aa86600-58c6-fa59-7abf-0e78a1916bef",
							"code": "PDS_AccountAlternativeName",
							"caption": "#ResourceString(PDS_AccountAlternativeName)#",
							"dataValueType": 28
						},
						{
							"id": "1409bdd4-9a80-261d-7cb2-fed8b9a1e9bb",
							"code": "PDS_AccountType",
							"caption": "#ResourceString(PDS_AccountType)#",
							"dataValueType": 10
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "SummaryItem_57eu8tq",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_57eu8tq_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_57eu8tq_Value",
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
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_MobilePhone": {
						"modelConfig": {
							"path": "PDS.MobilePhone"
						}
					},
					"PDS_Account": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"PDS_AccountName": {
						"modelConfig": {
							"path": "PDS.AccountName"
						}
					},
					"PDS_AccountAlternativeName": {
						"modelConfig": {
							"path": "PDS.AccountAlternativeName"
						}
					},
					"PDS_AccountType": {
						"modelConfig": {
							"path": "PDS.AccountType"
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
					"entitySchemaName": "Contact",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"MobilePhone": {
							"path": "MobilePhone"
						},
						"Account": {
							"path": "Account"
						},
						"AccountName": {
							"type": "ForwardReference",
							"path": "Account.Name"
						},
						"AccountAlternativeName": {
							"type": "ForwardReference",
							"path": "Account.AlternativeName"
						},
						"AccountType": {
							"type": "ForwardReference",
							"path": "Account.Type"
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