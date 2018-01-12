({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:formattedDateTime', {
      '@value': component.get("v.value"),
      '@era': component.get("v.era"),
      '@year': component.get("v.year"),
      '@month': component.get("v.month"),
      '@weekday': component.get("v.weekday"),
      '@day': component.get("v.day"),
      '@hour12': component.get("v.hour12"),
      '@hour': component.get("v.hour"),
      '@minute': component.get("v.minute"),
      '@second': component.get("v.second"),
      '@timeZone': component.get("v.timeZone"),
      '@timeZoneName': component.get("v.timeZoneName"),
    });
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
