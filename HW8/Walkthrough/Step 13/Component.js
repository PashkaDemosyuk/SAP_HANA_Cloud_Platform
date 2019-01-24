sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/mvc/XMLView"
 ], function (UIComponent, JSONModel, ResourceModel, XMLView) {
    "use strict";
    console.log('8');
    return UIComponent.extend("courses.Component", {
       metadata : {
         manifest: 'json'    
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set data model
          var oData = {
             recipient : {
                name : "World"
             }
          };

          var oModel = new JSONModel(oData);
          this.setModel(oModel);
          
       }
    });
 });