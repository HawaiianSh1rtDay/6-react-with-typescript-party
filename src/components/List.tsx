import React from 'react';
import { IState as Props } from "../App"
import { MdDelete } from 'react-icons/md'

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const List: React.FC<IProps> = ({ people, setPeople }) => {

    function handleRemove(id:number) {
        setPeople(
            people.filter(person => (
                person.id !== id
            ))
        )
    }

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                    <MdDelete style={{fontSize: "25px"}} onClick={() => handleRemove(person.id)} />
                </li>
            )
        })
    }

  return (
    <ul>
        {renderList()}
    </ul>
  )
};

export default List;
