import styles from '../styles/Question.module.css'
import QuestionModel from '../model/question'
import Statement from './Statement'
import Answer from './Answer'

const letters = [
    { value: "A", color: "#BCE596"},
    { value: "B", color: "#98e3f0"},
    { value: "C", color: "#f35353"},
    { value: "D", color: "#bea17e"},
]

interface QuestionProps {
    value: QuestionModel
    onResponse: (index: number) => void
}

export default function Question(props: QuestionProps){
    const question = props.value

    function renderAnswers () {
        return question.answers.map((answer, i) => {
            return <Answer
            key={i} 
            value={answer}
            index={i}
            letter={letters[i].value}
            letterBackgroundColor={letters[i].color}
            onResponse={props.onResponse}
            />
        } )
    }

    return (
        <div className={styles.question}>
            <Statement text={question.statement} />
            {renderAnswers()}
        </div>
    )

}