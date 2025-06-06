In Node.js, `cluster` and `worker_threads` are two different mechanisms for achieving multi-threaded or multi-core parallelism. Below is a detailed comparison:

---

### 1. **Primary Purpose**
- **Cluster**:  
  The `cluster` module is specifically designed for creating multiple Node.js processes for load balancing across multiple CPU cores. Cluster allows you to create multiple independent Node.js processes (called worker processes), each running an instance of your application.

- **Worker Threads**:  
  The `worker_threads` module allows you to run multiple threads within a single Node.js process. These threads share the same memory space, but each has its own separate execution context, enabling more fine-grained, multi-threaded programming (e.g., for CPU-intensive tasks).

---

### 2. **Architecture**
- **Cluster**:  
  - Involves **child processes** spawned via `fork()`.
  - Each spawned worker is a complete and independent Node.js process.
  - Processes do not share memory—state sharing must happen via inter-process communication (IPC) or other mechanisms like Redis or shared files.

- **Worker Threads**:  
  - Uses **worker threads** within the same Node.js process.
  - Threads share memory (via `SharedArrayBuffer`) while having separate execution contexts.
  - Particularly suited for offloading CPU-intensive tasks or parallel computation.

---

### 3. **Use Case**
- **Cluster**:
  - Used for horizontally scaling server applications.
  - Facilitates load-balancing incoming requests across multiple CPU cores using multiple independent processes.
  - Ideal for web servers or I/O-heavy applications.

- **Worker Threads**:
  - Used for performing computationally heavy or CPU-intensive tasks in parallel to prevent the main event loop from being blocked.
  - Ideal for tasks like data processing, encoding, mathematical computations, or machine learning.

---

### 4. **Communication**
- **Cluster**:  
  Communication is achieved via inter-process communication (IPC). Each worker process communicates with the master process through message passing (e.g., `worker.send()` and `worker.on('message')`) and cannot directly share memory.

- **Worker Threads**:  
  Threads can communicate with each other through message passing (`worker.postMessage()`, `parentPort.on('message')`) or share memory using a `SharedArrayBuffer` or `Atomics`.

---

### 5. **Performance**
- **Cluster**:
  - Workers are independent processes, so they do not share memory.
  - Generally incurs more overhead due to the nature of separate processes (e.g., higher memory usage, process creation overhead).

- **Worker Threads**:
  - Threads can use shared memory, making them more lightweight than processes.
  - Reduced overhead compared to clusters when sharing state or data across threads.

---

### 6. **Usage Complexity**
- **Cluster**:  
  Easier to implement for load-balancing tasks because it's based on child processes. However, inter-process communication and monitoring child processes increase complexity.

- **Worker Threads**:  
  More complex to use, as you need to carefully design thread-safe code and manage the shared memory properly. Great for fine-grained control over parallelism.

---

### 7. **How to Require**
- **Cluster**:  
  ```javascript
  const cluster = require('cluster');
  ```
  
- **Worker Threads**:  
  ```javascript
  const { Worker, isMainThread, parentPort } = require('worker_threads');
  ```

---

### 8. **When to Use**
- Use **Cluster** if your primary goal is scaling your application horizontally across multiple CPU cores and handling high-concurrency I/O operations (e.g., HTTP servers).
- Use **Worker Threads** if you need to offload CPU-heavy synchronous code or perform parallel computation without blocking the event loop.

---

### Example Code
#### Cluster Example:
```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

#### Worker Threads Example:
```javascript
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // Main thread: create a worker thread
  const worker = new Worker(__filename);
  worker.on('message', (message) => {
    console.log('Received from worker:', message);
  });

  worker.postMessage('Hello, Worker!');
} else {
  // Worker thread
  parentPort.on('message', (message) => {
    console.log('Received from main thread:', message);
    parentPort.postMessage('Hello, Main Thread!');
  });
}
```

---

### Summary Table:
| Feature                  | Cluster                       | Worker Threads                 |
|--------------------------|-------------------------------|---------------------------------|
| **Type**                 | Process-based Parallelism     | Thread-based Parallelism       |
| **Shared Memory**        | No                            | Yes                            |
| **Communication**        | IPC (e.g., `worker.send()`)   | Message passing or SharedMemory|
| **Overhead**             | Higher                        | Lower                          |
| **Ideal Use Case**       | Web server scaling            | CPU-intensive tasks            |

In a nutshell, **use `cluster` for horizontal scaling of servers** and **use `worker_threads` for parallelizing CPU-intensive tasks**.