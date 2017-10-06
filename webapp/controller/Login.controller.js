sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("com.abaptaxi.app.controller.Login", {

        loginPress: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            var user = this.getView().byId('user').getValue();
            var password = this.getView().byId('password').getValue();


            $.ajax({
                url: "/sap/bc/restful/csrf?sapsystem=S03",
                type: "GET",
                beforeSend: function(request) {
                    request.setRequestHeader("X-CSRF-Token", "fetch");
                    var auth = btoa(user + ":" + password);
                    request.setRequestHeader("Authorization", "Basic " + auth);
                },
                success: function(data, status, response) {
                    
                    // Get CSRF token
                    // The CSRF token is used in any update requests to the SAP server
                    var csrfToken = response.getResponseHeader("X-CSRF-Token");
                    
                    // Navigate to list view
                    oRouter.navTo("list")

                }
            });
        }

    });
});