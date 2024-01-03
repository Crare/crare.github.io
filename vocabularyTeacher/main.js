let lang1 = [];
let lang2 = [];
let vocabulary = [];
let wordsLeftToCorrect = 0;
let percentageDone = 0;
let needToGetCorrectTimes = 5;
let amountOfChoicesInMultiSelect = 4;

let wordToTest = null;
let wordToTestIndex = -1;
let secondsLeft = 0;

const createVocabulary = (lang1, lang2) => {
  for (var i = 0; i < lang1.length; i++) {
    const word = {
      lang1: lang1[i],
      lang2: lang2[i],
      correctTimes: 0,
      incorrectTimes: 0,
      checkedAnswerTimes: 0,
    };
    vocabulary.push(word);
  }
  // console.log("vocabulary", vocabulary);
  wordsLeftToCorrect = vocabulary.length;
};

const getRandomWord = () => {
  var randIndex = Math.floor(Math.random() * vocabulary.length);
  // console.log("getRandomWord randIndex", randIndex);
  return vocabulary[randIndex];
};

const getRandomWordToTest = () => {
  var lastWord = wordToTest;
  if (wordsLeftToCorrect == 0) {
    return;
  }
  var wordsToCorrectStill = vocabulary.filter(
    (v) => v.correctTimes < needToGetCorrectTimes
  );
  // console.log("wordsToCorrectStill", wordsToCorrectStill);
  wordsLeftToCorrect = wordsToCorrectStill.length;
  var randIndex = Math.floor(Math.random() * wordsLeftToCorrect);
  // console.log("randIndex", randIndex);
  wordToTest = wordsToCorrectStill[randIndex];
  wordToTestIndex = randIndex;
  // console.log("wordToTest", wordToTest);

  if (lastWord === wordToTest && wordsLeftToCorrect > 1) {
    getRandomWordToTest();
  } else {
    var totalCorrectTimesNeeded = vocabulary.length * needToGetCorrectTimes;
    var correctTimesGet = 0;
    for (var i = 0; i < vocabulary.length; i++) {
      if (vocabulary[i].correctTimes > 0) {
        correctTimesGet += vocabulary[i].correctTimes;
      }
    }
    percentageDone = (correctTimesGet / totalCorrectTimesNeeded) * 100;
  }
};

const updateWordsInfo = () => {
  var txt = "Words: " + vocabulary.length;
  var txt2 = "words left to get correct: " + wordsLeftToCorrect;
  var txt3 = " percentage done: " + percentageDone.toFixed(1) + "%";
  $("#words").text(txt);
  $("#wordsToCorrect").text(txt2);
  $("#percentageDone").text(txt3);
  $("#progressbar").width(percentageDone.toFixed(0) + "%");
};

const showContainer2 = () => {
  $("#container-1").hide();
  $("#container-2").show();
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const doMultiselectTest = () => {
  $("#multiselectTest").show();
  $("#writingTest").hide();

  $("#seeRightAnswer").attr("disabled", false);
  $("#rightAnswer").text("");
  $("#result").text("");

  removeButtonsFromMultiselect();

  $("#multiselectTestLang1").text(wordToTest.lang1 + " = ");
  var options = [];

  options.push(wordToTest.lang2);
  // console.log("amountOfChoicesInMultiSelect", amountOfChoicesInMultiSelect);
  while (options.length < amountOfChoicesInMultiSelect) {
    var word = getRandomWord().lang2;
    if (!options.includes(word)) {
      // console.log("not includes word ", word);
      options.push(word);
    }
  }
  shuffleArray(options);
  // console.log("options", options);

  var btns = [];
  for (var i = 0; i < options.length; i++) {
    var button =
      '<button id="option_' +
      i +
      '" type="button" class="multiselect-option btn btn-primary me-2">' +
      options[i] +
      "</button>";
    btns.push(button);
  }

  for (var i = 0; i < btns.length; i++) {
    $("#multiselectTestLang2Choices").append(btns[i]);
  }

  $(".multiselect-option").on("click", (e) => {
    $(".multiselect-option").attr("disabled", true);
    var answer = e.target.innerHTML;
    // console.log("answer: ", answer);
    if (answer === wordToTest.lang2) {
      answeredRight();
    } else {
      answeredWrong();
    }
  });
};

const disableOptions = () => {};

const doWritingTest = () => {
  $("#writingTest").show();
  $("#multiselectTest").hide();

  $("#sendAnswer").attr("disabled", false);
  $("#seeRightAnswer").attr("disabled", false);
  $("#rightAnswer").text("");
  $("#result").text("");

  $("#writingTestLang1").text(wordToTest.lang1);
  $("#writingTestLang2").val("");
};

const showContinuinInSeconds = () => {
  $("#continuingIn").show();
  $("#continuingIn").text("Continuing in " + secondsLeft + " seconds...");
};

const hideContinuinInSeconds = () => {
  $("#continuingIn").hide();
};

const showResults = () => {
  $("#container-3").show();
  $("#container-1").hide();
  $("#container-2").hide();

  var txt = "results:";

  txt += "\n\n";
  txt +=
    '<table class="table"><thead>' +
    "<th>lang 1</th>" +
    "<th>lang 2</th>" +
    "<th>correct times</th>" +
    "<th>incorrect times</th>" +
    "<th>lookup answer</th>" +
    "<th>score</th>" +
    "</thead><tbody>";
  for (let i = 0; i < vocabulary.length; i++) {
    var score =
      vocabulary[i].correctTimes -
      vocabulary[i].incorrectTimes -
      vocabulary[i].checkedAnswerTimes;
    txt += "<tr>";
    txt += "<td>" + vocabulary[i].lang1 + "</td>";
    txt += "<td>" + vocabulary[i].lang2 + "</td>";
    txt += "<td>" + vocabulary[i].correctTimes + "</td>";
    txt += "<td>" + vocabulary[i].incorrectTimes + "</td>";
    txt += "<td>" + vocabulary[i].checkedAnswerTimes + "</td>";
    txt += "<td>" + score + "</td>";
    txt += "</tr>";
  }
  txt += "</tbody></table>";

  $("#testResults").empty();
  $("#testResults").append(txt);
};

const answeredRight = () => {
  wordToTest.correctTimes += 1;
  $("#result").empty();
  $("#result").append('<p style="color: green;">Answer was right.</p>');

  vocabulary[wordToTestIndex] = wordToTest;

  goToNextTest();
};

const answeredWrong = () => {
  wordToTest.incorrectTimes += 1;
  $("#wrongAnswer").show();
  $("#result").empty();
  $("#result").append(
    '<p style="color: red;">Answer was wrong.\nRight answer is: ' +
      wordToTest.lang2 +
      "</p>"
  );

  vocabulary[wordToTestIndex] = wordToTest;

  goToNextTest();
};

const doRandomTest = () => {
  getRandomWordToTest();
  updateWordsInfo();
  if (wordsLeftToCorrect > 0) {
    var testToDo = Math.floor(Math.random() * 2);
    if (testToDo == 0) {
      doWritingTest();
    } else {
      doMultiselectTest();
    }
    showContainer2();
  } else {
    showResults();
  }
};

const removeButtonsFromMultiselect = () => {
  $("#multiselectTestLang2Choices").empty();
};

$("#startTestingButton").on("click", function () {
  needToGetCorrectTimes = $("#amountOfTimesCorrect").val();
  amountOfChoicesInMultiSelect = $("#amountOfChoicesInMultiSelect").val();
  lang1 = $("#1_lang_words").val().split("\n");
  lang2 = $("#2_lang_words").val().split("\n");
  vocabulary = [];
  if (lang1.length != lang2.length) {
    alert(
      "There is no same amount of words in the lists! Check lists that they have same amount of words before continuing."
    );
    lang1 = [];
    lang2 = [];
    return;
  }
  if (lang1.length < amountOfChoicesInMultiSelect) {
    alert(
      "Not enough words for multi select. Either add more words in the list or make multi selection amount smaller."
    );
    lang1 = [];
    lang2 = [];
    return;
  }
  // console.log("lang1", lang1);
  // console.log("lang2", lang2);
  createVocabulary(lang1, lang2);
  doRandomTest();
});

$("#clearListButton").on("click", function () {
  $("#1_lang_words").val("");
  $("#2_lang_words").val("");
  lang1 = [];
  lang2 = [];
  // console.log("lang1", lang1);
  // console.log("lang2", lang2);
});

const goToNextTest = () => {
  secondsLeft = 2;
  showContinuinInSeconds();

  setTimeout(() => {
    secondsLeft = 1;
    showContinuinInSeconds();
  }, 1000);

  setTimeout(() => {
    secondsLeft = 0;
    hideContinuinInSeconds();
    doRandomTest();
  }, 2000);
};

$("#seeRightAnswer").on("click", function () {
  $("#seeRightAnswer").attr("disabled", true);
  $("#sendAnswer").attr("disabled", true);
  removeButtonsFromMultiselect();

  wordToTest.checkedAnswerTimes += 1;
  $("#rightAnswer").text(wordToTest.lang2);

  goToNextTest();
});

const sendAnswer = () => {
  $("#seeRightAnswer").attr("disabled", true);
  $("#sendAnswer").attr("disabled", true);

  const answer = $("#writingTestLang2").val();
  if (answer === wordToTest.lang2) {
    answeredRight();
  } else {
    answeredWrong();
  }
};

$("#sendAnswer").on("click", function () {
  sendAnswer();
});

$("#writingTestLang2").keyup(function (event) {
  if (event.which === 13) {
    sendAnswer();
  }
});

$("#endTestingButton").on("click", function () {
  showResults();
});

$("#backToStart").on("click", function () {
  $("#container-1").show();
  $("#container-2").hide();
  $("#container-3").hide();
});
