# Memory Game Project

## Table of Contents

* Play the game
* Instructions
* Code Reliance

## Play the game

[Github preview of the Matching Game](http://htmlpreview.github.io/?https://github.com/stealing-pencils/fend-project-memory-game/blob/master/index.html)


## Instructions

The game begins with 16 cards, all facing down.  Each card has a symbol that matches one other,
making 8 pairs of cards.  The objective of the game is to find each pair with as few
moves as possible and as quickly as possible.

The player can click on any two cards at a time.  When a pair is found,
these matching cards will remain upturned.  If the player clicks on two cards that do
not match, they will both be returned to their downward facing position, ready for the
player's next guess.  The player must remember where each card lays, to test their
memory.

The player's star rating begins at 5 and will reduce by 1 to 0 as more guesses are
made wrongly.  The timer will continue until the player finds all of the matching
cards.  The player's final star rating and time to complete the game will be
summarised at the end of the game.  The player's moves will be also be displayed,
based on each pair that has been wrongly upturned. The player can reset the game
at any time using the reset button at the top right-hand corner of the page.


## Code Reliance

- Udacity Memory Game project starter code used.
- [Stackoverflow shuffle  function](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976)
- [Based Modal on W3Schools starter modal](https://www.w3schools.com/howto/howto_css_modals.asp)
- [Referenced this code to create the timer](http://logicalmoon.com/2015/05/using-javascript-to-create-a-timer/)
