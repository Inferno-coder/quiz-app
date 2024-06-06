import React from 'react'
import Options from './Options'

const QuestionCard = () => {
  const count=1
  return (
    <div className='question-card'>
       <div className="question-card-difficulty diff-medi">
        <h1>Medium</h1>
       </div>
       <div className="question-card-body">
        <h2>question {count}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat totam laborum ducimus deleniti minus? Ea culpa alias, saepe quisquam eaque, tempora nam vero est odit inventore explicabo qui, aliquam dolores quod perferendis harum nihil. Laborum aliquam corporis earum quaerat veritatis culpa reprehenderit quam praesentium tenetur, quod deleniti? Tenetur in voluptate ipsa officia provident laborum quis cupiditate suscipit facere quaerat repellat aliquid quidem aut numquam nihil doloremque, aliquam, obcaecati consequatur aspernatur vel molestiae laboriosam! Ex dolores voluptatibus expedita. Ab vero autem obcaecati, saepe vitae commodi iste corporis veniam tenetur quo explicabo quibusdam enim. Culpa odit fuga voluptatem itaque, quos in incidunt.</p>
       </div>
       <div className="question-card-options">
          <h2>options</h2>
          <Options/>
       </div>
       <div className="btns">
        <button className='prev-btn'>Prev</button>
        <button className='nxt-btn'>Next</button>
       </div>
    </div>
  )
}

export default QuestionCard