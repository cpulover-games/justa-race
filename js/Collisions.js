function setupCollisions() {
    trackCarCollision();
}

function trackCarCollision() {
    for (i = 0; i < carList.length; i++) {
        // indicate which col and row of trackGrid[] the car are in
        var carTrackCol = Math.floor(carList[i].x / TRACK_WIDTH);
        var carTrackRow = Math.floor(carList[i].y / TRACK_HEIGHT);
        // convert to index array with col and row
        var trackIndexUnderCar = colRowToIndexArray(carTrackCol, carTrackRow);

        // boundaries of col and row
        if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
            carTrackRow >= 0 && carTrackRow < TRACK_ROWS &&
            trackGrid[trackIndexUnderCar] != TRACK_ROAD) { // collision happens if obtacles (wall, tree... not road) available
            // first undo car's most recent motion so that its center no longer overlap the wall
            // which makes it stuck
            carList[i].x -= Math.cos(carList[i].angle) * carList[i].speed;
            carList[i].y -= Math.sin(carList[i].angle) * carList[i].speed;
            // then bound car with decreased speed
            carList[i].speed *= -0.5;
        }
    }
}