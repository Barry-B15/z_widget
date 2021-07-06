import React from 'react'

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // handle when ctrl+click or cammand+click to open in new tab
        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault(); // prevent the page from reloading
        window.history.pushState( {}, '', href); // change the url to the one clicked

        //tell the dropdown comps of url change
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        // then go tell Route.js to listen for this event
    }
    return ( 
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    )
}

export default Link;