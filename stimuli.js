//Shuffle using Fisher-Yates
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function compareArrays(arr1, arr2) {
  // check the length
  if (arr1.length != arr2.length) {
    return false;
  } else {
    let result = false;

    // comparing each element of array
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
}

//mezclamelosssss
function mezclarArrays(stimuli_task_n) {
  for (let index = 0; index < stimuli_task_n.length; index++) {
    let original = stimuli_task_n[index].choices;
    console.log("original: ", original);
    let changed = shuffle(original.slice());
    console.log("changed: ", changed);
    if (compareArrays(original, changed)) {
      console.log("tamos igual!");
    } else {
      console.log("tamos cambiados!");
    }
    console.log(
      "stimuli_task_n[index].choices: ",
      stimuli_task_n[index].choices
    );
    stimuli_task_n[index].choices = changed;
  }
  return stimuli_task_n;
}

// ********************** STIMULI TASK 1 ********************** \\
let stimuli_task_1 = [
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 77 </P></strong><div id='app'></div></center>",
    choices: ["77", "77"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 82 </P></strong><div id='app'></div></center>",
    choices: ["28", "82"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 26 </P></strong><div id='app'></div></center>",
    choices: ["62", "26"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 54 </P></strong><div id='app'></div></center>",
    choices: ["54", "45"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 17 </P></strong><div id='app'></div></center>",
    choices: ["71", "17"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 93 </P></strong><div id='app'></div></center>",
    choices: ["93", "39"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 44 </P></strong><div id='app'></div></center>",
    choices: ["44", "44"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 37 </P></strong><div id='app'></div></center>",
    choices: ["73", "37"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 13 </P></strong><div id='app'></div></center>",
    choices: ["31", "13"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 66 </P></strong><div id='app'></div></center>",
    choices: ["66", "66"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 74 </P></strong><div id='app'></div></center>",
    choices: ["47", "74"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 92 </P></strong><div id='app'></div></center>",
    choices: ["29", "92"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 35 </P></strong><div id='app'></div></center>",
    choices: ["35", "53"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 16 </P></strong><div id='app'></div></center>",
    choices: ["16", "61"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 99 </P></strong><div id='app'></div></center>",
    choices: ["99", "99"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 58 </P></strong><div id='app'></div></center>",
    choices: ["58", "85"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 72 </P></strong><div id='app'></div></center>",
    choices: ["27", "72"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 61 </P></strong><div id='app'></div></center>",
    choices: ["61", "16"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 46 </P></strong><div id='app'></div></center>",
    choices: ["46", "64"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 11 </P></strong><div id='app'></div></center>",
    choices: ["11", "11"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 51 </P></strong><div id='app'></div></center>",
    choices: ["15", "51"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 48 </P></strong><div id='app'></div></center>",
    choices: ["48", "84"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 57 </P></strong><div id='app'></div></center>",
    choices: ["57", "75"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 33 </P></strong><div id='app'></div></center>",
    choices: ["33", "33"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 73 </P></strong><div id='app'></div></center>",
    choices: ["73", "37"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 28 </P></strong><div id='app'></div></center>",
    choices: ["28", "82"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 19 </P></strong><div id='app'></div></center>",
    choices: ["19", "91"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 52 </P></strong><div id='app'></div></center>",
    choices: ["25", "52"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 96 </P></strong><div id='app'></div></center>",
    choices: ["69", "96"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 78 </P></strong><div id='app'></div></center>",
    choices: ["87", "78"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
]; // Checked

// ********************** STIMULI TASK 2 ********************** \\
let stimuli_task_2 = [
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 11 </P></strong><div id='app'></div></center>",
    choices: ["11", "11"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 96 </P></strong><div id='app'></div></center>",
    choices: ["69", "96"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 48 </P></strong><div id='app'></div></center>",
    choices: ["84", "48"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 97 </P></strong><div id='app'></div></center>",
    choices: ["97", "79"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 88 </P></strong><div id='app'></div></center>",
    choices: ["88", "88"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 46 </P></strong><div id='app'></div></center>",
    choices: ["64", "46"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 18 </P></strong><div id='app'></div></center>",
    choices: ["18", "81"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 89 </P></strong><div id='app'></div></center>",
    choices: ["89", "98"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 47 </P></strong><div id='app'></div></center>",
    choices: ["74", "47"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 64 </P></strong><div id='app'></div></center>",
    choices: ["64", "46"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 77 </P></strong><div id='app'></div></center>",
    choices: ["77", "77"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 81 </P></strong><div id='app'></div></center>",
    choices: ["81", "18"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 57 </P></strong><div id='app'></div></center>",
    choices: ["75", "57"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 92 </P></strong><div id='app'></div></center>",
    choices: ["92", "29"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 26 </P></strong><div id='app'></div></center>",
    choices: ["62", "26"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 55 </P></strong><div id='app'></div></center>",
    choices: ["55", "55"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 34 </P></strong><div id='app'></div></center>",
    choices: ["34", "43"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 27 </P></strong><div id='app'></div></center>",
    choices: ["27", "72"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 85 </P></strong><div id='app'></div></center>",
    choices: ["58", "85"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 73 </P></strong><div id='app'></div></center>",
    choices: ["37", "73"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 99 </P></strong><div id='app'></div></center>",
    choices: ["99", "99"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 19 </P></strong><div id='app'></div></center>",
    choices: ["91", "19"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 28 </P></strong><div id='app'></div></center>",
    choices: ["82", "28"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 14 </P></strong><div id='app'></div></center>",
    choices: ["41", "14"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 75 </P></strong><div id='app'></div></center>",
    choices: ["57", "75"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 36 </P></strong><div id='app'></div></center>",
    choices: ["63", "36"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 79 </P></strong><div id='app'></div></center>",
    choices: ["79", "97"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 22 </P></strong><div id='app'></div></center>",
    choices: ["22", "22"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 51 </P></strong><div id='app'></div></center>",
    choices: ["15", "51"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 62 </P></strong><div id='app'></div></center>",
    choices: ["26", "62"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
]; // Checked

// ********************** STIMULI TASK 3 ********************** \\
let stimuli_task_3 = [
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> J9 </P></strong><div id='app'></div></center>",
    choices: ["9J", "J9"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5S </P></strong><div id='app'></div></center>",
    choices: ["5S", "S5"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 6L </P></strong><div id='app'></div></center>",
    choices: ["6L", "L6"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 4S </P></strong><div id='app'></div></center>",
    choices: ["S4", "4S"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> X1 </P></strong><div id='app'></div></center>",
    choices: ["X1", "1X"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 7Z </P></strong><div id='app'></div></center>",
    choices: ["Z7", "7Z"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 8Y </P></strong><div id='app'></div></center>",
    choices: ["Y8", "8Y"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 1Q </P></strong><div id='app'></div></center>",
    choices: ["1Q", "Q1"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 3A </P></strong><div id='app'></div></center>",
    choices: ["3A", "A3"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 8I </P></strong><div id='app'></div></center>",
    choices: ["I8", "8I"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> E4 </P></strong><div id='app'></div></center>",
    choices: ["4E", "E4"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 7T </P></strong><div id='app'></div></center>",
    choices: ["T7", "7T"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 2R </P></strong><div id='app'></div></center>",
    choices: ["2R", "R2"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5K </P></strong><div id='app'></div></center>",
    choices: ["5K", "K5"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> H6 </P></strong><div id='app'></div></center>",
    choices: ["H6", "6H"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9P </P></strong><div id='app'></div></center>",
    choices: ["P9", "9P"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5N </P></strong><div id='app'></div></center>",
    choices: ["5N", "N5"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9C </P></strong><div id='app'></div></center>",
    choices: ["9C", "C9"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 7P </P></strong><div id='app'></div></center>",
    choices: ["7P", "P7"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5C </P></strong><div id='app'></div></center>",
    choices: ["5C", "C5"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> L1 </P></strong><div id='app'></div></center>",
    choices: ["1L", "L1"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 6G </P></strong><div id='app'></div></center>",
    choices: ["G6", "6G"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 4D </P></strong><div id='app'></div></center>",
    choices: ["4D", "D4"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 7S </P></strong><div id='app'></div></center>",
    choices: ["S7", "7S"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 8N </P></strong><div id='app'></div></center>",
    choices: ["8N", "N8"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5J </P></strong><div id='app'></div></center>",
    choices: ["5J", "J5"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 6P </P></strong><div id='app'></div></center>",
    choices: ["P6", "6P"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> Q3 </P></strong><div id='app'></div></center>",
    choices: ["Q3", "3Q"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 4H </P></strong><div id='app'></div></center>",
    choices: ["H4", "4H"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 1Z </P></strong><div id='app'></div></center>",
    choices: ["Z1", "1Z"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
]; // Checked

// ********************** STIMULI TASK 4 ********************** \\
let stimuli_task_4 = [
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> J1 </P></strong><div id='app'></div></center>",
    choices: ["1J", "J1"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 3D </P></strong><div id='app'></div></center>",
    choices: ["3D", "D3"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 6E </P></strong><div id='app'></div></center>",
    choices: ["E6", "6E"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 8M </P></strong><div id='app'></div></center>",
    choices: ["8M", "M8"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 2R </P></strong><div id='app'></div></center>",
    choices: ["R2", "2R"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> H7 </P></strong><div id='app'></div></center>",
    choices: ["7H", "H7"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5I </P></strong><div id='app'></div></center>",
    choices: ["5I", "I5"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 8F </P></strong><div id='app'></div></center>",
    choices: ["8F", "F8"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 1Q </P></strong><div id='app'></div></center>",
    choices: ["1Q", "Q1"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 2P </P></strong><div id='app'></div></center>",
    choices: ["2P", "P2"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> S4 </P></strong><div id='app'></div></center>",
    choices: ["4S", "S4"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 3G </P></strong><div id='app'></div></center>",
    choices: ["G3", "3G"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 8O </P></strong><div id='app'></div></center>",
    choices: ["O8", "8O"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 4Y </P></strong><div id='app'></div></center>",
    choices: ["Y4", "4Y"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9J </P></strong><div id='app'></div></center>",
    choices: ["9J", "J9"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> N4 </P></strong><div id='app'></div></center>",
    choices: ["4N", "N4"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 7P </P></strong><div id='app'></div></center>",
    choices: ["P7", "7P"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 6Y </P></strong><div id='app'></div></center>",
    choices: ["Y6", "6Y"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 3A </P></strong><div id='app'></div></center>",
    choices: ["3A", "A3"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 7S </P></strong><div id='app'></div></center>",
    choices: ["S7", "7S"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> R2 </P></strong><div id='app'></div></center>",
    choices: ["R2", "2R"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5L </P></strong><div id='app'></div></center>",
    choices: ["5L", "L5"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 4N </P></strong><div id='app'></div></center>",
    choices: ["N4", "4N"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 8B </P></strong><div id='app'></div></center>",
    choices: ["B8", "8B"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 6P </P></strong><div id='app'></div></center>",
    choices: ["P6", "6P"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9D </P></strong><div id='app'></div></center>",
    choices: ["D9", "9D"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 2S </P></strong><div id='app'></div></center>",
    choices: ["S2", "2S"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> Z5 </P></strong><div id='app'></div></center>",
    choices: ["5Z", "Z5"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9P </P></strong><div id='app'></div></center>",
    choices: ["9P", "P9"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 7T </P></strong><div id='app'></div></center>",
    choices: ["T7", "7T"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
]; //Checked

// ********************** STIMULI TASK 5 ********************** \\
let stimuli_task_5 = [
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 515 </P></strong><div id='app'></div></center>",
    choices: ["515", "515"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 347 </P></strong><div id='app'></div></center>",
    choices: ["743 ", "347"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 513 </P></strong><div id='app'></div></center>",
    choices: ["513", "315"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 272 </P></strong><div id='app'></div></center>",
    choices: ["272", "272"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 192 </P></strong><div id='app'></div></center>",
    choices: ["291", "192"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 476 </P></strong><div id='app'></div></center>",
    choices: ["674", "476"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 876 </P></strong><div id='app'></div></center>",
    choices: ["678", "876"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 812 </P></strong><div id='app'></div></center>",
    choices: ["218", "812"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 233 </P></strong><div id='app'></div></center>",
    choices: ["233", "332"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 979 </P></strong><div id='app'></div></center>",
    choices: ["979", "979"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 163 </P></strong><div id='app'></div></center>",
    choices: ["361", "163"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 396 </P></strong><div id='app'></div></center>",
    choices: ["396", "693"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 652 </P></strong><div id='app'></div></center>",
    choices: ["652", "256"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 417 </P></strong><div id='app'></div></center>",
    choices: ["417", "714"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 193 </P></strong><div id='app'></div></center>",
    choices: ["193", "391"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 383 </P></strong><div id='app'></div></center>",
    choices: ["383", "383"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 483 </P></strong><div id='app'></div></center>",
    choices: ["483", "384"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 449 </P></strong><div id='app'></div></center>",
    choices: ["944", "449"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 278 </P></strong><div id='app'></div></center>",
    choices: ["872", "278"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 556 </P></strong><div id='app'></div></center>",
    choices: ["655", "556"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 785 </P></strong><div id='app'></div></center>",
    choices: ["587", "785"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 969 </P></strong><div id='app'></div></center>",
    choices: ["969", "969"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 678 </P></strong><div id='app'></div></center>",
    choices: ["876", "678"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 344 </P></strong><div id='app'></div></center>",
    choices: ["344", "443"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 372 </P></strong><div id='app'></div></center>",
    choices: ["372", "273"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 791 </P></strong><div id='app'></div></center>",
    choices: ["791", "197"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 858 </P></strong><div id='app'></div></center>",
    choices: ["858", "858"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 946 </P></strong><div id='app'></div></center>",
    choices: ["946", "649"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 342 </P></strong><div id='app'></div></center>",
    choices: ["342", "243"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 754 </P></strong><div id='app'></div></center>",
    choices: ["457", "754"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
]; // Checked

// ********************** STIMULI TASK 6 ********************** \\
let stimuli_task_6 = [
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 717 </P></strong><div id='app'></div></center>",
    choices: ["717", "717"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 771 </P></strong><div id='app'></div></center>",
    choices: ["771", "177"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 837 </P></strong><div id='app'></div></center>",
    choices: ["738", "837"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 256 </P></strong><div id='app'></div></center>",
    choices: ["652", "256"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 363 </P></strong><div id='app'></div></center>",
    choices: ["363", "363"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 158 </P></strong><div id='app'></div></center>",
    choices: ["851", "158"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 399 </P></strong><div id='app'></div></center>",
    choices: ["399", "993"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 493 </P></strong><div id='app'></div></center>",
    choices: ["394", "493"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 585 </P></strong><div id='app'></div></center>",
    choices: ["585", "585"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 368 </P></strong><div id='app'></div></center>",
    choices: ["368", "863"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 574 </P></strong><div id='app'></div></center>",
    choices: ["574", "475"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 282 </P></strong><div id='app'></div></center>",
    choices: ["282", "282"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 356 </P></strong><div id='app'></div></center>",
    choices: ["653", "356"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 284 </P></strong><div id='app'></div></center>",
    choices: ["482", "284"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 975 </P></strong><div id='app'></div></center>",
    choices: ["975", "579"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 919 </P></strong><div id='app'></div></center>",
    choices: ["919", "919"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 358 </P></strong><div id='app'></div></center>",
    choices: ["853", "358"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 357 </P></strong><div id='app'></div></center>",
    choices: ["357", "753"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 325 </P></strong><div id='app'></div></center>",
    choices: ["523", "325"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 873 </P></strong><div id='app'></div></center>",
    choices: ["873", "378"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 649 </P></strong><div id='app'></div></center>",
    choices: ["946", "649"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 137 </P></strong><div id='app'></div></center>",
    choices: ["731", "137"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 359 </P></strong><div id='app'></div></center>",
    choices: ["953", "359"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 636 </P></strong><div id='app'></div></center>",
    choices: ["636", "636"],
    data: {
      test_part: "test",
      correct_response: "equal",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 352 </P></strong><div id='app'></div></center>",
    choices: ["352", "253"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 457 </P></strong><div id='app'></div></center>",
    choices: ["457", "754"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 563 </P></strong><div id='app'></div></center>",
    choices: ["563", "365"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 355 </P></strong><div id='app'></div></center>",
    choices: ["553", "355"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 618 </P></strong><div id='app'></div></center>",
    choices: ["816", "618"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 571 </P></strong><div id='app'></div></center>",
    choices: ["571", "175"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
]; // Checked

// ********************** STIMULI TASK 7 ********************** \\
let stimuli_task_7 = [
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> C92 </P></strong><div id='app'></div></center>",
    choices: ["C92", "29C"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 84T </P></strong><div id='app'></div></center>",
    choices: ["48T", "T48"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5RF </P></strong><div id='app'></div></center>",
    choices: ["FR5", "5FR"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 76T </P></strong><div id='app'></div></center>",
    choices: ["T67", "67T"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5AL </P></strong><div id='app'></div></center>",
    choices: ["5AL", "AL5"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 95H </P></strong><div id='app'></div></center>",
    choices: ["H59", "59H"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> F71 </P></strong><div id='app'></div></center>",
    choices: ["17F", "F17"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 54A </P></strong><div id='app'></div></center>",
    choices: ["A45", "45A"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 8K4 </P></strong><div id='app'></div></center>",
    choices: ["48K", "K48"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> D5F </P></strong><div id='app'></div></center>",
    choices: ["5DF", "DF5"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> H52 </P></strong><div id='app'></div></center>",
    choices: ["25H", "H25"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 21U </P></strong><div id='app'></div></center>",
    choices: ["U12", "12U"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 1HR </P></strong><div id='app'></div></center>",
    choices: ["1HR", "HR1"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> GE9 </P></strong><div id='app'></div></center>",
    choices: ["9EG", "EG9"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5BA </P></strong><div id='app'></div></center>",
    choices: ["5AB", "AB5"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> E68 </P></strong><div id='app'></div></center>",
    choices: ["E68", "68E"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 57R </P></strong><div id='app'></div></center>",
    choices: ["57R", "R57"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 2S5 </P></strong><div id='app'></div></center>",
    choices: ["25S", "S52"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> V5G </P></strong><div id='app'></div></center>",
    choices: ["GV5", "5GV"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 4G7 </P></strong><div id='app'></div></center>",
    choices: ["G47", "47G"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> D41 </P></strong><div id='app'></div></center>",
    choices: ["D14", "14D"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 68C </P></strong><div id='app'></div></center>",
    choices: ["68C", "C68"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> C5Y </P></strong><div id='app'></div></center>",
    choices: ["CY5", "5CY"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 74F </P></strong><div id='app'></div></center>",
    choices: ["47F", "F47"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 4HU </P></strong><div id='app'></div></center>",
    choices: ["4HU", "HU4"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 38J </P></strong><div id='app'></div></center>",
    choices: ["38J", "J83"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 78A </P></strong><div id='app'></div></center>",
    choices: ["78A", "A78"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> EA1 </P></strong><div id='app'></div></center>",
    choices: ["1AE", "EA1"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 14J </P></strong><div id='app'></div></center>",
    choices: ["14J", "J14"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 68A </P></strong><div id='app'></div></center>",
    choices: ["68A", "A68"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
]; // Checked

// ********************** STIMULI TASK 8 ********************** \\
let stimuli_task_8 = [
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> A71 </P></strong><div id='app'></div></center>",
    choices: ["17A", "A71"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 54Y </P></strong><div id='app'></div></center>",
    choices: ["Y45", "45Y"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 3ZU </P></strong><div id='app'></div></center>",
    choices: ["3UZ", "UZ3"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 86K </P></strong><div id='app'></div></center>",
    choices: ["68K", "K68"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> E84 </P></strong><div id='app'></div></center>",
    choices: ["E48", "48E"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 93W </P></strong><div id='app'></div></center>",
    choices: ["W39", "39W"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 67G </P></strong><div id='app'></div></center>",
    choices: ["67G", "G76"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 4SA </P></strong><div id='app'></div></center>",
    choices: ["AS4", "4AS"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 85R </P></strong><div id='app'></div></center>",
    choices: ["R58", "58R"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 54L </P></strong><div id='app'></div></center>",
    choices: ["45L", "L45"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> F52 </P></strong><div id='app'></div></center>",
    choices: ["F52", "25F"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 75Y </P></strong><div id='app'></div></center>",
    choices: ["Y57", "57Y"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> C45 </P></strong><div id='app'></div></center>",
    choices: ["C45", "54C"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> D38 </P></strong><div id='app'></div></center>",
    choices: ["83D", "D38"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> J76 </P></strong><div id='app'></div></center>",
    choices: ["J67", "67J"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 63P </P></strong><div id='app'></div></center>",
    choices: ["P36", "36P"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 91G </P></strong><div id='app'></div></center>",
    choices: ["G19", "19G"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 53S </P></strong><div id='app'></div></center>",
    choices: ["S35", "35S"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9TR </P></strong><div id='app'></div></center>",
    choices: ["RT9", "9RT"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9TF </P></strong><div id='app'></div></center>",
    choices: ["FT9", "9FT"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> K73 </P></strong><div id='app'></div></center>",
    choices: ["K73", "37K"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 65P </P></strong><div id='app'></div></center>",
    choices: ["P56", "56P"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9K7 </P></strong><div id='app'></div></center>",
    choices: ["79K", "7K9"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> M8T </P></strong><div id='app'></div></center>",
    choices: ["T8M", "8MT"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 74Y </P></strong><div id='app'></div></center>",
    choices: ["Y47", "74Y"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 75R </P></strong><div id='app'></div></center>",
    choices: ["R57", "75R"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 89J </P></strong><div id='app'></div></center>",
    choices: ["J98", "89J"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> A53 </P></strong><div id='app'></div></center>",
    choices: ["A53", "35A"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 98B </P></strong><div id='app'></div></center>",
    choices: ["B89", "89B"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 47H </P></strong><div id='app'></div></center>",
    choices: ["H74", "47H"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
]; // Checked
