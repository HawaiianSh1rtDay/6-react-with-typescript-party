import React, { useState } from 'react';
import { IState as Props } from "../App"

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        id: "",
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = (): void => {
        if(!input.name || !input.age || !input.img) {
            return;
        }
        
        setPeople([
            ...people,
            {
                id: Math.random(),
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note
            }
        ])

        setInput({
            id: "",
            name: "",
            age: "",
            note: "",
            img: ""
        })

        console.log(people)
    }

  return (
    <div className="AddToList">
        <input 
            className="AddToList-input"
            type="text" 
            placeholder="Name" 
            name="name" 
            value={input.name}
            onChange={(handleChange)}
        />
        <input 
            className="AddToList-input"
            type="text" 
            placeholder="Age" 
            name="age" 
            value={input.age}
            onChange={handleChange}
        />
        <input 
            className="AddToList-input"
            type="text" 
            placeholder="Image url" 
            name="img" 
            value={input.img}
            onChange={handleChange}
        />
        <textarea 
            className="AddToList-input"
            placeholder="Notes" 
            name="note" 
            value={input.note}
            onChange={handleChange}
        />
        <button
            className="AddToList-btn"
            onClick={(handleClick)}
        >
            Add to List
        </button>
    </div>
  )
};

export default AddToList;
