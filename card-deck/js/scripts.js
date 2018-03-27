var cards = ["club", "heart", "spade", "diamonds"];
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]



// forEach loop functioning
cards.forEach(function(card) {
  ranks.forEach(function(rank){
  console.log(rank + " of " + card);
  });
});

// for loop functioning
var cards = ["club", "heart", "spade", "diamonds"];
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

for (var number1 = 0; number1 <= 4; number1+= 1) {
	for (var number2 = 0; number2 <= 12; number2+= 1) {
	console.log(ranks[number2] + " of " + cards[number1]);
	}
}




// cards.forEach(function(card)) {
//   card.
//
// });

// $(document).ready(function(event) {
//     $("form#flavors").submit(function(event) {
//       event.preventDefault();
//
//       var deckCards = [""];

      // favoriteFlavors.forEach(function(flavor) {
      //   var flavorInput = $("input#" + flavor).val();
      //   $("." + flavor).text(flavorInput);
      //   $(".list").append("<li>" + flavorInput + "</li>");
      //   myFlavors.push(flavorInput);
      //   console.log(myFlavors);
//       });
//
//     });
// });
