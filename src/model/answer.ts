export default class AnswerModel {
    #answerValue: string
    #correctAnswer: boolean
    #isRevealed: boolean

    constructor(answerValue: string, correctAnswer: boolean, isRevealed: false) {
        this.#answerValue = answerValue
        this.#correctAnswer = correctAnswer
        this.#isRevealed = isRevealed
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
}