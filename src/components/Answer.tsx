import styles from '../styles/Answer.module.css'
import AnswerModel from "../model/answer"

interface AnswerProps {
    value: AnswerModel
    index: number
    letter: string
    letterBackgroundColor: string
    onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value
    return (
        <div className={styles.answer} onClick={() => props.onResponse(props.index)}>

            <div className={styles.content}>
                {!answer.isRevealed ? (
                    <div className={styles.frontFlipCard}>
                        <div className={styles.letter}
                            style={{ backgroundColor: props.letterBackgroundColor }}>
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {answer.answerValue}
                        </div>
                    </div>) : (
                    <div className={styles.backFlipCard}>
                        {answer.correctAnswer ? (
                            <div className={styles.correctAnswer}>
                                <div>The correct answer is...</div>
                                <div className={styles.value}>{answer.answerValue}</div>
                            </div>
                        ) : (
                            <div className={styles.wrongAnswer}>
                                <div>The correct answer is...</div>
                                <div className={styles.value}>{answer.answerValue}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}