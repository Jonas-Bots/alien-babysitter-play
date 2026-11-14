
gdjs.evtsExt__AlienBabysitter__Iris = gdjs.evtsExt__AlienBabysitter__Iris || {};

/**
 * Behavior generated from Iris transition
 */
gdjs.evtsExt__AlienBabysitter__Iris.Iris = class Iris extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AlienBabysitter__Iris.Iris.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Phase = "";
    this._behaviorData.T = Number("0") || 0;
    this._behaviorData.Dur = Number("0.35") || 0;
    this._behaviorData.CX = Number("0") || 0;
    this._behaviorData.CY = Number("0") || 0;
    this._behaviorData.R = Number("0") || 0;
    this._behaviorData.Rf = Number("0") || 0;
    this._behaviorData.Bounce = Number("2.2") || 0;
    this._behaviorData.Margin = Number("8") || 0;
    this._behaviorData.Hold = Number("0.11") || 0;
    this._behaviorData.Split = Number("0.8") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Phase !== undefined)
      this._behaviorData.Phase = behaviorOverriding.Phase;
    if (behaviorOverriding.T !== undefined)
      this._behaviorData.T = behaviorOverriding.T;
    if (behaviorOverriding.Dur !== undefined)
      this._behaviorData.Dur = behaviorOverriding.Dur;
    if (behaviorOverriding.CX !== undefined)
      this._behaviorData.CX = behaviorOverriding.CX;
    if (behaviorOverriding.CY !== undefined)
      this._behaviorData.CY = behaviorOverriding.CY;
    if (behaviorOverriding.R !== undefined)
      this._behaviorData.R = behaviorOverriding.R;
    if (behaviorOverriding.Rf !== undefined)
      this._behaviorData.Rf = behaviorOverriding.Rf;
    if (behaviorOverriding.Bounce !== undefined)
      this._behaviorData.Bounce = behaviorOverriding.Bounce;
    if (behaviorOverriding.Margin !== undefined)
      this._behaviorData.Margin = behaviorOverriding.Margin;
    if (behaviorOverriding.Hold !== undefined)
      this._behaviorData.Hold = behaviorOverriding.Hold;
    if (behaviorOverriding.Split !== undefined)
      this._behaviorData.Split = behaviorOverriding.Split;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Phase: this._behaviorData.Phase,
    T: this._behaviorData.T,
    Dur: this._behaviorData.Dur,
    CX: this._behaviorData.CX,
    CY: this._behaviorData.CY,
    R: this._behaviorData.R,
    Rf: this._behaviorData.Rf,
    Bounce: this._behaviorData.Bounce,
    Margin: this._behaviorData.Margin,
    Hold: this._behaviorData.Hold,
    Split: this._behaviorData.Split,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Phase !== undefined)
      this._behaviorData.Phase = networkSyncData.props.Phase;
    if (networkSyncData.props.T !== undefined)
      this._behaviorData.T = networkSyncData.props.T;
    if (networkSyncData.props.Dur !== undefined)
      this._behaviorData.Dur = networkSyncData.props.Dur;
    if (networkSyncData.props.CX !== undefined)
      this._behaviorData.CX = networkSyncData.props.CX;
    if (networkSyncData.props.CY !== undefined)
      this._behaviorData.CY = networkSyncData.props.CY;
    if (networkSyncData.props.R !== undefined)
      this._behaviorData.R = networkSyncData.props.R;
    if (networkSyncData.props.Rf !== undefined)
      this._behaviorData.Rf = networkSyncData.props.Rf;
    if (networkSyncData.props.Bounce !== undefined)
      this._behaviorData.Bounce = networkSyncData.props.Bounce;
    if (networkSyncData.props.Margin !== undefined)
      this._behaviorData.Margin = networkSyncData.props.Margin;
    if (networkSyncData.props.Hold !== undefined)
      this._behaviorData.Hold = networkSyncData.props.Hold;
    if (networkSyncData.props.Split !== undefined)
      this._behaviorData.Split = networkSyncData.props.Split;
  }

  // Properties:
  
  _getPhase() {
    return this._behaviorData.Phase !== undefined ? this._behaviorData.Phase : "";
  }
  _setPhase(newValue) {
    this._behaviorData.Phase = newValue;
  }
  _getT() {
    return this._behaviorData.T !== undefined ? this._behaviorData.T : Number("0") || 0;
  }
  _setT(newValue) {
    this._behaviorData.T = newValue;
  }
  _getDur() {
    return this._behaviorData.Dur !== undefined ? this._behaviorData.Dur : Number("0.35") || 0;
  }
  _setDur(newValue) {
    this._behaviorData.Dur = newValue;
  }
  _getCX() {
    return this._behaviorData.CX !== undefined ? this._behaviorData.CX : Number("0") || 0;
  }
  _setCX(newValue) {
    this._behaviorData.CX = newValue;
  }
  _getCY() {
    return this._behaviorData.CY !== undefined ? this._behaviorData.CY : Number("0") || 0;
  }
  _setCY(newValue) {
    this._behaviorData.CY = newValue;
  }
  _getR() {
    return this._behaviorData.R !== undefined ? this._behaviorData.R : Number("0") || 0;
  }
  _setR(newValue) {
    this._behaviorData.R = newValue;
  }
  _getRf() {
    return this._behaviorData.Rf !== undefined ? this._behaviorData.Rf : Number("0") || 0;
  }
  _setRf(newValue) {
    this._behaviorData.Rf = newValue;
  }
  _getBounce() {
    return this._behaviorData.Bounce !== undefined ? this._behaviorData.Bounce : Number("2.2") || 0;
  }
  _setBounce(newValue) {
    this._behaviorData.Bounce = newValue;
  }
  _getMargin() {
    return this._behaviorData.Margin !== undefined ? this._behaviorData.Margin : Number("8") || 0;
  }
  _setMargin(newValue) {
    this._behaviorData.Margin = newValue;
  }
  _getHold() {
    return this._behaviorData.Hold !== undefined ? this._behaviorData.Hold : Number("0.11") || 0;
  }
  _setHold(newValue) {
    this._behaviorData.Hold = newValue;
  }
  _getSplit() {
    return this._behaviorData.Split !== undefined ? this._behaviorData.Split : Number("0.8") || 0;
  }
  _setSplit(newValue) {
    this._behaviorData.Split = newValue;
  }
}

/**
 * Shared data generated from Iris transition
 */
gdjs.evtsExt__AlienBabysitter__Iris.Iris.SharedData = class IrisSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AlienBabysitter__Iris.Iris.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AlienBabysitter_IrisSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AlienBabysitter_IrisSharedData = new gdjs.evtsExt__AlienBabysitter__Iris.Iris.SharedData(
      initialData
    );
  }
  return instanceContainer._AlienBabysitter_IrisSharedData;
}

// Methods:
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setT(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT()+(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRf(Math.sqrt(Math.pow(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCX(), gdjs.evtTools.camera.getCameraWidth(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1[0].getLayer()), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCX()), 2) + Math.pow(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCY(), gdjs.evtTools.camera.getCameraHeight(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1[0].getLayer()), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCY()), 2)) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMargin())
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "Close");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDur(), 0, 1) < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSplit());
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setR(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHold() * 0.35, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHold() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHold()) * ((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBounce() + 1) * Math.pow((gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDur(), 0, 1) / Math.max(0.01, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSplit())) - 1, 3) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBounce() * Math.pow((gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDur(), 0, 1) / Math.max(0.01, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSplit())) - 1, 2))))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "Close");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDur(), 0, 1) >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSplit());
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setR(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHold() * (1 - ((gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDur(), 0, 1) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSplit()) / Math.max(0.01, 1 - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSplit())) * ((gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDur(), 0, 1) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSplit()) / Math.max(0.01, 1 - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSplit()))))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "Close");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT() >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDur());
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPhase("Shut")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setR(0)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "Shut");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setR(0)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "Open");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setR(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf() * (1 - Math.pow(1 - gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDur(), 0, 1), 3)))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "Open");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getT() >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDur());
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPhase("")
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1[i].setFillOpacity(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1[i].setOutlineColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1[i].setOutlineOpacity(255);
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1[i].setOutlineSize(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf() * 2);
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1[i].drawCircle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCY(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getR() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf());
}
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext = {};
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_iris", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("Audio").getChild("IrisVolume")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Settings").getChild("SfxVolume")) / 100 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Settings").getChild("MasterVolume")) / 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPhase("Close")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setT(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDur(Math.max(0.01, eventsFunctionContext.getArgument("Seconds_")))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCX(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("CX_"), 0, gdjs.evtTools.camera.getCameraWidth(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1[0].getLayer()), 0)))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCY(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("CY_"), 0, gdjs.evtTools.camera.getCameraHeight(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1[0].getLayer()), 0)))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMargin(eventsFunctionContext.getArgument("Margin_"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBounce(eventsFunctionContext.getArgument("Bounce_"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHold(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("Hold_"), 0, 1))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSplit(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("Split_"), 0.05, 0.95))
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRf(Math.sqrt(Math.pow(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCX(), gdjs.evtTools.camera.getCameraWidth(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1[0].getLayer()), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCX()), 2) + Math.pow(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCY(), gdjs.evtTools.camera.getCameraHeight(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1[0].getLayer()), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCY()), 2)) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMargin())
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setR(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf())
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.Close = function(CX_, CY_, Seconds_, Bounce_, Margin_, Hold_, Split_, parentEventsFunctionContext) {

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
if (argName === "CX_") return CX_;
if (argName === "CY_") return CY_;
if (argName === "Seconds_") return Seconds_;
if (argName === "Bounce_") return Bounce_;
if (argName === "Margin_") return Margin_;
if (argName === "Hold_") return Hold_;
if (argName === "Split_") return Split_;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.CloseContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext = {};
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_iris", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("Audio").getChild("IrisVolume")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Settings").getChild("SfxVolume")) / 100 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Settings").getChild("MasterVolume")) / 100, 0.85);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPhase("Open")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setT(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDur(Math.max(0.01, eventsFunctionContext.getArgument("Seconds_")))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCX(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("CX_"), 0, gdjs.evtTools.camera.getCameraWidth(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1[0].getLayer()), 0)))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCY(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("CY_"), 0, gdjs.evtTools.camera.getCameraHeight(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1[0].getLayer()), 0)))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMargin(eventsFunctionContext.getArgument("Margin_"))
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setR(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRf(Math.sqrt(Math.pow(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCX(), gdjs.evtTools.camera.getCameraWidth(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1[0].getLayer()), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCX()), 2) + Math.pow(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCY(), gdjs.evtTools.camera.getCameraHeight(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1[0].getLayer()), 0) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCY()), 2)) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMargin())
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1[i].setFillOpacity(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1[i].setOutlineColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1[i].setOutlineOpacity(255);
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1[i].setOutlineSize(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf() * 2);
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1[i].drawCircle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCY(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRf());
}
}
}

}


};

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.Open = function(CX_, CY_, Seconds_, Margin_, parentEventsFunctionContext) {

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
if (argName === "CX_") return CX_;
if (argName === "CY_") return CY_;
if (argName === "Seconds_") return Seconds_;
if (argName === "Margin_") return Margin_;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.OpenContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext = {};
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.Busy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.BusyContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext = {};
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPhase() == "Shut");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.Shut = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__Iris.Iris.prototype.ShutContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("AlienBabysitter::Iris", gdjs.evtsExt__AlienBabysitter__Iris.Iris);
