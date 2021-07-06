import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Search = () => {
    // call useState, set default to ''
    const [term, setTerm] = useState('CSS');
    // create a new piece of state for dedounced term
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    // create a new piece of state
    const [ results, setResults ] = useState([]);

    //    create a useEffect for term
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        // return a cleanup func to clear the timer
        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

// create another useEffect for debounced term
useEffect(() => {
//  move the entire search func we had before here
    const search = async() => {
        // store the response as data in a var
        const { data } = await axios.get('https://en.wikipedia.org/w/api.php', { 
            // await axios.get('http://localhost:3001', { the little hack line 
        params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
      
    };
    // call search immediately
    // mine: using conditional to fix error when user deletes default query
    if(debouncedTerm) {
        search();
    }
}, [debouncedTerm]);


    // map over the results
    const renderedResults = results.map((result) => {
        return (
            <div 
            key={result.pageid}
            className="item">
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })
    return ( 
        <div className="container" style={{ margin: "1em 4em" }}>
            {/* container and style: mine, just to make things look a little better */}
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    {/* set the term value prop to input */}
                    <input 
                    value={ term }
                    onChange={e => setTerm(e.target.value)}
                    className="input" type="text" />
                </div>
            </div> 
            <div className="ui celled list">
                { renderedResults}
            </div>
        </div>
    );
}
export default Search;