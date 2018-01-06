({
    createComponent : function(component, event, helper) {
        var params = event.getParams().arguments;
        
        var callerComponent = params.component;
        var type = params.type;
        var attributes = params.attributes;
        var successCallback = params.successCallback;
        helper.createComponent(component, callerComponent, type, attributes, successCallback);
    }
})