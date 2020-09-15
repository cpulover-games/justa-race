function setupCollisions(){
    trackCarCollision();
}

function trackCarCollision() {
    // indicate which col and row of trackGrid[] the car are in
    var carTrackCol = Math.floor(carX / TRACK_WIDTH);
    var carTrackRow = Math.floor(carY / TRACK_HEIGHT);
    // convert to index array with col and row
    var trackIndexUnderCar = colRowToIndexArray(carTrackCol, carTrackRow);

    // boundaries of col and row
    if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 && carTrackRow < TRACK_ROWS &&
        trackGrid[trackIndexUnderCar] != TRACK_ROAD) { // collision happens if obtacles (wall, tree... not road) available
        // first undo car's most recent motion so that its center no longer overlap the wall
        // which makes it stuck
        carX -= Math.cos(carAngle) * carSpeed;
        carY -= Math.sin(carAngle) * carSpeed;
        // then bound car with decreased speed
        carSpeed *= -0.5;
    }
}
