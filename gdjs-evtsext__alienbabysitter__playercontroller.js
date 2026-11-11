
gdjs.evtsExt__AlienBabysitter__PlayerController = gdjs.evtsExt__AlienBabysitter__PlayerController || {};

/**
 * Behavior generated from Player controller
 */
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController = class PlayerController extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PhysicsCharacter3D = behaviorData.PhysicsCharacter3D !== undefined ? behaviorData.PhysicsCharacter3D : "";
    this._behaviorData.WalkSpeed = behaviorData.WalkSpeed !== undefined ? behaviorData.WalkSpeed : Number("300") || 0;
    this._behaviorData.SprintSpeed = behaviorData.SprintSpeed !== undefined ? behaviorData.SprintSpeed : Number("450") || 0;
    this._behaviorData.SprintEnabled = behaviorData.SprintEnabled !== undefined ? behaviorData.SprintEnabled : false;
    this._behaviorData.SprintKey = behaviorData.SprintKey !== undefined ? behaviorData.SprintKey : "LShift";
    this._behaviorData.MouseSensitivity = behaviorData.MouseSensitivity !== undefined ? behaviorData.MouseSensitivity : Number("1") || 0;
    this._behaviorData.InteractRange = behaviorData.InteractRange !== undefined ? behaviorData.InteractRange : Number("220") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = behaviorOverriding.PhysicsCharacter3D;
    if (behaviorOverriding.WalkSpeed !== undefined)
      this._behaviorData.WalkSpeed = behaviorOverriding.WalkSpeed;
    if (behaviorOverriding.SprintSpeed !== undefined)
      this._behaviorData.SprintSpeed = behaviorOverriding.SprintSpeed;
    if (behaviorOverriding.SprintEnabled !== undefined)
      this._behaviorData.SprintEnabled = behaviorOverriding.SprintEnabled;
    if (behaviorOverriding.SprintKey !== undefined)
      this._behaviorData.SprintKey = behaviorOverriding.SprintKey;
    if (behaviorOverriding.MouseSensitivity !== undefined)
      this._behaviorData.MouseSensitivity = behaviorOverriding.MouseSensitivity;
    if (behaviorOverriding.InteractRange !== undefined)
      this._behaviorData.InteractRange = behaviorOverriding.InteractRange;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PhysicsCharacter3D: this._behaviorData.PhysicsCharacter3D,
    WalkSpeed: this._behaviorData.WalkSpeed,
    SprintSpeed: this._behaviorData.SprintSpeed,
    SprintEnabled: this._behaviorData.SprintEnabled,
    SprintKey: this._behaviorData.SprintKey,
    MouseSensitivity: this._behaviorData.MouseSensitivity,
    InteractRange: this._behaviorData.InteractRange,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PhysicsCharacter3D !== undefined)
      this._behaviorData.PhysicsCharacter3D = networkSyncData.props.PhysicsCharacter3D;
    if (networkSyncData.props.WalkSpeed !== undefined)
      this._behaviorData.WalkSpeed = networkSyncData.props.WalkSpeed;
    if (networkSyncData.props.SprintSpeed !== undefined)
      this._behaviorData.SprintSpeed = networkSyncData.props.SprintSpeed;
    if (networkSyncData.props.SprintEnabled !== undefined)
      this._behaviorData.SprintEnabled = networkSyncData.props.SprintEnabled;
    if (networkSyncData.props.SprintKey !== undefined)
      this._behaviorData.SprintKey = networkSyncData.props.SprintKey;
    if (networkSyncData.props.MouseSensitivity !== undefined)
      this._behaviorData.MouseSensitivity = networkSyncData.props.MouseSensitivity;
    if (networkSyncData.props.InteractRange !== undefined)
      this._behaviorData.InteractRange = networkSyncData.props.InteractRange;
  }

  // Properties:
  
  _getPhysicsCharacter3D() {
    return this._behaviorData.PhysicsCharacter3D !== undefined ? this._behaviorData.PhysicsCharacter3D : "";
  }
  _setPhysicsCharacter3D(newValue) {
    this._behaviorData.PhysicsCharacter3D = newValue;
  }
  _getWalkSpeed() {
    return this._behaviorData.WalkSpeed !== undefined ? this._behaviorData.WalkSpeed : Number("300") || 0;
  }
  _setWalkSpeed(newValue) {
    this._behaviorData.WalkSpeed = newValue;
  }
  _getSprintSpeed() {
    return this._behaviorData.SprintSpeed !== undefined ? this._behaviorData.SprintSpeed : Number("450") || 0;
  }
  _setSprintSpeed(newValue) {
    this._behaviorData.SprintSpeed = newValue;
  }
  _getSprintEnabled() {
    return this._behaviorData.SprintEnabled !== undefined ? this._behaviorData.SprintEnabled : false;
  }
  _setSprintEnabled(newValue) {
    this._behaviorData.SprintEnabled = newValue;
  }
  _toggleSprintEnabled() {
    this._setSprintEnabled(!this._getSprintEnabled());
  }
  _getSprintKey() {
    return this._behaviorData.SprintKey !== undefined ? this._behaviorData.SprintKey : "LShift";
  }
  _setSprintKey(newValue) {
    this._behaviorData.SprintKey = newValue;
  }
  _getMouseSensitivity() {
    return this._behaviorData.MouseSensitivity !== undefined ? this._behaviorData.MouseSensitivity : Number("1") || 0;
  }
  _setMouseSensitivity(newValue) {
    this._behaviorData.MouseSensitivity = newValue;
  }
  _getInteractRange() {
    return this._behaviorData.InteractRange !== undefined ? this._behaviorData.InteractRange : Number("220") || 0;
  }
  _setInteractRange(newValue) {
    this._behaviorData.InteractRange = newValue;
  }
}

/**
 * Shared data generated from Player controller
 */
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.SharedData = class PlayerControllerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AlienBabysitter_PlayerControllerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AlienBabysitter_PlayerControllerSharedData = new gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.SharedData(
      initialData
    );
  }
  return instanceContainer._AlienBabysitter_PlayerControllerSharedData;
}

// Methods:
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setForwardSpeedMax(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWalkSpeed());
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setSidewaysSpeedMax(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWalkSpeed());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSprintEnabled();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSprintKey());
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setForwardSpeedMax(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSprintSpeed());
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PhysicsCharacter3D")).setSidewaysSpeedMax(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSprintSpeed());
}
}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWalkSpeed();}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeed = function(parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.WalkSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWalkSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeed = function(Value, parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetWalkSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSprintSpeed();}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeed = function(parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintSpeedContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSprintSpeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeed = function(Value, parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintSpeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSprintEnabled();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabled = function(parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SprintEnabledContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSprintEnabled(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSprintEnabled(true)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabled = function(Value, parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetSprintEnabledContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseSensitivity();}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivity = function(parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.MouseSensitivityContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMouseSensitivity(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivity = function(Value, parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetMouseSensitivityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInteractRange();}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRange = function(parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.InteractRangeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext = {};
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInteractRange(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRange = function(Value, parentEventsFunctionContext) {

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
, "PhysicsCharacter3D": this._getPhysicsCharacter3D()
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

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController.prototype.SetInteractRangeContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("AlienBabysitter::PlayerController", gdjs.evtsExt__AlienBabysitter__PlayerController.PlayerController);
