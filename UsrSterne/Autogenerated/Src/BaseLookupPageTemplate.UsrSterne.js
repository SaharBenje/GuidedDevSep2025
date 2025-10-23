define("BaseLookupPageTemplate", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "SearchFilterMain",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilterMain",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilterMain_DataGridMain",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"DataGridMain"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilterMain_SearchValue",
							"SearchFilterMain_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "DataGridMain",
				"values": {
					"columns": [
						{
							"id": "87ab2501-4138-66a0-0acd-1dbc172003dc",
							"code": "MainDS_Name",
							"caption": "#ResourceString(MainDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "34928f9b-b0e0-b410-172e-2374137018d1",
							"code": "MainDS_Country",
							"caption": "#ResourceString(MainDS_Country)#",
							"dataValueType": 10
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"clickMode": "default"
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DataGridMain",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "SearchFilterMain_DataGridMain",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DataGridMain",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"MainDS_Name": {
						"modelConfig": {
							"path": "MainDS.Name"
						}
					},
					"MainDS_Country": {
						"modelConfig": {
							"path": "MainDS.Country"
						}
					},
					"MainDS_Id": {
						"modelConfig": {
							"path": "MainDS.Id"
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
					"MainDS",
					"config",
					"attributes"
				],
				"values": {
					"Name": {
						"path": "Name"
					},
					"Country": {
						"path": "Country"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});