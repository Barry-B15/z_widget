import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    // create a piece of state and set it to empty default
    const [translated, setTranslated] = useState('');
    // create a new piece of state n set default to the text in the prop
    const [debouncedText, setDebouncedText] = useState(text);

    //  create a new useEffect to set timer and cleanup 
    useEffect(() => {
        // create a timerid to set time out
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        // set a cleanup func to cancel timer when text changes b4 the 500ms
        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    // use useEffect
    useEffect(() => {
        // create a helper async func, cut the axios and paste in it
        const doTranslation = async() => {
            // const res =
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                // change q: text to debouncedText to update with debouncedText
                // q: text,
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            },
        });
        // update the new piece of state
        setTranslated(data.data.translations[0].translatedText)
        };
        // call doTranslation which will be invoked anytime we change lang, or text
        doTranslation();
    }, [language, debouncedText]);
    // to use debouncedText, change text here to debouncedText
    
    return ( 
        <div >
            {/* output the translated text */}
            <div className="ui header">{translated}</div>
        </div>
    );
};

export default Convert;