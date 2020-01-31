# Code Tyke

## To run the app

To start the react frontend server:
cd codeTykeReact
npm start

To start the node backend server:
cd codeTykeNode
npm start

## Jira 1:

We need the question area to be mobile friendly. Currently the answers are somewhat responsive however they need to be set for the following screen sizes:

greater than 500px - all images should sit in a single row


less than 500px - images should sit in a 2x2 grid, submit button should be full width (see mockup)
https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279091047


## Jira 2:

Each question is part of a series of questions. The JSON contains a question id (the index of the question its series), as well as a totalQuestions property, which is an integer representing the total number of questions.

Create a progress bar showing the user where they are in the series of questions. Ie if there are 4 questions in a series and the user has answered 2, the progress bar should be 50% covered.

The progress bar should be animated each time the user advances to the next question.

https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279091047


## Jira 3:

You'll notice that each time you click on the submit button, it takes about 1.5 seconds for the following question to load. 

Please add a rotating CSS loader in the center of the question area that begis on page load and when the submit button is clicked and is replaced once the JSON is returned from the backend.  
