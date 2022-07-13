import Question from "../components/Question"
import QuestionModel from "../model/question"
import AnswerModel from "../model/answer"
import { useState } from "react"

const questionMock = new QuestionModel(1, 'best color?', [
  AnswerModel.wrongAnswer('green'),
  AnswerModel.wrongAnswer('blue'),
  AnswerModel.wrongAnswer('red'),
  AnswerModel.correctAnswer('brown')
])
export default function Home() {

  const [question, setQuestion] = useState(questionMock);

  function onResponse (index: number) {
   setQuestion(question.answerWith(index))
  }
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height:'100vh'
    }}>
      <Question value={question} onResponse={onResponse}/>
    </div>
  )
}
