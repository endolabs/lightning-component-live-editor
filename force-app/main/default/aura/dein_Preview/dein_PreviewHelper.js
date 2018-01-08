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
        
        var buildComponent = function(cmpInfo, createdComponents) {
            var targetComponent = createdComponents[cmpInfo.order];
            
            var body = targetComponent.get("v.body");
            if (!body) {
                return targetComponent;
            }
            
            // Set component's body recursively
            cmpInfo.children.forEach(function(childCmpInfo) {
                var childComponent = buildComponent(childCmpInfo, createdComponents);
                body.push(childComponent);
            });
            targetComponent.set("v.body", body);
            
            return targetComponent;
        };
        
        $A.createComponents(
            componentInfo.components, 
            function(createdComponents, status, errorMessage){
                if (status === "SUCCESS") {
                    var parent = buildComponent(componentInfo, createdComponents);
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