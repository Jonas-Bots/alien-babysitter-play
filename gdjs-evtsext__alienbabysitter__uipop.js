
gdjs.evtsExt__AlienBabysitter__UIPop = gdjs.evtsExt__AlienBabysitter__UIPop || {};

/**
 * Behavior generated from UI pop
 */
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop = class UIPop extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.S = Number("1") || 0;
    this._behaviorData.Target = Number("1") || 0;
    this._behaviorData.Speed = Number("16") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.S !== undefined)
      this._behaviorData.S = behaviorOverriding.S;
    if (behaviorOverriding.Target !== undefined)
      this._behaviorData.Target = behaviorOverriding.Target;
    if (behaviorOverriding.Speed !== undefined)
      this._behaviorData.Speed = behaviorOverriding.Speed;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    S: this._behaviorData.S,
    Target: this._behaviorData.Target,
    Speed: this._behaviorData.Speed,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.S !== undefined)
      this._behaviorData.S = networkSyncData.props.S;
    if (networkSyncData.props.Target !== undefined)
      this._behaviorData.Target = networkSyncData.props.Target;
    if (networkSyncData.props.Speed !== undefined)
      this._behaviorData.Speed = networkSyncData.props.Speed;
  }

  // Properties:
  
  _getS() {
    return this._behaviorData.S !== undefined ? this._behaviorData.S : Number("1") || 0;
  }
  _setS(newValue) {
    this._behaviorData.S = newValue;
  }
  _getTarget() {
    return this._behaviorData.Target !== undefined ? this._behaviorData.Target : Number("1") || 0;
  }
  _setTarget(newValue) {
    this._behaviorData.Target = newValue;
  }
  _getSpeed() {
    return this._behaviorData.Speed !== undefined ? this._behaviorData.Speed : Number("16") || 0;
  }
  _setSpeed(newValue) {
    this._behaviorData.Speed = newValue;
  }
}

/**
 * Shared data generated from UI pop
 */
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.SharedData = class UIPopSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AlienBabysitter_UIPopSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AlienBabysitter_UIPopSharedData = new gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.SharedData(
      initialData
    );
  }
  return instanceContainer._AlienBabysitter_UIPopSharedData;
}

// Methods:
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setS(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getS()+((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getS()) * Math.min(1, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpeed())))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext = {};
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTarget(eventsFunctionContext.getArgument("Target_"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpeed(eventsFunctionContext.getArgument("Speed_"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTarget = function(Target_, Speed_, parentEventsFunctionContext) {

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
if (argName === "Target_") return Target_;
if (argName === "Speed_") return Speed_;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.SetTargetContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext = {};
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getS();}
}

}


};

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.Scale = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__UIPop.UIPop.prototype.ScaleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("AlienBabysitter::UIPop", gdjs.evtsExt__AlienBabysitter__UIPop.UIPop);
