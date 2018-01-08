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
    },
    
    createComponents : function(component, callerComponent, componentInfo, onSuccess) {
        console.log("create components", componentInfo);
        
        var pushComponent = function(cmpInfo, createdComponents) {
            var targetComponent = createdComponents[cmpInfo.order];
            
            cmpInfo.children.forEach(function(child) {
                var body = targetComponent.get("v.body");
                if (body) {
                    body.push(pushComponent(child, createdComponents));
                    targetComponent.set("v.body", body);
                }
            });
            
            return targetComponent;
        };
        
        $A.createComponents(
            componentInfo.components, 
            function(createdComponents, status, errorMessage){
                if (status === "SUCCESS") {
                    var parent = pushComponent(componentInfo, createdComponents);
                    component.set("v.body", parent);
                        
                    if (onSuccess) {
                        onSuccess(callerComponent, createdComponents);
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