import Question from "../components/Question"
import QuestionModel from "../model/question"
import AnswerModel from "../model/answer"

export default function Home() {
  const questionTest = new QuestionModel(1, 'best color?', [
    AnswerModel.wrongAnswer('green'),
    AnswerModel.wrongAnswer('blue'),
    AnswerModel.wrongAnswer('red'),
    AnswerModel.correctAnswer('brown')
  ])
  
  return (
      <Question value={questionTest} />
  )
}
