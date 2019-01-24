sap.ui.define([
   //modules
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("courses.controller.App", {
        onShowHello : function () {
         MessageToast.show("Hello World");
        }
     });
 });