import React, { useState, useEffect, Component, useMemo, useCallback, useRef } from 'react';

// function Interview() {
//     const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
//     // const numbers = [1, 2, 3, 4, 5];
//     const doubledNumbers = useMemo(() => numbers.map((n) => n * 2), [numbers]);
//     const handleButtonClick = () => {
//         setNumbers(prev => [...prev, 6, 7])
//         // numbers.push(...[6, 7])
//     }
//     return (
//         <>
//             <div>{JSON.stringify(numbers)}</div>
//             <div>
//                 {doubledNumbers.map((number) => (
//                     <p key={number}>{number}</p>
//                 ))}
//             </div>
//             <div>
//                 <button onClick={handleButtonClick}>Add To array</button>
//             </div >
//         </>
//     );
// }

function Interview() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    const increment = useCallback(() => {
        countRef.current = countRef.current + 1;
        setCount(countRef.current);
    }, []);

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}

// class Interview extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { list: ["Item1", "Item2"] };
//     }
//     addItem() {
//         const newItem = "Item3";
//         this.state.list.push(newItem);
//         this.setState({ list: this.state.list });
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.addItem.bind(this)}>Add item</button>
//                 <ul>
//                     {this.state.list.map((item) => (
//                         <li key={item}>{item}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }


export default Interview