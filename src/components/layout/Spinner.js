import React from 'react';
import spinner from './spinner.gif';

export default () =>  {
    return(
        <div>
            <img src={spinner}
                alt="Loading..."
                style={{width: '100px', margin: '30% auto', display: 'block'}}/>
        </div>
    )
}