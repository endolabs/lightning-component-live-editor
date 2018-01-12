({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:fileUpload', {
      '@label': 'Attach receipt',
      '@recordId': component.get("v.recordId"),
      '@multiple': component.get("v.multiple"),
      '@accept': component.get("v.accept")
    });
  },

  create: function (component, componentSetting) {
    var handleUploadFinished = function (cmp, event) {
      var uploadFiles = event.getParam("files");
      console.log("uploaded " + uploadFiles.length + " files.");

      uploadFiles.forEach(function (uploadFile) {
        console.log("upload file", uploadFile);
        component.find("preview2")
          .createComponent(component, 'lightning:fileCard', { fileId: uploadFile.documentId });
      });
    };

    var onCreate = function (caller, cmp) {
      console.log("fileUpload component created.", cmp);
      cmp.addHandler("onuploadfinished", handleUploadFinished);
    };

    // TODO: file upload not working --;
    component.find("preview")
      .createComponent(component, componentSetting.componentName, componentSetting.componentAttributes, onCreate);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
