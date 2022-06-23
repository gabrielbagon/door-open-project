export default class AnswerModel {
    #answerValue: string
    #correctAnswer: boolean
    #isRevealed: boolean

    constructor(answerValue: string, correctAnswer: boolean, isRevealed: false) {
        this.#answerValue = answerValue
        this.#correctAnswer = correctAnswer
        this.#isRevealed = isRevealed
    }

    static correctAnswer(answerValue: string){
        return new AnswerModel(answerValue, true, false)
        
    }
    static wrongAnswer(answerValue: string){
        return new AnswerModel(answerValue, false, false)
    }

    get answerValue() {
        return this.#answerValue
    }
    get correctAnswer() {
        return this.#correctAnswer
    }
    get isRevealed() {
        return this.#isRevealed
    }
    convertToObject() {
        return {
            answerValue: this.#answerValue,
            correctAnswer: this.#correctAnswer,
            isRevealed: this.#isRevealed,
        }
     }
}