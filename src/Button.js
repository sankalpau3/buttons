import React, { useState } from 'react';

const Button = (innerHTML, index) => {
    const [value, SetValue] = useState(index);
    
    const onclick = () => {
        alert(value);
    }    
    
    return (<button onClick={onclick}>{ innerHTML }</button>);
}

export default Button;