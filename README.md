# react-use-hover
a hook that returns a hover state and a ref, pass the ref to a component, then the hover state becomes true when the mouse is hovering that component

## Installation
```js
npm install @doiali/use-hover
```
## Usage
```js
import React from 'react';
import useHover from '@doiali/use-hover';

export default function SayHello() {
    const [isHovering,ref] = useHover();
    const style = {
        height:80,
        width:150,
        textAlign: "center",
        margin:'auto',
        border:`1px solid black`,
    }

    return (
        <div ref={ref} style={style}>
            hover me! <br/>
            {isHovering && "Hello!"}
        </div>
    )
}
```
