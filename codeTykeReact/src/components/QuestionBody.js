import React from 'react';
import QuestionSelectionArea from './QuestionSelectionArea';
import Button from './Button';
import ButtonInfo from './ButtonInfo';


const QuestionBody = (props) => {

    const handleSubmit=(event)=>{

      // if button inactive prompt to select answer

      // else check for correct answer
        //handle incorrect

        // handle correct

      props.setLoading(true);
      if(props.currentQuestion.id >= props.currentQuestion.totalQuestions){
        props.getQuestion(1);
      } else {
        props.getQuestion(props.currentQuestion.nextQuestionId);
      }
    }

    return (
      <>
        <div id="questionHeaderContainer">
          <div id="questionHeader">
            {props.currentQuestion.title}
          </div>
          <ButtonInfo />
          <div id="questionSubHeader">
            {props.currentQuestion.additionalInfo}
          </div>
        </div>
        <div id="outerBox">
          <QuestionSelectionArea possibleAnswers={props.currentQuestion.possibleAnswers} />
          <div id="submitButtonContainer">
            <Button handleSubmit={handleSubmit} loading={props.loading} />
          </div>
        </div>
      </>
    )
}

// className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`}

export default QuestionBody;
