import QuestionModel from "../../model/question";
import AnswerModel from "../../model/answer";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'What is Next.js?', [
      AnswerModel.wrongAnswer('A Javascript library'),
      AnswerModel.wrongAnswer('A Vue.js framework'),
      AnswerModel.wrongAnswer('A CSS3 framework'),
      AnswerModel.correctAnswer('A React.js framework'),
    ]),
    new QuestionModel(206, 'What is DOM?', [
      AnswerModel.wrongAnswer('A C# library'),
      AnswerModel.correctAnswer('The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.'),
      AnswerModel.wrongAnswer('A machine learning concept'),
      AnswerModel.wrongAnswer('A programming language'),
    ]),
   

]

export default questions