// window.setTimeout(function () {
//   alert('HAMMERTIME!');
// }, 5000);

// function hammerTime(time) {
//   window.setTimeout(function () {
//     alert(`${time} is hammertime!`);
//   });
// }

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBuiscuits () {
  reader.question('Would you like some tea?', function(res) {
    console.log(`You replied ${res}.`);
    reader.question('Would you like some biscuits?', function(res2){
      console.log(`You replied ${res2}.`);
      const first = (res === 'yes') ? 'do' : "don't";
      const second = (res2 === 'yes') ? 'do' : "don't";
      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      reader.close();
    });
  });
}

