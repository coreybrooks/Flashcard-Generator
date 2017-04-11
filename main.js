//The instruction were unclear as to wether we are creating an API that allows users to create flashcards,
//or if we are creating an API that allows users to display flashcards to the console that we have created,
//this program allows users to create flashcards of their choosing and stores them for later use which is
//slightly more complicated

var inquirer = require('inquirer');
var fs = require('fs');

var basicCards = [];
var clozeCards = [];

function BasicCard(title, front, back) {
    this.title = title;
    this.front = front;
    this.back = back;
    this.entry = "\n{title: '" + this.title + "'," + "\nfront: '" + this.front + "',"
                  + "\nback: '" + this.back + "}";
    console.log(this.entry + "\n--------------\n"); 

    fs.appendFile('basic_card.txt', this.entry, function(err) {

        if (err) {
          console.log(err);
        }
        else {
          console.log("Content added to basic_card.txt!");
        }
    });
}

function ClozeCard(title, fullText, cloze) {
 
    this.title = title;
    this.fullText = fullText;
    this.cloze = cloze;

     //searches the text to make sure the cloze is part of the question
    var isPresent = fullText.search(cloze);
     
     //creates the partial text as long as cloze is included
    if (isPresent>=0) {
    var partialText = fullText.replace(cloze, '...');
    this.partialText = partialText;
    this.entry = "\n{title: '" + this.title + "'," + "\nfullText: '" + this.fullText + "',"
          + "\ncloze: '" + this.cloze + "'," + "\npartialText: '" + this.partialText + "'}";
    console.log(this.entry + "\n-------------\n");

        fs.appendFile('cloze_card.txt', this.entry, function(err) {
           if (err) {
             console.log(err);
           }
           else {
             console.log("Content added to cloze_card.txt!");
           }
        });
     }
    else {
        console.log("Oops, this doesn't work. Recheck the spelling and make sure the cloze is part of the full text");
    }
}

//prompt that runs when the program is first loaded
inquirer.prompt([
   { 
    type: "list",
    message: "Which type of flash card would you like to make?",
    choices: ['basic', 'cloze'],
    name: 'flashcardType'
   }]).then(function(answer) {

      if (answer.flashcardType == 'basic') {
        basic();
      }
      else {
         cloze();
     }
   });

function basic() {
    console.log('basic');
    inquirer.prompt([{
        type: 'input',
        message: 'What is the title or name of this flashcard? (Ex: parrotsQuestion):',
        name: 'title'},
        {
        type: 'input',
        message: 'What is the question for the front of the card?',
        name: 'front'},
        {
        type: 'input',
        message: 'what is the answer for the back of the card?',
        name: 'back'
        }
    ]).then( function(answer) {
        answer.title = new BasicCard(answer.title, answer.front, answer.back);       
    })
}

function cloze() {
    console.log('cloze');
    inquirer.prompt([{
        type: 'input',
        message: 'What is the title or name of this flashcard? (Ex: parrotsQuestion):',
        name: 'title'},
        {
        type: 'input',
        message: 'What is the full text for the cloze flashcard?',
        name: 'fullText'},
        {
        type: 'input',
        message: 'what is the cloze or word that is removed from the full text?',
        name: 'cloze'
        }
    ]).then( function(answer) {
        answer.title = new ClozeCard(answer.title, answer.fullText, answer.cloze);
    })
}
