var inquirer = require('inquirer');

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    console.log('front: ' + this.front);
    console.log('back: ' + this.back);
}

function ClozeCard(fullText, cloze) {
    
    this.fullText = fullText;
    this.cloze = cloze;

    var isPresent = fullText.search(cloze);
    console.log(isPresent);

    if (isPresent>=0) {
    var partialText = fullText.replace(cloze, '...');
    this.partialText = partialText;

    console.log('\nfullText: ' + fullText + '\ncloze: ' + cloze + '\npartialText: ' + partialText +
    '\n------------------------\n');
    }
    else {
        console.log("Oops, this doesn't work. Recheck the spelling and make sure the cloze is part of the full text");
    }
}


inquirer.prompt([
   { 
    type: "list",
    message: "Which type of flash card would you like to make?",
    choices: ['basic', 'cloze'],
    name: 'flashcardType'
   }]).then(function(answer) {
       console.log(answer.flashcardType);
                  // console.log(resp);
      if (answer.flashcardType == 'basic') {
        basic();
      }
      else {
         cloze();
     }

   })




function basic() {
    console.log('basic');
    inquirer.prompt([{
        type: 'input',
        message: 'What is the question for the front of the card?',
        name: 'front'},
        {
        type: 'input',
        message: 'what is the answer for the back of the card?',
        name: 'back'
        }
    ]).then( function(answer) {
        var newBasicCard = new BasicCard(answer.front, answer.back);
    })
}

function cloze() {
    console.log('cloze');
}
