/*
 * Create a list that holds all of your cards
 */
 let eachCard = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];
 let numberOfLives = 3;
 let listOfCards = [];
 let lockCardsOpen = [];
 let star = $('.score-panel ul li');
 let reload = $('.score-panel li');

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
/*

 */

//* Display the cards on the page
// *   - loop through each card and create its HTML
// *   - add each card's HTML to the page
for (let i = 0; i<eachCard.length; i++) {
 $('.deck').append($('<li class="card"><i class="' + eachCard[i] + '"></i></li>'));
}

// $('.card').off("click");

turnCardOver();
// * set up the event listener for a card. If a card is clicked: */
function turnCardOver() {
  $('.card').on("click", function (evt){
    console.log(listOfCards);
    if ($(listOfCards).hasClass('show')){
      console.log("got to part 2");
      // *  - display the card's symbol (put this functionality in another function that you call from this one)
      showCard(this);
      cardMatch(listOfCards);

    } else {
        if (numberOfLives === 0) {
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
  // if (listOfCards.length <= 1) {
  $(evt).addClass('open show');
  console.log("got to showCard");
  addCardToList(evt);


  // } else {
  //   $(".class").unbind("click");
  // }
}
// add open card to the list of open cards
function addCardToList(card) {
  console.log('got to addCardList');
  listOfCards.push(card);
}

// *  - if the list already has another card, check to see if the two cards match
function cardMatch(listOfCards) {
  console.log('got to cardMatch');
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
    console.log("These are locked cards: " + lockCardsOpen);
    listOfCards.length = 0;
    console.log("here is listOfCards after reset" + listOfCards);
  }

  // *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
function allFaceDown() {
  setTimeout(function(){
    $('.open').removeClass('show open');
  }, 1500);
  moveCounter(numberOfLives);
  listOfCards.length = 0;
}

function moveCounter(numberOfLives){
  star[numberOfLives].remove();
}
/*
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 //  reload function
 reload.on("click", function(evt) {
   location.reload();
 })
