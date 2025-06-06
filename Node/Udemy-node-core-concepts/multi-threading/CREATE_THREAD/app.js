const { Worker } = require('worker_threads');

function createNewWorker(path, workerData = {}) {
    return new Worker(path, workerData);
}

function createThreads() {
    const a = 500;

    console.log(`This Main Thread, ${a}\n`);

    console.log('NOTE: EACH THREAD HAS ITS OWN EVENT LOOP!! \n')
    console.log(`We can spawn New Threads in NodeJs using "const {Worker} = require('worker_threads')"\n`)
    const thread_custom_1 = createNewWorker('./calc.js');
    // console.log({ thread_custom_1 });

    const thread_custom_2 = createNewWorker('./calc.js');
    //console.log({ thread_custom_2 });

    setTimeout(() => {
        const thread_custom_3 = createNewWorker('./calc.js');
        // console.log({ thread_custom_3 });
    }, 1000);
}

createThreads()