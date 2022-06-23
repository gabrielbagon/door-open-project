export default class AnswerModel {
    #answerValue: string
    #correctAnswer: boolean
    #isRevealed: boolean
    correct: boolean

    constructor(answerValue: string, correctAnswer: boolean, isRevealed: boolean) {
        this.#answerValue = answerValue
        this.#correctAnswer = correctAnswer
        this.#isRevealed = isRevealed
    }

    static correctAnswer(answerValue: string){
        return new AnswerModel(answerValue, true, true)
        
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

    toReview() {
        return new AnswerModel(this.#answerValue, this.#correctAnswer, true)
    }

    convertToObject() {
        return {
            answerValue: this.#answerValue,
            correctAnswer: this.#correctAnswer,
            isRevealed: this.#isRevealed,
        }
     }
}