({
    scriptsLoaded : function(component, event, helper) {
        console.log("scriptsLoaded", Prism);
        component.set("v.prism", Prism);
        
        var code = component.get("v.code");
        if (code) {
            helper.highlightCode(component, code, Prism);
        }
    },
    
    highlightCode : function(component, event, helper) {
        var params = event.getParams().arguments;        
        var code = params.code;
        console.log("[Service.highlightCode]", code)
        
        var prism = component.get("v.prism");
        if (prism) {
            helper.highlightCode(component, code, prism);
            component.set("v.code", "");
        } else {
            component.set("v.code", code);
        }
    }
})