sap.ui.define([
	"sap/ui/odatav4/controller/BaseController",
	'sap/ui/model/Filter',
    "sap/ui/model/json/JSONModel"
], function (BaseController, Filter, JSONModel) {
	"use strict";

	return BaseController.extend("sap.ui.odatav4.controller.Home", {

		onInit : function () {
			var oJSONData = {
				busy : false
			};
			var oModel = new JSONModel(oJSONData);
			this.getView().setModel(oModel, "app");
		},

		onSearch : function (oEvt) {

			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("UserName", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			var list = this.byId("personList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},

        onItemSelected: function(oEvent) {

			var oSelectedItem = oEvent.getSource();
			var context = encodeURIComponent(oSelectedItem.getBindingContext('people').getPath());
			this.getRouter().navTo("details",  {personID: context});
            
		}

		
	});
});
