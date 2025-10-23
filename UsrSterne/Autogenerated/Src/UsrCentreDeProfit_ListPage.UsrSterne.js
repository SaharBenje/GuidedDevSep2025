define("UsrCentreDeProfit_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrCentreDeProfit"
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
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrCentreDeProfit"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1
						},
						{
							"id": "564fe7a2-39ca-b63c-c349-7d9d31f46122",
							"code": "PDS_UsrSociete",
							"caption": "#ResourceString(PDS_UsrSociete)#",
							"dataValueType": 10
						},
						{
							"id": "65f97720-7a7f-ff11-7413-122b25231856",
							"code": "PDS_UsrColumn9",
							"caption": "#ResourceString(PDS_UsrColumn9)#",
							"dataValueType": 10
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrCentreDeProfit",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			},
			{
				"operation": "insert",
				"name": "EntityHierarchyFilter_duq3xxl",
				"values": {
					"type": "crt.EntityHierarchyFilter",
					"_filterOptions": {
						"from": "EntityHierarchyFilter_duq3xxl_SelectedNode",
						"expose": [
							{
								"attribute": "EntityHierarchyFilter_duq3xxl_Filters",
								"converters": [
									{
										"converter": "crt.ToHierarchyFiltersConverter"
									}
								]
							}
						]
					},
					"displayMode": "manualDisplayMode",
					"visible": true,
					"schemaName": "UsrCentreDeProfit",
					"nodesConfig": [
						{
							"columnName": "UsrColumn9",
							"children": []
						}
					]
				},
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrSociete": {
						"modelConfig": {
							"path": "PDS.UsrSociete"
						}
					},
					"PDS_UsrColumn9": {
						"modelConfig": {
							"path": "PDS.UsrColumn9"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "EntityHierarchyFilter_duq3xxl_Filters",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "UsrName"
						}
					]
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
					"entitySchemaName": "UsrCentreDeProfit",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrSociete": {
							"path": "UsrSociete"
						},
						"UsrColumn9": {
							"path": "UsrColumn9"
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