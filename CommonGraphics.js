function colorRect(topX, topY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topX, topY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function colorText(text, textX, textY, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(text, textX, textY);
}

function drawBitmapCenteredWithRotation(bitmap, atX, atY,
    angle) { // graphical operations excute by reversed order
    // 1: sets us up so we can forget these operations
    canvasContext.save();
    // 4: slide its center to atX, atY
    canvasContext.translate(atX, atY);
    // 3: rotate center around center (radian)
    canvasContext.rotate(angle);
    // 2: draw image at center
    canvasContext.drawImage(bitmap, -bitmap.width / 2, -bitmap.height / 2);
    // 5: forget everything since save
    canvasContext.restore();
}

// convert to index of trackGrid[] when know its col and row
function colRowToIndexArray(col, row) {
    return col + row * TRACK_COLS;
}
