import React, { useState } from 'react'
export const HideandShow = () => {
    let [isTrue, setIsTrue] = useState(true);
    return (
        <div className="HideandShow">
            {
                isTrue ? <h1>Hide and Show Component</h1> : <h1>Component is Hidden</h1>
            }
            <button onClick={() => setIsTrue(!isTrue)}>Hide and Show</button>
        </div>
    );
}
