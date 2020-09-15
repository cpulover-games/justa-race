const TRACK_COLS = 20;
const TRACK_ROWS = 15;
var trackGrid = [
    4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
    4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 3, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    0, 3, 0, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4
];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYER_START = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;
const TRACK_WIDTH = 40;
const TRACK_HEIGHT = 40;


function drawTracks() {
    for (currentRow = 0; currentRow < TRACK_ROWS; currentRow++) {
        for (currentCol = 0; currentCol < TRACK_COLS; currentCol++) {
            var indexArray = colRowToIndexArray(currentCol, currentRow);
            var useImg;
            switch (trackGrid[indexArray]) {
                case TRACK_ROAD:
                    useImg = roadPic;
                    break;
                case TRACK_WALL:
                    useImg = wallPic;
                    break;
                case TRACK_PLAYER_START:
                    // draw road under player start position too
                    useImg = roadPic;
                    // and turn it to road for correct collision
                    trackGrid[indexArray] = TRACK_ROAD;
                    break;
                case TRACK_GOAL:
                    useImg = goalPic;
                    break;
                case TRACK_TREE:
                    useImg = treePic;
                    break;
                case TRACK_FLAG:
                    useImg = flagPic;
                    break;
            }
            canvasContext.drawImage(useImg, TRACK_WIDTH * currentCol, TRACK_HEIGHT * currentRow);


        }
    }
}