import React, {useState} from 'react';
import cl from "./NewCardForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

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
            <Input
                type="text"
                placeholder="Введите новую задачу"
                value={card.text}
                onChange={e => setNewCard({...card, text: e.target.value})}
            />
            <Button onClick={addNewCard}>
                <h4>Добавить</h4>
            </Button>
        </form>
    );
};

export default NewCardForm;