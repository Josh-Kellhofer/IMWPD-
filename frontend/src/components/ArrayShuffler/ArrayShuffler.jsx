

function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// let randomMorningActivty = entries.filter(activity => activity.morning_activity);
// randomArrayShuffle(randomMorningActivty);
// console.log("Random Array Morning Activity", randomArrayShuffle(randomMorningActivty));

var alphabet=["a","b","c","d","e"];
randomArrayShuffle(alphabet); 
console.log("Random Array Shuffler", randomArrayShuffle(alphabet))
//alphabet is now shuffled randomly = ["d", "c", "b", "e", "a"]

    



//     console.log("Random Morning Activity", randomMorningActivty)

//     let mapActivities = randomActivity.map
//     })
//   }
// }




export default randomArrayShuffle;