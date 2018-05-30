/*
 * Create a list that holds all of your cards
 */
 let singleCard = $('.card');
 let eachCard = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];
 let deck = $('.deck');
 let numberOpenCards = 0;
 let nameOpenCards = [];

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
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below

 */


// *   - loop through each card and create its HTML
// *   - add each card's HTML to the page
for (let i = 0; i<eachCard.length; i++) {
 deck.append($('<li class="card"><i class="' + eachCard[i] + '"></i></li>'));
}

// * set up the event listener for a card. If a card is clicked: */
// *  - display the card's symbol (put this functionality in another function that you call from this one)



$('.card').on("click", function flipCardOver(evt){
   if (numberOpenCards === 0) {
     $(evt.target).addClass('open show');
     numberOpenCards ++;

  } else if (numberOpenCards === 1) {
    let cardOne = console.log($('.open').html());
    let cardTwo = $(evt.target).addClass('open show');
    cardTwo = ($(cardTwo).html());
    cardMatch(cardOne, cardTwo);
   }
});
   // *  - if the list already has another card, check to see if the two cards match

// *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
function cardMatch(cardOne, cardTwo) {
  console.log(cardOne);
  console.log(cardTwo);
};






/*
 // for (card of eachCard) {
 //  console.log(card);
 // 	deck.append($('<li class="card"><i class="'
 //    + eachCard + '"></i></li>'));
 // }





/*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
