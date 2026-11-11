
if (typeof gdjs.evtsExt__AlienBabysitter__ApplyHappiness !== "undefined") {
  gdjs.evtsExt__AlienBabysitter__ApplyHappiness.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AlienBabysitter__ApplyHappiness = {};
gdjs.evtsExt__AlienBabysitter__ApplyHappiness.idToCallbackMap = new Map();


gdjs.evtsExt__AlienBabysitter__ApplyHappiness.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Before", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Applied", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Game").getChild("Happiness")));
}
{runtimeScene.getGame().getVariables().get("Game").getChild("Happiness").setNumber(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Game").getChild("Happiness")) + eventsFunctionContext.getArgument("Amount"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("Happiness").getChild("Min")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("Happiness").getChild("Max"))));
}
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Game").getChild("Happiness")) - eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.variable.valuePush(runtimeScene.getGame().getVariables().get("Game").getChild("Breakdown"), eventsFunctionContext.getArgument("Reason") + "|" + gdjs.evtTools.common.toString(eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()) + "|" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Game").getChild("NightClock"))));
}
{runtimeScene.getGame().getVariables().get("Game").getChild("LastChange").setNumber(eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber());
}
{runtimeScene.getGame().getVariables().get("Game").getChild("LastAsked").setNumber(eventsFunctionContext.getArgument("Amount"));
}
{runtimeScene.getGame().getVariables().get("Game").getChild("LastReason").setString(eventsFunctionContext.getArgument("Reason"));
}
{runtimeScene.getGame().getVariables().get("Game").getChild("Changes").add(1);
}
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__AlienBabysitter__ApplyHappiness.func = function(runtimeScene, Amount, Reason, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
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
if (argName === "Amount") return Amount;
if (argName === "Reason") return Reason;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AlienBabysitter__ApplyHappiness.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__AlienBabysitter__ApplyHappiness.registeredGdjsCallbacks = [];