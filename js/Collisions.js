function setupCollisions() {
    trackCarCollision();
}

function trackCarCollision() {
    for (var car of cars) {
        // indicate which col and row of current level grid the car are in
        var carTrackCol = Math.floor(car.x / TRACK_WIDTH);
        var carTrackRow = Math.floor(car.y / TRACK_HEIGHT);
        // convert to index array with col and row
        var trackIndexUnderCar = colRowToIndexArray(carTrackCol, carTrackRow);

        // boundaries of col and row {?}
        if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
            carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
            var trackUnderCar = levels[currentLevelIndex][trackIndexUnderCar];
            switch (trackUnderCar) {
                // obtacle cases
                case TRACK_WALL:
                case TRACK_FLAG:
                case TRACK_TREE:
                    // first undo car's most recent motion so that its center no longer overlap the wall
                    // which makes it stuck
                    car.x -= Math.cos(car.angle) * car.speed;
                    car.y -= Math.sin(car.angle) * car.speed;
                    // then bound car with decreased speed
                    car.speed *= -0.5;
                    break;

                // Game over: reach the goal
                case TRACK_GOAL:
                    console.log(car.name + " won!");
                    currentLevelIndex++;
                    initGame();
                    break;
            }
        }
    }
}