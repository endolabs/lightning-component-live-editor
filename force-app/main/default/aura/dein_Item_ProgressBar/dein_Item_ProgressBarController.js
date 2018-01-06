({
    update: function (component, event, helper) {
        var code = '<lightning:progressBar value="' + component.get("v.progress") + '"'
          + ' variant="' + component.get("v.variant") + '"'
          + ' size="' + component.get("v.size") + '" />';
        component.set("v.code", code);
        
        helper.create(component);
        helper.renderCode(component);
    }
})