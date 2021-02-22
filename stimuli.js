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

// for stimulluTask
// let stimuli_task_4 = mezclarArrays(stimuli_task_4)

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
      correct_response: "0",
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
      correct_response: "1",
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
      correct_response: "0",
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
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 92 </P></strong><div id='app'></div></center>",
    choices: ["29", "92"],
    data: {
      test_part: "test",
      correct_response: "0",
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
      correct_response: "1",
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
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 72 </P></strong><div id='app'></div></center>",
    choices: ["27", "72"],
    data: {
      test_part: "test",
      correct_response: "0",
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
      correct_response: "1",
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
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 48 </P></strong><div id='app'></div></center>",
    choices: ["48", "84"],
    data: {
      test_part: "test",
      correct_response: "1",
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
      correct_response: "0",
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
];

// let stimuli_task_1 = [
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 77 </P></strong><div id='app'></div></center>",
//     choices: ["77", "77"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 82 </P></strong><div id='app'></div></center>",
//     choices: ["82", "28"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 26 </P></strong><div id='app'></div></center>",
//     choices: ["62", "26"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 54 </P></strong><div id='app'></div></center>",
//     choices: ["54", "45"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 17 </P></strong><div id='app'></div></center>",
//     choices: ["71", "17"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 93 </P></strong><div id='app'></div></center>",
//     choices: ["39", "93"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 44 </P></strong><div id='app'></div></center>",
//     choices: ["44", "44"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 37 </P></strong><div id='app'></div></center>",
//     choices: ["73", "37"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 13 </P></strong><div id='app'></div></center>",
//     choices: ["13", "31"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 66 </P></strong><div id='app'></div></center>",
//     choices: ["66", "66"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 74 </P></strong><div id='app'></div></center>",
//     choices: ["74", "47"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 92 </P></strong><div id='app'></div></center>",
//     choices: ["92", "29"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 35 </P></strong><div id='app'></div></center>",
//     choices: ["35", "53"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 16 </P></strong><div id='app'></div></center>",
//     choices: ["61", "16"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 99 </P></strong><div id='app'></div></center>",
//     choices: ["99", "99"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 58 </P></strong><div id='app'></div></center>",
//     choices: ["85", "58"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 72 </P></strong><div id='app'></div></center>",
//     choices: ["72", "27"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 61 </P></strong><div id='app'></div></center>",
//     choices: ["61", "16"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 46 </P></strong><div id='app'></div></center>",
//     choices: ["64", "46"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 11 </P></strong><div id='app'></div></center>",
//     choices: ["11", "11"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 51 </P></strong><div id='app'></div></center>",
//     choices: ["51", "15"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 48 </P></strong><div id='app'></div></center>",
//     choices: ["84", "48"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 57 </P></strong><div id='app'></div></center>",
//     choices: ["57", "75"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 33 </P></strong><div id='app'></div></center>",
//     choices: ["33", "33"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 73 </P></strong><div id='app'></div></center>",
//     choices: ["73", "37"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 28 </P></strong><div id='app'></div></center>",
//     choices: ["28", "82"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 19 </P></strong><div id='app'></div></center>",
//     choices: ["19", "91"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 52 </P></strong><div id='app'></div></center>",
//     choices: ["25", "52"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 96 </P></strong><div id='app'></div></center>",
//     choices: ["96", "69"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 78 </P></strong><div id='app'></div></center>",
//     choices: ["87", "78"],
//     data: { test_part: "test", correct_response: "1" },
//   },
// ];

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
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 97 </P></strong><div id='app'></div></center>",
    choices: ["97", "79"],
    data: {
      test_part: "test",
      correct_response: "0",
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
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 18 </P></strong><div id='app'></div></center>",
    choices: ["18", "81"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 89 </P></strong><div id='app'></div></center>",
    choices: ["89", "98"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 47 </P></strong><div id='app'></div></center>",
    choices: ["74", "47"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 64 </P></strong><div id='app'></div></center>",
    choices: ["64", "46"],
    data: {
      test_part: "test",
      correct_response: "0",
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
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 92 </P></strong><div id='app'></div></center>",
    choices: ["92", "29"],
    data: {
      test_part: "test",
      correct_response: "0",
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
      correct_response: "0",
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
      correct_response: "1",
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
      correct_response: "1",
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
      correct_response: "1",
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
];

// let stimuli_task_2 = [
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 11 </P></strong><div id='app'></div></center>",
//     choices: ["11", "11"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 96 </P></strong><div id='app'></div></center>",
//     choices: ["69", "96"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 48 </P></strong><div id='app'></div></center>",
//     choices: ["48", "84"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 97 </P></strong><div id='app'></div></center>",
//     choices: ["79", "97"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 88 </P></strong><div id='app'></div></center>",
//     choices: ["88", "88"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 46 </P></strong><div id='app'></div></center>",
//     choices: ["46", "64"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 18 </P></strong><div id='app'></div></center>",
//     choices: ["81", "18"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 89 </P></strong><div id='app'></div></center>",
//     choices: ["98", "89"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 47 </P></strong><div id='app'></div></center>",
//     choices: ["47", "74"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 64 </P></strong><div id='app'></div></center>",
//     choices: ["46", "64"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 77 </P></strong><div id='app'></div></center>",
//     choices: ["77", "77"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 81 </P></strong><div id='app'></div></center>",
//     choices: ["81", "18"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 57 </P></strong><div id='app'></div></center>",
//     choices: ["57", "75"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 92 </P></strong><div id='app'></div></center>",
//     choices: ["29", "92"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 26 </P></strong><div id='app'></div></center>",
//     choices: ["62", "26"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 55 </P></strong><div id='app'></div></center>",
//     choices: ["55", "55"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 34 </P></strong><div id='app'></div></center>",
//     choices: ["34", "43"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 27 </P></strong><div id='app'></div></center>",
//     choices: ["72", "27"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 85 </P></strong><div id='app'></div></center>",
//     choices: ["58", "85"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 73 </P></strong><div id='app'></div></center>",
//     choices: ["73", "37"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 99 </P></strong><div id='app'></div></center>",
//     choices: ["99", "99"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 19 </P></strong><div id='app'></div></center>",
//     choices: ["91", "19"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 28 </P></strong><div id='app'></div></center>",
//     choices: ["28", "82"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 14 </P></strong><div id='app'></div></center>",
//     choices: ["41", "14"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 75 </P></strong><div id='app'></div></center>",
//     choices: ["57", "75"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 36 </P></strong><div id='app'></div></center>",
//     choices: ["36", "63"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 79 </P></strong><div id='app'></div></center>",
//     choices: ["79", "97"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 22 </P></strong><div id='app'></div></center>",
//     choices: ["22", "22"],
//     data: { test_part: "test", correct_response: "equal" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 51 </P></strong><div id='app'></div></center>",
//     choices: ["15", "51"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 62 </P></strong><div id='app'></div></center>",
//     choices: ["26", "62"],
//     data: { test_part: "test", correct_response: "0" },
//   },
// ];

let stimuli_task_3 = [
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> J9 </P></strong><div id='app'></div></center>",
    choices: ["9J", "J9"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 5S </P></strong><div id='app'></div></center>",
    choices: ["5S", "S5"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 6L </P></strong><div id='app'></div></center>",
    choices: ["6L", "L6"],
    data: {
      test_part: "test",
      correct_response: "1",
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
      correct_response: "0",
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
      correct_response: "1",
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
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> H6 </P></strong><div id='app'></div></center>",
    choices: ["H6", "6H"],
    data: {
      test_part: "test",
      correct_response: "0",
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
      correct_response: "1",
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
      correct_response: "1",
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
      correct_response: "0",
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
      correct_response: "1",
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
      correct_response: "0",
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
      correct_response: "0",
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
];

// let stimuli_task_3 = [
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> J9 </P></strong><div id='app'></div></center>",
//     choices: ["J9", "9J"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 5S </P></strong><div id='app'></div></center>",
//     choices: ["S5", "5S"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 6L </P></strong><div id='app'></div></center>",
//     choices: ["L6", "6L"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 4S </P></strong><div id='app'></div></center>",
//     choices: ["S4", "4S"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> X1 </P></strong><div id='app'></div></center>",
//     choices: ["1X", "X1"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 7Z </P></strong><div id='app'></div></center>",
//     choices: ["Z7", "7Z"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 8Y </P></strong><div id='app'></div></center>",
//     choices: ["Y8", "8Y"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 1Q </P></strong><div id='app'></div></center>",
//     choices: ["Q1", "1Q"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 3A </P></strong><div id='app'></div></center>",
//     choices: ["3A", "A3"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 8I </P></strong><div id='app'></div></center>",
//     choices: ["I8", "8I"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> E4 </P></strong><div id='app'></div></center>",
//     choices: ["4E", "E4"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 7T </P></strong><div id='app'></div></center>",
//     choices: ["T7", "7T"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 2R </P></strong><div id='app'></div></center>",
//     choices: ["2R", "R2"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 5K </P></strong><div id='app'></div></center>",
//     choices: ["K5", "5K"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> H6 </P></strong><div id='app'></div></center>",
//     choices: ["6H", "H6"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 9P </P></strong><div id='app'></div></center>",
//     choices: ["P9", "9P"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 5N </P></strong><div id='app'></div></center>",
//     choices: ["N5", "5N"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 9C </P></strong><div id='app'></div></center>",
//     choices: ["9C", "C9"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 7P </P></strong><div id='app'></div></center>",
//     choices: ["P7", "7P"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 5C </P></strong><div id='app'></div></center>",
//     choices: ["5C", "C5"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> L1 </P></strong><div id='app'></div></center>",
//     choices: ["1L", "L1"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 6G </P></strong><div id='app'></div></center>",
//     choices: ["6G", "G6"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 4D </P></strong><div id='app'></div></center>",
//     choices: ["4D", "D4"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 7S </P></strong><div id='app'></div></center>",
//     choices: ["S7", "7S"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 8N </P></strong><div id='app'></div></center>",
//     choices: ["N8", "8N"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 5J </P></strong><div id='app'></div></center>",
//     choices: ["5J", "J5"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 6P </P></strong><div id='app'></div></center>",
//     choices: ["6P", "P6"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> Q3 </P></strong><div id='app'></div></center>",
//     choices: ["Q3", "3Q"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 4H </P></strong><div id='app'></div></center>",
//     choices: ["4H", "H4"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 1Z </P></strong><div id='app'></div></center>",
//     choices: ["Z1", "1Z"],
//     data: { test_part: "test", correct_response: "1" },
//   },
// ];

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
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 6E </P></strong><div id='app'></div></center>",
    choices: ["E6", "6E"],
    data: {
      test_part: "test",
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 8M </P></strong><div id='app'></div></center>",
    choices: ["8M", "M8"],
    data: {
      test_part: "test",
      correct_response: "0",
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
      correct_response: "0",
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
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 3G </P></strong><div id='app'></div></center>",
    choices: ["G3", "3G"],
    data: {
      test_part: "test",
      correct_response: "1",
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
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9J </P></strong><div id='app'></div></center>",
    choices: ["9J", "J9"],
    data: {
      test_part: "test",
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> N4 </P></strong><div id='app'></div></center>",
    choices: ["4N", "N4"],
    data: {
      test_part: "test",
      correct_response: "1",
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
      correct_response: "1",
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
      "<center><strong><P style='font-size:30px; margin: 3px;'> 7S </P></strong><div id='app'></div></center>",
    choices: ["S7", "7S"],
    data: {
      test_part: "test",
      correct_response: "1",
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
      correct_response: "0",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 4N </P></strong><div id='app'></div></center>",
    choices: ["N4", "4N"],
    data: {
      test_part: "test",
      correct_response: "1",
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
      correct_response: "1",
    },
  },
  {
    stimulus:
      "<center><strong><P style='font-size:30px; margin: 3px;'> 9D </P></strong><div id='app'></div></center>",
    choices: ["D9", "9D"],
    data: {
      test_part: "test",
      correct_response: "1",
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
];

// let stimuli_task_4 = [
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> J1 </P></strong><div id='app'></div></center>",
//     choices: ["J1", "1J"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 3D </P></strong><div id='app'></div></center>",
//     choices: ["D3", "3D"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 6E </P></strong><div id='app'></div></center>",
//     choices: ["6E", "E6"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 8M </P></strong><div id='app'></div></center>",
//     choices: ["M8", "8M"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 2R </P></strong><div id='app'></div></center>",
//     choices: ["R2", "2R"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> H7 </P></strong><div id='app'></div></center>",
//     choices: ["7H", "H7"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 5I </P></strong><div id='app'></div></center>",
//     choices: ["5I", "I5"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 8F </P></strong><div id='app'></div></center>",
//     choices: ["8F", "F8"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 1Q </P></strong><div id='app'></div></center>",
//     choices: ["Q1", "1Q"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 2P </P></strong><div id='app'></div></center>",
//     choices: ["2P", "P2"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> S4 </P></strong><div id='app'></div></center>",
//     choices: ["S4", "4S"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 3G </P></strong><div id='app'></div></center>",
//     choices: ["3G", "G3"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 8O </P></strong><div id='app'></div></center>",
//     choices: ["O8", "8O"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 4Y </P></strong><div id='app'></div></center>",
//     choices: ["4Y", "Y4"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 9J </P></strong><div id='app'></div></center>",
//     choices: ["J9", "9J"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> N4 </P></strong><div id='app'></div></center>",
//     choices: ["N4", "4N"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 7P </P></strong><div id='app'></div></center>",
//     choices: ["P7", "7P"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 6Y </P></strong><div id='app'></div></center>",
//     choices: ["6Y", "Y6"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 3A </P></strong><div id='app'></div></center>",
//     choices: ["A3", "3A"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 7S </P></strong><div id='app'></div></center>",
//     choices: ["7S", "S7"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> R2 </P></strong><div id='app'></div></center>",
//     choices: ["R2", "2R"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 5L </P></strong><div id='app'></div></center>",
//     choices: ["L5", "5L"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 4N </P></strong><div id='app'></div></center>",
//     choices: ["4N", "N4"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 8B </P></strong><div id='app'></div></center>",
//     choices: ["B8", "8B"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 6P </P></strong><div id='app'></div></center>",
//     choices: ["6P", "P6"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 9D </P></strong><div id='app'></div></center>",
//     choices: ["9D", "D9"],
//     data: { test_part: "test", correct_response: "1" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 2S </P></strong><div id='app'></div></center>",
//     choices: ["S2", "2S"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> Z5 </P></strong><div id='app'></div></center>",
//     choices: ["5Z", "Z5"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 9P </P></strong><div id='app'></div></center>",
//     choices: ["P9", "9P"],
//     data: { test_part: "test", correct_response: "0" },
//   },
//   {
//     stimulus:
//       "<center><strong><P style='font-size:30px; margin: 3px;'> 7T </P></strong><div id='app'></div></center>",
//     choices: ["7T", "T7"],
//     data: { test_part: "test", correct_response: "1" },
//   },
// ];
