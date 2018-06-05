/*
 * Create a list that holds all of your cards
 */
 let eachCard = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];
 let numberOfLives = 8;
 let cardMatchCounter = 0;
 let listOfCards = [];
 let lockCardsOpen = [];
 let star = $('.score-panel ul li');
 let reload = $('.score-panel li');
 let minutes = $('.score-panel span').children();


minutes.css('color', 'red');
 // Shuffle function from http://stackoverflow.com/a/2450976
 function shuffle(array) {
     var currentIndex = array.length, temporaryValue, randomIndex;

     while (currentIndex !== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }

     return array;
 }

 eachCard = shuffle(eachCard);

//* Display the cards on the page
// *   - loop through each card and create its HTML
// *   - add each card's HTML to the page
for (let i = 0; i<eachCard.length; i++) {
 $('.deck').append($('<li class="card"><i class="' + eachCard[i] + '"></i></li>'));
}

// * set up the event listener for a card. If a card is clicked: */
function turnCardOver() {
  $('.card').on("click", function (evt){
    if ($(listOfCards).hasClass('show')){
      if (listOfCards.length >= 2) {
        console.log(listOfCards.length);
        console.log("here we are at this bit");
      } else {
        console.log("got to part 2");
        // *  - display the card's symbol (put this functionality in another function that you call from this one)
        showCard(this);
        cardMatch(listOfCards);
      }
    } else {
        if (numberOfLives === 0) {
          stopTimer();
          alert("Game Over");
        } else {
        console.log("got to part 1");
        showCard(this);
      }
    }
  });
}

// *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
function showCard(evt) {
  $(evt).addClass('open show');
  console.log("got to showCard");
  addCardToList(evt);
}

// add open card to the list of open cards
function addCardToList(card) {
  console.log('got to addCardList');
  console.log(listOfCards.length);
  listOfCards.push(card);
}

// *  - if the list already has another card, check to see if the two cards match
function cardMatch(listOfCards) {
  console.log('got to cardMatch');
  console.log(listOfCards + "this is the html version");
  let cardOne = $(listOfCards[0]).html();
  let cardTwo = $(listOfCards[1]).html();
  console.log(cardOne, cardTwo);
  if (cardOne === cardTwo) {
    console.log("it worked");
    $('.open').addClass('match');
    keepCardsOpen(cardOne, cardTwo);

  } else {
    console.log('it didnt work');
    numberOfLives --;
    allFaceDown();
  }
}

// *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
  function keepCardsOpen (cardOne, cardTwo) {
    console.log("got to keepCardsOpen function");
    lockCardsOpen.push(cardOne, cardTwo);
    cardMatchCounter ++;
    gameFinishCheck(cardMatchCounter);
  }



  // *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
function allFaceDown() {
  console.log('got to allFaceDown');
  setTimeout(function(){
    $('.open').removeClass('show open');
    listOfCards.length = 0;
  }, 1500);
  moveCounter(numberOfLives);
}

// reduces number of stars / lives each time a pair of cards fails to match
function moveCounter(numberOfLives){
  star[numberOfLives].remove();
}
/*
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 function gameFinishCheck(cardMatchCounter) {
   if (cardMatchCounter < 8) {
     console.log("These are locked cards: " + lockCardsOpen);
     listOfCards.length = 0;
     console.log("here is listOfCards after reset" + listOfCards);
   } else {
     stopTimer();
     alert("CONGRATULATIONS WINNER: You had " + numberOfLives + " lives remaining");
   }
 };

 //  reloads game
 reload.on("click", function(evt) {
   location.reload();
 })

function startTimer() {
     var seconds = 0;
     timer = setInterval(function() {
       seconds ++;
       document.getElementById("seconds").innerText = seconds % 60;
       document.getElementById("minutes").innerText = parseInt(seconds / 60);
     }, 1000);
}

startTimer();

function stopTimer() {
        clearInterval(timer);
}
//
// var counter = 0;
// var timer = setInterval(function(){
//   console.log(counter);
//   counter++
//   if (game ends) {
//     console.log("HAPPY NEW YEAR!!");
//     clearInterval(timer);
//   }
// }, 1000);


 turnCardOver();
