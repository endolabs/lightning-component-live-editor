({
  update: function (component, event, helper) {
    var eventSourceName = event.getSource().get("v.name");
    if (eventSourceName === 'type') {
      helper.updateOptions(component);
    }

    var componentSetting = helper.componentSetting(component);
    component.set("v.code", componentSetting.code);

    helper.create(component, componentSetting);
    helper.renderCode(component);
  },
})
