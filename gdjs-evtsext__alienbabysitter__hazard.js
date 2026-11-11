
gdjs.evtsExt__AlienBabysitter__Hazard = gdjs.evtsExt__AlienBabysitter__Hazard || {};

/**
 * Behavior generated from Hazard
 */
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard = class Hazard extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.HazardId = behaviorData.HazardId !== undefined ? behaviorData.HazardId : "";
    this._behaviorData.RequiredKidItem = behaviorData.RequiredKidItem !== undefined ? behaviorData.RequiredKidItem : "";
    this._behaviorData.WindupSeconds = behaviorData.WindupSeconds !== undefined ? behaviorData.WindupSeconds : Number("3") || 0;
    this._behaviorData.RollIntervalSeconds = behaviorData.RollIntervalSeconds !== undefined ? behaviorData.RollIntervalSeconds : Number("0") || 0;
    this._behaviorData.RollChance = behaviorData.RollChance !== undefined ? behaviorData.RollChance : Number("0") || 0;
    this._behaviorData.BreakChance = behaviorData.BreakChance !== undefined ? behaviorData.BreakChance : Number("0") || 0;
    this._behaviorData.TriggerDistance = behaviorData.TriggerDistance !== undefined ? behaviorData.TriggerDistance : Number("0") || 0;
    this._behaviorData.RollTimer = Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.HazardId !== undefined)
      this._behaviorData.HazardId = behaviorOverriding.HazardId;
    if (behaviorOverriding.RequiredKidItem !== undefined)
      this._behaviorData.RequiredKidItem = behaviorOverriding.RequiredKidItem;
    if (behaviorOverriding.WindupSeconds !== undefined)
      this._behaviorData.WindupSeconds = behaviorOverriding.WindupSeconds;
    if (behaviorOverriding.RollIntervalSeconds !== undefined)
      this._behaviorData.RollIntervalSeconds = behaviorOverriding.RollIntervalSeconds;
    if (behaviorOverriding.RollChance !== undefined)
      this._behaviorData.RollChance = behaviorOverriding.RollChance;
    if (behaviorOverriding.BreakChance !== undefined)
      this._behaviorData.BreakChance = behaviorOverriding.BreakChance;
    if (behaviorOverriding.TriggerDistance !== undefined)
      this._behaviorData.TriggerDistance = behaviorOverriding.TriggerDistance;
    if (behaviorOverriding.RollTimer !== undefined)
      this._behaviorData.RollTimer = behaviorOverriding.RollTimer;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    HazardId: this._behaviorData.HazardId,
    RequiredKidItem: this._behaviorData.RequiredKidItem,
    WindupSeconds: this._behaviorData.WindupSeconds,
    RollIntervalSeconds: this._behaviorData.RollIntervalSeconds,
    RollChance: this._behaviorData.RollChance,
    BreakChance: this._behaviorData.BreakChance,
    TriggerDistance: this._behaviorData.TriggerDistance,
    RollTimer: this._behaviorData.RollTimer,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.HazardId !== undefined)
      this._behaviorData.HazardId = networkSyncData.props.HazardId;
    if (networkSyncData.props.RequiredKidItem !== undefined)
      this._behaviorData.RequiredKidItem = networkSyncData.props.RequiredKidItem;
    if (networkSyncData.props.WindupSeconds !== undefined)
      this._behaviorData.WindupSeconds = networkSyncData.props.WindupSeconds;
    if (networkSyncData.props.RollIntervalSeconds !== undefined)
      this._behaviorData.RollIntervalSeconds = networkSyncData.props.RollIntervalSeconds;
    if (networkSyncData.props.RollChance !== undefined)
      this._behaviorData.RollChance = networkSyncData.props.RollChance;
    if (networkSyncData.props.BreakChance !== undefined)
      this._behaviorData.BreakChance = networkSyncData.props.BreakChance;
    if (networkSyncData.props.TriggerDistance !== undefined)
      this._behaviorData.TriggerDistance = networkSyncData.props.TriggerDistance;
    if (networkSyncData.props.RollTimer !== undefined)
      this._behaviorData.RollTimer = networkSyncData.props.RollTimer;
  }

  // Properties:
  
  _getHazardId() {
    return this._behaviorData.HazardId !== undefined ? this._behaviorData.HazardId : "";
  }
  _setHazardId(newValue) {
    this._behaviorData.HazardId = newValue;
  }
  _getRequiredKidItem() {
    return this._behaviorData.RequiredKidItem !== undefined ? this._behaviorData.RequiredKidItem : "";
  }
  _setRequiredKidItem(newValue) {
    this._behaviorData.RequiredKidItem = newValue;
  }
  _getWindupSeconds() {
    return this._behaviorData.WindupSeconds !== undefined ? this._behaviorData.WindupSeconds : Number("3") || 0;
  }
  _setWindupSeconds(newValue) {
    this._behaviorData.WindupSeconds = newValue;
  }
  _getRollIntervalSeconds() {
    return this._behaviorData.RollIntervalSeconds !== undefined ? this._behaviorData.RollIntervalSeconds : Number("0") || 0;
  }
  _setRollIntervalSeconds(newValue) {
    this._behaviorData.RollIntervalSeconds = newValue;
  }
  _getRollChance() {
    return this._behaviorData.RollChance !== undefined ? this._behaviorData.RollChance : Number("0") || 0;
  }
  _setRollChance(newValue) {
    this._behaviorData.RollChance = newValue;
  }
  _getBreakChance() {
    return this._behaviorData.BreakChance !== undefined ? this._behaviorData.BreakChance : Number("0") || 0;
  }
  _setBreakChance(newValue) {
    this._behaviorData.BreakChance = newValue;
  }
  _getTriggerDistance() {
    return this._behaviorData.TriggerDistance !== undefined ? this._behaviorData.TriggerDistance : Number("0") || 0;
  }
  _setTriggerDistance(newValue) {
    this._behaviorData.TriggerDistance = newValue;
  }
  _getRollTimer() {
    return this._behaviorData.RollTimer !== undefined ? this._behaviorData.RollTimer : Number("0") || 0;
  }
  _setRollTimer(newValue) {
    this._behaviorData.RollTimer = newValue;
  }
}

/**
 * Shared data generated from Hazard
 */
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.SharedData = class HazardSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AlienBabysitter_HazardSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AlienBabysitter_HazardSharedData = new gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.SharedData(
      initialData
    );
  }
  return instanceContainer._AlienBabysitter_HazardSharedData;
}

// Methods:
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("ItemId") != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strFind("," + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRequiredKidItem() + ",", "," + eventsFunctionContext.getArgument("ItemId") + ",") >= 0);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItem = function(ItemId, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.NeedsItemContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHazardId();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardId = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.HazardIdContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHazardId(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardId = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetHazardIdContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRequiredKidItem();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItem = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RequiredKidItemContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRequiredKidItem(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItem = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRequiredKidItemContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWindupSeconds();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSeconds = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.WindupSecondsContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWindupSeconds(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSeconds = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetWindupSecondsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRollIntervalSeconds();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSeconds = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollIntervalSecondsContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRollIntervalSeconds(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSeconds = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollIntervalSecondsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRollChance();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChance = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollChanceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRollChance(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChance = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollChanceContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBreakChance();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChance = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.BreakChanceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBreakChance(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChance = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetBreakChanceContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTriggerDistance();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistance = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.TriggerDistanceContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTriggerDistance(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistance = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetTriggerDistanceContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRollTimer();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimer = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.RollTimerContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext = {};
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRollTimer(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimer = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.SetRollTimerContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__AlienBabysitter__Hazard.Hazard.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("AlienBabysitter::Hazard", gdjs.evtsExt__AlienBabysitter__Hazard.Hazard);
