define("UsrCompte_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"caption": "#ResourceString(CancelButton_caption)#",
					"color": "default",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"caption": "#ResourceString(CloseButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "AccountInTag",
					"visible": true,
					"label": "$Resources.Strings.null"
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true
				}
			},
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
					"visible": true,
					"stretch": true,
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
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
					"entitySchemaName": "Account"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentsTabContainer",
				"values": {
					"caption": "#ResourceString(AttachmentsTabContainer_caption)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "Account",
					"columns": [
						{
							"id": "e030f997-b0cc-49b2-81a2-2cd8e04a11db",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					],
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "Button_ul4r6pt",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ul4r6pt_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_084fe24UsrSterne4",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "IdS"
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
				"name": "Button_0jr05lx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_0jr05lx_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_8449493UsrEvolution1_17d8b97",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_a1hbutz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_a1hbutz_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": false,
					"clicked": {
						"request": "usr.closePage"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Button_x55bojk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_x55bojk_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrProcess_15b907cUsrSterne13",
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RelationshipButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RelationshipButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"clicked": {
						"request": "crt.ShowRelationshipsRequest",
						"params": {
							"entityName": "Account",
							"recordId": "$Id"
						}
					},
					"clickMode": "default",
					"icon": "relationship-button-icon",
					"visible": false
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "EntityStageProgressBar_hcfb0hg",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": false,
					"askUserToChangeSchema": true,
					"entityName": "Account",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SideAreaProfileFieldFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompactProfile",
				"values": {
					"layoutConfig": {},
					"type": "crt.AccountCompactProfile",
					"referenceColumn": "$Id",
					"readonly": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_5s71lyg",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Parent_321kfzj",
					"labelPosition": "auto",
					"control": "$PDS_Parent_321kfzj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"secondaryDisplayValue": "Name",
					"valueDetails": "$ComboBox_5s71lyg_ValueDetails",
					"mode": "List"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_e84sbsu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_e84sbsu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5s71lyg",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Type",
					"labelPosition": "above",
					"control": "$Type",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Type_placeholder)#",
					"tooltip": "",
					"readonly": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_v77ivol",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn2_zpcihe0",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn2_zpcihe0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_zko0o4c",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_zko0o4c_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_v77ivol",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Approval_6px2j6n",
				"values": {
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "Account",
					"approvalEntityName": "SysApproval",
					"visible": true,
					"hiddenWhenNoData": true
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_ki85ppr",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrCentreProfit_apuge7g",
					"labelPosition": "auto",
					"control": "$PDS_UsrCentreProfit_apuge7g",
					"multiline": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_yco7p81",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrProfitCenter_8yl6t1o",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrProfitCenter_8yl6t1o",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "PrimaryContact",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PrimaryContact",
					"labelPosition": "above",
					"control": "$PrimaryContact",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(PrimaryContact_placeholder)#",
					"tooltip": "",
					"readonly": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_3bs3f03",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3bs3f03_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "PrimaryContact",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_vn7928d",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "AccountCategory",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountCategory",
					"labelPosition": "above",
					"control": "$AccountCategory",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(AccountCategory_placeholder)#",
					"tooltip": "",
					"readonly": false
				},
				"parentName": "GridContainer_vn7928d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Industry",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Industry",
					"labelPosition": "above",
					"control": "$Industry",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Industry_placeholder)#",
					"tooltip": "",
					"readonly": false
				},
				"parentName": "GridContainer_vn7928d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountCommunicationOptions",
				"values": {
					"type": "crt.CommunicationOptions",
					"readonly": false,
					"columnsCount": 1,
					"layoutConfig": {},
					"masterRecordColumnValue": "$Id",
					"masterRecordColumnName": "Account",
					"items": "$AccountCommunicationOptionsItems",
					"visible": true,
					"labelPosition": "above",
					"showNoDataPlaceholder": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "AccountCommunicationOptionsAddButton",
				"values": {
					"type": "crt.Button",
					"clickMode": "default",
					"menuItems": [],
					"caption": "#ResourceString(AccountCommunicationOptionsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "left-icon",
					"color": "default",
					"displayType": "text",
					"size": "extra-large",
					"clicked": {
						"request": "crt.AddCommunicationOptionsRequest",
						"params": {
							"viewElementName": "AccountCommunicationOptions"
						}
					},
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_oinmgh0",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_UsrDateCreation_vmgqrks",
					"labelPosition": "auto",
					"control": "$PDS_UsrDateCreation_vmgqrks",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "PrimaryContactContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"items": [],
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": false
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PrimaryContactExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(PrimaryContactExpansionPanel_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": true,
					"labelColor": "#0D2E4E",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "none",
						"bottom": "none",
						"left": "none",
						"right": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "PrimaryContactContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrimaryContactToolsContainer",
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
				"parentName": "PrimaryContactExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrimaryContactToolsFlexContainer",
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
				"parentName": "PrimaryContactToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrimaryContactFieldContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "PrimaryContactExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile",
				"values": {
					"layoutConfig": {},
					"type": "crt.ContactCompactProfile",
					"referenceColumn": "$PrimaryContact",
					"readonly": true
				},
				"parentName": "PrimaryContactFieldContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactJobTitle",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"label": "$Resources.Strings.PrimaryContactJobTitle",
					"labelPosition": "above",
					"control": "$PrimaryContactJobTitle",
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "PrimaryContactFieldContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PrimatyContactCommunicationOptions",
				"values": {
					"type": "crt.CommunicationOptions",
					"readonly": true,
					"columnsCount": 1,
					"layoutConfig": {},
					"masterRecordColumnValue": "$PrimaryContact",
					"masterRecordColumnName": "Contact",
					"items": "$PrimatyContactCommunicationOptionsItems",
					"visible": true,
					"primaryColumnName": "PrimatyContactCommunicationOptionsDS_Id",
					"labelPosition": "above",
					"showNoDataPlaceholder": false
				},
				"parentName": "PrimaryContactFieldContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AccountInfoFieldsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ffet2es",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "#FDEDCC",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_2i5isj6",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrColumn15_tbxzjwx",
					"labelPosition": "right",
					"control": "$PDS_UsrColumn15_tbxzjwx",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_ffet2es",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_y2te8sv",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrEntite_pyi8uuv",
					"labelPosition": "right",
					"control": "$PDS_UsrEntite_pyi8uuv",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_ffet2es",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_sv20mom",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrPrestataire_jrupsvo",
					"labelPosition": "right",
					"control": "$PDS_UsrPrestataire_jrupsvo",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_ffet2es",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_l605qk8",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "#7575752B",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_k3ops5n",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_l605qk8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_l75bxi5",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrSiren_aykvzqt",
					"labelPosition": "auto",
					"control": "$PDS_UsrSiren_aykvzqt",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_ud8dlh6",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Usragencesiret_pkzt1nr",
					"labelPosition": "auto",
					"control": "$PDS_Usragencesiret_pkzt1nr",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_05xjt7i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNuns_y1o3u33",
					"labelPosition": "auto",
					"control": "$PDS_UsrNuns_y1o3u33",
					"multiline": false
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_tefv5qp",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn12_bw7nklh",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn12_bw7nklh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_tv37gob",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tv37gob_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_tefv5qp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_b6d0gkf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrFormeJuridique_57oitdi",
					"labelPosition": "auto",
					"control": "$PDS_UsrFormeJuridique_57oitdi",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EmployeesNumber",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.EmployeesNumber",
					"labelPosition": "auto",
					"control": "$EmployeesNumber",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": null,
					"placeholder": null,
					"tooltip": null,
					"readonly": true,
					"isSimpleLookup": null,
					"valueDetails": null,
					"secondaryDisplayValue": null
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ListAction_bdhxvvu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "ComboBox.AddNewRecord",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "EmployeesNumber",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_x5w5cu4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrCodeAPE_0jc2ys5",
					"labelPosition": "auto",
					"control": "$PDS_UsrCodeAPE_0jc2ys5",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Input_3l6tf6w",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrLibelleAPE_v2kwf1u",
					"labelPosition": "auto",
					"control": "$PDS_UsrLibelleAPE_v2kwf1u",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_s3vsp4v",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn10_kdw7wvj",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn10_kdw7wvj",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_ko36zjf",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrStatutConnect_q7jo9pa",
					"labelPosition": "auto",
					"control": "$PDS_UsrStatutConnect_q7jo9pa",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Input_ifhrq8x",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrLibelléAPE_ocap323",
					"labelPosition": "auto",
					"control": "$PDS_UsrLibelléAPE_ocap323",
					"multiline": false
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_8yz8tvc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.PDS_CreatedOn_7crg3wf",
					"labelPosition": "auto",
					"control": "$PDS_CreatedOn_7crg3wf"
				},
				"parentName": "GridContainer_k3ops5n",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_vv0kwi1",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_vv0kwi1_title)#",
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_p9woof8",
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
				"parentName": "ExpansionPanel_vv0kwi1",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_64jw31e",
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
				"parentName": "GridContainer_p9woof8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Summaries_akakbje",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"visible": true,
					"_designOptions": {
						"modelName": "GridDetail_444tpw7DS"
					},
					"expanded": "$Summaries_akakbje_Expanded"
				},
				"parentName": "FlexContainer_64jw31e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SummaryItem_v9k7p8t",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_v9k7p8t_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_v9k7p8t_Value",
							"modelName": "GridDetail_444tpw7DS",
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
				"parentName": "Summaries_akakbje",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_zavdwqg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_zavdwqg_caption)#",
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
				"parentName": "FlexContainer_64jw31e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_lfn70vu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_lfn70vu_caption)#",
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
							"dataSourceName": "GridDetail_444tpw7DS"
						}
					}
				},
				"parentName": "FlexContainer_64jw31e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_6k6c9ae",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_6k6c9ae_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_64jw31e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_k5a10yx",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_k5a10yx_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_444tpw7"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_6k6c9ae",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_pvdz4kz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_pvdz4kz_caption)#",
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
				"parentName": "GridDetailSettingsBtn_6k6c9ae",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_1i1o70h",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_1i1o70h_caption)#",
					"visible": true,
					"clicked": {}
				},
				"parentName": "GridDetailSettingsBtn_6k6c9ae",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_55qpvjc",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_55qpvjc_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_55qpvjc_GridDetail_444tpw7",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_444tpw7"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_55qpvjc_SearchValue",
							"GridDetailSearchFilter_55qpvjc_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_64jw31e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_f0xbm5i",
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
				"parentName": "ExpansionPanel_vv0kwi1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_444tpw7",
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
					"items": "$GridDetail_444tpw7",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_444tpw7DS_Id",
					"columns": [
						{
							"id": "0838c9ae-3359-da54-4939-1fc031b5832c",
							"code": "GridDetail_444tpw7DS_Name",
							"caption": "#ResourceString(GridDetail_444tpw7DS_Name)#",
							"dataValueType": 28,
							"width": 141
						},
						{
							"id": "b4d841ff-71b2-9973-26de-07b0d5b92af6",
							"code": "GridDetail_444tpw7DS_AlternativeName",
							"caption": "#ResourceString(GridDetail_444tpw7DS_AlternativeName)#",
							"dataValueType": 28
						},
						{
							"id": "be0e6207-313c-e9d4-dfb9-ff9572c09c58",
							"code": "GridDetail_444tpw7DS_UsrAdresseUsrSocieteUsrVilleNameTopOnefcb225f9",
							"caption": "#ResourceString(GridDetail_444tpw7DS_UsrAdresseUsrSocieteUsrVilleNameTopOnefcb225f9)#",
							"dataValueType": 28
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_f0xbm5i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_vl45khy",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_vl45khy_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
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
					"visible": false,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_d8hjsz8",
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
				"parentName": "ExpansionPanel_vl45khy",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_x5ffyu3",
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
				"parentName": "GridContainer_d8hjsz8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_pc6fx8x",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_pc6fx8x_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AccountAddress",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_x5ffyu3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_f79yorx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_f79yorx_caption)#",
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
							"dataSourceName": "GridDetail_4mxv1qpDS"
						}
					}
				},
				"parentName": "FlexContainer_x5ffyu3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_1hgsogz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_1hgsogz_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_x5ffyu3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_pl91ja0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_pl91ja0_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_4mxv1qp"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1hgsogz",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_kcisoi8",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_kcisoi8_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AccountAddress"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_1hgsogz",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_jeodlcs",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_jeodlcs_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_jeodlcs_GridDetail_4mxv1qp",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_4mxv1qp"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_jeodlcs_SearchValue",
							"GridDetailSearchFilter_jeodlcs_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_x5ffyu3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xyv7q4p",
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
				"parentName": "ExpansionPanel_vl45khy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4mxv1qp",
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
					"items": "$GridDetail_4mxv1qp",
					"primaryColumnName": "GridDetail_4mxv1qpDS_Id",
					"columns": [
						{
							"id": "f0ad9b2a-3a0f-75f5-b784-eee7d9c7b8ab",
							"code": "GridDetail_4mxv1qpDS_GPSE",
							"caption": "#ResourceString(GridDetail_4mxv1qpDS_GPSE)#",
							"dataValueType": 27
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_xyv7q4p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_9sjnc3g",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_9sjnc3g_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_m5vmplc",
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
				"parentName": "ExpansionPanel_9sjnc3g",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_j7phz41",
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
				"parentName": "GridContainer_m5vmplc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Summaries_izdv54a",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"visible": true,
					"_designOptions": {
						"modelName": "GridDetail_40tdzbaDS"
					}
				},
				"parentName": "FlexContainer_j7phz41",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_yqdkoul",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_yqdkoul_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrAdresse",
							"defaultValues": [
								{
									"attributeName": "UsrSociete",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_j7phz41",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_3ph2j2b",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_3ph2j2b_caption)#",
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
							"dataSourceName": "GridDetail_40tdzbaDS"
						}
					}
				},
				"parentName": "FlexContainer_j7phz41",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_mfuudkl",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_mfuudkl_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_j7phz41",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_q1oqz2o",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_q1oqz2o_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_40tdzba"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_mfuudkl",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_3k7f0q1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_3k7f0q1_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrAdresse"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_mfuudkl",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_khupjek",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_khupjek_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_khupjek_GridDetail_40tdzba",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_40tdzba"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_khupjek_SearchValue",
							"GridDetailSearchFilter_khupjek_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_j7phz41",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_2x6tvuv",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_9sjnc3g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_40tdzba",
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
					"items": "$GridDetail_40tdzba",
					"primaryColumnName": "GridDetail_40tdzbaDS_Id",
					"columns": [
						{
							"id": "87a89952-88cf-482a-e671-fe52ab0061b5",
							"code": "GridDetail_40tdzbaDS_UsrAdresseComplete",
							"caption": "#ResourceString(GridDetail_40tdzbaDS_UsrAdresseComplete)#",
							"dataValueType": 29
						},
						{
							"id": "d202089b-913b-30d6-38f2-de229078e1a4",
							"code": "GridDetail_40tdzbaDS_UsrSociete",
							"caption": "#ResourceString(GridDetail_40tdzbaDS_UsrSociete)#",
							"dataValueType": 10
						},
						{
							"id": "ceea150b-705d-ebf7-8147-a922f59f95b4",
							"code": "GridDetail_40tdzbaDS_UsrContact",
							"caption": "#ResourceString(GridDetail_40tdzbaDS_UsrContact)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true,
					"referenceSchema": "UsrAdresse"
				},
				"parentName": "GridContainer_2x6tvuv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ContactsExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#0D2E4E",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ContactsToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ContactsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsToolsFlexContainer",
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
				"parentName": "ContactsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Summaries_xuaxww8",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"visible": true,
					"_designOptions": {
						"modelName": "ContactsListDS"
					},
					"expanded": "$Summaries_xuaxww8_Expanded"
				},
				"parentName": "ContactsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SummaryItem_i0pji5w",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_i0pji5w_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_i0pji5w_Value",
							"modelName": "ContactsListDS",
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
				"parentName": "Summaries_xuaxww8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Contact",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ContactsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactsRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "ContactsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ContactsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ContactsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContactsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContactsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ContactsList"
						}
					},
					"visible": true
				},
				"parentName": "ContactsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContactsImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Contact"
						}
					},
					"visible": true
				},
				"parentName": "ContactsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ContactsSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ContactsSearchFilter_ContactsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ContactsList"
										]
									}
								]
							}
						],
						"from": [
							"ContactsSearchFilter_SearchValue",
							"ContactsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ContactsToolsFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ContactsListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
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
				"parentName": "ContactsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$ContactsList",
					"primaryColumnName": "ContactsListDS_Id",
					"columns": [
						{
							"id": "c1dd25a6-eb8e-e961-9345-a4e679bf5928",
							"code": "ContactsListDS_Name",
							"path": "Name",
							"caption": "#ResourceString(ContactsListDS_Name)#",
							"dataValueType": 28,
							"width": 235
						},
						{
							"id": "593db3fb-3bc9-5b57-df86-21d34af63600",
							"code": "ContactsListDS_JobTitle",
							"path": "JobTitle",
							"caption": "#ResourceString(ContactsListDS_JobTitle)#",
							"dataValueType": 28,
							"width": 183
						},
						{
							"id": "cdea567b-2046-de92-1417-69f7e886b567",
							"code": "ContactsListDS_MobilePhone",
							"path": "MobilePhone",
							"caption": "#ResourceString(ContactsListDS_MobilePhone)#",
							"dataValueType": 42,
							"width": 185
						},
						{
							"id": "d7adaacb-11fa-9428-a772-672d6e192781",
							"code": "ContactsListDS_Email",
							"path": "Email",
							"caption": "#ResourceString(ContactsListDS_Email)#",
							"dataValueType": 45,
							"width": 242
						},
						{
							"id": "7b46afff-2ede-19e5-2399-e84f6e320435",
							"code": "ContactsListDS_Address",
							"path": "Address",
							"caption": "#ResourceString(ContactsListDS_Address)#",
							"dataValueType": 29
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "ContactsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_v1rqxon",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_v1rqxon_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": false,
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
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GridContainer_xemdo7q",
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
				"parentName": "ExpansionPanel_v1rqxon",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_1qpe5ye",
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
				"parentName": "GridContainer_xemdo7q",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_nc55t05",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_nc55t05_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrCentreDeProfit",
							"defaultValues": [
								{
									"attributeName": "UsrSociete",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_1qpe5ye",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_dy7j9zy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_dy7j9zy_caption)#",
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
							"dataSourceName": "GridDetail_qkl3io2DS"
						}
					}
				},
				"parentName": "FlexContainer_1qpe5ye",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_3bb1vu6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_3bb1vu6_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_1qpe5ye",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_cpfromj",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_cpfromj_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_qkl3io2"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3bb1vu6",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_z3nwiv1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_z3nwiv1_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrCentreDeProfit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_3bb1vu6",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_pank4qs",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_pank4qs_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_pank4qs_GridDetail_qkl3io2",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_qkl3io2"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_pank4qs_SearchValue",
							"GridDetailSearchFilter_pank4qs_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_1qpe5ye",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_etx25lb",
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
				"parentName": "ExpansionPanel_v1rqxon",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_qkl3io2",
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
					"items": "$GridDetail_qkl3io2",
					"primaryColumnName": "GridDetail_qkl3io2DS_Id",
					"columns": [
						{
							"id": "43824b5f-21ee-7ce3-94e5-9d9be65d4732",
							"code": "GridDetail_qkl3io2DS_UsrName",
							"caption": "#ResourceString(GridDetail_qkl3io2DS_UsrName)#",
							"dataValueType": 28,
							"width": 205
						},
						{
							"id": "8d310c03-c457-a880-659e-0b026f89334a",
							"code": "GridDetail_qkl3io2DS_UsrDefault",
							"caption": "#ResourceString(GridDetail_qkl3io2DS_UsrDefault)#",
							"dataValueType": 12,
							"width": 136
						},
						{
							"id": "2793d1c1-66d9-50c4-6f7f-77d7fdc9b87c",
							"code": "GridDetail_qkl3io2DS_UsrColumn9",
							"caption": "#ResourceString(GridDetail_qkl3io2DS_UsrColumn9)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_etx25lb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OngStructureInTabContainer_z81i50h",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(OngStructureInTabContainer_z81i50h_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_gs9o2cc",
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
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "OngStructureInTabContainer_z81i50h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_hbogtpr",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hbogtpr_title)#",
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
				"parentName": "OngStructureInTabContainer_z81i50h",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_cb729eo",
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
				"parentName": "ExpansionPanel_hbogtpr",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zoraw1e",
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
				"parentName": "GridContainer_cb729eo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Summaries_6yn8fa4",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"visible": true,
					"_designOptions": {
						"modelName": "GridDetail_p9y2lwzDS"
					},
					"expanded": "$Summaries_6yn8fa4_Expanded"
				},
				"parentName": "FlexContainer_zoraw1e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SummaryItem_zof2r0d",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_zof2r0d_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_zof2r0d_Value",
							"modelName": "GridDetail_p9y2lwzDS",
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
				"parentName": "Summaries_6yn8fa4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_097d4nx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_097d4nx_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRelation",
							"defaultValues": [
								{
									"attributeName": "UsrCompte1",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_zoraw1e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_naeclcs",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_naeclcs_caption)#",
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
							"dataSourceName": "GridDetail_p9y2lwzDS"
						}
					}
				},
				"parentName": "FlexContainer_zoraw1e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_epx8brc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_epx8brc_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_zoraw1e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_j4emzf9",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_j4emzf9_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_p9y2lwz"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_epx8brc",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_9gkotql",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_9gkotql_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRelation"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_epx8brc",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_dhjtkwz",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_dhjtkwz_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_dhjtkwz_GridDetail_p9y2lwz",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_p9y2lwz"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_dhjtkwz_SearchValue",
							"GridDetailSearchFilter_dhjtkwz_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_zoraw1e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_eqqj7g5",
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
				"parentName": "ExpansionPanel_hbogtpr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_p9y2lwz",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 12
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_p9y2lwz",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_p9y2lwzDS_Id",
					"columns": [
						{
							"id": "304447c2-f2dc-b638-9143-f4d08d8d9f3e",
							"code": "GridDetail_p9y2lwzDS_UsrNom",
							"caption": "#ResourceString(GridDetail_p9y2lwzDS_UsrNom)#",
							"dataValueType": 27,
							"width": 143
						},
						{
							"id": "84062fb3-2f09-b05f-238c-10af0e842819",
							"code": "GridDetail_p9y2lwzDS_UsrCompte2",
							"caption": "#ResourceString(GridDetail_p9y2lwzDS_UsrCompte2)#",
							"dataValueType": 10,
							"width": 119
						},
						{
							"id": "77bf6edc-5b85-1650-360c-daf7a3adc532",
							"code": "GridDetail_p9y2lwzDS_UsrActif",
							"caption": "#ResourceString(GridDetail_p9y2lwzDS_UsrActif)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_eqqj7g5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_wok7jvh",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_wok7jvh_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_q6ag2fp",
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
				"parentName": "TabContainer_wok7jvh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_hshy7z8",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hshy7z8_title)#",
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
				"parentName": "TabContainer_wok7jvh",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_g84f44k",
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
				"parentName": "ExpansionPanel_hshy7z8",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7ph1g1k",
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
				"parentName": "GridContainer_g84f44k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Summaries_os0e8ey",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"visible": true,
					"_designOptions": {
						"modelName": "GridDetail_7ae0uhxDS"
					},
					"expanded": "$Summaries_os0e8ey_Expanded"
				},
				"parentName": "FlexContainer_7ph1g1k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SummaryItem_to8nmca",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_to8nmca_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_to8nmca_Value",
							"modelName": "GridDetail_7ae0uhxDS",
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
				"parentName": "Summaries_os0e8ey",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_h6en7ny",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_h6en7ny_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRelation",
							"defaultValues": [
								{
									"attributeName": "UsrCompte2",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_7ph1g1k",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_n4dml6d",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_n4dml6d_caption)#",
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
							"dataSourceName": "GridDetail_7ae0uhxDS"
						}
					}
				},
				"parentName": "FlexContainer_7ph1g1k",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_y5182p8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_y5182p8_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_7ph1g1k",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_5kvcmct",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_5kvcmct_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_7ae0uhx"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_y5182p8",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_jxbcibi",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_jxbcibi_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRelation"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_y5182p8",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_yqqnrwn",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_yqqnrwn_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_yqqnrwn_GridDetail_7ae0uhx",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_7ae0uhx"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_yqqnrwn_SearchValue",
							"GridDetailSearchFilter_yqqnrwn_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_7ph1g1k",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_lrx8f6u",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_hshy7z8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7ae0uhx",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 12
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_7ae0uhx",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_7ae0uhxDS_Id",
					"columns": [
						{
							"id": "50236db9-8351-99dd-0fd0-0519c0868d79",
							"code": "GridDetail_7ae0uhxDS_UsrNom",
							"caption": "#ResourceString(GridDetail_7ae0uhxDS_UsrNom)#",
							"dataValueType": 27,
							"width": 123
						},
						{
							"id": "ba7b4045-660b-d448-fddb-ddf78515f85e",
							"code": "GridDetail_7ae0uhxDS_UsrCompte1",
							"caption": "#ResourceString(GridDetail_7ae0uhxDS_UsrCompte1)#",
							"dataValueType": 10
						},
						{
							"id": "ffee2ff2-ad44-6473-8e81-0c3486882e79",
							"code": "GridDetail_7ae0uhxDS_UsrActif",
							"caption": "#ResourceString(GridDetail_7ae0uhxDS_UsrActif)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_lrx8f6u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_wpemd64",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_wpemd64_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xavwdck",
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
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_wpemd64",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_yzbi9am",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_xavwdck",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_2cf9fio",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_2cf9fio_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_2cf9fio_Data",
								"schemaName": "UsrDocumentJuridique",
								"filters": {
									"filter": {
										"items": {
											"f2c94f9c-4188-4a6b-8c04-6825db0ab9cc": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrStatutDJ"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrStatutDJLookup",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "ok",
																"Id": "7dadc593-c624-472f-8223-6aaaac518479",
																"value": "7dadc593-c624-472f-8223-6aaaac518479",
																"displayValue": "ok"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "UsrDocumentJuridique"
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
								"dependencies": [
									{
										"attributePath": "UsrParentSociete",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ",",
								"decimalPrecision": 0,
								"thousandSeparator": " "
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_2cf9fio_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "extra-small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "forest-green"
						},
						"theme": "full-fill"
					},
					"layoutConfig": {
						"width": 113.09999084472656
					},
					"visible": true
				},
				"parentName": "FlexContainer_yzbi9am",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_jwcy8vc",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_jwcy8vc_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_jwcy8vc_Data",
								"schemaName": "UsrDocumentJuridique",
								"filters": {
									"filter": {
										"items": {
											"f2c94f9c-4188-4a6b-8c04-6825db0ab9cc": {
												"filterType": 4,
												"comparisonType": 4,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrStatutDJ"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrStatutDJLookup",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "ok",
																"Id": "7dadc593-c624-472f-8223-6aaaac518479",
																"value": "7dadc593-c624-472f-8223-6aaaac518479",
																"displayValue": "ok"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "UsrDocumentJuridique"
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
								"dependencies": [
									{
										"attributePath": "UsrParentSociete",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ",",
								"decimalPrecision": 0,
								"thousandSeparator": " "
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_jwcy8vc_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "extra-small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "cadmium-red"
						},
						"theme": "full-fill"
					},
					"layoutConfig": {
						"width": 113.09999084472656
					},
					"visible": true
				},
				"parentName": "FlexContainer_yzbi9am",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_n6y2kiv",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_xavwdck",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_zr2wapc",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_zr2wapc_title)#",
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
				"parentName": "TabContainer_wpemd64",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_x9nrhh3",
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
				"parentName": "ExpansionPanel_zr2wapc",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_1bbeqdw",
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
				"parentName": "GridContainer_x9nrhh3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Summaries_umyi87w",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"visible": true,
					"_designOptions": {
						"modelName": "GridDetail_rgxmwubDS"
					},
					"expanded": "$Summaries_umyi87w_Expanded"
				},
				"parentName": "FlexContainer_1bbeqdw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SummaryItem_qipn7uv",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_qipn7uv_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_qipn7uv_Value",
							"modelName": "GridDetail_rgxmwubDS",
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
				"parentName": "Summaries_umyi87w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_97up8r8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_97up8r8_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrDocumentJuridique",
							"defaultValues": [
								{
									"attributeName": "UsrParentSociete",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_1bbeqdw",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_49h04ea",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_49h04ea_caption)#",
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
							"dataSourceName": "GridDetail_rgxmwubDS"
						}
					}
				},
				"parentName": "FlexContainer_1bbeqdw",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_oc1m0p2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_oc1m0p2_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_1bbeqdw",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_fd9u4xn",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_fd9u4xn_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_rgxmwub"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_oc1m0p2",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ulotvsu",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ulotvsu_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrDocumentJuridique"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_oc1m0p2",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_2lwb0tc",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_2lwb0tc_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_2lwb0tc_GridDetail_rgxmwub",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_rgxmwub"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_2lwb0tc_SearchValue",
							"GridDetailSearchFilter_2lwb0tc_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_1bbeqdw",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_1esu0t7",
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
				"parentName": "ExpansionPanel_zr2wapc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_rgxmwub",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 13
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_rgxmwub",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_rgxmwubDS_Id",
					"columns": [
						{
							"id": "187ec9da-94c5-c8a2-c94f-40b38a9cac64",
							"code": "GridDetail_rgxmwubDS_UsrDocJurS",
							"caption": "#ResourceString(GridDetail_rgxmwubDS_UsrDocJurS)#",
							"dataValueType": 10
						},
						{
							"id": "e2d3e825-effb-aff4-d109-7d8b6f3f63ac",
							"code": "GridDetail_rgxmwubDS_UsrTypeDoc",
							"caption": "#ResourceString(GridDetail_rgxmwubDS_UsrTypeDoc)#",
							"dataValueType": 10
						},
						{
							"id": "5f29ce1e-b8bd-7b52-ba8e-731716786e8f",
							"code": "GridDetail_rgxmwubDS_UsrLibelle",
							"caption": "#ResourceString(GridDetail_rgxmwubDS_UsrLibelle)#",
							"dataValueType": 27
						},
						{
							"id": "ed6cc377-d509-f2c6-b58b-b83b722f74ee",
							"code": "GridDetail_rgxmwubDS_UsrStatutDJ",
							"caption": "#ResourceString(GridDetail_rgxmwubDS_UsrStatutDJ)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_1esu0t7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TimelineTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_7bpjdnn",
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
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TimelineTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Timeline",
					"items": [],
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_caption)#",
					"label": "#ResourceString(Timeline_label)#",
					"timelineName": "Timeline",
					"tools": [],
					"filters": [],
					"masterEntitySchemaName": "Account",
					"filterValues": "$Timeline_AllTileFilters",
					"customFilters": []
				},
				"parentName": "TimelineTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Email",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6"
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
						]
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"filters": "$TimelineTile_Email_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Task",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "StartDate",
					"ownerColumn": "Owner",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Activity",
						"filter": {
							"columnName": "Type",
							"columnValue": "fbe0acdc-cfc0-df11-b00f-001d60e938c6"
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
						]
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"filters": "$TimelineTile_Task_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Call",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "StartDate",
					"ownerColumn": "CreatedBy",
					"data": {
						"uId": "2f81fa05-11ae-400d-8e07-5ef6a620d1ad",
						"schemaName": "Call",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "Direction",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 5,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 9,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Duration",
								"columnLayout": {
									"column": 13,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							}
						]
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"filters": "$TimelineTile_Call_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_SysFile",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "SysFile"
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Feed",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "Feed"
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"linkedColumn": "Account",
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_SysApproval_6yidage",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "UsrCompte",
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
					"filters": "$TimelineTile_SysApproval_6yidage_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineFilterContainer_dej1hft",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"classes": [],
					"fitContent": true,
					"direction": "row"
				},
				"parentName": "Timeline",
				"propertyName": "customFilters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_u4mly25",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_u4mly25_caption)#",
					"iconPosition": "only-text",
					"visible": false
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_cfmv8ds",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_u4mly25",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_rfpopue",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(Label_rfpopue_caption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "FlexContainer_cfmv8ds",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_959axgn",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_u4mly25",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsContainer_yq1uej8",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(NextStepsContainer_yq1uej8_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_u4mly25",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_cy1802f",
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
				"parentName": "NextStepsContainer_yq1uej8",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_f7v7os2",
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
				"parentName": "GridContainer_cy1802f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddStepButton_0ghaimg",
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
				"parentName": "FlexContainer_f7v7os2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateTaskMenuItem_r0sxvkv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateTaskMenuItem_r0sxvkv_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					}
				},
				"parentName": "AddStepButton_0ghaimg",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateEmailMenuItem_jatg3uf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateEmailMenuItem_jatg3uf_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateEmailRequest"
					}
				},
				"parentName": "AddStepButton_0ghaimg",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ej3uor7",
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
				"parentName": "NextStepsContainer_yq1uej8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextSteps_3820lv1",
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
					"masterSchemaName": "Account",
					"bindingColumns": []
				},
				"parentName": "GridContainer_ej3uor7",
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
					"Ownership": {
						"modelConfig": {
							"path": "PDS.Ownership"
						}
					},
					"EmployeesNumber": {
						"modelConfig": {
							"path": "PDS.EmployeesNumber"
						}
					},
					"PrimaryContact": {
						"modelConfig": {
							"path": "PDS.PrimaryContact"
						}
					},
					"Type": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"AccountCategory": {
						"modelConfig": {
							"path": "PDS.AccountCategory"
						}
					},
					"Industry": {
						"modelConfig": {
							"path": "PDS.Industry"
						}
					},
					"AddressList": {
						"isCollection": true,
						"modelConfig": {
							"path": "AddressListDS",
							"filterAttributes": [],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "AddressType"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"AddressListDS_AddressType": {
									"modelConfig": {
										"path": "AddressListDS.AddressType"
									}
								},
								"AddressListDS_FullAddress": {
									"modelConfig": {
										"path": "AddressListDS.FullAddress"
									}
								},
								"AddressListDS_Primary": {
									"modelConfig": {
										"path": "AddressListDS.Primary"
									}
								},
								"AddressListDS_Id": {
									"modelConfig": {
										"path": "AddressListDS.Id"
									}
								}
							}
						}
					},
					"ContactsList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ContactsListDS",
							"filterAttributes": [
								{
									"name": "ContactsList_PredefinedFilter",
									"loadOnChange": true
								},
								{
									"name": "ContactsSearchFilter_ContactsList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ContactsListDS_Name": {
									"modelConfig": {
										"path": "ContactsListDS.Name"
									}
								},
								"ContactsListDS_JobTitle": {
									"modelConfig": {
										"path": "ContactsListDS.JobTitle"
									}
								},
								"ContactsListDS_MobilePhone": {
									"modelConfig": {
										"path": "ContactsListDS.MobilePhone"
									}
								},
								"ContactsListDS_Email": {
									"modelConfig": {
										"path": "ContactsListDS.Email"
									}
								},
								"ContactsListDS_Address": {
									"modelConfig": {
										"path": "ContactsListDS.Address"
									}
								},
								"ContactsListDS_Id": {
									"modelConfig": {
										"path": "ContactsListDS.Id"
									}
								}
							}
						}
					},
					"ContactsList_PredefinedFilter": {
						"value": null
					},
					"PrimaryContactJobTitle": {
						"modelConfig": {
							"path": "PDS.PrimaryContactJobTitle"
						}
					},
					"ImageLinkAttribute_d1f6xe3": {
						"modelConfig": {
							"path": "PDS.AccountLogo"
						}
					},
					"AccountCommunicationOptionsItems": {
						"isCollection": true,
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "asc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"AccountCommunicationOptionsDS_CreatedOn": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.CreatedOn"
									}
								},
								"AccountCommunicationOptionsDS_Number": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.Number"
									}
								},
								"AccountCommunicationOptionsDS_Primary": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.Primary"
									}
								},
								"AccountCommunicationOptionsDS_NonActual": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.NonActual"
									}
								},
								"AccountCommunicationOptionsDS_CommunicationType": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.CommunicationType"
									}
								},
								"AccountCommunicationOptionsDS_CommunicationTypeDisplayFormat": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.CommunicationTypeDisplayFormat"
									}
								},
								"AccountCommunicationOptionsDS_CommunicationTypeName": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.CommunicationTypeName"
									}
								},
								"AccountCommunicationOptionsDS_Id": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.Id"
									}
								}
							}
						}
					},
					"PrimatyContactCommunicationOptionsItems": {
						"isCollection": true,
						"modelConfig": {
							"path": "PrimatyContactCommunicationOptionsDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "asc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"PrimatyContactCommunicationOptionsDS_CreatedOn": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.CreatedOn"
									}
								},
								"PrimatyContactCommunicationOptionsDS_Number": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.Number"
									}
								},
								"PrimatyContactCommunicationOptionsDS_Primary": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.Primary"
									}
								},
								"PrimatyContactCommunicationOptionsDS_NonActual": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.NonActual"
									}
								},
								"PrimatyContactCommunicationOptionsDS_CommunicationType": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.CommunicationType"
									}
								},
								"PrimatyContactCommunicationOptionsDS_CommunicationTypeDisplayFormat": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.CommunicationTypeDisplayFormat"
									}
								},
								"PrimatyContactCommunicationOptionsDS_CommunicationTypeName": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.CommunicationTypeName"
									}
								},
								"PrimatyContactCommunicationOptionsDS_Id": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.Id"
									}
								}
							}
						}
					},
					"PDS_Usragencesiret_nu6t0rh": {
						"modelConfig": {
							"path": "PDS.Usragencesiret"
						}
					},
					"PDS_Usragencesiret_pkzt1nr": {
						"modelConfig": {
							"path": "PDS.Usragencesiret"
						}
					},
					"PDS_UsrColumn2_zpcihe0": {
						"modelConfig": {
							"path": "PDS.UsrSousType"
						}
					},
					"PDS_UsrSiren_g6bn32h": {
						"modelConfig": {
							"path": "PDS.UsrSiren"
						}
					},
					"PDS_UsrSiren_aykvzqt": {
						"modelConfig": {
							"path": "PDS.UsrSiren"
						}
					},
					"PDS_UsrCodeAPE_0jc2ys5": {
						"modelConfig": {
							"path": "PDS.UsrCodeAPE"
						}
					},
					"PDS_UsrDateCreation_vmgqrks": {
						"modelConfig": {
							"path": "PDS.UsrDateCreation"
						}
					},
					"PDS_UsrColumn8_pi06q4f": {
						"modelConfig": {
							"path": "PDS.UsrColumn8"
						}
					},
					"PDS_UsrLibelleAPE_5mezww9": {
						"modelConfig": {
							"path": "PDS.UsrLibelleAPE"
						}
					},
					"PDS_UsrFormeJuridique_57oitdi": {
						"modelConfig": {
							"path": "PDS.UsrFormeJuridique"
						}
					},
					"PDS_UsrLibelleAPE_v2kwf1u": {
						"modelConfig": {
							"path": "PDS.UsrLibelleAPE"
						}
					},
					"PDS_UsrColumn10_kdw7wvj": {
						"modelConfig": {
							"path": "PDS.UsrColumn10"
						}
					},
					"PDS_UsrReferentielDocJur_gu0x34b": {
						"modelConfig": {
							"path": "PDS.UsrReferentielDocJur"
						}
					},
					"PDS_Parent_321kfzj": {
						"modelConfig": {
							"path": "PDS.Parent"
						}
					},
					"GridDetail_esbf8x1": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_esbf8x1DS",
							"filterAttributes": [],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "GPSE"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_esbf8x1DS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_esbf8x1DS.CreatedBy"
									}
								},
								"GridDetail_esbf8x1DS_Id": {
									"modelConfig": {
										"path": "GridDetail_esbf8x1DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_esbf8x1_PredefinedFilter": {
						"value": null
					},
					"GridDetail_ykuxii4": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ykuxii4DS",
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ykuxii4DS_Address": {
									"modelConfig": {
										"path": "GridDetail_ykuxii4DS.Address"
									}
								},
								"GridDetail_ykuxii4DS_Zip": {
									"modelConfig": {
										"path": "GridDetail_ykuxii4DS.Zip"
									}
								},
								"GridDetail_ykuxii4DS_Id": {
									"modelConfig": {
										"path": "GridDetail_ykuxii4DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_rgxmwub": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_rgxmwubDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_2lwb0tc_GridDetail_rgxmwub",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrDocJurS"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_rgxmwubDS_UsrDocJurS": {
									"modelConfig": {
										"path": "GridDetail_rgxmwubDS.UsrDocJurS"
									}
								},
								"GridDetail_rgxmwubDS_UsrTypeDoc": {
									"modelConfig": {
										"path": "GridDetail_rgxmwubDS.UsrTypeDoc"
									}
								},
								"GridDetail_rgxmwubDS_UsrLibelle": {
									"modelConfig": {
										"path": "GridDetail_rgxmwubDS.UsrLibelle"
									}
								},
								"GridDetail_rgxmwubDS_UsrStatutDJ": {
									"modelConfig": {
										"path": "GridDetail_rgxmwubDS.UsrStatutDJ"
									}
								},
								"GridDetail_rgxmwubDS_Id": {
									"modelConfig": {
										"path": "GridDetail_rgxmwubDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrNuns_y1o3u33": {
						"modelConfig": {
							"path": "PDS.UsrDuns"
						}
					},
					"PDS_UsrColumn12_bw7nklh": {
						"modelConfig": {
							"path": "PDS.UsrColumn12"
						}
					},
					"GridDetail_444tpw7": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_444tpw7DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_55qpvjc_GridDetail_444tpw7",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrAdresseUsrSocieteUsrVilleNameTopOnefcb225f9"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_444tpw7DS_Name": {
									"modelConfig": {
										"path": "GridDetail_444tpw7DS.Name"
									}
								},
								"GridDetail_444tpw7DS_AlternativeName": {
									"modelConfig": {
										"path": "GridDetail_444tpw7DS.AlternativeName"
									}
								},
								"GridDetail_444tpw7DS_UsrAdresseUsrSocieteUsrVilleNameTopOnefcb225f9": {
									"modelConfig": {
										"path": "GridDetail_444tpw7DS.UsrAdresseUsrSocieteUsrVilleNameTopOnefcb225f9"
									}
								},
								"GridDetail_444tpw7DS_Id": {
									"modelConfig": {
										"path": "GridDetail_444tpw7DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_4mxv1qp": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_4mxv1qpDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_jeodlcs_GridDetail_4mxv1qp",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_4mxv1qpDS_GPSE": {
									"modelConfig": {
										"path": "GridDetail_4mxv1qpDS.GPSE"
									}
								},
								"GridDetail_4mxv1qpDS_Id": {
									"modelConfig": {
										"path": "GridDetail_4mxv1qpDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_p9y2lwz": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_p9y2lwzDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_dhjtkwz_GridDetail_p9y2lwz",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_p9y2lwz_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrNom"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_p9y2lwzDS_UsrNom": {
									"modelConfig": {
										"path": "GridDetail_p9y2lwzDS.UsrNom"
									}
								},
								"GridDetail_p9y2lwzDS_UsrCompte2": {
									"modelConfig": {
										"path": "GridDetail_p9y2lwzDS.UsrCompte2"
									}
								},
								"GridDetail_p9y2lwzDS_UsrActif": {
									"modelConfig": {
										"path": "GridDetail_p9y2lwzDS.UsrActif"
									}
								},
								"GridDetail_p9y2lwzDS_Id": {
									"modelConfig": {
										"path": "GridDetail_p9y2lwzDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_p9y2lwz_PredefinedFilter": {
						"value": null
					},
					"GridDetail_7ae0uhx": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_7ae0uhxDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_yqqnrwn_GridDetail_7ae0uhx",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrCompte2"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_7ae0uhxDS_UsrNom": {
									"modelConfig": {
										"path": "GridDetail_7ae0uhxDS.UsrNom"
									}
								},
								"GridDetail_7ae0uhxDS_UsrCompte1": {
									"modelConfig": {
										"path": "GridDetail_7ae0uhxDS.UsrCompte1"
									}
								},
								"GridDetail_7ae0uhxDS_UsrActif": {
									"modelConfig": {
										"path": "GridDetail_7ae0uhxDS.UsrActif"
									}
								},
								"GridDetail_7ae0uhxDS_Id": {
									"modelConfig": {
										"path": "GridDetail_7ae0uhxDS.Id"
									}
								}
							}
						}
					},
					"PDS_CreatedOn_li5jfa9": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_UsrCentreProfit_apuge7g": {
						"modelConfig": {
							"path": "PDS.UsrCentreProfit"
						}
					},
					"PDS_CreatedOn_7crg3wf": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"GridDetail_40tdzba": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_40tdzbaDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_khupjek_GridDetail_40tdzba",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrName"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_40tdzbaDS_UsrAdresseComplete": {
									"modelConfig": {
										"path": "GridDetail_40tdzbaDS.UsrAdresseComplete"
									}
								},
								"GridDetail_40tdzbaDS_UsrSociete": {
									"modelConfig": {
										"path": "GridDetail_40tdzbaDS.UsrSociete"
									}
								},
								"GridDetail_40tdzbaDS_UsrContact": {
									"modelConfig": {
										"path": "GridDetail_40tdzbaDS.UsrContact"
									}
								},
								"GridDetail_40tdzbaDS_Id": {
									"modelConfig": {
										"path": "GridDetail_40tdzbaDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrColumn15_tbxzjwx": {
						"modelConfig": {
							"path": "PDS.UsrAgence"
						}
					},
					"PDS_UsrEntite_pyi8uuv": {
						"modelConfig": {
							"path": "PDS.UsrEntite"
						}
					},
					"PDS_UsrPrestataire_jrupsvo": {
						"modelConfig": {
							"path": "PDS.UsrPrestataire"
						}
					},
					"Timeline_AllTileFilters": {
						"from": [],
						"converter": "crt.ToTileFilterGroup"
					},
					"PDS_UsrStatutConnect_q7jo9pa": {
						"modelConfig": {
							"path": "PDS.UsrStatutConnect"
						}
					},
					"Summaries_akakbje_Expanded": {
						"value": true
					},
					"Summaries_xuaxww8_Expanded": {
						"value": true
					},
					"Summaries_6yn8fa4_Expanded": {
						"value": true
					},
					"Summaries_os0e8ey_Expanded": {
						"value": true
					},
					"Summaries_umyi87w_Expanded": {
						"value": true
					},
					"PDS_UsrProfitCenter_8yl6t1o": {
						"modelConfig": {
							"path": "PDS.UsrProfitCenter"
						}
					},
					"PDS_UsrProfitCenter_8yl6t1o_List": {
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
					"GridDetail_qkl3io2": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_qkl3io2DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_pank4qs_GridDetail_qkl3io2",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_qkl3io2_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_qkl3io2DS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_qkl3io2DS.UsrName"
									}
								},
								"GridDetail_qkl3io2DS_UsrDefault": {
									"modelConfig": {
										"path": "GridDetail_qkl3io2DS.UsrDefault"
									}
								},
								"GridDetail_qkl3io2DS_UsrColumn9": {
									"modelConfig": {
										"path": "GridDetail_qkl3io2DS.UsrColumn9"
									}
								},
								"GridDetail_qkl3io2DS_Id": {
									"modelConfig": {
										"path": "GridDetail_qkl3io2DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_qkl3io2_PredefinedFilter": {
						"value": null
					},
					"PDS_UsrColumn2_zpcihe0_List": {
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
					"PrimaryContact_List": {
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
					"PDS_Parent_321kfzj_List": {
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
					"ComboBox_5s71lyg_ValueDetails": {
						"modelConfig": {
							"path": "PDS.ParentName"
						}
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
						"ContactsListDS": [
							{
								"attributePath": "Account",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_rgxmwubDS": [
							{
								"attributePath": "UsrParentSociete",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_444tpw7DS": [
							{
								"attributePath": "Parent",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_4mxv1qpDS": [
							{
								"attributePath": "Account",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_7ae0uhxDS": [
							{
								"attributePath": "UsrCompte2",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_p9y2lwzDS": [
							{
								"attributePath": "UsrCompte1",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_40tdzbaDS": [
							{
								"attributePath": "UsrSociete",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_qkl3io2DS": [
							{
								"attributePath": "UsrSociete",
								"relationPath": "PDS.Id"
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
							"entitySchemaName": "Account",
							"attributes": {
								"PrimaryContactJobTitle": {
									"path": "PrimaryContact.JobTitle",
									"type": "ForwardReference"
								},
								"ParentName": {
									"path": "Parent.Name",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"AddressListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountAddress",
							"attributes": {
								"AddressType": {
									"path": "AddressType"
								},
								"FullAddress": {
									"path": "FullAddress"
								},
								"Primary": {
									"path": "Primary"
								}
							}
						}
					},
					"ContactsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contact",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"JobTitle": {
									"path": "JobTitle"
								},
								"MobilePhone": {
									"path": "MobilePhone"
								},
								"Email": {
									"path": "Email"
								},
								"Address": {
									"path": "Address"
								}
							}
						}
					},
					"AccountCommunicationOptionsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountCommunication",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Number": {
									"path": "Number"
								},
								"Primary": {
									"path": "Primary"
								},
								"NonActual": {
									"path": "NonActual"
								},
								"CommunicationType": {
									"path": "CommunicationType"
								},
								"CommunicationTypeDisplayFormat": {
									"type": "ForwardReference",
									"path": "CommunicationType.DisplayFormat"
								},
								"CommunicationTypeName": {
									"type": "ForwardReference",
									"path": "CommunicationType.Name"
								}
							}
						}
					},
					"PrimatyContactCommunicationOptionsItemsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactCommunication",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Number": {
									"path": "Number"
								},
								"Primary": {
									"path": "Primary"
								},
								"NonActual": {
									"path": "NonActual"
								},
								"CommunicationType": {
									"path": "CommunicationType"
								},
								"CommunicationTypeDisplayFormat": {
									"type": "ForwardReference",
									"path": "CommunicationType.DisplayFormat"
								},
								"CommunicationTypeName": {
									"type": "ForwardReference",
									"path": "CommunicationType.Name"
								}
							}
						}
					},
					"PrimatyContactCommunicationOptionsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactCommunication",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Number": {
									"path": "Number"
								},
								"Primary": {
									"path": "Primary"
								},
								"NonActual": {
									"path": "NonActual"
								},
								"CommunicationType": {
									"path": "CommunicationType"
								},
								"CommunicationTypeDisplayFormat": {
									"type": "ForwardReference",
									"path": "CommunicationType.DisplayFormat"
								},
								"CommunicationTypeName": {
									"type": "ForwardReference",
									"path": "CommunicationType.Name"
								}
							}
						}
					},
					"GridDetail_esbf8x1DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "VwCompilationErrors",
							"attributes": {
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					},
					"GridDetail_ykuxii4DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountAddress",
							"attributes": {
								"Address": {
									"path": "Address"
								},
								"Zip": {
									"path": "Zip"
								}
							}
						}
					},
					"GridDetail_rgxmwubDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrDocumentJuridique",
							"attributes": {
								"UsrDocJurS": {
									"path": "UsrDocJurS"
								},
								"UsrTypeDoc": {
									"path": "UsrTypeDoc"
								},
								"UsrLibelle": {
									"path": "UsrLibelle"
								},
								"UsrStatutDJ": {
									"path": "UsrStatutDJ"
								}
							}
						}
					},
					"GridDetail_444tpw7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Account",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"AlternativeName": {
									"path": "AlternativeName"
								},
								"UsrAdresseUsrSocieteUsrVilleNameTopOnefcb225f9": {
									"type": "Aggregation",
									"path": "[UsrAdresse:UsrSociete].UsrVille.Name",
									"aggregationConfig": {
										"aggregationFunction": "TopOne",
										"sortByColumn": "Id",
										"sortByDirection": 1,
										"filter": null
									}
								}
							}
						}
					},
					"GridDetail_4mxv1qpDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountAddress",
							"attributes": {
								"GPSE": {
									"path": "GPSE"
								}
							}
						}
					},
					"GridDetail_p9y2lwzDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRelation",
							"attributes": {
								"UsrNom": {
									"path": "UsrNom"
								},
								"UsrCompte2": {
									"path": "UsrCompte2"
								},
								"UsrActif": {
									"path": "UsrActif"
								}
							}
						}
					},
					"GridDetail_7ae0uhxDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRelation",
							"attributes": {
								"UsrNom": {
									"path": "UsrNom"
								},
								"UsrCompte1": {
									"path": "UsrCompte1"
								},
								"UsrActif": {
									"path": "UsrActif"
								}
							}
						}
					},
					"GridDetail_40tdzbaDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrAdresse",
							"attributes": {
								"UsrAdresseComplete": {
									"path": "UsrAdresseComplete"
								},
								"UsrSociete": {
									"path": "UsrSociete"
								},
								"UsrContact": {
									"path": "UsrContact"
								}
							}
						}
					},
					"TimelineTile_EmailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_TaskDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_CallDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					},
					"GridDetail_qkl3io2DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrCentreDeProfit",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrDefault": {
									"path": "UsrDefault"
								},
								"UsrColumn9": {
									"path": "UsrColumn9"
								}
							}
						}
					},
					"TimelineTile_SysApproval_6yidageDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysApproval"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"AttachmentListDS",
					"config"
				],
				"values": {
					"entitySchemaName": "AccountFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
  request: "usr.closePage",
  handler: async (request, next) => {

    try {
      const siret = await request.$context.PDS_Usragencesiret_pkzt1nr;
		const idc = await request.$context.Id;
		Terrasoft.showInformation("❌Supression du compte "+ siret+ " noté le si erreur");
		
		

const result = await request.$context.executeRequest({
  type: "crt.RunBusinessProcessRequest",
  processName: "UsrProcess_3e1ad21",
  processParameters: {
    idCompte: idc,   // nom exact du paramètre dans ton BP
    idsiret: siret   // deuxième paramètre, si utilisé dans ton BP
  },
  $context: request.$context
});

     

      // 4. (Optionnel) Fermer la page d'origine après ouverture de la fiche
      await request.$context.executeRequest({
        type: "crt.ClosePageRequest",
        $context: request.$context,
        closePageOptions: {
          discardChangesPolicy: "discard"
        }
      });
	
	  


		

    } catch (error) {
      console.error("❌ Erreur dans le handler :", error);
      Terrasoft.showInformation("❌ Une erreur est survenue : " + error.message);
    }

    return;
  }
}

			


			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});