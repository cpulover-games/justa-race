# Development Process
1. HTML template [index]
   - Declare canvas tag 
   ```
   <canvas id="gameCanvas" height="500" width="500"></canvas>
   ```
   - Include all JS scripts: Assets -> CommonGraphics -> Game elements -> Events -> Collisions -> Main

2. Main script [main]
   - Declare global variables and constants (for convention): canvas, canvas context, FPS, background color, etc.
   - Use ```window.onload``` function (to load script only after HTML page finishes loading)
   - Get canvas: ```document.getElementById("gameCanvas")``` (to get canvas.width/height, add  events)
   - Get canvas context: ```canvasContext = canvas.getContext("2d")``` (for drawing)
   - (Optional) Add loading screen
   - Load assets for game elements
   - Init code
     - Initialize global states of game 
     - Initialize each game element's state
   - Setup events from [Events]
   - Set interval for motion, drawing and collision code: ```setInterval(updateFunction, 1000 / fps)```
     - Motion and drawing code for game elements
     - Setup collisions from [Collisions]
3. Game object elements (class) [Car]
   - Declare element variable and constants: X/Y position, X/Y speed, color/picture, angle, name, {key controls with states} etc.
   - {Setup input by group setter for key controls}
   - Init code: init variables which are unique for each object or for each game/level
   - Drawing code (interval)
   - Motion code (interval)
     - Update element position based on speeds and key control states
     - {Set boundations} (collision with big frame/window)
4. {Track/grid} [Track]
   - Declare constants for tile/track types (to position each type on the map)
   - Init grid arrays for levels
   - Drawing code (interval): iterate and draw each tile/track in the grid array

5. Collision code (interval) [Collisions]

   - Case 1: For object/element with object/element
     - Determine edge coordinates of each element
     - Compare coordinates (collision happens when element coordinates overlap)

   - Case 2: For tile/grid/track with object:
     - Get the column and row positions in the gird of the object

     ```
     var objTrackCol = Math.floor(obj.x / TRACK_WIDTH);
     var objTrackRow = Math.floor(obj.y / TRACK_HEIGHT);
     ```
     - Convert to index of the track array     
     ```
     var trackIndexUnderObj = objTrackCol + objTrackRow * TRACK_COLS;
     ```
     - Get track type (e.g. road, tree, wall, etc.)
     ```
     var trackTypeUnderObj = trackGrid[trackIndexUnderObj];
     ```
     - Determine boundaries of the collision
     ```
     objTrackCol >= 0 && objTrackCol < TRACK_COLS &&
     objTrackRow >= 0 && objTrackRow < TRACK_ROWS)
     ```
     - Setup collision cases based on track type which the object is overlapping with
     ```
     switch (trackTypeUnderObj) {
        case TRACK_WALL:
        case TRACK_TREE:
        ...
     }
     ```
   - Update speeds, states when collision

6. Event/controlling code [Events]
   - Setup input for game objects
   - Add listener:
     - Mouse events on canvas
     - Keyboard events on HTML document
7. Assets loading [Assets]
8. Game/level over and game restart containing init code

# Notes and Tips
- [Event] Use preventDefault() to prevent scrolling page in ```keydown``` event
- [Drawing] Create drawing helpers (this utility file could be used for many projects) [CommonGraphics]
- [Event] Get JS key codes from this [link](https://keycode.info/)































