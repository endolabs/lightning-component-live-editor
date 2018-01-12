({
  componentSetting: function (component) {
    var template = {
      '@value': component.get("v.value"),
      '@currencyDisplayAs': component.get("v.currencyDisplayAs"),
      '@maximumFractionDigits': component.get("v.maximumFractionDigits"),
      '@maximumSignificantDigits': component.get("v.maximumSignificantDigits"),
      '@minimumFractionDigits': component.get("v.minimumFractionDigits"),
      '@minimumIntegerDigits': component.get("v.minimumIntegerDigits"),
      '@minimumSignificantDigits': component.get("v.minimumSignificantDigits"),
      '@style': component.get("v.style")
    };
    if (template['@style'] === 'currency') {
      template['@currencyCode'] = component.get("v.currencyCode");
    }

    return component.find("util").parseTemplate('lightning:formattedNumber', template);
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
