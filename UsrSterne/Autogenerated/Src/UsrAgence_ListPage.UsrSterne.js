define("UsrAgence_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
							"entitySchemaName": "Account"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "MenuItem_ExportToExcel",
				"values": {
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_zywl7fz",
							"filters": "$DataGrid_zywl7fz | crt.ToCollectionFilters : 'DataGrid_zywl7fz' : $DataGrid_zywl7fz_SelectionState"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"_filterOptions": {
						"expose": [],
						"from": "LookupQuickFilterByTag_Value"
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter"
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
					"sourceSchemaName": "AccountFolder",
					"rootSchemaName": "Account"
				}
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"visible": true,
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "SearchFilter_bsljeyz",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_bsljeyz_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_bsljeyz_DataGrid_zywl7fz",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"DataGrid_zywl7fz"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_bsljeyz_SearchValue",
							"SearchFilter_bsljeyz_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SummaryItem_qsnjyx4",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_qsnjyx4_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_qsnjyx4_Value",
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
			},
			{
				"operation": "insert",
				"name": "EntityHierarchyFilter_mutfxox",
				"values": {
					"type": "crt.EntityHierarchyFilter",
					"_filterOptions": {
						"from": "EntityHierarchyFilter_mutfxox_SelectedNode",
						"expose": [
							{
								"attribute": "EntityHierarchyFilter_mutfxox_Filters",
								"converters": [
									{
										"converter": "crt.ToHierarchyFiltersConverter"
									}
								]
							}
						]
					},
					"visible": true,
					"schemaName": "Account",
					"nodesConfig": [
						{
							"columnName": "Type",
							"children": [
								{
									"columnName": "UsrSousType",
									"children": []
								}
							]
						}
					],
					"layoutConfig": {
						"width": 237
					}
				},
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_zywl7fz",
				"values": {
					"type": "crt.DataGrid",
					"columns": [
						{
							"id": "859391eb-93a5-c77b-7e24-aa234202037c",
							"code": "DataGrid_zywl7fzDS_UsrId",
							"caption": "#ResourceString(DataGrid_zywl7fzDS_UsrId)#",
							"dataValueType": 27
						},
						{
							"id": "777c89f7-6340-b88c-dba1-ee381b624561",
							"code": "DataGrid_zywl7fzDS_Name",
							"caption": "#ResourceString(DataGrid_zywl7fzDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "738b4f28-18cd-65dd-e5bb-76560ab1a0ed",
							"code": "DataGrid_zywl7fzDS_AlternativeName",
							"caption": "#ResourceString(DataGrid_zywl7fzDS_AlternativeName)#",
							"dataValueType": 28
						},
						{
							"id": "f41d6ac4-3570-45f6-ad85-d7a29095a3c6",
							"code": "DataGrid_zywl7fzDS_UsrStatutsCas",
							"caption": "#ResourceString(DataGrid_zywl7fzDS_UsrStatutsCas)#",
							"dataValueType": 10
						},
						{
							"id": "973c29b0-a343-9dd2-e142-8e6eab0dedf6",
							"code": "DataGrid_zywl7fzDS_Type",
							"caption": "#ResourceString(DataGrid_zywl7fzDS_Type)#",
							"dataValueType": 10
						},
						{
							"id": "c5ec550b-81c6-0cca-202c-e446d6c3b594",
							"code": "DataGrid_zywl7fzDS_UsrSousType",
							"caption": "#ResourceString(DataGrid_zywl7fzDS_UsrSousType)#",
							"dataValueType": 10
						},
						{
							"id": "c69d3e7b-e465-d4fe-4677-3fd0c0510e92",
							"code": "DataGrid_zywl7fzDS_UsrAdresseUsrSocieteUsrAdresseCompleteTopOned5da789d",
							"caption": "#ResourceString(DataGrid_zywl7fzDS_UsrAdresseUsrSocieteUsrAdresseCompleteTopOned5da789d)#",
							"dataValueType": 29
						},
						{
							"id": "179ef37f-8c89-6bf0-4b79-b01ff6bad696",
							"code": "DataGrid_zywl7fzDS_UsrCentreProfit",
							"caption": "#ResourceString(DataGrid_zywl7fzDS_UsrCentreProfit)#",
							"dataValueType": 28
						},
						{
							"id": "61f4c8fa-eecc-0ec8-5b32-a8d46df94b4f",
							"code": "DataGrid_zywl7fzDS_UsrDocumentJuridiqueUsrParentSocieteIdCount19a54a45",
							"caption": "#ResourceString(DataGrid_zywl7fzDS_UsrDocumentJuridiqueUsrParentSocieteIdCount19a54a45)#",
							"dataValueType": 4
						}
					],
					"items": "$DataGrid_zywl7fz",
					"classes": [
						"section-data-grid"
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"primaryColumnName": "DataGrid_zywl7fzDS_Id",
					"selectionState": "$DataGrid_zywl7fz_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_zywl7fz_SelectionState"
					}
				},
				"parentName": "SectionContentWrapper",
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
					"DataGrid_zywl7fz": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_zywl7fzDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "Name"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_zywl7fz_PredefinedFilter"
								},
								{
									"name": "FolderTree_active_folder_filter",
									"loadOnChange": true
								},
								{
									"name": "EntityHierarchyFilter_mutfxox_Filters",
									"loadOnChange": true
								},
								{
									"name": "SearchFilter_bsljeyz_DataGrid_zywl7fz",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_zywl7fzDS_UsrId": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.UsrId"
									}
								},
								"DataGrid_zywl7fzDS_Name": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.Name"
									}
								},
								"DataGrid_zywl7fzDS_AlternativeName": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.AlternativeName"
									}
								},
								"DataGrid_zywl7fzDS_UsrStatutsCas": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.UsrStatutsCas"
									}
								},
								"DataGrid_zywl7fzDS_Type": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.Type"
									}
								},
								"DataGrid_zywl7fzDS_UsrSousType": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.UsrSousType"
									}
								},
								"DataGrid_zywl7fzDS_UsrAdresseUsrSocieteUsrAdresseCompleteTopOned5da789d": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.UsrAdresseUsrSocieteUsrAdresseCompleteTopOned5da789d"
									}
								},
								"DataGrid_zywl7fzDS_UsrCentreProfit": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.UsrCentreProfit"
									}
								},
								"DataGrid_zywl7fzDS_UsrDocumentJuridiqueUsrParentSocieteIdCount19a54a45": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.UsrDocumentJuridiqueUsrParentSocieteIdCount19a54a45"
									}
								},
								"DataGrid_zywl7fzDS_Id": {
									"modelConfig": {
										"path": "DataGrid_zywl7fzDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_zywl7fz_PredefinedFilter": {
						"value": {
							"items": {},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Account"
						}
					},
					"DataGrid_cl1du6i": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_cl1du6iDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_cl1du6iDS_Name": {
									"modelConfig": {
										"path": "DataGrid_cl1du6iDS.Name"
									}
								},
								"DataGrid_cl1du6iDS_UsrSousType": {
									"modelConfig": {
										"path": "DataGrid_cl1du6iDS.UsrSousType"
									}
								},
								"DataGrid_cl1du6iDS_Usragencesiret": {
									"modelConfig": {
										"path": "DataGrid_cl1du6iDS.Usragencesiret"
									}
								},
								"DataGrid_cl1du6iDS_UsrDateCreation": {
									"modelConfig": {
										"path": "DataGrid_cl1du6iDS.UsrDateCreation"
									}
								},
								"DataGrid_cl1du6iDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_cl1du6iDS.CreatedBy"
									}
								},
								"DataGrid_cl1du6iDS_Id": {
									"modelConfig": {
										"path": "DataGrid_cl1du6iDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_1wkkhb4": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_1wkkhb4DS",
							"filterAttributes": [],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Name"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_1wkkhb4DS_Name": {
									"modelConfig": {
										"path": "DataGrid_1wkkhb4DS.Name"
									}
								},
								"DataGrid_1wkkhb4DS_Id": {
									"modelConfig": {
										"path": "DataGrid_1wkkhb4DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_d5vbxhp": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_d5vbxhpDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_d5vbxhpDS_Name": {
									"modelConfig": {
										"path": "DataGrid_d5vbxhpDS.Name"
									}
								},
								"DataGrid_d5vbxhpDS_UsrSousType": {
									"modelConfig": {
										"path": "DataGrid_d5vbxhpDS.UsrSousType"
									}
								},
								"DataGrid_d5vbxhpDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_d5vbxhpDS.CreatedOn"
									}
								},
								"DataGrid_d5vbxhpDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_d5vbxhpDS.CreatedBy"
									}
								},
								"DataGrid_d5vbxhpDS_Id": {
									"modelConfig": {
										"path": "DataGrid_d5vbxhpDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_tz2rwpm": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_tz2rwpmDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Name"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_tz2rwpmDS_Name": {
									"modelConfig": {
										"path": "DataGrid_tz2rwpmDS.Name"
									}
								},
								"DataGrid_tz2rwpmDS_UsrSousType": {
									"modelConfig": {
										"path": "DataGrid_tz2rwpmDS.UsrSousType"
									}
								},
								"DataGrid_tz2rwpmDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_tz2rwpmDS.CreatedOn"
									}
								},
								"DataGrid_tz2rwpmDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_tz2rwpmDS.CreatedBy"
									}
								},
								"DataGrid_tz2rwpmDS_Id": {
									"modelConfig": {
										"path": "DataGrid_tz2rwpmDS.Id"
									}
								}
							}
						}
					},
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
					"PDS_UsrSousType": {
						"modelConfig": {
							"path": "PDS.UsrSousType"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
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
					"filterAttributes": []
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
					"default": []
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ItemsSorting"
				],
				"values": {
					"modelConfig": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"DataGrid_zywl7fzDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Account",
							"attributes": {
								"UsrId": {
									"path": "UsrId"
								},
								"Name": {
									"path": "Name"
								},
								"AlternativeName": {
									"path": "AlternativeName"
								},
								"UsrStatutsCas": {
									"path": "UsrStatutsCas"
								},
								"Type": {
									"path": "Type"
								},
								"UsrSousType": {
									"path": "UsrSousType"
								},
								"UsrAdresseUsrSocieteUsrAdresseCompleteTopOned5da789d": {
									"type": "Aggregation",
									"path": "[UsrAdresse:UsrSociete].UsrAdresseComplete",
									"aggregationConfig": {
										"aggregationFunction": "TopOne",
										"sortByColumn": "Id",
										"sortByDirection": 1
									}
								},
								"UsrCentreProfit": {
									"path": "UsrCentreProfit"
								},
								"UsrDocumentJuridiqueUsrParentSocieteIdCount19a54a45": {
									"type": "Aggregation",
									"path": "[UsrDocumentJuridique:UsrParentSociete].Id",
									"aggregationConfig": {
										"aggregationFunction": "Count"
									}
								}
							}
						}
					},
					"DataGrid_cl1du6iDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Account",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"UsrSousType": {
									"path": "UsrSousType"
								},
								"Usragencesiret": {
									"path": "Usragencesiret"
								},
								"UsrDateCreation": {
									"path": "UsrDateCreation"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					},
					"DataGrid_1wkkhb4DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Account",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
						}
					},
					"DataGrid_d5vbxhpDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Account",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"UsrSousType": {
									"path": "UsrSousType"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					},
					"DataGrid_tz2rwpmDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Account",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"UsrSousType": {
									"path": "UsrSousType"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "Account",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"UsrSousType": {
							"path": "UsrSousType"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"CreatedBy": {
							"path": "CreatedBy"
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