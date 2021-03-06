import React, {useState} from 'react';
import cl from './Card.module.css'
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

const Card = ({card, remove, toggleCheckedCard}) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={cl.card}>
            <p>{card.text}</p>
            <Modal active={modalActive} setActive={setModalActive}>
                <h3>Задача еще не выполнена!</h3>
                <h3>Вы уверены, что хотите удалить ее?</h3>
                <div className={cl.buttonGroup}>
                    <Button onClick={() => remove(card)}>Удалить</Button>
                    <Button red onClick={() => setModalActive(false)}>Отмена</Button>
                </div>
            </Modal>
            <div className={cl.cardActions}>
                <input onClick={() => toggleCheckedCard(card.id)} type="checkbox" defaultChecked={card.completed}/>
                <svg onClick={card.completed ? () => remove(card) : () => setModalActive(true)}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M17,22H7c-1.657,0-3-1.343-3-3V6h16v13C20,20.657,18.657,22,17,22z" opacity=".35"/>
                        <path d="M16,4H8V3c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1V4z"/>
                        <path
                            d="M19,3C18.399,3,5.601,3,5,3C3.895,3,3,3.895,3,5c0,1.105,0.895,2,2,2c0.601,0,13.399,0,14,0c1.105,0,2-0.895,2-2	C21,3.895,20.105,3,19,3z"/>
                    </svg>
                </svg>
            </div>


        </div>
    );
};

export default Card;