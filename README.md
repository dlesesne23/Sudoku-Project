# Sudoku-Project
<img src='https://imgur.com/a/ZeHfaPg' width='100%' />
Making a functioning Sudoku game through JavaScript.

# Game Description:
Sudoku is a game that tests your math and logic skills. The game is set up in a 9 square by 9 square grid. This grid is broken up into 9 smaller 3x3 grids. In each of the small boxes there is a number ranging from 1-9. The objective is the game is to fill every box with a number. However, what makes the game difficult is that no numbers can overlap in each row, column, or 3x3 box. That way there will be no repeated numbers in the grid. For example, if there is a number 3 in one of the boxes in the top row, then there can be no other 3's in any of the other boxes in the top row. The user must completely fill out every box with a number 1-9 without breaking this rule. The game starts with a number of the square tiles filled in, and the objective is to fill the board completely with the given starting information. The starting numbers vary in the amount of tiles filled, as well as tile positions, based on difficulty.

## MVP Goals
My MVP goal is to have the game ready to play and challenge people on a basic level. Sudoku is not very CSS demanding. However, it requires many different Javascript functions and logic in order to make it properly work. There are many ways someone can be wrong in their input, and I will need to make sure my functions reflects  all the proper feedback by the time the project is due. That will be the main challenge for this project.

### Technologies Used
I used html, css, and javascript to construct this game.

## Methods

-   I created the board using html and css. It wasn't too difficult creating a 9x9 grid. The only challenging part was differentiating the 3x3 grids within the 9x9 grid. However, I was able to figure that out using javascript and css.

-   I approached this project by breaking the 9x9 board down into 9 rows and 9 columns, labeled accordingly. Using this approach, I labeled each square tile by their row:column coordinates (ex: 2-3, 1-2, 7-4, etc.).

-    Before creating the actual board, I looked up a random sudoku puzzle online with the starting numbers and final answers. After finding a random sudoku game, I used an array to fill the starting numbers, as well as the final solution.

-   I used the various Javascript functions taught during the unit in order to build a basic version of my game.


## Stretch Goals

I did not get many of my stretch goals completed and this is what I would like to acomplish before I graduate from this bootcamp

-   Make 3 differen levels (Easy, Medium, Hard) to provide more variety and challenge to the user.

-   A bank of boards in those different levels. Maybe 10 differnet puzzles for each level. This will involve me using different arrays and labeling them accordingly, then using a math.random function to call a random puzzle. I thought I could complete this, but the difficult part was linking up the starting boards with the solution boards.

-   Add some sort of scoring system to add to, or even replace, the error counter. This would involve me to come up with a potential scoring system that involves time completed, the amount of errors, etc.

-    Add a timer. This is something I thought I would have been able to complete in the given project time, but for some reason I could not get one to work. In the end, I had to delete the timer as it would not count.

-   A proper homepage where you can see your previous scores, pick your levels, etc.

-   Increased css to make the game pop a little more. As the game is, this is the bare minimu I did to make the game function.

## I hope you enjoyed my game!
