var button;
var textarea;
var savedText;

function setup() {
  noCanvas();
  textarea = createElement('textarea', 'Enter text here!');
  textarea.size(300,400);
  createElement('br');
  button = createButton('push to save');
  button.mousePressed(saveText);
}

function saveText() {
  savedText = textarea.value();
  //createP("ORIGINAL TEXT: " + savedText);

  // get the array of all the words from the savedText variable
  var textArr = splitTokens(savedText, '.:;?! !@#$%^&*()+');
  var length = textArr.length;

  // loop through the array, if the word found is 'I' or 'i', replace it with 'you', etc.
  for (var i = 0; i < textArr.length; i++) {
    if (textArr[i] === "to" || textArr[i] === "in") {
      textArr[i] = "yo";
    }
    if (textArr[i] === "the" || textArr[i] === "of") {
      textArr[i] = "ya";
    }
    if (textArr[i] === "a" || textArr[i] === "A") {
      textArr[i] = "yooo";
    }
  }

  // join the array into a single string, separated by spaces
  var newString = join(textArr, ' ');
  createP("NEW TEXT: " + newString);
}