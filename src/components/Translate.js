import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from "./Convert";

// https://cloud.google.com/docs for doc and paid api key 
// https://cloud.google.com/translate/docs/reference/rest/v2/translate
// google Translate api key AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// def the options
const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    // {
    //     label: 'Arabic',
    //     value: 'ar'
    // },
    // {
    //     label: 'Hindi',
    //     value: 'hi'
    // },
    {
        label: 'Hausa',
        value: 'ha'
    },
    {
        label: 'Igbo',
        value: 'ig'
    },
    {
        label: 'Yoruba',
        value: 'yo'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Swahili',
        value: 'sw'
    },
    {
        label: 'French',
        value: 'fr'
    }
]
const Translate = () => {
    // use useState and pass the 1st lang as default
    const [language, setLanguage] = useState(options[0]);
    // def a piece of state for text and set default to null
    const [text, setText] = useState('');

    return ( 
        <div style={{margin: '1em 3em'}}>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Text</label>
                        {/* add an input for user to type in */}
                        <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
            //def a label to show in browser, go add it to Dropdown compo
            label = "Select a Language" 
            
            selected={language} // add the lang prop
            onSelectedChange={setLanguage}  // set the lang props
            options={options} //add options as a props
             />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};
export default Translate;