const CAR_FRICTION = 0.95; // reduce speed over time
const CAR_DRIVE_POWER = 0.2; // gas power
const CAR_REVERSE_POWER = 0.2; // go backward
const CAR_TURN_RATE = 0.05; // turn left and right
const MIN_SPEED_TO_TURN = 0.4; // prevent turning while car not moving

function Car() {
    this.x;
    this.y;
    this.speed;
    this.angle;
    this.pic;
    this.startPosition;
    this.name;

    // car control
    this.keyGas;
    this.keyReverse;
    this.keyLeft;
    this.keyRight;
    this.holdingGas = false;
    this.holdReverse = false;
    this.turningLeft = false;
    this.turningRight = false;

    // group setter
    this.setupInput = function (keyGas, keyReverse, keyLeft, keyRight) {
        this.keyGas = keyGas;
        this.keyReverse = keyReverse;
        this.keyLeft = keyLeft;
        this.keyRight = keyRight;
    }

    this.draw = function () {
        drawBitmapCenteredWithRotation(this.pic, this.x, this.y, this.angle);
    }

    this.init = function (carPic, startPosition, name) {
        this.pic = carPic;
        this.startPosition = startPosition;
        this.name=name;
        this.speed = 0;
        this.angle = -Math.PI / 2;
        for (currentRow = 0; currentRow < TRACK_ROWS; currentRow++) {
            for (currentCol = 0; currentCol < TRACK_COLS; currentCol++) {
                var indexArray = colRowToIndexArray(currentCol, currentRow);
                if (levels[currentLevelIndex][indexArray] == this.startPosition) {
                    this.x = currentCol * TRACK_WIDTH + TRACK_WIDTH / 2;
                    this.y = currentRow * TRACK_HEIGHT + TRACK_HEIGHT / 2;
                    // return;
                }
            }
        }
    }

    this.move = function () {
        this.speed *= CAR_FRICTION;
        if (this.holdingGas) {
            this.speed += CAR_DRIVE_POWER;
        }
        if (this.holdingReverse) {
            this.speed -= CAR_REVERSE_POWER;
        }
        if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
            if (this.turningLeft) {
                this.angle -= CAR_TURN_RATE;
            }
            if (this.turningRight) {
                this.angle += CAR_TURN_RATE;
            }
        }
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
    }
}