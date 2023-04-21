// this deck will go [5, 15]

// let deck = []; const newt = [];
// const x = ["PUSH-UP", "FLUTTER KICK", "OVERHEAD PRESS", "PULL-UP", "50-METER DASH"]
// for (let c = 0; c < x.length; c++){
//   for (let j = 5; j <= 9; j++){
//     deck.push(j +"x " + x[c] )
//   }
// }
// The deck is populated, but NOT shuffled.
// every day I'm shuffling...
// Returns a random integer from 1 to 10: Math.floor(Math.random() * 10) + 1

// go to index 3 and remove 1 element: const removed = myFish.splice(3, 1);

let h = [0, 1, 2, 3, 4, 5, 6];
let m = [];
// h = h.slice(0,6).concat(h.slice(7));
while (h.length) {
  let t = h.length;
  let rando = Math.floor(Math.random() * t);
  m.push(h[rando]);
  h = h.slice(0, rando).concat(h.slice(rando + 1));
}

console.log("m =", m);
