Promise.resolve().then(() => console.log('promise1 resolved')); //micro task
Promise.resolve().then(() => console.log('promise2 resolved'));
setTimeout(() => { //macro task
    console.log('set timeout3')
    Promise.resolve().then(() => console.log('inner promise3 resolved'));
}, 0);
setTimeout(() => console.log('set timeout1'), 0);
setTimeout(() => console.log('set timeout2'), 0);
Promise.resolve().then(() => console.log('promise4 resolved'));
Promise.resolve().then(() => {
    console.log('promise5 resolved')
    Promise.resolve().then(() => console.log('inner promise6 resolved'));
});
Promise.resolve().then(() => console.log('promise7 resolved'));

/*
According to the HTML5 spec guideline for the event loop, the event loop should process the micro-task queue entirely,
 after processing one macro-task from the macro-task queue. In our example, when theset timeout3 callback is executed, 
 it schedules a promise callback. As per the HTML5 spec, before moving to any other callback in the timer callbacks 
 queue, the event loop has to make sure that the microtask queue is empty. Therefore it has to execute the newly added 
 promise callback which logs inner promise3 resolved. After processing this, the micro-tasks queue becomes empty, 
 and the event loop can move forward to process remaining set timeout1 and set timeout2 callbacks in the timer 
 callbacks queue.
*/