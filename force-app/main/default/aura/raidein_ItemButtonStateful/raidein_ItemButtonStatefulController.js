({
    handleClick : function (component, event, helper) {
        var buttonstate = component.get('v.buttonstate');
        component.set('v.buttonstate', !buttonstate);
    }
})
