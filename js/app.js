/** Create a list that holds all of your cards */
 let eachCard = ["fa fa-diamond", "fa fa-paper-plane-o",
                 "fa fa-anchor", "fa fa-bolt",
                 "fa fa-cube", "fa fa-anchor",
                 "fa fa-leaf", "fa fa-bicycle",
                 "fa fa-diamond", "fa fa-bomb",
                 "fa fa-leaf", "fa fa-bomb",
                 "fa fa-bolt", "fa fa-bicycle",
                 "fa fa-paper-plane-o", "fa fa-cube"];
 let numberOfMisses = 0;
 let cardMatchCounter = 0;
 let listOfCards = [];
 let star = $(".score-panel ul li");
 let starRating = star.length;
 let reloadIcon = $(".score-panel li");
 let minutes = $(".score-panel span").children();
 let modalInner = document.getElementById("modalMessage");
 let timerSeconds = document.getElementById("seconds");
 let timerMinutes = document.getElementById("minutes");
 let numberOfMoves = document.getElementById("number_of_moves");


/** Shuffle function from http://stackoverflow.com/a/2450976 */
 function shuffle(array) {
     let currentIndex = array.length, temporaryValue, randomIndex;

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

/** Display the cards on the page
* loop through each card and create its HTML
*  add each card's HTML to the page */
for (let i = 0; i < eachCard.length; i++) {
 $(".deck").append($('<li class="card"><i class="' +
 eachCard[i] + '"></i></li>'));
}

/** set up the event listener for a card. If a card is clicked: */
function initGame() {
  startTimer();
  $(".card").on("click", function (evt){
    /** asks if there is already one upturned card
    * display the card's symbol
    * (put this functionality in another function that you call from this one) */
    const hasClassShow = ($(listOfCards).hasClass("show"));
    const hasTwoCardsOrMore = (listOfCards.length >= 2);
    const stopTurn = console.log('cards stop turning on click');
    hasClassShow ? (hasTwoCardsOrMore ? stopTurn : (showCard(this), cardMatch(listOfCards))): showCard(this);
  });
}

/** displays card */
function showCard(evt) {
  if ($(evt).hasClass("noDuplicate")) {
    console.log("no cheating!");
  } else {
    $(evt).addClass("open show");
    /**  - add the card to a *list* of "open" cards (put this functionality
    in another function that you call from this one) */
    addCardToList(evt);
  }
}

/** add open card to the list of open cards */
function addCardToList(card) {
  listOfCards.length === 0 ? ($(".open").addClass("noDuplicate"), listOfCards.push(card)) : listOfCards.push(card);
}


/**  if the list already has another card, check to see if the two
cards match */
function cardMatch(listOfCards) {
  $(".open").removeClass("noDuplicate");
  let cardOne = $(listOfCards[0]).html();
  let cardTwo = $(listOfCards[1]).html();
  if (cardOne === cardTwo) {
    $(".open").addClass("match");
    cardMatchCounter ++;
    gameFinishCheck(cardMatchCounter);
  } else {
    /** counts how many failed attempts have been made to match cards */
    numberOfMisses ++;
    moveCounter(numberOfMisses);
    /**  if the cards do not match, remove the cards from the list and hide
    * the card's symbol (put this functionality in another function
    * that you call from this one) */
    if ($(".open").hasClass(".noDuplicate")) {
      console.log("got to listOfCards pop");
      listOfCards.pop();
    } else {
      allFaceDown();
    }
  }
}

/** if the cards do match, lock the cards in the open position
*(put this functionality in another function that you call from this one) */




function allFaceDown() {
  setTimeout(function(){
    $(".open").removeClass("show open");
    listOfCards.length = 0;
  }, 1500);
  starCounter(numberOfMisses);
}



function starCounter(numberOfMisses){

  // numberOfMisses === 4 ? removeStars() : (numberOfMisses === 6 ? removeStars() : (numberOfMisses === 9 ? removeStars() : (numberOfMisses === 11 ? removeStars() : (numberOfMisses > 14 ? star.text("0 stars!"))));
// }
  if (numberOfMisses === 6) {
    removeStars();
  } else if (numberOfMisses === 9) {
    removeStars();
  } else if (numberOfMisses === 11) {
    removeStars();
  } else if (numberOfMisses === 14) {
    removeStars();
  }
}

/** removes stars from score panel */
function removeStars(){
  starRating --;
  star[starRating].remove();
}

/**  if all cards have matched, display a message
* with the final score (put this functionality in another
* function that you call from this one) */
 function gameFinishCheck(cardMatchCounter) {
   cardMatchCounter < 8 ? listOfCards.length = 0 : (gameOverModal(starRating), stopTimer());
 }



/** reloadIcons game */
reloadIcon.on("click", function reloadGame(evt) {
 location.reload();
})

/** displays moves made */
let moveCounter = (numberOfMisses) => numberOfMoves.innerText = numberOfMisses;



/** stars game timer */
function startTimer() {
     var seconds = 0;
     timer = setInterval(function() {
       seconds ++;
       timerSeconds.innerText = seconds % 60;
       timerMinutes.innerText = parseInt(seconds / 60);
     }, 1000);
}

/** stops game timer */
const stopTimer = () => clearInterval(timer);
// function stopTimer() {
//         clearInterval(timer);
// }

// *** MODAL *** //

/** Gets the modal */
let modal = document.getElementById("modalOnFinish");
/** Gets the close element for the modal */
let span = document.getElementsByClassName("close")[0];
/** modal opens after user ends the game */
function gameOverModal(starRating) {
    modal.style.display = "block";
    finalSeconds = document.getElementById("seconds").innerText;
    finalMinutes = document.getElementById("minutes").innerText;
    // modal message
    modalInner.textContent ='Congratulations!  You have finished the game in ' +
    finalMinutes + ' minutes and ' + finalSeconds +
    ' seconds and your star rating is:  ' + starRating;
}

/** closes the modal on click of (x) */
span.onclick = function() {
    modal.style.display = "none";
}

/**  reloads game on click of modal button */
function buttonFunction() {
  location.reload();
}

/** starts game */
initGame();
