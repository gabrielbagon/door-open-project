import styles from '../styles/Answer.module.css'
import AnswerModel from "../model/answer"

interface AnswerProps {
    value: AnswerModel
    index: number
    letter: string
    letterBackgroundColor: string
}

export default function Answer (props: AnswerProps) {
    const answer = props.value
    return (
        <div className={styles.answer}>
            <div className={styles.content}>
                <div className={styles.frontFlipCard}>
                    <div className={styles.letter}
                    style={{backgroundColor: props.letterBackgroundColor}}>
                        {props.letter}
                    </div>
                    <div className={styles.value}>
                        {answer.answerValue}
                    </div>
                </div>
                <div className={styles.backFlipCard}>

                </div>
            </div>
        </div>
    )
}