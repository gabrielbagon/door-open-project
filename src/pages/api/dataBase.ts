import QuestionModel from "../../model/question";
import AnswerModel from "../../model/answer";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'What is Next.js?', [
      AnswerModel.wrongAnswer('A Javascript library'),
      AnswerModel.wrongAnswer('A Vue.js framework'),
      AnswerModel.wrongAnswer('A CSS3 framework'),
      AnswerModel.correctAnswer('A React.js framework'),
    ]),
    new QuestionModel(202, 'What is DOM?', [
      AnswerModel.wrongAnswer('A C# library'),
      AnswerModel.correctAnswer('The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.'),
      AnswerModel.wrongAnswer('A machine learning concept'),
      AnswerModel.wrongAnswer('A programming language'),
    ]),
    new QuestionModel(203, 'What is a component?', [
      AnswerModel.wrongAnswer('Components are dependent and not reusable bits of code. They dont serve the same purpose as JavaScript functions, but work in isolation and return HTML.'),
      AnswerModel.correctAnswer('Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.'),
      AnswerModel.wrongAnswer('Components are blocks of css stylesheet'),
      AnswerModel.wrongAnswer('A folder architecture'),
    ]),
    new QuestionModel(204, 'What is a Typescript?', [
      AnswerModel.correctAnswer('TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'),
      AnswerModel.wrongAnswer('A C# term'),
      AnswerModel.wrongAnswer('A machine learning concept'),
      AnswerModel.wrongAnswer('A database language, like MySQL'),
    ]),
   

]

export default questions