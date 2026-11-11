
gdjs.evtsExt__AlienBabysitter__Interactable = gdjs.evtsExt__AlienBabysitter__Interactable || {};

/**
 * Behavior generated from Interactable
 */
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable = class Interactable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PromptText = behaviorData.PromptText !== undefined ? behaviorData.PromptText : "";
    this._behaviorData.UseText = behaviorData.UseText !== undefined ? behaviorData.UseText : "";
    this._behaviorData.CanPickUp = behaviorData.CanPickUp !== undefined ? behaviorData.CanPickUp : false;
    this._behaviorData.AcceptedItemIds = behaviorData.AcceptedItemIds !== undefined ? behaviorData.AcceptedItemIds : "";
    this._behaviorData.InteractionId = behaviorData.InteractionId !== undefined ? behaviorData.InteractionId : "";
    this._behaviorData.Enabled = behaviorData.Enabled !== undefined ? behaviorData.Enabled : true;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PromptText !== undefined)
      this._behaviorData.PromptText = behaviorOverriding.PromptText;
    if (behaviorOverriding.UseText !== undefined)
      this._behaviorData.UseText = behaviorOverriding.UseText;
    if (behaviorOverriding.CanPickUp !== undefined)
      this._behaviorData.CanPickUp = behaviorOverriding.CanPickUp;
    if (behaviorOverriding.AcceptedItemIds !== undefined)
      this._behaviorData.AcceptedItemIds = behaviorOverriding.AcceptedItemIds;
    if (behaviorOverriding.InteractionId !== undefined)
      this._behaviorData.InteractionId = behaviorOverriding.InteractionId;
    if (behaviorOverriding.Enabled !== undefined)
      this._behaviorData.Enabled = behaviorOverriding.Enabled;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PromptText: this._behaviorData.PromptText,
    UseText: this._behaviorData.UseText,
    CanPickUp: this._behaviorData.CanPickUp,
    AcceptedItemIds: this._behaviorData.AcceptedItemIds,
    InteractionId: this._behaviorData.InteractionId,
    Enabled: this._behaviorData.Enabled,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PromptText !== undefined)
      this._behaviorData.PromptText = networkSyncData.props.PromptText;
    if (networkSyncData.props.UseText !== undefined)
      this._behaviorData.UseText = networkSyncData.props.UseText;
    if (networkSyncData.props.CanPickUp !== undefined)
      this._behaviorData.CanPickUp = networkSyncData.props.CanPickUp;
    if (networkSyncData.props.AcceptedItemIds !== undefined)
      this._behaviorData.AcceptedItemIds = networkSyncData.props.AcceptedItemIds;
    if (networkSyncData.props.InteractionId !== undefined)
      this._behaviorData.InteractionId = networkSyncData.props.InteractionId;
    if (networkSyncData.props.Enabled !== undefined)
      this._behaviorData.Enabled = networkSyncData.props.Enabled;
  }

  // Properties:
  
  _getPromptText() {
    return this._behaviorData.PromptText !== undefined ? this._behaviorData.PromptText : "";
  }
  _setPromptText(newValue) {
    this._behaviorData.PromptText = newValue;
  }
  _getUseText() {
    return this._behaviorData.UseText !== undefined ? this._behaviorData.UseText : "";
  }
  _setUseText(newValue) {
    this._behaviorData.UseText = newValue;
  }
  _getCanPickUp() {
    return this._behaviorData.CanPickUp !== undefined ? this._behaviorData.CanPickUp : false;
  }
  _setCanPickUp(newValue) {
    this._behaviorData.CanPickUp = newValue;
  }
  _toggleCanPickUp() {
    this._setCanPickUp(!this._getCanPickUp());
  }
  _getAcceptedItemIds() {
    return this._behaviorData.AcceptedItemIds !== undefined ? this._behaviorData.AcceptedItemIds : "";
  }
  _setAcceptedItemIds(newValue) {
    this._behaviorData.AcceptedItemIds = newValue;
  }
  _getInteractionId() {
    return this._behaviorData.InteractionId !== undefined ? this._behaviorData.InteractionId : "";
  }
  _setInteractionId(newValue) {
    this._behaviorData.InteractionId = newValue;
  }
  _getEnabled() {
    return this._behaviorData.Enabled !== undefined ? this._behaviorData.Enabled : true;
  }
  _setEnabled(newValue) {
    this._behaviorData.Enabled = newValue;
  }
  _toggleEnabled() {
    this._setEnabled(!this._getEnabled());
  }
}

/**
 * Shared data generated from Interactable
 */
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.SharedData = class InteractableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AlienBabysitter_InteractableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AlienBabysitter_InteractableSharedData = new gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.SharedData(
      initialData
    );
  }
  return instanceContainer._AlienBabysitter_InteractableSharedData;
}

// Methods:
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("ItemId") != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strFind("," + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceptedItemIds() + ",", "," + eventsFunctionContext.getArgument("ItemId") + ",") >= 0);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.Accepts = function(ItemId, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ItemId") return ItemId;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptsContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPromptText();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptText = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.PromptTextContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPromptText(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptText = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetPromptTextContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseText();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseText = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.UseTextContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUseText(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseText = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetUseTextContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanPickUp();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUp = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.CanPickUpContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanPickUp(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanPickUp(true)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUp = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetCanPickUpContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAcceptedItemIds();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIds = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.AcceptedItemIdsContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAcceptedItemIds(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIds = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetAcceptedItemIdsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInteractionId();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionId = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.InteractionIdContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInteractionId(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionId = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetInteractionIdContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnabled();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.Enabled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.EnabledContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext = {};
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnabled(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnabled(true)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabled = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlienBabysitter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlienBabysitter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.SetEnabledContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__AlienBabysitter__Interactable.Interactable.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("AlienBabysitter::Interactable", gdjs.evtsExt__AlienBabysitter__Interactable.Interactable);
