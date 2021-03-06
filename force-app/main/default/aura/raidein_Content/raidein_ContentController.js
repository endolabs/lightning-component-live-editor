({
  initItem: function (component, event, helper) {
    var itemName = event.getParam("selectedItem");

    // Destroy a previous component to avoid memory leaks.
    var current = component.get("v.body");
    if (current) {
      current.destroy();
    }

    $A.createComponent(
      "c:raidein_Item" + itemName,
      {
      },
      function (createdComponent, status, errorMessage) {
        if (status === "SUCCESS") {
          component.set("v.body", createdComponent);
        }
        else if (status === "INCOMPLETE") {
          component.set("No response from server or client is offline.")
          // Show offline error
        }
        else if (status === "ERROR") {
          component.set("Error: " + errorMessage);
          // Show error message
        }
      }
    );
  }
})
