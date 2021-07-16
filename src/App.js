import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [{
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];


const App = () => {
    // def the options array
    const options = [{
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

    // def useState 
    const [selected, setSelected] = useState(options[0]);

    return ( <
        div >
        <
        Header / >
        <
        Route path = '/' >
        <
        Accordion items = { items }
        /> <
        /Route> <
        Route path = '/list' >
        <
        Search / >
        <
        /Route> <
        Route path = '/dropdown' >
        <
        Dropdown label = "Select a Color"
        options = { options }
        selected = { selected }
        onSelectedChange = { setSelected }
        /> <
        /Route> <
        Route path = '/translate' >
        <
        Translate / >
        <
        /Route> <
        /div>
    );
};
// didn't like seeing the lint warning so I defined the variable App and exported as suggested by lint. WORKS!
export default App;