define("UsrPage_accueil_26q7xwe", /**SCHEMA_DEPS*/["css!labSFA_customStyles"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "IndicatorWidget_lbg18rn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
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
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_461w310",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_461w310_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_461w310_Data",
								"schemaName": "UsrContratsCadre",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "UsrContratsCadre"
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
							"template": "#ResourceString(IndicatorWidget_461w310_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_pg68v9x",
				"values": {
					"layoutConfig": {
						"column": 5,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_pg68v9x_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_pg68v9x_Data",
								"schemaName": "UsrContratExecution",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "UsrContratExecution"
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
							"template": "#ResourceString(IndicatorWidget_pg68v9x_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_qdf3aw2",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_qdf3aw2_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_qdf3aw2_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"b15b8a52-8786-4856-a17c-01e799b193a5": {
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
																"Name": "Structure interne",
																"Id": "57412fad-53e6-df11-971b-001d60e938c6",
																"value": "57412fad-53e6-df11-971b-001d60e938c6",
																"displayValue": "Structure interne"
															}
														}
													}
												]
											},
											"11b7d02e-0f03-4e23-a707-e9aeef281118": {
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
							"template": "#ResourceString(IndicatorWidget_qdf3aw2_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_9268x99",
				"values": {
					"layoutConfig": {
						"column": 9,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_9268x99_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_9268x99_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"96b50946-a8cd-4d69-9703-a67229f17028": {
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
																"Name": "Agence",
																"Id": "04d73140-475b-4627-a9d2-d41263efbfaa",
																"value": "04d73140-475b-4627-a9d2-d41263efbfaa",
																"displayValue": "Agence"
															}
														}
													}
												]
											},
											"e51a51e7-1b21-429d-881d-c4b1d243da5e": {
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
																"Name": "Structure interne",
																"Id": "57412fad-53e6-df11-971b-001d60e938c6",
																"value": "57412fad-53e6-df11-971b-001d60e938c6",
																"displayValue": "Structure interne"
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
							"template": "#ResourceString(IndicatorWidget_9268x99_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_d13cjzn",
				"values": {
					"layoutConfig": {
						"column": 11,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_d13cjzn_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_d13cjzn_Data",
								"schemaName": "UsrRelation",
								"filters": {
									"filter": {
										"items": {
											"deb71eb5-f464-4a9d-9d61-5624d227213d": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrActif"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": true
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "UsrRelation"
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
							"template": "#ResourceString(IndicatorWidget_d13cjzn_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_pfhhzy7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 6,
						"rowSpan": 6
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_pfhhzy7_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#000000",
					"fullWidthHeader": true,
					"titleWidth": "70",
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
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_s6xnxm9",
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
				"parentName": "ExpansionPanel_pfhhzy7",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ht2f4qp",
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
				"parentName": "GridContainer_s6xnxm9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_hyx8487",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_hyx8487_caption)#",
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
				"parentName": "FlexContainer_ht2f4qp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_h92giph",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_h92giph_caption)#",
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
							"dataSourceName": "GridDetail_wbrfu3uDS"
						}
					}
				},
				"parentName": "FlexContainer_ht2f4qp",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_bsfqa7r",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_bsfqa7r_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ht2f4qp",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_qgsjvmu",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_qgsjvmu_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_wbrfu3u"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_bsfqa7r",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_d81h3nl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_d81h3nl_caption)#",
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
				"parentName": "GridDetailSettingsBtn_bsfqa7r",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_3b4f0vn",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_3b4f0vn_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_3b4f0vn_GridDetail_wbrfu3u",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_wbrfu3u"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_3b4f0vn_SearchValue",
							"GridDetailSearchFilter_3b4f0vn_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ht2f4qp",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_hhbqfp1",
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
				"parentName": "ExpansionPanel_pfhhzy7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_wbrfu3u",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 9
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_wbrfu3u",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_wbrfu3uDS_Id",
					"columns": [
						{
							"id": "2fea13c3-7746-6ef5-c06a-4840da3cf3c9",
							"code": "GridDetail_wbrfu3uDS_Name",
							"caption": "#ResourceString(GridDetail_wbrfu3uDS_Name)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_hhbqfp1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChartWidget_ccf3uv9",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 6,
						"rowSpan": 6,
						"row": 2
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_ccf3uv9_title)#",
						"color": "blue",
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
													"16f48a7d-854a-4aa8-aead-eea2c6b7ef10": {
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
									"display": null
								}
							}
						],
						"seriesOrder": {
							"type": "by-aggregation-value",
							"direction": 2,
							"seriesIndex": 0
						},
						"layout": {}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ChartWidget_2ii2h2c",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 6,
						"rowSpan": 6
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_2ii2h2c_title)#",
						"color": "blue",
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
													"fd0a079c-b673-42a9-ac8c-f9351bb08d40": {
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
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "UsrSousType"
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
													"columnPath": "UsrSousType"
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
					"sectionBindingColumnRecordId": "$Id",
					"visible": false
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"GridDetail_wbrfu3u": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_wbrfu3uDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_3b4f0vn_GridDetail_wbrfu3u",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_wbrfu3u_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_wbrfu3uDS_Name": {
									"modelConfig": {
										"path": "GridDetail_wbrfu3uDS.Name"
									}
								},
								"GridDetail_wbrfu3uDS_Id": {
									"modelConfig": {
										"path": "GridDetail_wbrfu3uDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_wbrfu3u_PredefinedFilter": {
						"value": {
							"items": {
								"6be5fb62-7c20-4684-a221-b67c91fef292": {
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
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"GridDetail_wbrfu3uDS": {
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