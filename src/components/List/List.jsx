import React from 'react';
import Card from "../Card/Card";

import cl from './List.module.css'

const List = ({cards, remove, title, toggleCheckedCard}) => {
    return (
        <div className={cl.list}>
            <h2 className={cl.title}>{title}</h2>
            {cards.map(card => <Card toggleCheckedCard={toggleCheckedCard} remove={remove} key={card.id} card={card}/>)}
        </div>
    );
}

export default List;