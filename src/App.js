import './App.css';
import List from "./components/List/List";
import React, {useState} from "react";
import NewCardForm from "./components/NewCardForm/NewCardForm";

function App() {
    const [cards, setCards] = useState([
        {id: 1, text: "Создать список", completed: false},
        {id: 2, text: "Создать карточки", completed: false},
        {id: 3, text: "Интерфейс запилить", completed: false},
    ])

    const toggleCheckedCard = (id) => {
        setCards([
            ...cards.map(card => card.id === id ? {...card, completed: !card.completed} : {...card})
        ])
    }

    const addCard = (newCard) => {
        setCards([...cards, newCard])
    }

    const deleteCard = (card) => {
        setCards(cards.filter(c => c.id !== card.id))
    }

    return (
        <div className="App">
            <List toggleCheckedCard={toggleCheckedCard} title='Todo List' cards={cards} remove={deleteCard}/>
            <NewCardForm add={addCard}/>
        </div>
    );
}

export default App;
