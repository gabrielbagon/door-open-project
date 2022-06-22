export default class QuestionModel {
    #id: number
    #statement: string
    #answers: any[]
    #correct: boolean
    // #answered: boolean

    constructor(id: number, statement: string, answers: any[], correct: boolean = false) {
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
        //TODO: Implement this method
        return false
     }
}