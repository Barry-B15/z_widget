import React, { useState } from 'react'

import Dropdown from './components/Dropdown';


// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front end javascript framework '
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favorite JS lib among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating componets'
//     }
// ];

const App = () => {
    // def the options array
    const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },
        {
            label: 'The Color Green',
            value: 'green'
        },
        {
            label: 'The Shade of Blue',
            value: 'blue'
        }
    ];

    // create a new piece of state and set the default as the value of the 1st item in our options array
    const [selected, setSelected] = useState(options[0]);
    // create a new state to handle dropdown toggle
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* add a toggle button with a click listener */}
            <button onClick={() => setShowDropdown(!showDropdown)} >Toggle Dropdown</button>

            {/* <Accordion items={items} />  */}
            {/* < Search /> */}

            {/* wrap Dropdown with a curly and add a conditional */}
            {showDropdown ?
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options} /> : null
            }
        </div>
    );
};
// didn't like see the lint warning so I defined the variable App and exported as suggested by lint. WORKS!
export default App;