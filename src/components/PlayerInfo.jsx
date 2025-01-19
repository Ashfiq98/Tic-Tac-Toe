import { useState } from "react"

export default function PlayerInfo({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const editBtn = () => {
        if (!isEditing)
            setIsEditing(true);
        else
            setIsEditing(false);
    }
    let playerName = <span className="player-name">{name}</span>;
    let btnCaption = 'Edit';

    if (isEditing){
       playerName = <input type="text" required value={name} />;
       btnCaption = 'Save';
    }

    return (
        <li>
            {playerName}

            <span className="player-symbol">{symbol}</span>
            <button onClick={editBtn}>{btnCaption}</button>
        </li>
    )
}