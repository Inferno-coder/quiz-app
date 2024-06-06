import React, { useState,ChangeEvent } from 'react'
import  '../../src/App.css'
const Options :React.FC= () => {
    const[selectedOption,setSelectedOption]=useState<string>('')
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
       setSelectedOption(e.target.value)
    }
  return (
    <div className='options-container'>
         <ul className='options-list'>
            <li className='option-item'>
                <label>
                    <input
                    type='radio'
                    name='options'
                    value='sample1'
                    checked={selectedOption === 'sample1'}
                    onChange={handleChange}
                    />
                    Sample 1
                </label>
            </li>
            <li className='option-item'>
                <label>
                    <input
                    type='radio'
                    name='options'
                    value='sample2'
                    checked={selectedOption === 'sample2'}
                    onChange={handleChange}
                    />
                    Sample 2
                </label>
            </li>
            <li className='option-item'>
                <label>
                    <input
                    type='radio'
                    name='options'
                    value='sample3'
                    checked={selectedOption === 'sample3'}
                    onChange={handleChange}
                    />
                    Sample 3
                </label>
            </li>
            <li className='option-item'>
                <label>
                    <input
                    type='radio'
                    name='options'
                    value='sample4'
                    checked={selectedOption === 'sample4'}
                    onChange={handleChange}
                    />
                    Sample 4
                </label>
            </li>
      </ul>
    </div>
  )
}

export default Options