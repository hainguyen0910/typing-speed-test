import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import * as randomWords from 'random-words';


const renderWordTest = data => {
    let result = "";
    for (let item of data) {
        result += `${item} `;
    }
    return result;
}

function Content(props) {

    const [testString, setTestString] = useState(randomWords(300));
    const [word, setWord] = useState(testString[0]);
    const inputWord = useRef(null);
    const [correctWord, setCorrectWord] = useState(0);
    const [totalWordInput, setTotalWordInput] = useState(0);
    const [timeLeft, setTimeLeft] = useState({ min: 1, seconds: 0, })
    const [isStart, setIsStart] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const [score, setScore] = useState(0);
    const [timerID, setTimerID] = useState(null);
    const formatSecondsToMin = (timeLeft) => {
        return {
            min: parseInt(timeLeft / 60),
            seconds: timeLeft % 60
        }
    }

    const formatMinToSeconds = timeLeft => {
        return timeLeft.min * 60 + timeLeft.seconds
    }

    useEffect(() => {
        setTimerID(setTimeout(() => {
            let currentSeconds = formatMinToSeconds(timeLeft);
            if (currentSeconds > 0 && isStart) {
                setTimeLeft(formatSecondsToMin(currentSeconds - 1))
            }
            else if (currentSeconds < 0)
                setIsEnd(true);
            else {
                clearTimeout(timerID)
            }
        }, 1000))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeLeft, isStart])

    useEffect(() => {
        if (isStart && timeLeft.seconds > 0 && timeLeft.seconds % 2 !== 0) {
            setScore(Math.round((correctWord / Math.abs(60 - timeLeft.seconds)) * 100))
        }
    }, [correctWord, isStart, timeLeft.seconds])

    const handleOnChange = (event) => {
        if (timeLeft.min === 1 || timeLeft.seconds >= 0) {
            setIsStart(true);
            if (event.key === " " || event.key === "Enter") {
                if (inputWord.current.value === word + " ") {
                    setCorrectWord(correctWord + 1)
                }
                setTotalWordInput(totalWordInput + 1)
                setWord(testString[1]);
                setTestString(testString.slice(1));
                inputWord.current.value = "";
            }
        }
        else {
            setIsStart(false);
        }
    }

    const handleRestart = () => {
        setTestString(randomWords(300));
        setWord(testString[0]);
        setCorrectWord(0);
        setTotalWordInput(0);
        clearTimeout(timerID)
        setIsStart(false);
        setTimeLeft({ min: 1, seconds: 0 });
        setIsEnd(false);
        setScore(0);
        inputWord.current.value = "";
    }

    return (
        <div className="content">
            <div className="info-box">
                <div className="info">
                    <h2>WPM</h2>
                    {score > 0 ? <h3>{score}</h3> : <h3>0</h3>}
                </div>
                <div className="info">
                    <h2>Correct Words</h2>
                    {score > 0 ? <h3>{correctWord}</h3> : <h3>0</h3>}
                </div>
                <div className="info">
                    <h2>Errors</h2>
                    <h3>{Math.round((totalWordInput - correctWord))}</h3>
                </div>
                <div className="info">
                    <h2>Time</h2>
                    <h3>{String(timeLeft.min).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</h3>
                </div>
            </div>

            <div className="test-string">
                {renderWordTest(testString)}
            </div>

            <div className="input-string">
                <input type="text" ref={inputWord} onKeyUp={handleOnChange} disabled={isEnd} />
                <button onClick={handleRestart} />
            </div>
        </div>
    )
}

export default Content
