import unliked from '../img/icons/love.png'
import liked from '../img/icons/heart.png'
import React, {useState} from "react";

const Character = ({characters = [], characterLiked}) => {

    const [listid, setRecharge] = useState(JSON.parse(localStorage.getItem('ID')) || [0]);

    const handleCharacterLiked = (id) =>{
        characterLiked(id);
    };

    const recharge = () => {
        setRecharge(JSON.parse(localStorage.getItem('ID')) || [0]);
    };

    return(
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col">
                    <div className='character-card'>
                        <img src={item.image} className='character-img' alt='image'/>
                        <div className='character-info'>
                            <div>
                            <p className='character-name'>Name: {item.name} </p>
                            </div>
                            <figure className="like-image">
                                <img src={listid.indexOf(item.id) > -1 ? liked : unliked} alt="Liked" onClick={
                                            () => {
                                                const id = item.id;
                                                handleCharacterLiked(id);
                                                recharge();
                                            }}/>
                            </figure>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Character;