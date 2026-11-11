gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDMenu_9595ItemObjects3_1final = [];

gdjs.MenuCode.forEachIndex2 = 0;

gdjs.MenuCode.forEachIndex3 = 0;

gdjs.MenuCode.forEachObjects2 = [];

gdjs.MenuCode.forEachObjects3 = [];

gdjs.MenuCode.forEachTemporary2 = null;

gdjs.MenuCode.forEachTemporary3 = null;

gdjs.MenuCode.forEachTotalCount2 = 0;

gdjs.MenuCode.forEachTotalCount3 = 0;

gdjs.MenuCode.GDMenu_9595TitleObjects1= [];
gdjs.MenuCode.GDMenu_9595TitleObjects2= [];
gdjs.MenuCode.GDMenu_9595TitleObjects3= [];
gdjs.MenuCode.GDMenu_9595TitleObjects4= [];
gdjs.MenuCode.GDMenu_9595TitleObjects5= [];
gdjs.MenuCode.GDMenu_9595TitleObjects6= [];
gdjs.MenuCode.GDMenu_9595TitleObjects7= [];
gdjs.MenuCode.GDMenu_9595PressStartObjects1= [];
gdjs.MenuCode.GDMenu_9595PressStartObjects2= [];
gdjs.MenuCode.GDMenu_9595PressStartObjects3= [];
gdjs.MenuCode.GDMenu_9595PressStartObjects4= [];
gdjs.MenuCode.GDMenu_9595PressStartObjects5= [];
gdjs.MenuCode.GDMenu_9595PressStartObjects6= [];
gdjs.MenuCode.GDMenu_9595PressStartObjects7= [];
gdjs.MenuCode.GDMenu_9595BodyObjects1= [];
gdjs.MenuCode.GDMenu_9595BodyObjects2= [];
gdjs.MenuCode.GDMenu_9595BodyObjects3= [];
gdjs.MenuCode.GDMenu_9595BodyObjects4= [];
gdjs.MenuCode.GDMenu_9595BodyObjects5= [];
gdjs.MenuCode.GDMenu_9595BodyObjects6= [];
gdjs.MenuCode.GDMenu_9595BodyObjects7= [];
gdjs.MenuCode.GDMenu_9595PageTitleObjects1= [];
gdjs.MenuCode.GDMenu_9595PageTitleObjects2= [];
gdjs.MenuCode.GDMenu_9595PageTitleObjects3= [];
gdjs.MenuCode.GDMenu_9595PageTitleObjects4= [];
gdjs.MenuCode.GDMenu_9595PageTitleObjects5= [];
gdjs.MenuCode.GDMenu_9595PageTitleObjects6= [];
gdjs.MenuCode.GDMenu_9595PageTitleObjects7= [];
gdjs.MenuCode.GDMenu_9595ItemObjects1= [];
gdjs.MenuCode.GDMenu_9595ItemObjects2= [];
gdjs.MenuCode.GDMenu_9595ItemObjects3= [];
gdjs.MenuCode.GDMenu_9595ItemObjects4= [];
gdjs.MenuCode.GDMenu_9595ItemObjects5= [];
gdjs.MenuCode.GDMenu_9595ItemObjects6= [];
gdjs.MenuCode.GDMenu_9595ItemObjects7= [];
gdjs.MenuCode.GDMenu_9595BackgroundObjects1= [];
gdjs.MenuCode.GDMenu_9595BackgroundObjects2= [];
gdjs.MenuCode.GDMenu_9595BackgroundObjects3= [];
gdjs.MenuCode.GDMenu_9595BackgroundObjects4= [];
gdjs.MenuCode.GDMenu_9595BackgroundObjects5= [];
gdjs.MenuCode.GDMenu_9595BackgroundObjects6= [];
gdjs.MenuCode.GDMenu_9595BackgroundObjects7= [];
gdjs.MenuCode.GDMenu_9595LogoObjects1= [];
gdjs.MenuCode.GDMenu_9595LogoObjects2= [];
gdjs.MenuCode.GDMenu_9595LogoObjects3= [];
gdjs.MenuCode.GDMenu_9595LogoObjects4= [];
gdjs.MenuCode.GDMenu_9595LogoObjects5= [];
gdjs.MenuCode.GDMenu_9595LogoObjects6= [];
gdjs.MenuCode.GDMenu_9595LogoObjects7= [];
gdjs.MenuCode.GDMenu_9595ButtonObjects1= [];
gdjs.MenuCode.GDMenu_9595ButtonObjects2= [];
gdjs.MenuCode.GDMenu_9595ButtonObjects3= [];
gdjs.MenuCode.GDMenu_9595ButtonObjects4= [];
gdjs.MenuCode.GDMenu_9595ButtonObjects5= [];
gdjs.MenuCode.GDMenu_9595ButtonObjects6= [];
gdjs.MenuCode.GDMenu_9595ButtonObjects7= [];
gdjs.MenuCode.GDMenu_9595ButtonSelObjects1= [];
gdjs.MenuCode.GDMenu_9595ButtonSelObjects2= [];
gdjs.MenuCode.GDMenu_9595ButtonSelObjects3= [];
gdjs.MenuCode.GDMenu_9595ButtonSelObjects4= [];
gdjs.MenuCode.GDMenu_9595ButtonSelObjects5= [];
gdjs.MenuCode.GDMenu_9595ButtonSelObjects6= [];
gdjs.MenuCode.GDMenu_9595ButtonSelObjects7= [];
gdjs.MenuCode.GDMenu_9595SliderObjects1= [];
gdjs.MenuCode.GDMenu_9595SliderObjects2= [];
gdjs.MenuCode.GDMenu_9595SliderObjects3= [];
gdjs.MenuCode.GDMenu_9595SliderObjects4= [];
gdjs.MenuCode.GDMenu_9595SliderObjects5= [];
gdjs.MenuCode.GDMenu_9595SliderObjects6= [];
gdjs.MenuCode.GDMenu_9595SliderObjects7= [];
gdjs.MenuCode.GDMenu_9595ToggleObjects1= [];
gdjs.MenuCode.GDMenu_9595ToggleObjects2= [];
gdjs.MenuCode.GDMenu_9595ToggleObjects3= [];
gdjs.MenuCode.GDMenu_9595ToggleObjects4= [];
gdjs.MenuCode.GDMenu_9595ToggleObjects5= [];
gdjs.MenuCode.GDMenu_9595ToggleObjects6= [];
gdjs.MenuCode.GDMenu_9595ToggleObjects7= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("AlienBabysitter", "Settings");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("AlienBabysitter", "Settings", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Loaded"));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Loaded").getAsString(), runtimeScene.getGame().getVariables().getFromIndex(2));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects1);

for (gdjs.MenuCode.forEachIndex2 = 0;gdjs.MenuCode.forEachIndex2 < gdjs.MenuCode.GDMenu_9595ItemObjects1.length;++gdjs.MenuCode.forEachIndex2) {
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = 0;


gdjs.MenuCode.forEachTemporary2 = gdjs.MenuCode.GDMenu_9595ItemObjects1[gdjs.MenuCode.forEachIndex2];
gdjs.MenuCode.GDMenu_9595ItemObjects2.push(gdjs.MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(2)) == "Quit" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects2[k] = gdjs.MenuCode.GDMenu_9595ItemObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects2[i].returnVariable(gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(0)).setString("None");
}
}
}
}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isNativeDesktopApp(runtimeScene));
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Count").add(1);
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 - (gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getWidth()) / 2,Math.max(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuTitleShare").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuListGap").getAsNumber(), Math.min(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuTopShare").getAsNumber(), gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuBottomMargin").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getChild("LastCount").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuItemSpacing").getAsNumber())) + gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(1).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuItemSpacing").getAsNumber());
}
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString()) ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects3_1final, gdjs.MenuCode.GDMenu_9595ItemObjects3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].hide();
}
}
}

}


};gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("LastCount").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Count").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Count").setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects1);

for (gdjs.MenuCode.forEachIndex2 = 0;gdjs.MenuCode.forEachIndex2 < gdjs.MenuCode.GDMenu_9595ItemObjects1.length;++gdjs.MenuCode.forEachIndex2) {
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = 0;


gdjs.MenuCode.forEachTemporary2 = gdjs.MenuCode.GDMenu_9595ItemObjects1[gdjs.MenuCode.forEachIndex2];
gdjs.MenuCode.GDMenu_9595ItemObjects2.push(gdjs.MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.MenuCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


};gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("InvertY").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects3, gdjs.MenuCode.GDMenu_9595ItemObjects4);

{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects4[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("On").getAsString()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("InvertY").getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("Off").getAsString()));
}
}
}

}


};gdjs.MenuCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects3, gdjs.MenuCode.GDMenu_9595ItemObjects4);

{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects4[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("On").getAsString()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("Off").getAsString()));
}
}
}

}


};gdjs.MenuCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Subtitles").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects3, gdjs.MenuCode.GDMenu_9595ItemObjects4);

{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects4[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("On").getAsString()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Subtitles").getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("Off").getAsString()));
}
}
}

}


};gdjs.MenuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == "Master" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume")))));
}
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == "Music" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MusicVolume")))));
}
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == "Sfx" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("SfxVolume")))));
}
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == "Voice" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VoiceVolume")))));
}
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == "Sensitivity" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MouseSensitivity")) * 100) / 100)));
}
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == "Vignette" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString() + (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("ValueSeparator").getAsString() + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VignetteStrength")) * 100)) + "%"));
}
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == "InvertY" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == "Fullscreen" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == "Subtitles" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableNumber(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("Selected").getAsString() + (gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getString()));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects3[i].setColor(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("AccentColor").getAsString());
}
}
}

}


};gdjs.MenuCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects1);

for (gdjs.MenuCode.forEachIndex2 = 0;gdjs.MenuCode.forEachIndex2 < gdjs.MenuCode.GDMenu_9595ItemObjects1.length;++gdjs.MenuCode.forEachIndex2) {
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = 0;


gdjs.MenuCode.forEachTemporary2 = gdjs.MenuCode.GDMenu_9595ItemObjects1[gdjs.MenuCode.forEachIndex2];
gdjs.MenuCode.GDMenu_9595ItemObjects2.push(gdjs.MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects2[k] = gdjs.MenuCode.GDMenu_9595ItemObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects2[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("Items").getChild(gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(2).getAsString()).getAsString());
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects2[i].setColor(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("FontColor").getAsString());
}
}

{ //Subevents: 
gdjs.MenuCode.eventsList9(runtimeScene);} //Subevents end.
}
}

}


};gdjs.MenuCode.eventsList11 = function(runtimeScene) {

};gdjs.MenuCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects2);

for (gdjs.MenuCode.forEachIndex3 = 0;gdjs.MenuCode.forEachIndex3 < gdjs.MenuCode.GDMenu_9595ItemObjects2.length;++gdjs.MenuCode.forEachIndex3) {
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = 0;


gdjs.MenuCode.forEachTemporary3 = gdjs.MenuCode.GDMenu_9595ItemObjects2[gdjs.MenuCode.forEachIndex3];
gdjs.MenuCode.GDMenu_9595ItemObjects3.push(gdjs.MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableNumber(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").setString(((gdjs.MenuCode.GDMenu_9595ItemObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595ItemObjects3[0].getVariables()).getFromIndex(2).getAsString());
}
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDMenu_95959595ItemObjects3Objects = Hashtable.newFrom({"Menu_Item": gdjs.MenuCode.GDMenu_9595ItemObjects3});
gdjs.MenuCode.eventsList13 = function(runtimeScene) {

};gdjs.MenuCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects2);

for (gdjs.MenuCode.forEachIndex3 = 0;gdjs.MenuCode.forEachIndex3 < gdjs.MenuCode.GDMenu_9595ItemObjects2.length;++gdjs.MenuCode.forEachIndex3) {
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = 0;


gdjs.MenuCode.forEachTemporary3 = gdjs.MenuCode.GDMenu_9595ItemObjects2[gdjs.MenuCode.forEachIndex3];
gdjs.MenuCode.GDMenu_9595ItemObjects3.push(gdjs.MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDMenu_95959595ItemObjects3Objects, runtimeScene, false, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").setNumber(((gdjs.MenuCode.GDMenu_9595ItemObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595ItemObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").setString(((gdjs.MenuCode.GDMenu_9595ItemObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595ItemObjects3[0].getVariables()).getFromIndex(2).getAsString());
}
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDMenu_95959595ItemObjects3Objects = Hashtable.newFrom({"Menu_Item": gdjs.MenuCode.GDMenu_9595ItemObjects3});
gdjs.MenuCode.eventsList15 = function(runtimeScene) {

};gdjs.MenuCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects2);

for (gdjs.MenuCode.forEachIndex3 = 0;gdjs.MenuCode.forEachIndex3 < gdjs.MenuCode.GDMenu_9595ItemObjects2.length;++gdjs.MenuCode.forEachIndex3) {
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = 0;


gdjs.MenuCode.forEachTemporary3 = gdjs.MenuCode.GDMenu_9595ItemObjects2[gdjs.MenuCode.forEachIndex3];
gdjs.MenuCode.GDMenu_9595ItemObjects3.push(gdjs.MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDMenu_95959595ItemObjects3Objects, runtimeScene, false, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").setNumber(((gdjs.MenuCode.GDMenu_9595ItemObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595ItemObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
}

}


};gdjs.MenuCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == "Master" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == "Music" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == "Sfx" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == "Voice" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == "Sensitivity" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == "Vignette" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == "InvertY" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == "Fullscreen" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects2, gdjs.MenuCode.GDMenu_9595ItemObjects4);

for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == "Subtitles" ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDMenu_9595ItemObjects4.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.indexOf(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]) === -1 )
            gdjs.MenuCode.GDMenu_9595ItemObjects3_1final.push(gdjs.MenuCode.GDMenu_9595ItemObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ItemObjects3_1final, gdjs.MenuCode.GDMenu_9595ItemObjects3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").setString(((gdjs.MenuCode.GDMenu_9595ItemObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595ItemObjects3[0].getVariables()).getFromIndex(2).getAsString());
}
}

}


};gdjs.MenuCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects1);

for (gdjs.MenuCode.forEachIndex2 = 0;gdjs.MenuCode.forEachIndex2 < gdjs.MenuCode.GDMenu_9595ItemObjects1.length;++gdjs.MenuCode.forEachIndex2) {
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = 0;


gdjs.MenuCode.forEachTemporary2 = gdjs.MenuCode.GDMenu_9595ItemObjects1[gdjs.MenuCode.forEachIndex2];
gdjs.MenuCode.GDMenu_9595ItemObjects2.push(gdjs.MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects2[k] = gdjs.MenuCode.GDMenu_9595ItemObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects2[k] = gdjs.MenuCode.GDMenu_9595ItemObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.MenuCode.eventsList17(runtimeScene);} //Subevents end.
}
}

}


};gdjs.MenuCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").getAsNumber() - 1 + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Count").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Count").getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").getAsNumber() + 1, runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Count").getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").setNumber(1);
}

{ //Subevents
gdjs.MenuCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) != runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MX").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) != runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MY").getAsNumber());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Count").getAsNumber() > 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Master");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume").setNumber(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume")) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VolumeStep").getAsNumber(), 0, 100));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Music");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MusicVolume").setNumber(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MusicVolume")) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VolumeStep").getAsNumber(), 0, 100));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Sfx");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("SfxVolume").setNumber(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("SfxVolume")) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VolumeStep").getAsNumber(), 0, 100));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Voice");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VoiceVolume").setNumber(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VoiceVolume")) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VolumeStep").getAsNumber(), 0, 100));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Sensitivity");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MouseSensitivity").setNumber(gdjs.evtTools.common.clamp(Math.round((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MouseSensitivity")) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("SensitivityStep").getAsNumber()) * 100) / 100, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("SensitivityMin").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("SensitivityMax").getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Vignette");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VignetteStrength").setNumber(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VignetteStrength")) + runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Dir").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VignetteStep").getAsNumber(), 0, 1));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "InvertY");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("InvertY"));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Fullscreen");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen"));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Subtitles");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Subtitles"));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Options");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Back").setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").setString("Options");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Back");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Back").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Play");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("PlayIntro").setBoolean(true);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Apartment", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Credits");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Back").setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").setString("Credits");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CreditPage").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Next");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CreditPage").setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CreditPage").getAsNumber() + 1, gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Credits"))));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() == "Quit");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};gdjs.MenuCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
}

}


};gdjs.MenuCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Saves").add(1);
}
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume")));
}
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Audio").getChild("ChannelMusic").getAsNumber(), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MusicVolume")));
}
{gdjs.evtTools.storage.writeStringInJSONFile("AlienBabysitter", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(2)));
}

{ //Subevents
gdjs.MenuCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Menu_PageTitle"), gdjs.MenuCode.GDMenu_9595PageTitleObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595PageTitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595PageTitleObjects2[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("Titles").getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString()).getAsString());
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595PageTitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595PageTitleObjects2[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 - (gdjs.MenuCode.GDMenu_9595PageTitleObjects2[i].getWidth()) / 2,gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuTitleShare").getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() == "Main");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu_PageTitle"), gdjs.MenuCode.GDMenu_9595PageTitleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Menu_Title"), gdjs.MenuCode.GDMenu_9595TitleObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595TitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595TitleObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595PageTitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595PageTitleObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595TitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595TitleObjects2[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 - (gdjs.MenuCode.GDMenu_9595TitleObjects2[i].getWidth()) / 2,gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuTitleShare").getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() == "Main");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu_PageTitle"), gdjs.MenuCode.GDMenu_9595PageTitleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Menu_Title"), gdjs.MenuCode.GDMenu_9595TitleObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595TitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595TitleObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595PageTitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595PageTitleObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() == "Credits");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu_Body"), gdjs.MenuCode.GDMenu_9595BodyObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595BodyObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595BodyObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595BodyObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595BodyObjects2[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Credits").getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CreditPage").getAsNumber()).getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CreditPage").getAsNumber() + 1) + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("PageSeparator").getAsString() + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Credits"))));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595BodyObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595BodyObjects2[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 - (gdjs.MenuCode.GDMenu_9595BodyObjects2[i].getWidth()) / 2,gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuBodyShare").getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() == "Credits");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu_Body"), gdjs.MenuCode.GDMenu_9595BodyObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595BodyObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595BodyObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Menu_PressStart"), gdjs.MenuCode.GDMenu_9595PressStartObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595PressStartObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595PressStartObjects1[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 - (gdjs.MenuCode.GDMenu_9595PressStartObjects1[i].getWidth()) / 2,gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("PromptBottomMargin").getAsNumber());
}
}
}

}


};gdjs.MenuCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_menu_confirm", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Audio").getChild("MenuVolume").getAsNumber() * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("SfxVolume")) / 100 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume")) / 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Plays").getChild("MenuConfirm").add(1);
}
}

}


};gdjs.MenuCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_menu_move", false, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Audio").getChild("MenuVolume").getAsNumber() * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("SfxVolume")) / 100 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume")) / 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Plays").getChild("MenuMove").add(1);
}
}

}


};gdjs.MenuCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Activate").getAsString() != "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("MenuNav").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").getAsNumber());
}

{ //Subevents
gdjs.MenuCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").getAsNumber() != runtimeScene.getScene().getVariables().getFromIndex(2).getChild("MenuNav").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("MenuNav").setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").getAsNumber());
}

{ //Subevents
gdjs.MenuCode.eventsList26(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList28 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList27(runtimeScene);
}


};gdjs.MenuCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Menu_Background"), gdjs.MenuCode.GDMenu_9595BackgroundObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595BackgroundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595BackgroundObjects2[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) - gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2,gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595BackgroundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595BackgroundObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595BackgroundObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595BackgroundObjects2[i].getBehavior("Resizable").setHeight(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() == "Main");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu_Logo"), gdjs.MenuCode.GDMenu_9595LogoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Menu_Title"), gdjs.MenuCode.GDMenu_9595TitleObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595TitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595TitleObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595LogoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595LogoObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595LogoObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595LogoObjects2[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 - (gdjs.MenuCode.GDMenu_9595LogoObjects2[i].getWidth()) / 2,gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuTitleShare").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuListGap").getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuLogoGap").getAsNumber() - (gdjs.MenuCode.GDMenu_9595LogoObjects2[i].getHeight()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() == "Main");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu_Logo"), gdjs.MenuCode.GDMenu_9595LogoObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595LogoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595LogoObjects1[i].hide();
}
}
}

}


};gdjs.MenuCode.eventsList30 = function(runtimeScene) {

};gdjs.MenuCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects1);

for (gdjs.MenuCode.forEachIndex2 = 0;gdjs.MenuCode.forEachIndex2 < gdjs.MenuCode.GDMenu_9595ItemObjects1.length;++gdjs.MenuCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Menu_Body"), gdjs.MenuCode.GDMenu_9595BodyObjects2);
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = 0;


gdjs.MenuCode.forEachTemporary2 = gdjs.MenuCode.GDMenu_9595ItemObjects1[gdjs.MenuCode.forEachIndex2];
gdjs.MenuCode.GDMenu_9595ItemObjects2.push(gdjs.MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects2[k] = gdjs.MenuCode.GDMenu_9595ItemObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(0)) == "Credits" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects2[k] = gdjs.MenuCode.GDMenu_9595ItemObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ItemObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ItemObjects2[i].setY(Math.min((( gdjs.MenuCode.GDMenu_9595BodyObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595BodyObjects2[0].getY()) + (( gdjs.MenuCode.GDMenu_9595BodyObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595BodyObjects2[0].getHeight()) + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuItemSpacing").getAsNumber() / 2 + gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(1).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuItemSpacing").getAsNumber(), gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuBottomMargin").getAsNumber() - (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Count").getAsNumber() - gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(1).getAsNumber()) * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuItemSpacing").getAsNumber()));
}
}
}
}

}


};gdjs.MenuCode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() == "Credits");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList33 = function(runtimeScene) {

};gdjs.MenuCode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ButtonObjects3, gdjs.MenuCode.GDMenu_9595ButtonObjects4);

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(0)) == ((gdjs.MenuCode.GDMenu_9595ButtonObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595ButtonObjects4[0].getVariables()).getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableNumber(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(1)) == ((gdjs.MenuCode.GDMenu_9595ButtonObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595ButtonObjects4[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ButtonObjects4 */
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects4 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonObjects4[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonObjects4[i].getBehavior("Resizable").setWidth(Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxW").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonPad").getAsNumber() * 2, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonMinWidth").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonObjects4[i].getBehavior("Resizable").setHeight((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuItemSpacing").getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonGap").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonObjects4[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 - Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxW").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonPad").getAsNumber() * 2, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonMinWidth").getAsNumber()) / 2,(( gdjs.MenuCode.GDMenu_9595ItemObjects4.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595ItemObjects4[0].getY()) + (( gdjs.MenuCode.GDMenu_9595ItemObjects4.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595ItemObjects4[0].getHeight()) / 2 - (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuItemSpacing").getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonGap").getAsNumber()) / 2);
}
}
}

}


};gdjs.MenuCode.eventsList35 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Slider"), gdjs.MenuCode.GDMenu_9595SliderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariables().getFromIndex(2)) == "Master" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects3[k] = gdjs.MenuCode.GDMenu_9595SliderObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMinValue(0, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMaxValue(100, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetStepSize(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VolumeStep").getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetLabelShown(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Slider"), gdjs.MenuCode.GDMenu_9595SliderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariables().getFromIndex(2)) == "Music" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects3[k] = gdjs.MenuCode.GDMenu_9595SliderObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMinValue(0, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMaxValue(100, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetStepSize(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VolumeStep").getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetLabelShown(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Slider"), gdjs.MenuCode.GDMenu_9595SliderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariables().getFromIndex(2)) == "Sfx" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects3[k] = gdjs.MenuCode.GDMenu_9595SliderObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMinValue(0, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMaxValue(100, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetStepSize(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VolumeStep").getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetLabelShown(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Slider"), gdjs.MenuCode.GDMenu_9595SliderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariables().getFromIndex(2)) == "Voice" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects3[k] = gdjs.MenuCode.GDMenu_9595SliderObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMinValue(0, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMaxValue(100, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetStepSize(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VolumeStep").getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetLabelShown(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Slider"), gdjs.MenuCode.GDMenu_9595SliderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects3[i].getVariables().getFromIndex(2)) == "Sensitivity" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects3[k] = gdjs.MenuCode.GDMenu_9595SliderObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMinValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("SensitivityMin").getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetMaxValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("SensitivityMax").getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetStepSize(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("SensitivityStep").getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects3[i].SetLabelShown(false, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Slider"), gdjs.MenuCode.GDMenu_9595SliderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects2[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects2[i].getVariables().getFromIndex(2)) == "Vignette" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects2[k] = gdjs.MenuCode.GDMenu_9595SliderObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects2[i].SetMinValue(0, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects2[i].SetMaxValue(1, null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects2[i].SetStepSize(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("VignetteStep").getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects2[i].SetLabelShown(false, null);
}
}
}

}


};gdjs.MenuCode.eventsList36 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects5, gdjs.MenuCode.GDMenu_9595SliderObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects6[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects6[k] = gdjs.MenuCode.GDMenu_9595SliderObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume")));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects6 */
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume").setNumber((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{

/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects5[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MasterVolume")), null);
}
}
}

}


};gdjs.MenuCode.eventsList37 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects5, gdjs.MenuCode.GDMenu_9595SliderObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects6[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects6[k] = gdjs.MenuCode.GDMenu_9595SliderObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MusicVolume")));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects6 */
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MusicVolume").setNumber((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{

/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects5[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MusicVolume")), null);
}
}
}

}


};gdjs.MenuCode.eventsList38 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects5, gdjs.MenuCode.GDMenu_9595SliderObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects6[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects6[k] = gdjs.MenuCode.GDMenu_9595SliderObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("SfxVolume")));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects6 */
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("SfxVolume").setNumber((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{

/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects5[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("SfxVolume")), null);
}
}
}

}


};gdjs.MenuCode.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects5, gdjs.MenuCode.GDMenu_9595SliderObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects6[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects6[k] = gdjs.MenuCode.GDMenu_9595SliderObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VoiceVolume")));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects6 */
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VoiceVolume").setNumber((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{

/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects5[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VoiceVolume")), null);
}
}
}

}


};gdjs.MenuCode.eventsList40 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects5, gdjs.MenuCode.GDMenu_9595SliderObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects6[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects6[k] = gdjs.MenuCode.GDMenu_9595SliderObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MouseSensitivity")));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects6 */
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MouseSensitivity").setNumber((( gdjs.MenuCode.GDMenu_9595SliderObjects6.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects6[0].Value(null)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{

/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects5[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("MouseSensitivity")), null);
}
}
}

}


};gdjs.MenuCode.eventsList41 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects4, gdjs.MenuCode.GDMenu_9595SliderObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects5[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.MenuCode.GDMenu_9595SliderObjects5.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects5[0].Value(null)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VignetteStrength")));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects5 */
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VignetteStrength").setNumber((( gdjs.MenuCode.GDMenu_9595SliderObjects5.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595SliderObjects5[0].Value(null)));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{

/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects4.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595SliderObjects4[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects4[k] = gdjs.MenuCode.GDMenu_9595SliderObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects4 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects4[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("VignetteStrength")), null);
}
}
}

}


};gdjs.MenuCode.eventsList42 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects4, gdjs.MenuCode.GDMenu_9595SliderObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariables().getFromIndex(2)) == "Master" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList36(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects4, gdjs.MenuCode.GDMenu_9595SliderObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariables().getFromIndex(2)) == "Music" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList37(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects4, gdjs.MenuCode.GDMenu_9595SliderObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariables().getFromIndex(2)) == "Sfx" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList38(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects4, gdjs.MenuCode.GDMenu_9595SliderObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariables().getFromIndex(2)) == "Voice" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList39(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects4, gdjs.MenuCode.GDMenu_9595SliderObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects5[i].getVariables().getFromIndex(2)) == "Sensitivity" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects5[k] = gdjs.MenuCode.GDMenu_9595SliderObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList40(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595SliderObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595SliderObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595SliderObjects4[i].getVariables().getFromIndex(2)) == "Vignette" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595SliderObjects4[k] = gdjs.MenuCode.GDMenu_9595SliderObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595SliderObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList41(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList43 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects4);
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595SliderObjects3, gdjs.MenuCode.GDMenu_9595SliderObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(0)) == ((gdjs.MenuCode.GDMenu_9595SliderObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595SliderObjects4[0].getVariables()).getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects4[i].getVariables().getFromIndex(2)) == ((gdjs.MenuCode.GDMenu_9595SliderObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595SliderObjects4[0].getVariables()).getFromIndex(2).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects4[k] = gdjs.MenuCode.GDMenu_9595ItemObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects4 */
/* Reuse gdjs.MenuCode.GDMenu_9595SliderObjects4 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects4[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects4[i].getBehavior("Resizable").setWidth(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuSliderWidth").getAsNumber());
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects4[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 + Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxW").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonPad").getAsNumber() * 2, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonMinWidth").getAsNumber()) / 2 + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuWidgetGap").getAsNumber(),(( gdjs.MenuCode.GDMenu_9595ItemObjects4.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595ItemObjects4[0].getY()) + (( gdjs.MenuCode.GDMenu_9595ItemObjects4.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595ItemObjects4[0].getHeight()) / 2 - (gdjs.MenuCode.GDMenu_9595SliderObjects4[i].getHeight()) / 2);
}
}

{ //Subevents
gdjs.MenuCode.eventsList42(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList44 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects4, gdjs.MenuCode.GDMenu_9595ToggleObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects5[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects5[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("InvertY").getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("InvertY").setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects4, gdjs.MenuCode.GDMenu_9595ToggleObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects5[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects5[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("InvertY").getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("InvertY").setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("InvertY").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects4, gdjs.MenuCode.GDMenu_9595ToggleObjects5);

{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].SetChecked(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("InvertY").getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ToggleObjects4 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ToggleObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].SetChecked(false, null);
}
}
}

}


};gdjs.MenuCode.eventsList45 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects4, gdjs.MenuCode.GDMenu_9595ToggleObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects5[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects5[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects4, gdjs.MenuCode.GDMenu_9595ToggleObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects5[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects5[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects4, gdjs.MenuCode.GDMenu_9595ToggleObjects5);

{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ToggleObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ToggleObjects5[i].SetChecked(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Fullscreen").getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ToggleObjects4 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ToggleObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].SetChecked(false, null);
}
}
}

}


};gdjs.MenuCode.eventsList46 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects3, gdjs.MenuCode.GDMenu_9595ToggleObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects4[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects4[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Subtitles").getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Subtitles").setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects3, gdjs.MenuCode.GDMenu_9595ToggleObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects4[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects4.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].IsChecked(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects4[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Subtitles").getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Subtitles").setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Changed").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Subtitles").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects3, gdjs.MenuCode.GDMenu_9595ToggleObjects4);

{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ToggleObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].SetChecked(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Subtitles").getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ToggleObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ToggleObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ToggleObjects3[i].SetChecked(false, null);
}
}
}

}


};gdjs.MenuCode.eventsList47 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects3, gdjs.MenuCode.GDMenu_9595ToggleObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].getVariables().getFromIndex(2)) == "InvertY" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects4[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList44(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects3, gdjs.MenuCode.GDMenu_9595ToggleObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].getVariableString(gdjs.MenuCode.GDMenu_9595ToggleObjects4[i].getVariables().getFromIndex(2)) == "Fullscreen" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects4[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList45(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.MenuCode.GDMenu_9595ToggleObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ToggleObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ToggleObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ToggleObjects3[i].getVariables().getFromIndex(2)) == "Subtitles" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ToggleObjects3[k] = gdjs.MenuCode.GDMenu_9595ToggleObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ToggleObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList46(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList48 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects3);
gdjs.copyArray(gdjs.MenuCode.GDMenu_9595ToggleObjects2, gdjs.MenuCode.GDMenu_9595ToggleObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(0)) == ((gdjs.MenuCode.GDMenu_9595ToggleObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595ToggleObjects3[0].getVariables()).getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariableString(gdjs.MenuCode.GDMenu_9595ItemObjects3[i].getVariables().getFromIndex(2)) == ((gdjs.MenuCode.GDMenu_9595ToggleObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.MenuCode.GDMenu_9595ToggleObjects3[0].getVariables()).getFromIndex(2).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects3 */
/* Reuse gdjs.MenuCode.GDMenu_9595ToggleObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ToggleObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ToggleObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ToggleObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ToggleObjects3[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 + Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxW").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonPad").getAsNumber() * 2, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonMinWidth").getAsNumber()) / 2 + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuWidgetGap").getAsNumber(),(( gdjs.MenuCode.GDMenu_9595ItemObjects3.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595ItemObjects3[0].getY()) + (( gdjs.MenuCode.GDMenu_9595ItemObjects3.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595ItemObjects3[0].getHeight()) / 2 - (gdjs.MenuCode.GDMenu_9595ToggleObjects3[i].getHeight()) / 2);
}
}

{ //Subevents
gdjs.MenuCode.eventsList47(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList49 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.MenuCode.GDMenu_9595ButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Menu_ButtonSel"), gdjs.MenuCode.GDMenu_9595ButtonSelObjects2);
gdjs.copyArray(runtimeScene.getObjects("Menu_Slider"), gdjs.MenuCode.GDMenu_9595SliderObjects2);
gdjs.copyArray(runtimeScene.getObjects("Menu_Toggle"), gdjs.MenuCode.GDMenu_9595ToggleObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonSelObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonSelObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595SliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595SliderObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ToggleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ToggleObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxW").setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects2);

for (gdjs.MenuCode.forEachIndex3 = 0;gdjs.MenuCode.forEachIndex3 < gdjs.MenuCode.GDMenu_9595ItemObjects2.length;++gdjs.MenuCode.forEachIndex3) {
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = 0;


gdjs.MenuCode.forEachTemporary3 = gdjs.MenuCode.GDMenu_9595ItemObjects2[gdjs.MenuCode.forEachIndex3];
gdjs.MenuCode.GDMenu_9595ItemObjects3.push(gdjs.MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects3[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects3[k] = gdjs.MenuCode.GDMenu_9595ItemObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxW").setNumber(Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxW").getAsNumber(), (( gdjs.MenuCode.GDMenu_9595ItemObjects3.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595ItemObjects3[0].getWidth())));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Button"), gdjs.MenuCode.GDMenu_9595ButtonObjects2);

for (gdjs.MenuCode.forEachIndex3 = 0;gdjs.MenuCode.forEachIndex3 < gdjs.MenuCode.GDMenu_9595ButtonObjects2.length;++gdjs.MenuCode.forEachIndex3) {
gdjs.MenuCode.GDMenu_9595ButtonObjects3.length = 0;


gdjs.MenuCode.forEachTemporary3 = gdjs.MenuCode.GDMenu_9595ButtonObjects2[gdjs.MenuCode.forEachIndex3];
gdjs.MenuCode.GDMenu_9595ButtonObjects3.push(gdjs.MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.MenuCode.eventsList34(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Item"), gdjs.MenuCode.GDMenu_9595ItemObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects2[k] = gdjs.MenuCode.GDMenu_9595ItemObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMenu_9595ItemObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariableNumber(gdjs.MenuCode.GDMenu_9595ItemObjects2[i].getVariables().getFromIndex(1)) == runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMenu_9595ItemObjects2[k] = gdjs.MenuCode.GDMenu_9595ItemObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu_ButtonSel"), gdjs.MenuCode.GDMenu_9595ButtonSelObjects2);
/* Reuse gdjs.MenuCode.GDMenu_9595ItemObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonSelObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonSelObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonSelObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonSelObjects2[i].getBehavior("Resizable").setWidth(Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxW").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonPad").getAsNumber() * 2, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonMinWidth").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonSelObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonSelObjects2[i].getBehavior("Resizable").setHeight((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuItemSpacing").getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonGap").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595ButtonSelObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595ButtonSelObjects2[i].setPosition(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2 - Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxW").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonPad").getAsNumber() * 2, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonMinWidth").getAsNumber()) / 2,(( gdjs.MenuCode.GDMenu_9595ItemObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595ItemObjects2[0].getY()) + (( gdjs.MenuCode.GDMenu_9595ItemObjects2.length === 0 ) ? 0 :gdjs.MenuCode.GDMenu_9595ItemObjects2[0].getHeight()) / 2 - (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuItemSpacing").getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("UI").getChild("MenuButtonGap").getAsNumber()) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList35(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Slider"), gdjs.MenuCode.GDMenu_9595SliderObjects2);

for (gdjs.MenuCode.forEachIndex3 = 0;gdjs.MenuCode.forEachIndex3 < gdjs.MenuCode.GDMenu_9595SliderObjects2.length;++gdjs.MenuCode.forEachIndex3) {
gdjs.MenuCode.GDMenu_9595SliderObjects3.length = 0;


gdjs.MenuCode.forEachTemporary3 = gdjs.MenuCode.GDMenu_9595SliderObjects2[gdjs.MenuCode.forEachIndex3];
gdjs.MenuCode.GDMenu_9595SliderObjects3.push(gdjs.MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.MenuCode.eventsList43(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Toggle"), gdjs.MenuCode.GDMenu_9595ToggleObjects1);

for (gdjs.MenuCode.forEachIndex2 = 0;gdjs.MenuCode.forEachIndex2 < gdjs.MenuCode.GDMenu_9595ToggleObjects1.length;++gdjs.MenuCode.forEachIndex2) {
gdjs.MenuCode.GDMenu_9595ToggleObjects2.length = 0;


gdjs.MenuCode.forEachTemporary2 = gdjs.MenuCode.GDMenu_9595ToggleObjects1[gdjs.MenuCode.forEachIndex2];
gdjs.MenuCode.GDMenu_9595ToggleObjects2.push(gdjs.MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.MenuCode.eventsList48(runtimeScene);} //Subevents end.
}
}

}


};gdjs.MenuCode.eventsList50 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Menu_PressStart"), gdjs.MenuCode.GDMenu_9595PressStartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu_Title"), gdjs.MenuCode.GDMenu_9595TitleObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595TitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595TitleObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Title").getAsString());
}
}
{for(var i = 0, len = gdjs.MenuCode.GDMenu_9595PressStartObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMenu_9595PressStartObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Menu").getChild("PressStart").getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getChild("SettingsLoaded").getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("SettingsLoaded").setBoolean(true);
}

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").setString("Main");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").setNumber(0);
}

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").getAsString() == "Main");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Page").setString("Main");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Index").setNumber(0);
}
}

}


{


gdjs.MenuCode.eventsList5(runtimeScene);
}


{


gdjs.MenuCode.eventsList10(runtimeScene);
}


{


gdjs.MenuCode.eventsList20(runtimeScene);
}


{


gdjs.MenuCode.eventsList21(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MX").setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MY").setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


gdjs.MenuCode.eventsList23(runtimeScene);
}


{


gdjs.MenuCode.eventsList24(runtimeScene);
}


{


gdjs.MenuCode.eventsList28(runtimeScene);
}


{


gdjs.MenuCode.eventsList29(runtimeScene);
}


{


gdjs.MenuCode.eventsList32(runtimeScene);
}


{


gdjs.MenuCode.eventsList49(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDMenu_9595TitleObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects7.length = 0;

gdjs.MenuCode.eventsList50(runtimeScene);
gdjs.MenuCode.GDMenu_9595TitleObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595TitleObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595PressStartObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595BodyObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595PageTitleObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595ItemObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595BackgroundObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595LogoObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595ButtonSelObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595SliderObjects7.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects1.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects2.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects3.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects4.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects5.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects6.length = 0;
gdjs.MenuCode.GDMenu_9595ToggleObjects7.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
