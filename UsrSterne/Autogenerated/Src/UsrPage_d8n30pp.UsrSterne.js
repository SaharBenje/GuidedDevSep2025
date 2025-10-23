define("UsrPage_d8n30pp", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "insert",
				"name": "Input_idvcyu2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrContratsCadreDS_UsrIdcontrat_mrfbk68",
					"labelPosition": "auto",
					"control": "$UsrContratsCadreDS_UsrIdcontrat_mrfbk68"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ywnpsgf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrContratsCadreDS_UsrDatesignature_ndlf2kp",
					"labelPosition": "auto",
					"control": "$UsrContratsCadreDS_UsrDatesignature_ndlf2kp"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_8p3enj1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrContratsCadreDS_UsrDateDebut_9qbh2ib",
					"labelPosition": "auto",
					"control": "$UsrContratsCadreDS_UsrDateDebut_9qbh2ib"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_2ll9i4t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrContratsCadreDS_UsrDateFin_v9ilfma",
					"labelPosition": "auto",
					"control": "$UsrContratsCadreDS_UsrDateFin_v9ilfma"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_69nw1r4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrContratsCadreDS_UsrEntite_fv2jlyv",
					"labelPosition": "auto",
					"control": "$UsrContratsCadreDS_UsrEntite_fv2jlyv",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_3md1zq3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3md1zq3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_69nw1r4",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_wiu0jso",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrContratsCadreDS_UsrPrestataire_595bo52",
					"labelPosition": "auto",
					"control": "$UsrContratsCadreDS_UsrPrestataire_595bo52",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_6r3jpfh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6r3jpfh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_wiu0jso",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_83ojvxf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrContratsCadreDS_UsrUrlContrat_kdr5xwk",
					"labelPosition": "auto",
					"control": "$UsrContratsCadreDS_UsrUrlContrat_kdr5xwk",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_jldmi37",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_jldmi37_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_iobumxq",
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
				"parentName": "ExpansionPanel_jldmi37",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_jtp04xa",
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
				"parentName": "GridContainer_iobumxq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_0tyz88d",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_0tyz88d_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrContratExecution",
							"defaultValues": [
								{
									"attributeName": "UsrContratCadre",
									"value": "$Id_yekr0ti"
								},
								{
									"attributeName": "UsrPrestataire",
									"value": "$UsrContratsCadreDS_UsrPrestataire_595bo52"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_jtp04xa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_cy9cyos",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_cy9cyos_caption)#",
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
							"dataSourceName": "GridDetail_nkyr47yDS"
						}
					}
				},
				"parentName": "FlexContainer_jtp04xa",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_tfpp8ck",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_tfpp8ck_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_jtp04xa",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_uet52is",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_uet52is_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_nkyr47y"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_tfpp8ck",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_qawcey7",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_qawcey7_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrContratExecution"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_tfpp8ck",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_gtngnu8",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_gtngnu8_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_gtngnu8_GridDetail_nkyr47y",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_nkyr47y"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_gtngnu8_SearchValue",
							"GridDetailSearchFilter_gtngnu8_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_jtp04xa",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_atx0qtw",
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
				"parentName": "ExpansionPanel_jldmi37",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_nkyr47y",
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
					"items": "$GridDetail_nkyr47y",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_nkyr47yDS_Id",
					"columns": [
						{
							"id": "27f1990b-88da-882c-3765-b3bd169b1d77",
							"code": "GridDetail_nkyr47yDS_UsrIdContratE",
							"caption": "#ResourceString(GridDetail_nkyr47yDS_UsrIdContratE)#",
							"dataValueType": 27
						},
						{
							"id": "ad9370a3-fb32-b3c8-683a-809053ed6a42",
							"code": "GridDetail_nkyr47yDS_UsrNomAgenc",
							"caption": "#ResourceString(GridDetail_nkyr47yDS_UsrNomAgenc)#",
							"dataValueType": 10
						},
						{
							"id": "e148f83d-6c38-1bd5-dfdf-bb4bc7ad3028",
							"code": "GridDetail_nkyr47yDS_UsrPrestataire",
							"caption": "#ResourceString(GridDetail_nkyr47yDS_UsrPrestataire)#",
							"dataValueType": 10
						},
						{
							"id": "99be2df4-f89d-7b87-b5a9-8a1328587597",
							"code": "GridDetail_nkyr47yDS_UsrStatut",
							"caption": "#ResourceString(GridDetail_nkyr47yDS_UsrStatut)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_atx0qtw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_4dat1x6",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_4dat1x6_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_nxv9ndh",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_4dat1x6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_8u9ya1d",
				"values": {
					"type": "crt.Timeline",
					"items": [],
					"tools": [],
					"hideTools": false,
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_8u9ya1d_caption)#",
					"label": "#ResourceString(Timeline_8u9ya1d_label)#",
					"filters": [],
					"masterEntitySchemaName": "UsrContratsCadre",
					"filterValues": "$Timeline_8u9ya1d_AllTileFilters"
				},
				"parentName": "TabContainer_4dat1x6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_SysFile_2ietyp0",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "SysFile",
						"isDefault": true
					}
				},
				"parentName": "Timeline_8u9ya1d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Feed_g4ktyu0",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "Feed",
						"isDefault": true
					}
				},
				"parentName": "Timeline_8u9ya1d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MessageComposerSelector_mamnq72",
				"values": {
					"type": "crt.MessageComposerSelector",
					"items": [],
					"classes": [
						"view-element"
					]
				},
				"parentName": "Timeline_8u9ya1d",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailComposer_c7qevbi",
				"values": {
					"type": "crt.EmailComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "f10f77c0-2857-ae83-32bb-dbc3e260ca86",
						"schemaType": "Email",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.EmailComposer",
						"caption": "Email"
					},
					"recordId": "$Id_yekr0ti",
					"defaultSenderRequest": "crt.DefaultSenderComposerRequest",
					"entitySchemaName": "UsrContratsCadre"
				},
				"parentName": "MessageComposerSelector_mamnq72",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedComposer_2fadwrg",
				"values": {
					"type": "crt.FeedComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "a9e11378-0b4b-e8e8-3008-708418899cc3",
						"schemaType": "Feed",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.FeedComposer",
						"caption": "Feed"
					},
					"feedType": "Record",
					"primaryColumnValue": "$Id_yekr0ti",
					"cardState": "$CardState",
					"entitySchemaName": "UsrContratsCadre",
					"dataSourceName": "UsrContratsCadreDS"
				},
				"parentName": "MessageComposerSelector_mamnq72",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_8u9ya1d_TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity",
					"visible": true
				},
				"parentName": "Timeline_8u9ya1d",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_8u9ya1d_TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date",
					"visible": true
				},
				"parentName": "Timeline_8u9ya1d",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_8u9ya1d_TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner",
					"visible": true
				},
				"parentName": "Timeline_8u9ya1d",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timeline_8u9ya1d_TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages",
					"visible": true
				},
				"parentName": "Timeline_8u9ya1d",
				"propertyName": "filters",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_asov4g9",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_asov4g9_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_t5ulavz",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_asov4g9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_s96iwbv",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_s96iwbv_title)#",
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
					"fitContent": true
				},
				"parentName": "TabContainer_asov4g9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_zesowh9",
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
				"parentName": "ExpansionPanel_s96iwbv",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_0sxbvpu",
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
				"parentName": "GridContainer_zesowh9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_ksdih7y",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_ksdih7y_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Contact"
						}
					}
				},
				"parentName": "FlexContainer_0sxbvpu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_9sa05g0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_9sa05g0_caption)#",
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
							"dataSourceName": "GridDetail_wbxf3cnDS"
						}
					}
				},
				"parentName": "FlexContainer_0sxbvpu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_p4krfu9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_p4krfu9_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_0sxbvpu",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_zoxvjz4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_zoxvjz4_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_wbxf3cn"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_p4krfu9",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_w0y4606",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_w0y4606_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Contact"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_p4krfu9",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_8vb0m6m",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_8vb0m6m_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_8vb0m6m_GridDetail_wbxf3cn",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_wbxf3cn"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_8vb0m6m_SearchValue",
							"GridDetailSearchFilter_8vb0m6m_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_0sxbvpu",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_mfiuu2t",
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
				"parentName": "ExpansionPanel_s96iwbv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_wbxf3cn",
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
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_wbxf3cn",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_wbxf3cnDS_Id",
					"columns": [
						{
							"id": "3f3643f0-39be-c508-3a68-0c3d5a93a880",
							"code": "GridDetail_wbxf3cnDS_Name",
							"caption": "#ResourceString(GridDetail_wbxf3cnDS_Name)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_mfiuu2t",
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
					"UsrContratsCadreDS_UsrIdcontrat_mrfbk68": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.UsrIdcontrat"
						}
					},
					"UsrContratsCadreDS_UsrDatesignature_ndlf2kp": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.UsrDatesignature"
						}
					},
					"UsrContratsCadreDS_UsrDateDebut_9qbh2ib": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.UsrDateDebut"
						}
					},
					"UsrContratsCadreDS_UsrDateFin_v9ilfma": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.UsrDateFin"
						}
					},
					"UsrContratsCadreDS_UsrEntite_fv2jlyv": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.UsrEntite"
						}
					},
					"UsrContratsCadreDS_UsrPrestataire_595bo52": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.UsrPrestataire"
						}
					},
					"UsrContratsCadreDS_UsrNomAgence_usrv6em": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.UsrNomAgence"
						}
					},
					"UsrContratsCadreDS_UsrContactAgence_wuwas3r": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.UsrContactAgence"
						}
					},
					"GridDetail_wbxf3cn": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_wbxf3cnDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_8vb0m6m_GridDetail_wbxf3cn",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_wbxf3cnDS_Name": {
									"modelConfig": {
										"path": "GridDetail_wbxf3cnDS.Name"
									}
								},
								"GridDetail_wbxf3cnDS_Id": {
									"modelConfig": {
										"path": "GridDetail_wbxf3cnDS.Id"
									}
								}
							}
						}
					},
					"Id_yekr0ti": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.Id"
						}
					},
					"GridDetail_nkyr47y": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_nkyr47yDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_gtngnu8_GridDetail_nkyr47y",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrIdTournee"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_nkyr47yDS_UsrIdContratE": {
									"modelConfig": {
										"path": "GridDetail_nkyr47yDS.UsrIdContratE"
									}
								},
								"GridDetail_nkyr47yDS_UsrNomAgenc": {
									"modelConfig": {
										"path": "GridDetail_nkyr47yDS.UsrNomAgenc"
									}
								},
								"GridDetail_nkyr47yDS_UsrPrestataire": {
									"modelConfig": {
										"path": "GridDetail_nkyr47yDS.UsrPrestataire"
									}
								},
								"GridDetail_nkyr47yDS_UsrStatut": {
									"modelConfig": {
										"path": "GridDetail_nkyr47yDS.UsrStatut"
									}
								},
								"GridDetail_nkyr47yDS_Id": {
									"modelConfig": {
										"path": "GridDetail_nkyr47yDS.Id"
									}
								}
							}
						}
					},
					"UsrContratsCadreDS_UsrUrlContrat_kdr5xwk": {
						"modelConfig": {
							"path": "UsrContratsCadreDS.UsrUrlContrat"
						}
					},
					"Timeline_8u9ya1d_AllTileFilters": {
						"from": [],
						"converter": "crt.ToTileFilterGroup"
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "UsrContratsCadreDS",
					"dependencies": {
						"GridDetail_nkyr47yDS": [
							{
								"attributePath": "UsrContratCadre",
								"relationPath": "UsrContratsCadreDS.Id"
							},
							{
								"attributePath": "UsrPrestataire",
								"relationPath": "UsrContratsCadreDS.UsrPrestataire"
							}
						],
						"GridDetail_wbxf3cnDS": [
							{
								"attributePath": "UsrContratCadre",
								"relationPath": "UsrContratsCadreDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"UsrContratsCadreDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "UsrContratsCadre"
						}
					},
					"GridDetail_wbxf3cnDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contact",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
						}
					},
					"GridDetail_nkyr47yDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrContratExecution",
							"attributes": {
								"UsrIdContratE": {
									"path": "UsrIdContratE"
								},
								"UsrNomAgenc": {
									"path": "UsrNomAgenc"
								},
								"UsrPrestataire": {
									"path": "UsrPrestataire"
								},
								"UsrStatut": {
									"path": "UsrStatut"
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