({
    answer : function(component, event, helper) {
        var text = event.getParam("selectedItem");
        
        $A.createComponent(
            "c:dein_Item_" + text,
            {
            },
            function(newButton, status, errorMessage){
                if (status === "SUCCESS") {
                    component.set("v.body", newButton);
                }
                else if (status === "INCOMPLETE") {
                    component.set("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    component.set("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
	}
})