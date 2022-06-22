import AnswerModel from "./answer"

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #correct: boolean
    // #answered: boolean

    constructor(id: number, statement: string, answers: AnswerModel[], correct: boolean = false) {
        this.#id = id
        this.#statement = statement
        this.#answers = answers
        this.#correct = correct
    }

    get id() { 
        return this.#id
     }
     get statement() {
        return this.#statement
     }
     get answers() { 
        return this.#answers
     }
     get correct() { 
        return this.#correct
     }
     get answered() { 
        for (let answer of this.#answers) {
            if (answer.isRevealed) return true
        }
        return false
     }
}