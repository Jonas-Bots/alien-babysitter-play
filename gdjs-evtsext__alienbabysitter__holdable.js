
gdjs.evtsExt__AlienBabysitter__Holdable = gdjs.evtsExt__AlienBabysitter__Holdable || {};

/**
 * Behavior generated from Holdable
 */
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable = class Holdable extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.ItemId = behaviorData.ItemId !== undefined ? behaviorData.ItemId : "";
    this._behaviorData.DisplayName = behaviorData.DisplayName !== undefined ? behaviorData.DisplayName : "";
    this._behaviorData.Small = behaviorData.Small !== undefined ? behaviorData.Small : true;
    this._behaviorData.Held = false;
    this._behaviorData.HeldByKid = false;
    this._behaviorData.Stored = false;
    this._behaviorData.StoredIn = "";
    this._behaviorData.HomeX = Number("0") || 0;
    this._behaviorData.HomeY = Number("0") || 0;
    this._behaviorData.HomeZ = Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Object3D !== undefined)
      this._behaviorData.Object3D = behaviorOverriding.Object3D;
    if (behaviorOverriding.ItemId !== undefined)
      this._behaviorData.ItemId = behaviorOverriding.ItemId;
    if (behaviorOverriding.DisplayName !== undefined)
      this._behaviorData.DisplayName = behaviorOverriding.DisplayName;
    if (behaviorOverriding.Small !== undefined)
      this._behaviorData.Small = behaviorOverriding.Small;
    if (behaviorOverriding.Held !== undefined)
      this._behaviorData.Held = behaviorOverriding.Held;
    if (behaviorOverriding.HeldByKid !== undefined)
      this._behaviorData.HeldByKid = behaviorOverriding.HeldByKid;
    if (behaviorOverriding.Stored !== undefined)
      this._behaviorData.Stored = behaviorOverriding.Stored;
    if (behaviorOverriding.StoredIn !== undefined)
      this._behaviorData.StoredIn = behaviorOverriding.StoredIn;
    if (behaviorOverriding.HomeX !== undefined)
      this._behaviorData.HomeX = behaviorOverriding.HomeX;
    if (behaviorOverriding.HomeY !== undefined)
      this._behaviorData.HomeY = behaviorOverriding.HomeY;
    if (behaviorOverriding.HomeZ !== undefined)
      this._behaviorData.HomeZ = behaviorOverriding.HomeZ;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    ItemId: this._behaviorData.ItemId,
    DisplayName: this._behaviorData.DisplayName,
    Small: this._behaviorData.Small,
    Held: this._behaviorData.Held,
    HeldByKid: this._behaviorData.HeldByKid,
    Stored: this._behaviorData.Stored,
    StoredIn: this._behaviorData.StoredIn,
    HomeX: this._behaviorData.HomeX,
    HomeY: this._behaviorData.HomeY,
    HomeZ: this._behaviorData.HomeZ,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.ItemId !== undefined)
      this._behaviorData.ItemId = networkSyncData.props.ItemId;
    if (networkSyncData.props.DisplayName !== undefined)
      this._behaviorData.DisplayName = networkSyncData.props.DisplayName;
    if (networkSyncData.props.Small !== undefined)
      this._behaviorData.Small = networkSyncData.props.Small;
    if (networkSyncData.props.Held !== undefined)
      this._behaviorData.Held = networkSyncData.props.Held;
    if (networkSyncData.props.HeldByKid !== undefined)
      this._behaviorData.HeldByKid = networkSyncData.props.HeldByKid;
    if (networkSyncData.props.Stored !== undefined)
      this._behaviorData.Stored = networkSyncData.props.Stored;
    if (networkSyncData.props.StoredIn !== undefined)
      this._behaviorData.StoredIn = networkSyncData.props.StoredIn;
    if (networkSyncData.props.HomeX !== undefined)
      this._behaviorData.HomeX = networkSyncData.props.HomeX;
    if (networkSyncData.props.HomeY !== undefined)
      this._behaviorData.HomeY = networkSyncData.props.HomeY;
    if (networkSyncData.props.HomeZ !== undefined)
      this._behaviorData.HomeZ = networkSyncData.props.HomeZ;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getItemId() {
    return this._behaviorData.ItemId !== undefined ? this._behaviorData.ItemId : "";
  }
  _setItemId(newValue) {
    this._behaviorData.ItemId = newValue;
  }
  _getDisplayName() {
    return this._behaviorData.DisplayName !== undefined ? this._behaviorData.DisplayName : "";
  }
  _setDisplayName(newValue) {
    this._behaviorData.DisplayName = newValue;
  }
  _getSmall() {
    return this._behaviorData.Small !== undefined ? this._behaviorData.Small : true;
  }
  _setSmall(newValue) {
    this._behaviorData.Small = newValue;
  }
  _toggleSmall() {
    this._setSmall(!this._getSmall());
  }
  _getHeld() {
    return this._behaviorData.Held !== undefined ? this._behaviorData.Held : false;
  }
  _setHeld(newValue) {
    this._behaviorData.Held = newValue;
  }
  _toggleHeld() {
    this._setHeld(!this._getHeld());
  }
  _getHeldByKid() {
    return this._behaviorData.HeldByKid !== undefined ? this._behaviorData.HeldByKid : false;
  }
  _setHeldByKid(newValue) {
    this._behaviorData.HeldByKid = newValue;
  }
  _toggleHeldByKid() {
    this._setHeldByKid(!this._getHeldByKid());
  }
  _getStored() {
    return this._behaviorData.Stored !== undefined ? this._behaviorData.Stored : false;
  }
  _setStored(newValue) {
    this._behaviorData.Stored = newValue;
  }
  _toggleStored() {
    this._setStored(!this._getStored());
  }
  _getStoredIn() {
    return this._behaviorData.StoredIn !== undefined ? this._behaviorData.StoredIn : "";
  }
  _setStoredIn(newValue) {
    this._behaviorData.StoredIn = newValue;
  }
  _getHomeX() {
    return this._behaviorData.HomeX !== undefined ? this._behaviorData.HomeX : Number("0") || 0;
  }
  _setHomeX(newValue) {
    this._behaviorData.HomeX = newValue;
  }
  _getHomeY() {
    return this._behaviorData.HomeY !== undefined ? this._behaviorData.HomeY : Number("0") || 0;
  }
  _setHomeY(newValue) {
    this._behaviorData.HomeY = newValue;
  }
  _getHomeZ() {
    return this._behaviorData.HomeZ !== undefined ? this._behaviorData.HomeZ : Number("0") || 0;
  }
  _setHomeZ(newValue) {
    this._behaviorData.HomeZ = newValue;
  }
}

/**
 * Shared data generated from Holdable
 */
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.SharedData = class HoldableSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AlienBabysitter_HoldableSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AlienBabysitter_HoldableSharedData = new gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.SharedData(
      initialData
    );
  }
  return instanceContainer._AlienBabysitter_HoldableSharedData;
}

// Methods:
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHomeX((( gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1[0].getCenterXInScene()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHomeY((( gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1[0].getCenterYInScene()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHomeZ((( gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ()))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHome = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.RememberHomeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("ParkZ"));
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeld(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeldByKid(false)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.Park = function(ParkZ, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "ParkZ") return ParkZ;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ParkContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1[i].setCenterPositionInScene(eventsFunctionContext.getArgument("X"),eventsFunctionContext.getArgument("Y"));
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getArgument("Z"));
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationX(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(0);
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeld(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeldByKid(false)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAt = function(X, Y, Z, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.PlaceAtContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1[i].setCenterPositionInScene(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHomeX(),eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHomeY());
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHomeZ());
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationX(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(0);
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeld(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeldByKid(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStored(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStoredIn("")
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHome = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ResetToHomeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getItemId();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemId = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.ItemIdContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setItemId(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemId = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetItemIdContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisplayName();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayName = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.DisplayNameContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDisplayName(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayName = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetDisplayNameContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSmall();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.Small = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SmallContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSmall(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSmall(true)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmall = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetSmallContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeld();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.Held = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeld(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeld(true)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeld = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeldByKid();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKid = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HeldByKidContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeldByKid(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeldByKid(true)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKid = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHeldByKidContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStored();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.Stored = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStored(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStored(true)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStored = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStoredIn();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredIn = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.StoredInContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStoredIn(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredIn = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetStoredInContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHomeX();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeX = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHomeX(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeX = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHomeY();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeY = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHomeY(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeY = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeYContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHomeZ();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZ = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.HomeZContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext = {};
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHomeZ(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZ = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
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

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.SetHomeZContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__AlienBabysitter__Holdable.Holdable.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("AlienBabysitter::Holdable", gdjs.evtsExt__AlienBabysitter__Holdable.Holdable);
