import React, {useState} from 'react';
import cl from "./NewCardForm.module.css";

const NewCardForm = ({add}) => {
    const [card, setNewCard] = useState({text: ''})

    const addNewCard = (e) => {
        e.preventDefault()
        const newCard = {
            ...card, id: Date.now(), completed: false
        }
        if (card.text !== ''){
            add(newCard)
        }

        setNewCard({text: ''})
    }

    return (
        <form className={cl.newCard}>
            <input
                type="text"
                placeholder="Введите новую задачу"
                value={card.text}
                onChange={e => setNewCard({...card, text: e.target.value})}
            />
            <button onClick={addNewCard}>
                <h4>Добавить</h4>
            </button>
        </form>
    );
};

export default NewCardForm;