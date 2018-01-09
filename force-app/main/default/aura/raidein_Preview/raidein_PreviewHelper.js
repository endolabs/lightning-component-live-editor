({
    createComponent : function(component, callerComponent, type, attributes, onSuccess) {
        $A.createComponent(
            type, attributes, 
            function(createdComponent, status, errorMessage){
                if (status === "SUCCESS") {
                    component.set("v.content", createdComponent);
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
        
        // FIXME: allow push components into not "body" attributes, like "media" in case lightning:tile"
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
                    var p = buildComponent(componentInfo, createdComponents);
                    component.set("v.content", p);
                    
                    if (onSuccess) {
                        onSuccess(callerComponent, createdComponents);
                    }
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    // Show error message
                    if (Array.isArray(errorMessage)) {
                        errorMessage.forEach(function(err, i) {
                           console.log("Error[" + i + "] ", err); 
                        });
                    } else {
                        console.log("Error: " + errorMessage);
                    }
                }
            }
        );
    }
})
