
if (typeof gdjs.evtsExt__AlienBabysitter__WalkDistance !== "undefined") {
  gdjs.evtsExt__AlienBabysitter__WalkDistance.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AlienBabysitter__WalkDistance = {};
gdjs.evtsExt__AlienBabysitter__WalkDistance.idToCallbackMap = new Map();


gdjs.evtsExt__AlienBabysitter__WalkDistance.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("X1") < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("WestDoorX")));
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("X1") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("EastDoorX")));
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("X2") < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("WestDoorX")));
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("X2") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("EastDoorX")));
}
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() == eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtTools.common.distanceBetweenPositions(eventsFunctionContext.getArgument("X1"), eventsFunctionContext.getArgument("Y1"), eventsFunctionContext.getArgument("X2"), eventsFunctionContext.getArgument("Y2"));}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() - eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.min(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()) == 0);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtTools.common.distanceBetweenPositions(eventsFunctionContext.getArgument("X1"), eventsFunctionContext.getArgument("Y1"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("WestDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY"))) + gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("WestDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY")), eventsFunctionContext.getArgument("X2"), eventsFunctionContext.getArgument("Y2"));}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() - eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()) == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.min(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber()) == 1);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtTools.common.distanceBetweenPositions(eventsFunctionContext.getArgument("X1"), eventsFunctionContext.getArgument("Y1"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("EastDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY"))) + gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("EastDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY")), eventsFunctionContext.getArgument("X2"), eventsFunctionContext.getArgument("Y2"));}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtTools.common.distanceBetweenPositions(eventsFunctionContext.getArgument("X1"), eventsFunctionContext.getArgument("Y1"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("WestDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY"))) + gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("WestDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("EastDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY"))) + gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("EastDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY")), eventsFunctionContext.getArgument("X2"), eventsFunctionContext.getArgument("Y2"));}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = gdjs.evtTools.common.distanceBetweenPositions(eventsFunctionContext.getArgument("X1"), eventsFunctionContext.getArgument("Y1"), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("EastDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY"))) + gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("EastDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("WestDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY"))) + gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("WestDoorX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Balance").getChild("KidModes").getChild("WalkGraph").getChild("DoorY")), eventsFunctionContext.getArgument("X2"), eventsFunctionContext.getArgument("Y2"));}
}

}


};gdjs.evtsExt__AlienBabysitter__WalkDistance.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("RoomA", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("RoomB", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__AlienBabysitter__WalkDistance.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__AlienBabysitter__WalkDistance.func = function(runtimeScene, X1, Y1, X2, Y2, parentEventsFunctionContext) {
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
if (argName === "X1") return X1;
if (argName === "Y1") return Y1;
if (argName === "X2") return X2;
if (argName === "Y2") return Y2;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AlienBabysitter__WalkDistance.eventsList1(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__AlienBabysitter__WalkDistance.registeredGdjsCallbacks = [];