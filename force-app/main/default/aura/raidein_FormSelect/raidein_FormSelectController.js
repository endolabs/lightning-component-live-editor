({
  fireOnchange: function (component, event, helper) {
    var event = component.getEvent("onchange");
    event.fire();
  }
})