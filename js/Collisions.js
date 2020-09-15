function setupCollisions() {
    trackCarCollision();
}

function trackCarCollision() {
    for (var car of cars) {
        // indicate which col and row of trackGrid[] the car are in
        var carTrackCol = Math.floor(car.x / TRACK_WIDTH);
        var carTrackRow = Math.floor(car.y / TRACK_HEIGHT);
        // convert to index array with col and row
        var trackIndexUnderCar = colRowToIndexArray(carTrackCol, carTrackRow);

        // boundaries of col and row
        if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
            carTrackRow >= 0 && carTrackRow < TRACK_ROWS &&
            trackGrid[trackIndexUnderCar] != TRACK_ROAD) { // collision happens if obtacles (wall, tree... not road) available
            // first undo car's most recent motion so that its center no longer overlap the wall
            // which makes it stuck
            car.x -= Math.cos(car.angle) * car.speed;
            car.y -= Math.sin(car.angle) * car.speed;
            // then bound car with decreased speed
            car.speed *= -0.5;
        }
    }
}