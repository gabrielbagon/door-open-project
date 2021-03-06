import questions from '../dataBase';

export default (req, res) => {
  const selectedID = +req.query.id
  const onlyQuestionSelected = questions.filter(question => question.id === selectedID)
  
  if (onlyQuestionSelected.length === 1) {
    const selectedQuestion = onlyQuestionSelected[0].shuffleAnswers()
    res.status(200).json(selectedQuestion.convertToObject())
  } else {
    res.status(204).send()
  }
}
