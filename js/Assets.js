var car1Pic = document.createElement("img");
var car2Pic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var flagPic = document.createElement("img");
var goalPic = document.createElement("img");
var treePic = document.createElement("img");

var pics = [{
        varName: car1Pic,
        file: "player1car.png"
    },
    {
        varName: car2Pic,
        file: "player2car.png"
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
var IMG_FOLDER_PATH = "assets/images/";
var picToLoad; // count remaining pics to load

// return true if finish loading all assets (picToLoad=0)
function loadAssets() {
    picToLoad = pics.length;
    for (var pic of pics) {
        pic.varName.src = IMG_FOLDER_PATH + pic.file;
        picToLoad--;
    }

    if (picToLoad == 0) {
        return true;;
    } else {
        return false;
    }
}