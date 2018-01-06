({
    createComponent : function(component, callerComponent, type, attributes, onSuccess) {
        $A.createComponent(
            type, attributes, 
            function(createdComponent, status, errorMessage){
                if (status === "SUCCESS") {
                    component.set("v.body", createdComponent);
                    if (onSuccess) {
                        onSuccess(callerComponent, createdComponent);
                    }
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
    }
})