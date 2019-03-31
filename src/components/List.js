import React from 'react'; // this import is required because we are using JSX
export default function List (props) {
    return (
    <ul>
        {props.items.map((item) => (
            <li key={item.id}>
                {
                    // if props.toggle exists, call props.toggle method
                }
                <span
                onClick={() => props.toggle && props.toggle(item.id)}
                style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
                    {item.name}
                </span>
                <button onClick={() => props.remove(item)}>X</button>
            </li>
        ))}
    </ul>
    )
}