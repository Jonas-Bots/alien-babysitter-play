
gdjs.evtsExt__AlienBabysitter__Toddler = gdjs.evtsExt__AlienBabysitter__Toddler || {};

/**
 * Behavior generated from Toddler
 */
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler = class Toddler extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.State = behaviorData.State !== undefined ? behaviorData.State : "Idle";
    this._behaviorData.StateTime = Number("0") || 0;
    this._behaviorData.StateDuration = Number("0") || 0;
    this._behaviorData.TargetKind = "";
    this._behaviorData.TargetName = "";
    this._behaviorData.TargetX = Number("0") || 0;
    this._behaviorData.TargetY = Number("0") || 0;
    this._behaviorData.HazardId = "";
    this._behaviorData.HasItem = false;
    this._behaviorData.HeldItemId = "";
    this._behaviorData.StuckTime = Number("0") || 0;
    this._behaviorData.LastX = Number("0") || 0;
    this._behaviorData.LastY = Number("0") || 0;
    this._behaviorData.PendingCallout = "";
    this._behaviorData.StuckCount = Number("0") || 0;
    this._behaviorData.StuckMinMove = behaviorData.StuckMinMove !== undefined ? behaviorData.StuckMinMove : Number("4") || 0;
    this._behaviorData.Mode = "Wander";
    this._behaviorData.Pool = "";
    this._behaviorData.BugNeed = "";
    this._behaviorData.BugLine = "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.State !== undefined)
      this._behaviorData.State = behaviorOverriding.State;
    if (behaviorOverriding.StateTime !== undefined)
      this._behaviorData.StateTime = behaviorOverriding.StateTime;
    if (behaviorOverriding.StateDuration !== undefined)
      this._behaviorData.StateDuration = behaviorOverriding.StateDuration;
    if (behaviorOverriding.TargetKind !== undefined)
      this._behaviorData.TargetKind = behaviorOverriding.TargetKind;
    if (behaviorOverriding.TargetName !== undefined)
      this._behaviorData.TargetName = behaviorOverriding.TargetName;
    if (behaviorOverriding.TargetX !== undefined)
      this._behaviorData.TargetX = behaviorOverriding.TargetX;
    if (behaviorOverriding.TargetY !== undefined)
      this._behaviorData.TargetY = behaviorOverriding.TargetY;
    if (behaviorOverriding.HazardId !== undefined)
      this._behaviorData.HazardId = behaviorOverriding.HazardId;
    if (behaviorOverriding.HasItem !== undefined)
      this._behaviorData.HasItem = behaviorOverriding.HasItem;
    if (behaviorOverriding.HeldItemId !== undefined)
      this._behaviorData.HeldItemId = behaviorOverriding.HeldItemId;
    if (behaviorOverriding.StuckTime !== undefined)
      this._behaviorData.StuckTime = behaviorOverriding.StuckTime;
    if (behaviorOverriding.LastX !== undefined)
      this._behaviorData.LastX = behaviorOverriding.LastX;
    if (behaviorOverriding.LastY !== undefined)
      this._behaviorData.LastY = behaviorOverriding.LastY;
    if (behaviorOverriding.PendingCallout !== undefined)
      this._behaviorData.PendingCallout = behaviorOverriding.PendingCallout;
    if (behaviorOverriding.StuckCount !== undefined)
      this._behaviorData.StuckCount = behaviorOverriding.StuckCount;
    if (behaviorOverriding.StuckMinMove !== undefined)
      this._behaviorData.StuckMinMove = behaviorOverriding.StuckMinMove;
    if (behaviorOverriding.Mode !== undefined)
      this._behaviorData.Mode = behaviorOverriding.Mode;
    if (behaviorOverriding.Pool !== undefined)
      this._behaviorData.Pool = behaviorOverriding.Pool;
    if (behaviorOverriding.BugNeed !== undefined)
      this._behaviorData.BugNeed = behaviorOverriding.BugNeed;
    if (behaviorOverriding.BugLine !== undefined)
      this._behaviorData.BugLine = behaviorOverriding.BugLine;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    State: this._behaviorData.State,
    StateTime: this._behaviorData.StateTime,
    StateDuration: this._behaviorData.StateDuration,
    TargetKind: this._behaviorData.TargetKind,
    TargetName: this._behaviorData.TargetName,
    TargetX: this._behaviorData.TargetX,
    TargetY: this._behaviorData.TargetY,
    HazardId: this._behaviorData.HazardId,
    HasItem: this._behaviorData.HasItem,
    HeldItemId: this._behaviorData.HeldItemId,
    StuckTime: this._behaviorData.StuckTime,
    LastX: this._behaviorData.LastX,
    LastY: this._behaviorData.LastY,
    PendingCallout: this._behaviorData.PendingCallout,
    StuckCount: this._behaviorData.StuckCount,
    StuckMinMove: this._behaviorData.StuckMinMove,
    Mode: this._behaviorData.Mode,
    Pool: this._behaviorData.Pool,
    BugNeed: this._behaviorData.BugNeed,
    BugLine: this._behaviorData.BugLine,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.State !== undefined)
      this._behaviorData.State = networkSyncData.props.State;
    if (networkSyncData.props.StateTime !== undefined)
      this._behaviorData.StateTime = networkSyncData.props.StateTime;
    if (networkSyncData.props.StateDuration !== undefined)
      this._behaviorData.StateDuration = networkSyncData.props.StateDuration;
    if (networkSyncData.props.TargetKind !== undefined)
      this._behaviorData.TargetKind = networkSyncData.props.TargetKind;
    if (networkSyncData.props.TargetName !== undefined)
      this._behaviorData.TargetName = networkSyncData.props.TargetName;
    if (networkSyncData.props.TargetX !== undefined)
      this._behaviorData.TargetX = networkSyncData.props.TargetX;
    if (networkSyncData.props.TargetY !== undefined)
      this._behaviorData.TargetY = networkSyncData.props.TargetY;
    if (networkSyncData.props.HazardId !== undefined)
      this._behaviorData.HazardId = networkSyncData.props.HazardId;
    if (networkSyncData.props.HasItem !== undefined)
      this._behaviorData.HasItem = networkSyncData.props.HasItem;
    if (networkSyncData.props.HeldItemId !== undefined)
      this._behaviorData.HeldItemId = networkSyncData.props.HeldItemId;
    if (networkSyncData.props.StuckTime !== undefined)
      this._behaviorData.StuckTime = networkSyncData.props.StuckTime;
    if (networkSyncData.props.LastX !== undefined)
      this._behaviorData.LastX = networkSyncData.props.LastX;
    if (networkSyncData.props.LastY !== undefined)
      this._behaviorData.LastY = networkSyncData.props.LastY;
    if (networkSyncData.props.PendingCallout !== undefined)
      this._behaviorData.PendingCallout = networkSyncData.props.PendingCallout;
    if (networkSyncData.props.StuckCount !== undefined)
      this._behaviorData.StuckCount = networkSyncData.props.StuckCount;
    if (networkSyncData.props.StuckMinMove !== undefined)
      this._behaviorData.StuckMinMove = networkSyncData.props.StuckMinMove;
    if (networkSyncData.props.Mode !== undefined)
      this._behaviorData.Mode = networkSyncData.props.Mode;
    if (networkSyncData.props.Pool !== undefined)
      this._behaviorData.Pool = networkSyncData.props.Pool;
    if (networkSyncData.props.BugNeed !== undefined)
      this._behaviorData.BugNeed = networkSyncData.props.BugNeed;
    if (networkSyncData.props.BugLine !== undefined)
      this._behaviorData.BugLine = networkSyncData.props.BugLine;
  }

  // Properties:
  
  _getState() {
    return this._behaviorData.State !== undefined ? this._behaviorData.State : "Idle";
  }
  _setState(newValue) {
    this._behaviorData.State = newValue;
  }
  _getStateTime() {
    return this._behaviorData.StateTime !== undefined ? this._behaviorData.StateTime : Number("0") || 0;
  }
  _setStateTime(newValue) {
    this._behaviorData.StateTime = newValue;
  }
  _getStateDuration() {
    return this._behaviorData.StateDuration !== undefined ? this._behaviorData.StateDuration : Number("0") || 0;
  }
  _setStateDuration(newValue) {
    this._behaviorData.StateDuration = newValue;
  }
  _getTargetKind() {
    return this._behaviorData.TargetKind !== undefined ? this._behaviorData.TargetKind : "";
  }
  _setTargetKind(newValue) {
    this._behaviorData.TargetKind = newValue;
  }
  _getTargetName() {
    return this._behaviorData.TargetName !== undefined ? this._behaviorData.TargetName : "";
  }
  _setTargetName(newValue) {
    this._behaviorData.TargetName = newValue;
  }
  _getTargetX() {
    return this._behaviorData.TargetX !== undefined ? this._behaviorData.TargetX : Number("0") || 0;
  }
  _setTargetX(newValue) {
    this._behaviorData.TargetX = newValue;
  }
  _getTargetY() {
    return this._behaviorData.TargetY !== undefined ? this._behaviorData.TargetY : Number("0") || 0;
  }
  _setTargetY(newValue) {
    this._behaviorData.TargetY = newValue;
  }
  _getHazardId() {
    return this._behaviorData.HazardId !== undefined ? this._behaviorData.HazardId : "";
  }
  _setHazardId(newValue) {
    this._behaviorData.HazardId = newValue;
  }
  _getHasItem() {
    return this._behaviorData.HasItem !== undefined ? this._behaviorData.HasItem : false;
  }
  _setHasItem(newValue) {
    this._behaviorData.HasItem = newValue;
  }
  _toggleHasItem() {
    this._setHasItem(!this._getHasItem());
  }
  _getHeldItemId() {
    return this._behaviorData.HeldItemId !== undefined ? this._behaviorData.HeldItemId : "";
  }
  _setHeldItemId(newValue) {
    this._behaviorData.HeldItemId = newValue;
  }
  _getStuckTime() {
    return this._behaviorData.StuckTime !== undefined ? this._behaviorData.StuckTime : Number("0") || 0;
  }
  _setStuckTime(newValue) {
    this._behaviorData.StuckTime = newValue;
  }
  _getLastX() {
    return this._behaviorData.LastX !== undefined ? this._behaviorData.LastX : Number("0") || 0;
  }
  _setLastX(newValue) {
    this._behaviorData.LastX = newValue;
  }
  _getLastY() {
    return this._behaviorData.LastY !== undefined ? this._behaviorData.LastY : Number("0") || 0;
  }
  _setLastY(newValue) {
    this._behaviorData.LastY = newValue;
  }
  _getPendingCallout() {
    return this._behaviorData.PendingCallout !== undefined ? this._behaviorData.PendingCallout : "";
  }
  _setPendingCallout(newValue) {
    this._behaviorData.PendingCallout = newValue;
  }
  _getStuckCount() {
    return this._behaviorData.StuckCount !== undefined ? this._behaviorData.StuckCount : Number("0") || 0;
  }
  _setStuckCount(newValue) {
    this._behaviorData.StuckCount = newValue;
  }
  _getStuckMinMove() {
    return this._behaviorData.StuckMinMove !== undefined ? this._behaviorData.StuckMinMove : Number("4") || 0;
  }
  _setStuckMinMove(newValue) {
    this._behaviorData.StuckMinMove = newValue;
  }
  _getMode() {
    return this._behaviorData.Mode !== undefined ? this._behaviorData.Mode : "Wander";
  }
  _setMode(newValue) {
    this._behaviorData.Mode = newValue;
  }
  _getPool() {
    return this._behaviorData.Pool !== undefined ? this._behaviorData.Pool : "";
  }
  _setPool(newValue) {
    this._behaviorData.Pool = newValue;
  }
  _getBugNeed() {
    return this._behaviorData.BugNeed !== undefined ? this._behaviorData.BugNeed : "";
  }
  _setBugNeed(newValue) {
    this._behaviorData.BugNeed = newValue;
  }
  _getBugLine() {
    return this._behaviorData.BugLine !== undefined ? this._behaviorData.BugLine : "";
  }
  _setBugLine(newValue) {
    this._behaviorData.BugLine = newValue;
  }
}

/**
 * Shared data generated from Toddler
 */
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.SharedData = class ToddlerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AlienBabysitter_ToddlerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AlienBabysitter_ToddlerSharedData = new gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.SharedData(
      initialData
    );
  }
  return instanceContainer._AlienBabysitter_ToddlerSharedData;
}

// Methods:
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStateTime(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStateTime()+(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getLayer()))))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "Wander");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStuckTime(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastX((( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterXInScene()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastY((( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterYInScene()))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Wander");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterYInScene()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastY()) >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStuckMinMove());
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStuckTime(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastX((( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterXInScene()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastY((( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterYInScene()))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Wander");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getCenterYInScene()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLastY()) < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStuckMinMove());
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStuckTime(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStuckTime()+(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1[0].getLayer()))))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState(eventsFunctionContext.getArgument("NewState"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStateTime(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStateDuration(eventsFunctionContext.getArgument("Duration"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStuckTime(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastX((( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects1[0].getCenterXInScene()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLastY((( gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects1[0].getCenterYInScene()))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTo = function(NewState, Duration, parentEventsFunctionContext) {

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
if (argName === "NewState") return NewState;
if (argName === "Duration") return Duration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateToContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStateDuration() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStateTime() >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStateDuration());
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinished = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateFinishedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.State = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetState = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStateTime();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTime = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateTimeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStateTime(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTime = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateTimeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStateDuration();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDuration = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StateDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStateDuration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDuration = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStateDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetKind();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKind = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetKindContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetKind(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKind = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetKindContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetName();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetName = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetNameContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetName(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetName = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetNameContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetX(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.TargetYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetY(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetTargetYContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHazardId();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardId = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HazardIdContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHazardId(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardId = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHazardIdContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasItem();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItem = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HasItemContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasItem(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasItem(true)
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItem = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHasItemContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHeldItemId();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemId = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.HeldItemIdContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHeldItemId(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemId = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetHeldItemIdContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStuckTime();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTime = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckTimeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStuckTime(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTime = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckTimeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPendingCallout();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCallout = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PendingCalloutContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPendingCallout(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCallout = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPendingCalloutContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStuckCount();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCount = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckCountContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStuckCount(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCount = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckCountContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStuckMinMove();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMove = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.StuckMinMoveContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStuckMinMove(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMove = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetStuckMinMoveContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMode();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.Mode = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.ModeContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMode(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetMode = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetModeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPool();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.Pool = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.PoolContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPool(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPool = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetPoolContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBugNeed();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugNeedContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBugNeed(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeed = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugNeedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBugLine();}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLine = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.BugLineContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext = {};
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBugLine(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLine = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Toddler.Toddler.prototype.SetBugLineContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("AlienBabysitter::Toddler", gdjs.evtsExt__AlienBabysitter__Toddler.Toddler);
