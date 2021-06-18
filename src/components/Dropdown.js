import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    // create a new piece of state to handle class toggle
    const [open, setOpen] = useState(false);
    // call use ref just after useState
    const ref = useRef();

    useEffect(() => {
        // create a new const, give it the callback func from our listener
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            };

            setOpen(false);
        };
        // provide onBodyClick as callback to the listener
        document.body.addEventListener('click', onBodyClick);
        // add a cleanup func
        return () => {
            // remove the onBodyClick when we toggle the dropdown
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        // hide the selected item from the dropdown list
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                // handle when user clicks a color to update the option
                onClick={() => {
                    // console.log('Item CLICKED');
                    onSelectedChange(option)
                }}
            >
                {option.label}
            </div>
        );
    });
    // console log the ref
    // console.log(ref.current);

    return (
        // <h1>Dropdown </h1>; replace this with a block of JSX
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                {/* add onclick listener to handle dropdown toggle */}
                <div
                    onClick={() => {
                        // console.log('DROPDOWN CLICKED')
                        setOpen(!open)
                    }}

                    className={`ui selection dropdown ${open ? 'visible active ' : ''} `}>
                    <i className="dropdown icon"></i>
                    {/* printout the label of the selected item */}
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition ' : ''} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dropdown;