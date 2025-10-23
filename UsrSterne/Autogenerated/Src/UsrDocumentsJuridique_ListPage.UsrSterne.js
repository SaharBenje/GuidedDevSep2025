define("UsrDocumentsJuridique_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
							"entitySchemaName": "UsrDocumentJuridique"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrDocumentJuridique"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrLibelle",
							"caption": "#ResourceString(PDS_UsrLibelle)#",
							"dataValueType": 1
						},
						{
							"id": "0f059baa-fc51-1e11-ab67-500f3b6a1d87",
							"code": "PDS_UsrParentSociete",
							"caption": "#ResourceString(PDS_UsrParentSociete)#",
							"dataValueType": 10
						},
						{
							"id": "52004c7f-36ae-7ef4-4d78-92fe03db31c8",
							"code": "PDS_UsrStatutDJ",
							"caption": "#ResourceString(PDS_UsrStatutDJ)#",
							"dataValueType": 10
						},
						{
							"id": "4426ea28-a70e-484e-6e6b-2c31c9dbceac",
							"code": "PDS_UsrParentSocieteName",
							"caption": "#ResourceString(PDS_UsrParentSocieteName)#",
							"dataValueType": 28,
							"width": 176
						},
						{
							"id": "6f2b6072-dda5-55f5-3b53-a57d3308097a",
							"code": "PDS_UsrDateDebutValidite",
							"caption": "#ResourceString(PDS_UsrDateDebutValidite)#",
							"dataValueType": 8,
							"width": 193
						},
						{
							"id": "30a40263-3f72-8a01-b2c1-ccd00263d1d6",
							"code": "PDS_UsrDatePeremption",
							"caption": "#ResourceString(PDS_UsrDatePeremption)#",
							"dataValueType": 8,
							"width": 169
						},
						{
							"id": "888fe422-2b19-26bb-5cec-6b987753a2cd",
							"code": "PDS_UsrDateValidation",
							"caption": "#ResourceString(PDS_UsrDateValidation)#",
							"dataValueType": 8,
							"width": 213
						}
					]
				}
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
					"PDS_UsrLibelle": {
						"modelConfig": {
							"path": "PDS.UsrLibelle"
						}
					},
					"PDS_UsrParentSociete": {
						"modelConfig": {
							"path": "PDS.UsrParentSociete"
						}
					},
					"PDS_UsrStatutDJ": {
						"modelConfig": {
							"path": "PDS.UsrStatutDJ"
						}
					},
					"PDS_UsrParentSocieteName": {
						"modelConfig": {
							"path": "PDS.UsrParentSocieteName"
						}
					},
					"PDS_UsrDateDebutValidite": {
						"modelConfig": {
							"path": "PDS.UsrDateDebutValidite"
						}
					},
					"PDS_UsrDatePeremption": {
						"modelConfig": {
							"path": "PDS.UsrDatePeremption"
						}
					},
					"PDS_UsrDateValidation": {
						"modelConfig": {
							"path": "PDS.UsrDateValidation"
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
					"entitySchemaName": "UsrDocumentJuridique",
					"attributes": {
						"UsrLibelle": {
							"path": "UsrLibelle"
						},
						"UsrParentSociete": {
							"path": "UsrParentSociete"
						},
						"UsrStatutDJ": {
							"path": "UsrStatutDJ"
						},
						"UsrParentSocieteName": {
							"type": "ForwardReference",
							"path": "UsrParentSociete.Name"
						},
						"UsrDateDebutValidite": {
							"path": "UsrDateDebutValidite"
						},
						"UsrDatePeremption": {
							"path": "UsrDatePeremption"
						},
						"UsrDateValidation": {
							"path": "UsrDateValidation"
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