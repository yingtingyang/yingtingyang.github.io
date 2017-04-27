var button;
var textarea;
var savedText;

function setup() {
  noCanvas();
  textarea = createElement('textarea', 'Enter your paper here!');
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

  // say no to first person!.
  for (var i = 0; i < textArr.length; i++) {
    if (textArr[i] === "I" || textArr[i] === "i") {
      textArr[i] = "Nope";

    }
    if (textArr[i] === "My" || textArr[i] === "my") {
      textArr[i] = "Nope";
    }
    if (textArr[i] === "Our" || textArr[i] === "our") {
      textArr[i] = "Nope";

    }
  }

  // join the array into a single string, separated by spaces
  var newString = join(textArr, ' ');
  createP("NEW TEXT: " + newString);

}

// function hightlightNope(){
// 	var nope = newString.search("Nope");
	
// }