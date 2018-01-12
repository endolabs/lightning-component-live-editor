({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:input', {
      '@name': 'Some Value',
      '@value': component.get("v.value"),
      '@label': component.get("v.label"),
      '@type': component.get("v.type"),
      '@variant': component.get("v.variant"),
      '@formatter': component.get("v.formatter"),
      '@isLoading': component.get("v.isLoading"),
      '@min': component.get("v.min"),
      '@max': component.get("v.max"),
      '@minLength': component.get("v.minLength"),
      '@maxLength': component.get("v.minLength"),
      '@pattern': component.get("v.pattern")
    });
  },

  create: function (component, componentSetting) {
    // FIXME: type "file" causes inifinite error.
    component.find("preview").createComponent(component, componentSetting.componentName, componentSetting.componentAttributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
