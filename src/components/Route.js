import {useEffect, useState} from 'react';

const Route = ({ path, children }) => { 
    // use the useState, create a new piece of state
    //1 when app 1st loads, display whatever the pathname is
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    
    useEffect(() => {
        const onLocationChange = () => {
            // console.log('Location Changed');
            //2 when path changes, set the path to whatever the current pathname is
            setCurrentPath(window.location.pathname);
        }
       
        window.addEventListener('popstate', onLocationChange);
        return () => {
            //cleanup: we defined onLocationChange separately so we can remove it later
            window.removeEventListener('popstate', onLocationChange)
        };
    }, []);

    return window.location.pathname === path ? children : null;
    //3 replace the above with currentpath or leave it as is
    // return currentPath === path ? children : null;

}

export default Route;