import React, { useState } from 'react'

const Accordion = ({ items }) => {
    // init use state
    const [activeIndex, setActiveIndex] = useState(null);

    // code separation
    //def a helpper func and call it in rendered items when a click happens
    const onTitleClick = (index) => {
        // console.log('Title Clicked', index);
        // update the state replace the console log
        setActiveIndex(index);
    };

    // def. rendered items
    const renderedItems = items.map((item, index) => {
        // def an active state to check ic the activeIndex state is active expand ui when clicked
        const active = index === activeIndex ? 'active' : '';
        return ( 
            <React.Fragment key = { item.title } >
                <div 
                    // className = "title active"
                    className={`title ${active}`}

                    // onClick = { () => console.log('Title Clicked', index)} >
                    // replace the above and call the helper func
                    onClick={() => onTitleClick(index)} >
                    <i className = "dropdown icon" > </i> { item.title } 
                </div > 
                <div className={`content ${active}`} >
                    <p> { item.content } </p> 
                    </div > 
            </React.Fragment>
        );
    });

    return (
        // <h1> {items.length } </h1>
        // return the rendered items
        <div className = "ui styled accordion" > 
        { renderedItems } 
        {/* print out clicks, current state */}
        {/* <h1> { activeIndex } </h1> */}
        </div>
    )
};

export default Accordion;