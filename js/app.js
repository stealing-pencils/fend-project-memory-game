/*
 * Create a list that holds all of your cards
 */
 let eachCard = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];
 let numberOfMisses = 0;
 let cardMatchCounter = 0;
 let listOfCards = [];
 let lockCardsOpen = [];
 let star = $('.score-panel ul li');
 let starRating = star.length;
 let reloadIcon = $('.score-panel li');
 let minutes = $('.score-panel span').children();
 let modalInner = document.getElementById("modalMessage");



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
function initGame() {
  startTimer();
  $('.card').on("click", function (evt){
    if ($(listOfCards).hasClass('show')){
      if (listOfCards.length >= 2) {
      } else {
        // *  - display the card's symbol (put this functionality in another function that you call from this one)
        showCard(this);
        cardMatch(listOfCards);
      }
    } else {
        showCard(this);
    }
  });
}

// *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
function showCard(evt) {
  $(evt).addClass('open show');
  addCardToList(evt);
}

// add open card to the list of open cards
function addCardToList(card) {
  listOfCards.push(card);
}

// *  - if the list already has another card, check to see if the two cards match
function cardMatch(listOfCards) {
  let cardOne = $(listOfCards[0]).html();
  let cardTwo = $(listOfCards[1]).html();
  if (cardOne === cardTwo) {
    $('.open').addClass('match');
    keepCardsOpen(cardOne, cardTwo);

  } else {
    numberOfMisses ++;
    allFaceDown();
  }
}

// *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
  function keepCardsOpen (cardOne, cardTwo) {
    lockCardsOpen.push(cardOne, cardTwo);
    cardMatchCounter ++;
    gameFinishCheck(cardMatchCounter);
  }



  // *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
function allFaceDown() {
  setTimeout(function(){
    $('.open').removeClass('show open');
    listOfCards.length = 0;
  }, 1500);
  moveCounter(numberOfMisses);
}



function moveCounter(numberOfMisses){
  let starRating = 5;
  if (numberOfMisses < 4) {
  } else if (numberOfMisses === 4) {
    removeStars();
  } else if (numberOfMisses === 6) {
    removeStars();
  } else if (numberOfMisses === 9) {
    removeStars();
  } else if (numberOfMisses === 11) {
    removeStars();
  } else if (numberOfMisses > 14) {
    star.text("0 Stars!");
  }
}

function removeStars(){
  starRating --;
  star[starRating].remove();
}

/*
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 function gameFinishCheck(cardMatchCounter) {
   if (cardMatchCounter < 8) {
     listOfCards.length = 0;
   } else {
     gameOverModal(starRating);
     stopTimer();
   }
 };


 //  reloadIcons game
   reloadIcon.on("click", function reloadGame(evt) {
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

function stopTimer() {
        clearInterval(timer);
}

// Get the modal
let modal = document.getElementById('modalOnFinish');
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// modal opens after user ends the game
function gameOverModal(starRating) {
    modal.style.display = "block";
    let finalSeconds = document.getElementById("seconds").innerText;
    let finalMinutes = document.getElementById("minutes").innerText;
    modalInner.textContent ="Congratulations!  You have finished the game in " +
    finalMinutes + " minutes and " + finalSeconds +
    " seconds and your star rating is:  " + starRating;
}

// closes the modal on click of (x)
span.onclick = function() {
    modal.style.display = "none";
}

function buttonFunction() {
  location.reload();
}


initGame();
