import React, { useState, ChangeEvent, useEffect } from 'react'
import '../../src/App.css'
import { IQuestions, IApiResponse } from './QuestionCard';

interface IOptionsProps {
    data:IApiResponse
    answered: number,
    setAnswered: React.Dispatch<React.SetStateAction<number>>
}

const Options: React.FC<IOptionsProps> = ({ data,answered, setAnswered }: IOptionsProps) => {
    const [selectedOption, setSelectedOption] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        if (newValue === 'unSelect') {
            if (selectedOption !== 'unSelect') {
                setAnswered(prev => prev - 1)
            }
        } else {
            if (selectedOption === 'unSelect') {
                setAnswered(prev => prev + 1)
            } else if (!selectedOption) {
                setAnswered(prev => prev + 1)
            }
        }
        setSelectedOption(newValue)
    }

    useEffect(() => {
        // Effect only for demonstration or debugging purposes
    }, [selectedOption])
    console.log(data,'from options');
    
    return (
       <div>{
        data?
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
                            value='unSelect'
                            checked={selectedOption === 'unSelect'}
                            onChange={handleChange}
                        />
                        Unselect
                    </label>
                </li>
            </ul>
        </div> :<h1>Loading</h1>
        }
       </div>
        
    )
}

export default Options
