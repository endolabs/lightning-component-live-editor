({
    handleClick: function(component, event, helper) { 
        var selectedButtonLabel = event.getSource().get("v.label");
        alert("Button label: " + selectedButtonLabel);
    }
})