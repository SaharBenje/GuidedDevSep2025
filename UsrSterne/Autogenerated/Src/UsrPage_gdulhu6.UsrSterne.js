define("UsrPage_gdulhu6", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {

	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ChartWidget_bwfhh28",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 5,
						"rowSpan": 4
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_bwfhh28_title)#",
						"color": "green",
						"theme": "glassmorphism",
						"scales": {
							"stacked": true,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_bwfhh28_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_bwfhh28_SeriesData_0",
										"schemaName": "Account",
										"filters": {
											"filter": {
												"items": {
													"f08337a1-8d8b-4e1d-92ab-66e83e49a0ce": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrSousType"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "UsrSousTypeLookup",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Entité",
																		"Id": "9a4bb68d-0671-4c90-926b-f234abdbf513",
																		"value": "9a4bb68d-0671-4c90-926b-f234abdbf513",
																		"displayValue": "Entité"
																	}
																}
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Agence",
																		"Id": "04d73140-475b-4627-a9d2-d41263efbfaa",
																		"value": "04d73140-475b-4627-a9d2-d41263efbfaa",
																		"displayValue": "Agence"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrStatutsCas"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Account"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrStatutsCas"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ",",
										"decimalPrecision": 0,
										"thousandSeparator": " "
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-aggregation-value",
							"direction": 1,
							"seriesIndex": 0
						},
						"layout": {}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChartWidget_ccf3uv9",
				"values": {
					"layoutConfig": {
						"column": 6,
						"colSpan": 5,
						"rowSpan": 4,
						"row": 1
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_ccf3uv9_title)#",
						"color": "green",
						"theme": "glassmorphism",
						"scales": {
							"stacked": true,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_ccf3uv9_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_ccf3uv9_SeriesData_0",
										"schemaName": "Account",
										"filters": {
											"filter": {
												"items": {
													"f08337a1-8d8b-4e1d-92ab-66e83e49a0ce": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrSousType"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "UsrSousTypeLookup",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Transporteur",
																		"Id": "e59eb125-346f-4b15-b494-7bc6f561bd40",
																		"value": "e59eb125-346f-4b15-b494-7bc6f561bd40",
																		"displayValue": "Transporteur"
																	}
																}
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Informatique",
																		"Id": "617aaa73-00c2-44c0-b726-4da59c17a7a0",
																		"value": "617aaa73-00c2-44c0-b726-4da59c17a7a0",
																		"displayValue": "Informatique"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrStatutsCas"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Account"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "UsrStatutsCas"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ",",
										"decimalPrecision": 0,
										"thousandSeparator": " "
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-aggregation-value",
							"direction": 1,
							"seriesIndex": 0
						},
						"layout": {}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChartWidget_2ii2h2c",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 5,
						"rowSpan": 3
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_2ii2h2c_title)#",
						"color": "green",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"type": "doughnut",
								"label": "#ResourceString(ChartWidget_2ii2h2c_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_2ii2h2c_SeriesData_0",
										"schemaName": "Account",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Type"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Account"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "Type"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ",",
										"decimalPrecision": 0,
										"thousandSeparator": " "
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_lbg18rn",
				"values": {
					"layoutConfig": {
						"column": 6,
						"row": 5,
						"colSpan": 3,
						"rowSpan": 2
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_lbg18rn_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_lbg18rn_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"25643cb6-b158-40db-88e1-ad8dfa42f4a1": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Type"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "AccountType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Prestataire",
																"Id": "d34b9da2-53e6-df11-971b-001d60e938c6",
																"value": "d34b9da2-53e6-df11-971b-001d60e938c6",
																"displayValue": "Prestataire"
															}
														}
													}
												]
											},
											"b4c3790d-6ea8-4da3-8293-f5e98a688a79": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrStatutsCas"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrStatutLookupsCas",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "VALIDE",
																"Id": "a9d0d2d0-d84c-4215-8eb1-ecc32d1b1f7c",
																"value": "a9d0d2d0-d84c-4215-8eb1-ecc32d1b1f7c",
																"displayValue": "VALIDE"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ",",
								"decimalPrecision": 0,
								"thousandSeparator": " "
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_lbg18rn_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_aih2im4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 10,
						"rowSpan": 5
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_aih2im4_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_wiydxpg",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_aih2im4",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7m0638h",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wiydxpg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_0s0jlq2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_0s0jlq2_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Account"
						}
					}
				},
				"parentName": "FlexContainer_7m0638h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_a8wnmin",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_a8wnmin_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_secw2keDS"
						}
					}
				},
				"parentName": "FlexContainer_7m0638h",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_os6ho5i",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_os6ho5i_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_7m0638h",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_muv7x53",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_muv7x53_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_secw2ke"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_os6ho5i",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_19ovqzx",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_19ovqzx_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Account"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_os6ho5i",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_5ey1xyl",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_5ey1xyl_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_5ey1xyl_GridDetail_secw2ke",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_secw2ke"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_5ey1xyl_SearchValue",
							"GridDetailSearchFilter_5ey1xyl_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_7m0638h",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xqol0qy",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_aih2im4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_secw2ke",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_secw2ke",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_secw2keDS_Id",
					"columns": [
						{
							"id": "8060d98f-67ee-07f5-bd2e-6025070e4877",
							"code": "GridDetail_secw2keDS_Name",
							"caption": "#ResourceString(GridDetail_secw2keDS_Name)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_xqol0qy",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {
						"GridDetail_secw2ke": {
							"isCollection": true,
							"modelConfig": {
								"path": "GridDetail_secw2keDS",
								"filterAttributes": [
									{
										"name": "GridDetailSearchFilter_5ey1xyl_GridDetail_secw2ke",
										"loadOnChange": true
									},
									{
										"loadOnChange": true,
										"name": "GridDetail_secw2ke_PredefinedFilter"
									}
								]
							},
							"viewModelConfig": {
								"attributes": {
									"GridDetail_secw2keDS_Name": {
										"modelConfig": {
											"path": "GridDetail_secw2keDS.Name"
										}
									},
									"GridDetail_secw2keDS_Id": {
										"modelConfig": {
											"path": "GridDetail_secw2keDS.Id"
										}
									}
								}
							}
						},
						"GridDetail_secw2ke_PredefinedFilter": {
							"value": {
								"items": {
									"994f9aea-8e65-4ff9-a03b-40389fca740d": {
										"filterType": 4,
										"comparisonType": 4,
										"isEnabled": true,
										"trimDateTimeParameterToDate": false,
										"leftExpression": {
											"expressionType": 0,
											"columnPath": "UsrStatutsCas"
										},
										"isAggregative": false,
										"dataValueType": 10,
										"referenceSchemaName": "UsrStatutLookupsCas",
										"rightExpressions": [
											{
												"expressionType": 2,
												"parameter": {
													"dataValueType": 10,
													"value": {
														"Name": "VALIDE",
														"Id": "a9d0d2d0-d84c-4215-8eb1-ecc32d1b1f7c",
														"value": "a9d0d2d0-d84c-4215-8eb1-ecc32d1b1f7c",
														"displayValue": "VALIDE"
													}
												}
											}
										]
									}
								},
								"logicalOperation": 0,
								"isEnabled": true,
								"filterType": 6,
								"rootSchemaName": "Account"
							}
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
						"GridDetail_secw2keDS": {
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