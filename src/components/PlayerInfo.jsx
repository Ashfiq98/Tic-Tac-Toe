import { useState } from "react"

export default function PlayerInfo({ initialName, symbol }) {
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const editBtn = () => {
       setIsEditing((editing)=> !editing )
    }
    const handleChange = (e) =>{
        setPlayerName(e.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing){
       editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
       btnCaption = 'Save';
    }

    return (
        <li>
            {editablePlayerName}

            <span className="player-symbol">{symbol}</span>
            <button onClick={editBtn}>{btnCaption}</button>
        </li>
    )
}