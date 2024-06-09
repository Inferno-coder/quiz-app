import React, { useEffect, useState } from 'react'
import Options from './Options'

export interface IQuestions {
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

export interface IApiResponse {
  response_code: number,
  results: IQuestions[]
}



const QuestionCard: React.FC = () => {
  const [count, setcount] = useState<number>(1)
  const [answered, setAnswered] = useState<number>(0)
  const[correct,setCorrect]=useState(0)
  const [data, setData] = useState<IApiResponse | null>(null)
  const[choosedOptions,setChoosedOptions]=useState(new Array(15).fill(0))
  const onNextHandle = () => {
    setcount(prevCount => prevCount + 1)
  }

  const onPrevHandle = () => {
    setcount(prevCount => prevCount - 1)
  }

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple')
      .then(async (response) => {
        const questions = await response.json();
        if (questions) {
          setData(questions);
        }
      });
  }, [])

  return (
    <div>
      {data ?
        <div className='question-card'>
          <div className="question-status">
            <div>{answered} Answered</div>
            <div>{15 - answered} not Answered</div>
          </div>
          <div className="question-card-difficulty diff-medi">
            <h1>Medium</h1>
          </div>
          <div className="question-card-body">
            <h2>question {count}</h2>
            {data.results && <h2>{data.results[count-1].question}</h2>}
            <p></p>
          </div>
          <div className="question-card-options">
            <h2>options</h2>    
            {data.results && <Options data={data} answered={answered} setAnswered={setAnswered} count={count}
            correct={correct} setCorrect={setCorrect} choosedOptions={choosedOptions} setChoosedOptions={setChoosedOptions}/>}
          </div>
          <div className="btns">
            <button className='prev-btn'
              onClick={onPrevHandle}
              disabled={count === 1}
            >
              <i className="fas fa-arrow-left"></i>
              Prev</button>
            <button 
            className='nxt-btn' 
            onClick={onNextHandle}
            disabled={count>=15}
            >Next <i className="fas fa-arrow-right"></i>  </button>
          </div>
        </div> : <h1>Loading</h1>
      }
    </div>
  )


}

export default QuestionCard
