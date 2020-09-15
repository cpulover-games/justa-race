var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var flagPic = document.createElement("img");
var goalPic = document.createElement("img");
var treePic = document.createElement("img");

var picList = [{
        varName: carPic,
        file: "player1car.png"
    },
    {
        varName: roadPic,
        file: "track_road.png"
    },
    {
        varName: wallPic,
        file: "track_wall.png"
    },
    {
        varName: flagPic,
        file: "track_flag.png"
    },
    {
        varName: goalPic,
        file: "track_goal.png"
    },
    {
        varName: treePic,
        file: "track_tree.png"
    },
];
var IMG_FOLDER_PATH="assets/images/";
var picToLoad; // count remaining pics to load

// return true if finish loading all assets (picToLoad=0)
function loadAssets() {
    picToLoad = picList.length;
    for (i = 0; i < picList.length; i++) {
        picList[i].varName.src = IMG_FOLDER_PATH + picList[i].file;
        picToLoad--;
    }

    if (picToLoad == 0) {
        return true;;
    } else {
        return false;
    }
}