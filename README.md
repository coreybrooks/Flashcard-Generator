# Cloze Constructor/
# Flashcard Generator

This program allows a user to create either basic or cloze flashcards using Node.js.  The basic flashcards will have the traditional question and answer format.  The cloze flashcards will have a factual statement with the key word removed.  This program is basically a backend API that stores the flashcards to their respective text documents to be used later.

Basic features:

 * The user will enter node main.js to start the program
 * A user will choose either basic or cloze when prompted
 * The user will then follow the prompts to enter information for a new flashcard

# Example:

1) enter node main.js in the terminal 
2) use the arrow keys to select "basic"
3) enter the title of the flashcard, for example: parrotQuestion
4) enter the text for the front of the card when prompted, for example: What is the proper name for a group of parrots?
5) enter the text for the back of the card when prompted, for example: pandemonium
6) The program then saves the information to the appropriate file for later use and displays the current content of the file
