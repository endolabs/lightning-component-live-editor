({
  handleClick: function (component, event, helper) {
    var buttonState = component.get('v.state');
    component.set('v.state', !buttonState);
  },

  update: function (component, event, helper) {
    var componentSetting = helper.componentSetting(component);

    var code = componentSetting.code;
    component.set("v.code", code);

    helper.create(component, componentSetting.componentName, componentSetting.componentAttributes);
    helper.renderCode(component);
  },
})