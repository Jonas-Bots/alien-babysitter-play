
gdjs.evtsExt__AlienBabysitter__TypeIn = gdjs.evtsExt__AlienBabysitter__TypeIn || {};

/**
 * Behavior generated from Type in
 */
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn = class TypeIn extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Mode = behaviorData.Mode !== undefined ? behaviorData.Mode : "Type";
    this._behaviorData.Strength = behaviorData.Strength !== undefined ? behaviorData.Strength : Number("0") || 0;
    this._behaviorData.Cps = Number("45") || 0;
    this._behaviorData.MaxSeconds = Number("0.9") || 0;
    this._behaviorData.FullAmp = Number("3.2") || 0;
    this._behaviorData.MildAmp = Number("1.1") || 0;
    this._behaviorData.ShakeSeconds = Number("0.3") || 0;
    this._behaviorData.MildChars = Number("24") || 0;
    this._behaviorData.AngleShare = Number("0.6") || 0;
    this._behaviorData.Target = "";
    this._behaviorData.Shown = false;
    this._behaviorData.Typing = false;
    this._behaviorData.Pfx = false;
    this._behaviorData.Revealed = Number("0") || 0;
    this._behaviorData.RevInt = Number("0") || 0;
    this._behaviorData.Len = Number("0") || 0;
    this._behaviorData.AmpBase = Number("0") || 0;
    this._behaviorData.OffX = Number("0") || 0;
    this._behaviorData.OffY = Number("0") || 0;
    this._behaviorData.OffA = Number("0") || 0;
    this._behaviorData.LandT = Number("99") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Mode !== undefined)
      this._behaviorData.Mode = behaviorOverriding.Mode;
    if (behaviorOverriding.Strength !== undefined)
      this._behaviorData.Strength = behaviorOverriding.Strength;
    if (behaviorOverriding.Cps !== undefined)
      this._behaviorData.Cps = behaviorOverriding.Cps;
    if (behaviorOverriding.MaxSeconds !== undefined)
      this._behaviorData.MaxSeconds = behaviorOverriding.MaxSeconds;
    if (behaviorOverriding.FullAmp !== undefined)
      this._behaviorData.FullAmp = behaviorOverriding.FullAmp;
    if (behaviorOverriding.MildAmp !== undefined)
      this._behaviorData.MildAmp = behaviorOverriding.MildAmp;
    if (behaviorOverriding.ShakeSeconds !== undefined)
      this._behaviorData.ShakeSeconds = behaviorOverriding.ShakeSeconds;
    if (behaviorOverriding.MildChars !== undefined)
      this._behaviorData.MildChars = behaviorOverriding.MildChars;
    if (behaviorOverriding.AngleShare !== undefined)
      this._behaviorData.AngleShare = behaviorOverriding.AngleShare;
    if (behaviorOverriding.Target !== undefined)
      this._behaviorData.Target = behaviorOverriding.Target;
    if (behaviorOverriding.Shown !== undefined)
      this._behaviorData.Shown = behaviorOverriding.Shown;
    if (behaviorOverriding.Typing !== undefined)
      this._behaviorData.Typing = behaviorOverriding.Typing;
    if (behaviorOverriding.Pfx !== undefined)
      this._behaviorData.Pfx = behaviorOverriding.Pfx;
    if (behaviorOverriding.Revealed !== undefined)
      this._behaviorData.Revealed = behaviorOverriding.Revealed;
    if (behaviorOverriding.RevInt !== undefined)
      this._behaviorData.RevInt = behaviorOverriding.RevInt;
    if (behaviorOverriding.Len !== undefined)
      this._behaviorData.Len = behaviorOverriding.Len;
    if (behaviorOverriding.AmpBase !== undefined)
      this._behaviorData.AmpBase = behaviorOverriding.AmpBase;
    if (behaviorOverriding.OffX !== undefined)
      this._behaviorData.OffX = behaviorOverriding.OffX;
    if (behaviorOverriding.OffY !== undefined)
      this._behaviorData.OffY = behaviorOverriding.OffY;
    if (behaviorOverriding.OffA !== undefined)
      this._behaviorData.OffA = behaviorOverriding.OffA;
    if (behaviorOverriding.LandT !== undefined)
      this._behaviorData.LandT = behaviorOverriding.LandT;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Mode: this._behaviorData.Mode,
    Strength: this._behaviorData.Strength,
    Cps: this._behaviorData.Cps,
    MaxSeconds: this._behaviorData.MaxSeconds,
    FullAmp: this._behaviorData.FullAmp,
    MildAmp: this._behaviorData.MildAmp,
    ShakeSeconds: this._behaviorData.ShakeSeconds,
    MildChars: this._behaviorData.MildChars,
    AngleShare: this._behaviorData.AngleShare,
    Target: this._behaviorData.Target,
    Shown: this._behaviorData.Shown,
    Typing: this._behaviorData.Typing,
    Pfx: this._behaviorData.Pfx,
    Revealed: this._behaviorData.Revealed,
    RevInt: this._behaviorData.RevInt,
    Len: this._behaviorData.Len,
    AmpBase: this._behaviorData.AmpBase,
    OffX: this._behaviorData.OffX,
    OffY: this._behaviorData.OffY,
    OffA: this._behaviorData.OffA,
    LandT: this._behaviorData.LandT,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Mode !== undefined)
      this._behaviorData.Mode = networkSyncData.props.Mode;
    if (networkSyncData.props.Strength !== undefined)
      this._behaviorData.Strength = networkSyncData.props.Strength;
    if (networkSyncData.props.Cps !== undefined)
      this._behaviorData.Cps = networkSyncData.props.Cps;
    if (networkSyncData.props.MaxSeconds !== undefined)
      this._behaviorData.MaxSeconds = networkSyncData.props.MaxSeconds;
    if (networkSyncData.props.FullAmp !== undefined)
      this._behaviorData.FullAmp = networkSyncData.props.FullAmp;
    if (networkSyncData.props.MildAmp !== undefined)
      this._behaviorData.MildAmp = networkSyncData.props.MildAmp;
    if (networkSyncData.props.ShakeSeconds !== undefined)
      this._behaviorData.ShakeSeconds = networkSyncData.props.ShakeSeconds;
    if (networkSyncData.props.MildChars !== undefined)
      this._behaviorData.MildChars = networkSyncData.props.MildChars;
    if (networkSyncData.props.AngleShare !== undefined)
      this._behaviorData.AngleShare = networkSyncData.props.AngleShare;
    if (networkSyncData.props.Target !== undefined)
      this._behaviorData.Target = networkSyncData.props.Target;
    if (networkSyncData.props.Shown !== undefined)
      this._behaviorData.Shown = networkSyncData.props.Shown;
    if (networkSyncData.props.Typing !== undefined)
      this._behaviorData.Typing = networkSyncData.props.Typing;
    if (networkSyncData.props.Pfx !== undefined)
      this._behaviorData.Pfx = networkSyncData.props.Pfx;
    if (networkSyncData.props.Revealed !== undefined)
      this._behaviorData.Revealed = networkSyncData.props.Revealed;
    if (networkSyncData.props.RevInt !== undefined)
      this._behaviorData.RevInt = networkSyncData.props.RevInt;
    if (networkSyncData.props.Len !== undefined)
      this._behaviorData.Len = networkSyncData.props.Len;
    if (networkSyncData.props.AmpBase !== undefined)
      this._behaviorData.AmpBase = networkSyncData.props.AmpBase;
    if (networkSyncData.props.OffX !== undefined)
      this._behaviorData.OffX = networkSyncData.props.OffX;
    if (networkSyncData.props.OffY !== undefined)
      this._behaviorData.OffY = networkSyncData.props.OffY;
    if (networkSyncData.props.OffA !== undefined)
      this._behaviorData.OffA = networkSyncData.props.OffA;
    if (networkSyncData.props.LandT !== undefined)
      this._behaviorData.LandT = networkSyncData.props.LandT;
  }

  // Properties:
  
  _getMode() {
    return this._behaviorData.Mode !== undefined ? this._behaviorData.Mode : "Type";
  }
  _setMode(newValue) {
    this._behaviorData.Mode = newValue;
  }
  _getStrength() {
    return this._behaviorData.Strength !== undefined ? this._behaviorData.Strength : Number("0") || 0;
  }
  _setStrength(newValue) {
    this._behaviorData.Strength = newValue;
  }
  _getCps() {
    return this._behaviorData.Cps !== undefined ? this._behaviorData.Cps : Number("45") || 0;
  }
  _setCps(newValue) {
    this._behaviorData.Cps = newValue;
  }
  _getMaxSeconds() {
    return this._behaviorData.MaxSeconds !== undefined ? this._behaviorData.MaxSeconds : Number("0.9") || 0;
  }
  _setMaxSeconds(newValue) {
    this._behaviorData.MaxSeconds = newValue;
  }
  _getFullAmp() {
    return this._behaviorData.FullAmp !== undefined ? this._behaviorData.FullAmp : Number("3.2") || 0;
  }
  _setFullAmp(newValue) {
    this._behaviorData.FullAmp = newValue;
  }
  _getMildAmp() {
    return this._behaviorData.MildAmp !== undefined ? this._behaviorData.MildAmp : Number("1.1") || 0;
  }
  _setMildAmp(newValue) {
    this._behaviorData.MildAmp = newValue;
  }
  _getShakeSeconds() {
    return this._behaviorData.ShakeSeconds !== undefined ? this._behaviorData.ShakeSeconds : Number("0.3") || 0;
  }
  _setShakeSeconds(newValue) {
    this._behaviorData.ShakeSeconds = newValue;
  }
  _getMildChars() {
    return this._behaviorData.MildChars !== undefined ? this._behaviorData.MildChars : Number("24") || 0;
  }
  _setMildChars(newValue) {
    this._behaviorData.MildChars = newValue;
  }
  _getAngleShare() {
    return this._behaviorData.AngleShare !== undefined ? this._behaviorData.AngleShare : Number("0.6") || 0;
  }
  _setAngleShare(newValue) {
    this._behaviorData.AngleShare = newValue;
  }
  _getTarget() {
    return this._behaviorData.Target !== undefined ? this._behaviorData.Target : "";
  }
  _setTarget(newValue) {
    this._behaviorData.Target = newValue;
  }
  _getShown() {
    return this._behaviorData.Shown !== undefined ? this._behaviorData.Shown : false;
  }
  _setShown(newValue) {
    this._behaviorData.Shown = newValue;
  }
  _toggleShown() {
    this._setShown(!this._getShown());
  }
  _getTyping() {
    return this._behaviorData.Typing !== undefined ? this._behaviorData.Typing : false;
  }
  _setTyping(newValue) {
    this._behaviorData.Typing = newValue;
  }
  _toggleTyping() {
    this._setTyping(!this._getTyping());
  }
  _getPfx() {
    return this._behaviorData.Pfx !== undefined ? this._behaviorData.Pfx : false;
  }
  _setPfx(newValue) {
    this._behaviorData.Pfx = newValue;
  }
  _togglePfx() {
    this._setPfx(!this._getPfx());
  }
  _getRevealed() {
    return this._behaviorData.Revealed !== undefined ? this._behaviorData.Revealed : Number("0") || 0;
  }
  _setRevealed(newValue) {
    this._behaviorData.Revealed = newValue;
  }
  _getRevInt() {
    return this._behaviorData.RevInt !== undefined ? this._behaviorData.RevInt : Number("0") || 0;
  }
  _setRevInt(newValue) {
    this._behaviorData.RevInt = newValue;
  }
  _getLen() {
    return this._behaviorData.Len !== undefined ? this._behaviorData.Len : Number("0") || 0;
  }
  _setLen(newValue) {
    this._behaviorData.Len = newValue;
  }
  _getAmpBase() {
    return this._behaviorData.AmpBase !== undefined ? this._behaviorData.AmpBase : Number("0") || 0;
  }
  _setAmpBase(newValue) {
    this._behaviorData.AmpBase = newValue;
  }
  _getOffX() {
    return this._behaviorData.OffX !== undefined ? this._behaviorData.OffX : Number("0") || 0;
  }
  _setOffX(newValue) {
    this._behaviorData.OffX = newValue;
  }
  _getOffY() {
    return this._behaviorData.OffY !== undefined ? this._behaviorData.OffY : Number("0") || 0;
  }
  _setOffY(newValue) {
    this._behaviorData.OffY = newValue;
  }
  _getOffA() {
    return this._behaviorData.OffA !== undefined ? this._behaviorData.OffA : Number("0") || 0;
  }
  _setOffA(newValue) {
    this._behaviorData.OffA = newValue;
  }
  _getLandT() {
    return this._behaviorData.LandT !== undefined ? this._behaviorData.LandT : Number("99") || 0;
  }
  _setLandT(newValue) {
    this._behaviorData.LandT = newValue;
  }
}

/**
 * Shared data generated from Type in
 */
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.SharedData = class TypeInSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AlienBabysitter_TypeInSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AlienBabysitter_TypeInSharedData = new gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.SharedData(
      initialData
    );
  }
  return instanceContainer._AlienBabysitter_TypeInSharedData;
}

// Methods:
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1[i].getAngle() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffA()));
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffX(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffY(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffA(0)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTyping();
}
if (isConditionTrue_0) {
{/* Mismatched object type - skipped. */}
}

}


};

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMode() == "None");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTyping(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandT(99)
}
}

}


};gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (0 == 0);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPfx(true)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMode() == "Type");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPfx();
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTarget("")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLen(gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTyping(true)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMode() == "Type");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPfx();
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTarget("")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLen(gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevealed(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevInt(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTyping(true)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandT(0)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMode() == "Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTarget("")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLen(gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevealed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen())
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevInt(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen())
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTyping(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandT(0)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMode() == "Appear");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMode() == "None");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTarget("")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLen(gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevealed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen())
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevInt(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen())
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTyping(false)
}
}

}


};gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStrength() > 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmpBase(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStrength())
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStrength() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen() <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMildChars());
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmpBase(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullAmp())
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStrength() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strFind(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget(), "!") >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen() <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMildChars() * 2);
}
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmpBase(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFullAmp())
}
}

}


};gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.floor(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRevealed(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen())) > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRevInt());
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevInt(Math.floor(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRevealed(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen())))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandT(0)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRevealed() >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen());
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTyping(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTyping();
}
if (isConditionTrue_0) {
{/* Mismatched object type - skipped. */}
}

}


};gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2);
isConditionTrue_1 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2[0].getLayer())));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShown(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTyping(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandT(99)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShown();
}
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTarget("")
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLen(gdjs.evtTools.string.strLen(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShown(true)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevealed(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevInt(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTyping(true)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandT(0)
}

{ //Subevents
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShown();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ("" != eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTarget());
}
}
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPfx(false)
}

{ //Subevents
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer()));
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmpBase(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMildAmp())
}

{ //Subevents
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTyping();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRevealed(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRevealed()+(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCps(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLen() / Math.max(0.05, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxSeconds())) * (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer())))))
}

{ //Subevents
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandT(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLandT()+((gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer())))))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLandT() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShakeSeconds());
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffX(gdjs.randomFloatInRange(-1, 1) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmpBase() * (1 - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLandT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShakeSeconds()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffY(gdjs.randomFloatInRange(-1, 1) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmpBase() * (1 - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLandT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShakeSeconds()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffA(gdjs.randomFloatInRange(-1, 1) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAmpBase() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleShare() * (1 - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLandT() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShakeSeconds()))
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].setX(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getX() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getY() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].setAngle(gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getAngle() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffA()));
}
}
}

}


};

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext = {};
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLandT(0)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAmpBase(eventsFunctionContext.getArgument("Amp"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.Jolt = function(Amp, parentEventsFunctionContext) {

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
if (argName === "Amp") return Amp;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.JoltContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext = {};
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext.idToCallbackMap = new Map();
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext.GDObjectObjects1= [];
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext.GDObjectObjects2= [];


gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCps(eventsFunctionContext.getArgument("Cps_"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxSeconds(eventsFunctionContext.getArgument("MaxSeconds_"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFullAmp(eventsFunctionContext.getArgument("FullAmp_"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMildAmp(eventsFunctionContext.getArgument("MildAmp_"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShakeSeconds(eventsFunctionContext.getArgument("ShakeSeconds_"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMildChars(eventsFunctionContext.getArgument("MildChars_"))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAngleShare(eventsFunctionContext.getArgument("AngleShare_"))
}
}

}


};

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.Configure = function(Cps_, MaxSeconds_, FullAmp_, MildAmp_, ShakeSeconds_, MildChars_, AngleShare_, parentEventsFunctionContext) {

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
if (argName === "Cps_") return Cps_;
if (argName === "MaxSeconds_") return MaxSeconds_;
if (argName === "FullAmp_") return FullAmp_;
if (argName === "MildAmp_") return MildAmp_;
if (argName === "ShakeSeconds_") return ShakeSeconds_;
if (argName === "MildChars_") return MildChars_;
if (argName === "AngleShare_") return AngleShare_;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn.prototype.ConfigureContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("AlienBabysitter::TypeIn", gdjs.evtsExt__AlienBabysitter__TypeIn.TypeIn);
