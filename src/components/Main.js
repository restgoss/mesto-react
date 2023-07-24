import React from 'react';
import api from '../utils/Api';
import editavatar from '../images/edit-avatar.svg';
import Card from './Card';
export default function Main(props) {
    const [info, setInfo] = React.useState({
        name: 'Загрузка...',
        about: 'Загрузка...',
        avatar: ''
    })

    React.useEffect(() => {
        api
            .getUserInfo()
            .then((info) => {
                setInfo({
                    name: info.name,
                    about: info.about,
                    avatar: info.avatar
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-circle" onClick={props.onEditAvatar}>
                    <img
                        className="profile__edit-icon"
                        src={editavatar}
                    />
                    <img className="profile__avatar" src={info.avatar} alt="Изображение профиля" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{info.name}</h1>
                    <button className="profile__edit-btn" type="button" onClick={props.onEditProfile} />
                    <p className="profile__description">{info.about}</p>
                </div>
                <button className="profile__plus-btn" type="button" onClick={props.onAddPlace} />
            </section>
            <section className="cards">
                {cards.map((card) => (
                    <Card key={card._id} {...card} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
    )
};