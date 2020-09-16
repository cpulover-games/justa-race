# Development Process
1. HTML template
   - Declare canvas tag 
```
<canvas id="gameCanvas" height="500" width="500"></canvas>
```
   - Include all JS scripts: Assets -> CommonGraphics -> Game elements -> Events -> Collisions -> Main

2. Main script
   - Declare global variables and constants (for convention): canvas, canvas context, FPS, background color, etc.
   - Use ```window.onload``` function (to load script only after HTML page finishes loading)
   - Get canvas: ```document.getElementById("gameCanvas")``` (to get canvas.width/height, add  events)
   - Get canvas context: ```canvasContext = canvas.getContext("2d")``` (for drawing)
   - (Optional) Add loading screen
   - Load assets for game elements
   - Init code
     - Initialize global states of game 
     - Initialize each game element's state
   - Setup events
     - Mouse events for canvas
     - Keyboard events for HTML document
   - Set interval for motion, drawing and collision code: ```setInterval(updateFunction, 1000 / fps)```
     - Motion and drawing code for game elements
     - Setup collisions
3. Game elements [Car-Track]
   - Declare element variable and constants: X/Y position, X/Y speed, color, etc.
   - Load assets
   - Init code
   - Drawing code (interval)
   - Motion code (interval)
     - Update element position
     - Set boundations (collision with big frame)
4. Collision code (interval) [Collisions]

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
   
5. Event code [Events]
6. Assets loading [Assets]
7. Game/level over and game restart containing init code

# Notes and Tips
- [Event] Use preventDefault() to prevent scrolling page in ```keydown``` event
- [Refactor] Create drawing helpers (this utility file could be used for many projects) [CommonGraphics]
- [Event] Get JS key codes from this [link](https://keycode.info/)































