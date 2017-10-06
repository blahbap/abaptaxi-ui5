sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.abaptaxi.app.controller.List", {


		onInit : function () {
            var oModel = new JSONModel();                                
            oModel.loadData('sap/bc/restful/transports/modifiable?sapsystem=S03');
            this.getView().setModel(oModel, 'transportModel');			
		}


    });
});