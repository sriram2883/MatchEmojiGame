import React, { useRef, useState, useEffect } from "react";
import "./Body.css";
import Card from "../card/Card";

function Body(props) {
    const {matchRef, emojislist, setEmojisList, steps, setSteps ,minSteps,setMinSteps,matchedCards, setMatchedCards,startTimer, intervalRef , resetTime} = props;
    const [selectedCard,setSelectedCard] = useState([]);

    const checkGameOver = () => {
        if (emojislist.length==0 && matchRef.current === false) {
            clearInterval(intervalRef.current);
            setSelectedCard([]);
            resetTime();
            setMatchedCards([]);
            matchRef.current = true;
            console.log(minSteps,steps)
            if(minSteps>steps){
                var minimum_steps = steps;
                setMinSteps(minimum_steps);
            }
            setSteps(0);
            alert("Game Over");
        }
    };

    const changeStatus = (emoji) => {
        if(intervalRef.current === null){
            startTimer();
        }


        if (matchedCards.includes(emoji) || selectedCard.includes(emoji)) return;

        const updatedEmojisList = emojislist.map(e =>
            e.id === emoji.id ? { ...e, status: "visible" } : e
        );
        setEmojisList(updatedEmojisList);
        
        const newSelectedCards = [...selectedCard, emoji];
        setSelectedCard(newSelectedCards);

        if (newSelectedCards.length === 2) {
            setSteps(prev => prev + 1);
            if (newSelectedCards[0].emojiNmae === newSelectedCards[1].emojiNmae && newSelectedCards[0].id !== newSelectedCards[1].id) {
                setMatchedCards([...matchedCards, newSelectedCards[0], newSelectedCards[1]]);
                setSelectedCard([]);
                setEmojisList((prev)=>{
                    return prev.filter(e => e.id !== newSelectedCards[0].id && e.id !== newSelectedCards[1].id)
                })
            } else {
                setTimeout(() => {
                    const hiddenEmojisList = emojislist.map(e =>
                        e.id === newSelectedCards[0].id || e.id === newSelectedCards[1].id ? { ...e, status: "hidden" } : e
                    );
                    setEmojisList(hiddenEmojisList);
                    setSelectedCard([]);
                }, 300);
            }
        }
    };

    useEffect(() => {
        checkGameOver();
    }, [matchedCards]);

    return (
        <div className="Body">
            <h1>Match The Cards</h1>
            <div className="Cards">
                {emojislist.map((emoji) => (
                    <div key={emoji.id} onClick={() => changeStatus(emoji)}>
                        {emoji.status === "visible" || matchedCards.includes(emoji) ? (
                            <Card image={emoji.emojiUrl} />
                        ) : (
                            <div className="temp"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Body;
