console.log("start");

setTimeout(() => {
    console.log("s1");
    Promise.resolve(setTimeout(() => console.log("p1"), 0));
}, 0);

Promise.resolve(
    (() => {
        console.log("p2");
        setTimeout(() => console.log("s2"), 0);
    })()
);

console.log("end");

// Guess the output 
/*

*/