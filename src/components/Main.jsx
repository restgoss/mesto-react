import React from 'react';
import api from '../utils/api';
import editavatar from '../images/edit-avatar.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
export default function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-circle" >
                    <img
                        className="profile__edit-icon"
                        src={editavatar}
                        alt='Редактировать аватар'
                    />
                    <img className="profile__avatar" src={currentUser.avatar} alt="Изображение профиля" onClick={props.onEditAvatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-btn" type="button" onClick={props.onEditProfile} />
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button className="profile__plus-btn" type="button" onClick={props.onAddPlace} />
            </section>
            <section className="cards">
                {props.cards.map ((card) => {
                   return <Card key={card._id} {...card} onCardLike={props.onCardLike} onCardClick={props.onCardClick} onCardDelete={props.onCardDelete} />
                })}
            </section>
        </main>
    )
};