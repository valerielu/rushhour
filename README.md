## Rush Hour

### Background

Rush Hour is a interactive browser car game based on the popular board game [Rush Hour][link]
[link]: http://www.thinkfun.com/products/rush-hour/

In Rush Hour, a sliding block puzzle game, you slide the blocking vehicles out of the way for the red car to reach the exit. The points that a player get for each game is calculated based on number of moves taken as well as time took to solution.

### Functionality & MVP  

In the Rush Hour game, users will be able to:

- [X] Start and reset the game board
- [X] Select car to move with mouse click
- [X] Move car blocks with the up, down, left and right keys
- [X] Advance in levels (2 total levels at least)

In addition, this project will include:

- [X] An About modal/component describing the background and rules of the game
- [X] A component holding the controls with corresponding keys and what they do
- [X] A production ReadMe

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn,
and the About modal.  Game controls will include Start and Reset buttons.

![wireframes](./wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic.
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`car.js`: handle the different types of cars (including length and color) as well as the "target" red car logic. Handles the car moving logic.

`board.js`: this script will handle the logic for creating and updating the the board and car positions. Is fed into the view file.

`view.js`: draws out the visuals of the board and the cars; has the listeners for keydowns.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and map out all the methods that are necessary for the game logic.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above. Goals for the day:

- Get a green bundle with `webpack`
- Set up the js files and map out necessary methods

**Day 2**: First, build out the `Car` object to connect to the `Board` object.  Then, use `board.js` to create the game board. Lastly, use `view.js` to render the game. Goals for the day:

- Complete the `car.js` module (constructor, update functions)
- add listeners to all the car objects on up down left and right keys, and feed those actions as moves to the car (has logic to handle validMove?)

**Day 3**: Implement core game logic and built board for 3 (if time, 5) different levels.  Goals for the day:

- Have a functional grid on the frontend that correctly handles iterations from one generation of the game to the next

**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for reset and game level change
- Have a styled game, nice looking controls and title


### Bonus features

Some anticipated updates are:

- [X] Count and show the number of moves
- [X] More levels and better graphics
- [ ] Adding hints in a modal on the side
- [ ] Add scoreboard scoring mechanisms
- [ ] Add time count for a user to finish a game
- [ ] Auto-generate random games
