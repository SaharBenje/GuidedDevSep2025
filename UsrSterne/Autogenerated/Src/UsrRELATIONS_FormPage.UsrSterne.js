define("UsrRELATIONS_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "#7575751F",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
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
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRelation"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "2da1a71b-3696-4bf8-a6f4-5b86e45e99be",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_w2l9pk2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_w2l9pk2_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_8449493UsrEvolution1_17d8b97_183be59",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "idS"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_ikcugxr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ikcugxr_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_084fe24UsrSterne3_6eccc39",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "IdR"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EntityStageProgressBar_zku0gb5",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": false,
					"askUserToChangeSchema": true,
					"entityName": "UsrRelation"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_i86sn1p",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrActif_97gzlhj",
					"labelPosition": "auto",
					"control": "$PDS_UsrActif_97gzlhj",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrNom",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrNom",
					"control": "$UsrNom",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_lssjh0o",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCompte1_w06sdyh",
					"labelPosition": "auto",
					"control": "$PDS_UsrCompte1_w06sdyh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": "$ComboBox_lssjh0o_ValueDetails",
					"secondaryDisplayValue": "Name"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_oei3v4x",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_oei3v4x_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_lssjh0o",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_rkchng5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCompte2_mx4l4ka",
					"labelPosition": "auto",
					"control": "$PDS_UsrCompte2_mx4l4ka",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": "$ComboBox_rkchng5_ValueDetails",
					"secondaryDisplayValue": "Name"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_nidabla",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_nidabla_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_rkchng5",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_92xuva3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Input_92xuva3_label)#",
					"control": "$PDS_UsrCompte1UsrProfitCenterUsrName_721ratt",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_8e31h4p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn23_d5khg8r",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrColumn23_d5khg8r",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_rkjy2sq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn9_gt24zv4",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn9_gt24zv4",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_1vfyhwo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 8,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrObjetRelationContractuelle_c18tdm6",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrObjetRelationContractuelle_c18tdm6",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_2dk80tz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 9,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Input_2dk80tz_label)#",
					"control": "$PDS_UsrCompte2Name_8fmhnm4",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_ijt5njn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 10,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Input_ijt5njn_label)#",
					"control": "$PDS_UsrCompte1AlternativeName_3ertq1t",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Approval_ff3jnin",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 11,
						"rowSpan": 1
					},
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "UsrRelation",
					"approvalEntityName": "SysApproval",
					"visible": true,
					"hiddenWhenNoData": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "ComboBox_6nkkro1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDelaidePaiement_trk71nh",
					"labelPosition": "auto",
					"control": "$PDS_UsrDelaidePaiement_trk71nh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_io9m2tn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_io9m2tn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_6nkkro1",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_fc2n5v0",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn12_9nqgmvt",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn12_9nqgmvt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_ovj0luc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ovj0luc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_fc2n5v0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_6y77y6x",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrModeTrasmissionCheque_hes5w7y",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrModeTrasmissionCheque_hes5w7y",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_1qusq2o",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1qusq2o_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_6y77y6x",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_zw62pol",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrTransmissionCheque_zipj6jq",
					"labelPosition": "auto",
					"control": "$PDS_UsrTransmissionCheque_zipj6jq",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Checkbox_640d0gh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrFactor_ga6g3yz",
					"labelPosition": "auto",
					"control": "$PDS_UsrFactor_ga6g3yz"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_ru2czqj",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn26_4fi3md5",
					"control": "$PDS_UsrColumn26_4fi3md5",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_ui7guba",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDevise_5wfe7g0",
					"labelPosition": "auto",
					"control": "$PDS_UsrDevise_5wfe7g0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Input_7plzkcc",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrProfitCenter_9qlsy55",
					"labelPosition": "auto",
					"control": "$PDS_UsrProfitCenter_9qlsy55",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ComboBox_zhs4f9g",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Usr1erContact_1fkwclt",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Usr1erContact_1fkwclt",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"valueDetails": "$ComboBox_zhs4f9g_ValueDetails",
					"secondaryDisplayValue": "Email"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "addRecord_pisb0ct",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_pisb0ct_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_zhs4f9g",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_rrltgva",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_rrltgva_title)#",
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
				"name": "GridContainer_xmetftc",
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
				"parentName": "ExpansionPanel_rrltgva",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mr924y5",
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
				"parentName": "GridContainer_xmetftc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_7tpslyt",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_7tpslyt_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrContratExecution"
						}
					}
				},
				"parentName": "FlexContainer_mr924y5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_7ul1y8r",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_7ul1y8r_caption)#",
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
							"dataSourceName": "GridDetail_wb9pccoDS"
						}
					}
				},
				"parentName": "FlexContainer_mr924y5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_318h3uu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_318h3uu_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_mr924y5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ib5gny7",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ib5gny7_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_wb9pcco"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_318h3uu",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_te36e2k",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_te36e2k_caption)#",
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
				"parentName": "GridDetailSettingsBtn_318h3uu",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_d6lu4zc",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_d6lu4zc_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_d6lu4zc_GridDetail_wb9pcco",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_wb9pcco"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_d6lu4zc_SearchValue",
							"GridDetailSearchFilter_d6lu4zc_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_mr924y5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_2g55ps1",
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
				"parentName": "ExpansionPanel_rrltgva",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_wb9pcco",
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
					"items": "$GridDetail_wb9pcco",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_wb9pccoDS_Id",
					"columns": [
						{
							"id": "d932da1f-3be3-5263-24b2-a8675f9150fd",
							"code": "GridDetail_wb9pccoDS_UsrIdContratE",
							"caption": "#ResourceString(GridDetail_wb9pccoDS_UsrIdContratE)#",
							"dataValueType": 27
						},
						{
							"id": "e68a715b-18e2-0717-2954-00bdf2f51dd9",
							"code": "GridDetail_wb9pccoDS_UsrPrestataire",
							"caption": "#ResourceString(GridDetail_wb9pccoDS_UsrPrestataire)#",
							"dataValueType": 10
						},
						{
							"id": "8aa17dd0-58ba-3ff3-2955-1835463b6da8",
							"code": "GridDetail_wb9pccoDS_UsrNomAgenc",
							"caption": "#ResourceString(GridDetail_wb9pccoDS_UsrNomAgenc)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_2g55ps1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_ygt9gld",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_ygt9gld_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_y1ji390",
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
				"parentName": "TabContainer_ygt9gld",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_imjp03v",
				"values": {
					"type": "crt.Timeline",
					"items": [],
					"tools": [],
					"customFilters": [],
					"hideTools": false,
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_imjp03v_caption)#",
					"label": "#ResourceString(Timeline_imjp03v_label)#",
					"filters": [],
					"masterEntitySchemaName": "UsrRelation",
					"filterValues": "$Timeline_imjp03v_AllTileFilters"
				},
				"parentName": "TabContainer_ygt9gld",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email_76ju4kn",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "UsrUsrRelation",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
					"iconId": null,
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Email",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 3
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 12,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Body",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 2
								}
							}
						],
						"isDefault": true
					},
					"filters": "$TimelineTile_Email_76ju4kn_Items"
				},
				"parentName": "Timeline_imjp03v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Activity_14cy2go",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "UsrUsrRelation",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Activity",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 4
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 6,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 6,
									"rowSpan": 1
								}
							}
						],
						"isDefault": true
					},
					"filters": "$TimelineTile_Activity_14cy2go_Items"
				},
				"parentName": "Timeline_imjp03v",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_SysApproval_8p20z4r",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "UsrRelation",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"uId": "9800f45d-7d2e-44c7-85e5-053c06c8c2d4",
						"schemaName": "SysApproval",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Objective",
								"columnLayout": null
							}
						],
						"isDefault": true
					},
					"filters": "$TimelineTile_SysApproval_8p20z4r_Items",
					"iconPosition": "only-icon",
					"icon": "star-icon",
					"visible": true
				},
				"parentName": "Timeline_imjp03v",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_SysFile_y5mw9tq",
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
				"parentName": "Timeline_imjp03v",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Feed_p2b1gjr",
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
				"parentName": "Timeline_imjp03v",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "MessageComposerSelector_n141pkz",
				"values": {
					"type": "crt.MessageComposerSelector",
					"items": [],
					"classes": [
						"view-element"
					]
				},
				"parentName": "Timeline_imjp03v",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedComposer_lecscu7",
				"values": {
					"type": "crt.FeedComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "6d006667-3496-4e2d-adc0-3a42648dd97b",
						"schemaType": "Feed",
						"caption": "Feed",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.FeedComposer",
						"icon": "feed-composer-icon"
					},
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"entitySchemaName": "UsrRelation",
					"dataSourceName": "PDS"
				},
				"parentName": "MessageComposerSelector_n141pkz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailComposer_4y81pwq",
				"values": {
					"type": "crt.EmailComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "75aadc65-a834-42d0-b880-fac9bdee4c86",
						"schemaType": "Email",
						"caption": "Email",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.EmailComposer",
						"icon": "email-composer-icon"
					},
					"recordId": "$Id",
					"defaultSenderRequest": "crt.DefaultSenderComposerRequest",
					"entitySchemaName": "UsrRelation"
				},
				"parentName": "MessageComposerSelector_n141pkz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineFilterContainer_53klme5",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"classes": [],
					"fitContent": true,
					"direction": "row"
				},
				"parentName": "Timeline_imjp03v",
				"propertyName": "customFilters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_imjp03v_TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity",
					"visible": true
				},
				"parentName": "Timeline_imjp03v",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_imjp03v_TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date",
					"visible": true
				},
				"parentName": "Timeline_imjp03v",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_imjp03v_TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner",
					"visible": true
				},
				"parentName": "Timeline_imjp03v",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timeline_imjp03v_TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages",
					"visible": true
				},
				"parentName": "Timeline_imjp03v",
				"propertyName": "filters",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_6dtc4mk",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_6dtc4mk_caption)#",
					"iconPosition": "only-text",
					"visible": false
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nn1f3f6",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_6dtc4mk",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_ad784y5",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ad784y5_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"headingLevel": "label"
				},
				"parentName": "FlexContainer_nn1f3f6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_qvyjfa3",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_6dtc4mk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_xmp7d7o",
				"values": {
					"type": "crt.Timeline",
					"items": [],
					"tools": [],
					"customFilters": [],
					"hideTools": false,
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_xmp7d7o_caption)#",
					"label": "#ResourceString(Timeline_xmp7d7o_label)#",
					"filters": [],
					"masterEntitySchemaName": "UsrRelation",
					"filterValues": "$Timeline_xmp7d7o_AllTileFilters"
				},
				"parentName": "FlexContainer_qvyjfa3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email_j82ee1w",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "UsrUsrRelation",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
					"iconId": null,
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Email",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 3
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 12,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Body",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 2
								}
							}
						],
						"isDefault": true
					},
					"filters": "$TimelineTile_Email_j82ee1w_Items"
				},
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Activity_ckgjffp",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "UsrUsrRelation",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Activity",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 4
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 6,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 6,
									"rowSpan": 1
								}
							}
						],
						"isDefault": true
					},
					"filters": "$TimelineTile_Activity_ckgjffp_Items"
				},
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_SysFile_ov10md7",
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
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Feed_656y94m",
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
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_SysApproval_so43p8m",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "UsrRelation",
					"sortedByColumn": null,
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Objective",
								"columnLayout": null
							}
						],
						"schemaName": "SysApproval",
						"schemaType": null,
						"isDefault": true
					},
					"filters": "$TimelineTile_SysApproval_so43p8m_Items"
				},
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "MessageComposerSelector_kqb9051",
				"values": {
					"type": "crt.MessageComposerSelector",
					"items": [],
					"classes": [
						"view-element"
					]
				},
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedComposer_6otr3pj",
				"values": {
					"type": "crt.FeedComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "6d006667-3496-4e2d-adc0-3a42648dd97b",
						"schemaType": "Feed",
						"caption": "Feed",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.FeedComposer",
						"icon": "feed-composer-icon"
					},
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"entitySchemaName": "UsrRelation",
					"dataSourceName": "PDS"
				},
				"parentName": "MessageComposerSelector_kqb9051",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailComposer_5gp2o4g",
				"values": {
					"type": "crt.EmailComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "75aadc65-a834-42d0-b880-fac9bdee4c86",
						"schemaType": "Email",
						"caption": "Email",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.EmailComposer",
						"icon": "email-composer-icon"
					},
					"recordId": "$Id",
					"defaultSenderRequest": "crt.DefaultSenderComposerRequest",
					"entitySchemaName": "UsrRelation"
				},
				"parentName": "MessageComposerSelector_kqb9051",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineFilterContainer_4qo0n2i",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"classes": [],
					"fitContent": true,
					"direction": "row"
				},
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "customFilters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_xmp7d7o_TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity",
					"visible": true
				},
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_xmp7d7o_TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date",
					"visible": true
				},
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_xmp7d7o_TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner",
					"visible": true
				},
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timeline_xmp7d7o_TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages",
					"visible": true
				},
				"parentName": "Timeline_xmp7d7o",
				"propertyName": "filters",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NextStepsContainer_8511pjt",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(NextStepsContainer_8511pjt_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "none",
						"bottom": "none",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "FlexContainer_qvyjfa3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_m3etumo",
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
				"parentName": "NextStepsContainer_8511pjt",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_6ehv3b9",
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
				"parentName": "GridContainer_m3etumo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddStepButton_ji7iins",
				"values": {
					"type": "crt.Button",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"visible": "$CardState | crt.IsEqual : 'edit'",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_6ehv3b9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateTaskMenuItem_ojikfxp",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateTaskMenuItem_ojikfxp_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					}
				},
				"parentName": "AddStepButton_ji7iins",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateEmailMenuItem_uv6n9zv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateEmailMenuItem_uv6n9zv_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateEmailRequest"
					}
				},
				"parentName": "AddStepButton_ji7iins",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ihk9oj5",
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
				"parentName": "NextStepsContainer_8511pjt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextSteps_ogn997r",
				"values": {
					"type": "crt.NextSteps",
					"masterSchemaId": "$Id",
					"cardState": "$CardState",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"masterSchemaName": "UsrRelation"
				},
				"parentName": "GridContainer_ihk9oj5",
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
					"UsrNom": {
						"modelConfig": {
							"path": "PDS.UsrNom"
						}
					},
					"PDS_UsrCompte1_w06sdyh": {
						"modelConfig": {
							"path": "PDS.UsrCompte1"
						}
					},
					"PDS_UsrCompte2_mx4l4ka": {
						"modelConfig": {
							"path": "PDS.UsrCompte2"
						}
					},
					"PDS_UsrActif_97gzlhj": {
						"modelConfig": {
							"path": "PDS.UsrActif"
						}
					},
					"PDS_UsrColumn9_gt24zv4": {
						"modelConfig": {
							"path": "PDS.UsrColumn9"
						}
					},
					"GridDetail_wb9pcco": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_wb9pccoDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_d6lu4zc_GridDetail_wb9pcco",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_wb9pccoDS_UsrIdContratE": {
									"modelConfig": {
										"path": "GridDetail_wb9pccoDS.UsrIdContratE"
									}
								},
								"GridDetail_wb9pccoDS_UsrPrestataire": {
									"modelConfig": {
										"path": "GridDetail_wb9pccoDS.UsrPrestataire"
									}
								},
								"GridDetail_wb9pccoDS_UsrNomAgenc": {
									"modelConfig": {
										"path": "GridDetail_wb9pccoDS.UsrNomAgenc"
									}
								},
								"GridDetail_wb9pccoDS_Id": {
									"modelConfig": {
										"path": "GridDetail_wb9pccoDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrDelaidePaiement_trk71nh": {
						"modelConfig": {
							"path": "PDS.UsrDelaidePaiement"
						}
					},
					"PDS_UsrColumn12_9nqgmvt": {
						"modelConfig": {
							"path": "PDS.UsrMoyendePaiement"
						}
					},
					"PDS_UsrFactor_ga6g3yz": {
						"modelConfig": {
							"path": "PDS.UsrFactor"
						}
					},
					"PDS_UsrTransmissionCheque_zipj6jq": {
						"modelConfig": {
							"path": "PDS.UsrTransmissionCheque"
						}
					},
					"PDS_UsrDevise_5wfe7g0": {
						"modelConfig": {
							"path": "PDS.UsrDevise"
						}
					},
					"Timeline_xmp7d7o_AllTileFilters": {
						"from": [],
						"converter": "crt.ToTileFilterGroup"
					},
					"PDS_UsrProfitCenter_9qlsy55": {
						"modelConfig": {
							"path": "PDS.UsrProfitCenter"
						}
					},
					"PDS_UsrCompte1UsrProfitCenterUsrName_721ratt": {
						"modelConfig": {
							"path": "PDS.UsrCompte1UsrProfitCenterUsrName_721ratt"
						}
					},
					"PDS_UsrCompte2_mx4l4ka_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrId",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrColumn23_d5khg8r": {
						"modelConfig": {
							"path": "PDS.UsrColumn23"
						}
					},
					"PDS_UsrColumn23_d5khg8r_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrObjetRelationContractuelle_c18tdm6": {
						"modelConfig": {
							"path": "PDS.UsrObjetRelationContractuelle"
						}
					},
					"PDS_UsrObjetRelationContractuelle_c18tdm6_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrModeTrasmissionCheque_hes5w7y": {
						"modelConfig": {
							"path": "PDS.UsrModeTrasmissionCheque"
						}
					},
					"PDS_UsrModeTrasmissionCheque_hes5w7y_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrDevise_5wfe7g0_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrColumn26_4fi3md5": {
						"modelConfig": {
							"path": "PDS.UsrColumn26"
						}
					},
					"PDS_UsrCompte2Name_8fmhnm4": {
						"modelConfig": {
							"path": "PDS.UsrCompte2Name_8fmhnm4"
						}
					},
					"PDS_UsrCompte1AlternativeName_3ertq1t": {
						"modelConfig": {
							"path": "PDS.UsrCompte1AlternativeName_3ertq1t"
						}
					},
					"PDS_UsrCompte1_w06sdyh_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrId",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_Usr1erContact_1fkwclt": {
						"modelConfig": {
							"path": "PDS.Usr1erContact"
						}
					},
					"PDS_Usr1erContact_1fkwclt_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"ComboBox_zhs4f9g_ValueDetails": {
						"modelConfig": {
							"path": "PDS.Usr1erContactName"
						}
					},
					"ComboBox_lssjh0o_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrCompte1Name"
						}
					},
					"ComboBox_rkchng5_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrCompte2Name"
						}
					},
					"Timeline_imjp03v_AllTileFilters": {
						"from": [],
						"converter": "crt.ToTileFilterGroup"
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_wb9pccoDS": [
							{
								"attributePath": "UsrNomAgenc",
								"relationPath": "PDS.UsrCompte1"
							},
							{
								"attributePath": "UsrPrestataire",
								"relationPath": "PDS.UsrCompte2"
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
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRelation",
							"attributes": {
								"UsrCompte1UsrProfitCenterUsrName_721ratt": {
									"path": "UsrCompte1.UsrProfitCenter.UsrName",
									"type": "ForwardReference"
								},
								"UsrCompte2Name_8fmhnm4": {
									"path": "UsrCompte2.Name",
									"type": "ForwardReference"
								},
								"UsrCompte1AlternativeName_3ertq1t": {
									"path": "UsrCompte1.AlternativeName",
									"type": "ForwardReference"
								},
								"Usr1erContactName": {
									"path": "Usr1erContact.Name",
									"type": "ForwardReference"
								},
								"UsrCompte1Name": {
									"path": "UsrCompte1.Name",
									"type": "ForwardReference"
								},
								"UsrCompte2Name": {
									"path": "UsrCompte2.Name",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_wb9pccoDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrContratExecution",
							"attributes": {
								"UsrIdContratE": {
									"path": "UsrIdContratE"
								},
								"UsrPrestataire": {
									"path": "UsrPrestataire"
								},
								"UsrNomAgenc": {
									"path": "UsrNomAgenc"
								}
							}
						}
					},
					"TimelineTile_Email_j82ee1wDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Activity_ckgjffpDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_SysApproval_so43p8mDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval"
						}
					},
					"TimelineTile_Email_76ju4knDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Activity_14cy2goDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_SysApproval_8p20z4rDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,

/**SCHEMA_HANDLERS*/
handlers: /**SCHEMA_HANDLERS*/[{
  request: "crt.HandleViewModelAttributeChangeRequest",
  handler: async (request, next) => {

    // Fonction utilitaire pour charger une entité Account par son ID
    async function loadAccountFields(accountId, columns = []) {
      return new Promise((resolve, reject) => {
        const esq = Ext.create("Terrasoft.EntitySchemaQuery", {
          rootSchemaName: "Account"
        });
        columns.forEach(col => esq.addColumn(col));
        esq.filters.add("IdFilter", Terrasoft.createColumnFilterWithParameter(
          Terrasoft.ComparisonType.EQUAL, "Id", accountId
        ));
        esq.getEntityCollection((result) => {
          if (result.success && result.collection.getCount() > 0) {
            resolve(result.collection.getByIndex(0));
          } else {
            resolve(null);
          }
        }, this);
      });
    }

    // 1. Changement de STRUCTURE INTERNE
    if (request.attributeName === "PDS_UsrCompte1_w06sdyh") {
      const structureLookup = await request.$context.PDS_UsrCompte1_w06sdyh;
      if (structureLookup?.value) {
        const structureEntity = await loadAccountFields(structureLookup.value, ["UsrProfitCenter"]);
        if (structureEntity) {
          const cp = structureEntity.get("UsrProfitCenter");
          request.$context.PDS_UsrColumn23_d5khg8r = cp;
          request.$context.PDS_UsrColumn26_4fi3md5 = cp?.value;
          console.log("Centre de profit chargé :", cp?.displayValue);
        }
      }
    }

    // 2. Changement d’un des 3 champs pour construire le nom complet
    if (
      request.attributeName === "PDS_UsrCompte2_mx4l4ka" ||
      request.attributeName === "PDS_UsrColumn23_d5khg8r" ||
      request.attributeName === "PDS_UsrObjetRelationContractuelle_c18tdm6"
    ) {

      // Récupération des lookup depuis le contexte
      const structureLookup = await request.$context.PDS_UsrCompte1_w06sdyh;
      const prestataireLookup = await request.$context.PDS_UsrCompte2_mx4l4ka;
      const cpLookup = await request.$context.PDS_UsrColumn23_d5khg8r;
      const objetRelation = await request.$context.PDS_UsrObjetRelationContractuelle_c18tdm6;

      let structName = "";
      let centreProfitName = cpLookup?.displayValue || "";
      let prestataireName = "";
      let objRelation = objetRelation?.displayValue || "";

      // Charger nom de la structure interne
      if (structureLookup?.value) {
        const structEntity = await loadAccountFields(structureLookup.value, ["Name"]);
        structName = structEntity?.get("Name") || "";
      }

      // Charger nom/alternative name du prestataire
      if (prestataireLookup?.value) {
        const prestaEntity = await loadAccountFields(prestataireLookup.value, ["Name", "AlternativeName"]);
        const altName = prestaEntity?.get("AlternativeName") || "";
        const name = prestaEntity?.get("Name") || "";
        prestataireName = altName || name;
      }

      // Construire la chaîne complète
      const nomComplet = `${structName} (${centreProfitName}) / ${prestataireName} - ${objRelation}`;

      console.log("Nom complet :", nomComplet);

      // Affecter dans le contexte
      request.$context.UsrNom = nomComplet;
    }

    return next?.handle(request);
  }
}],
/**SCHEMA_HANDLERS*/
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});