/*
    What is a Duplex Stream ?
    Consider a duplex stream object, Inside that object we have 
    two mutually-exclusive buffers, one readable-buffer and other writable-buffer
    they both are independent.
    We can write to writable-buffer, we can read from readable buffer.
    

    What is Transform Stream ?
    In duplex stream, consider content that we write to writable stream is 
    consumed by readable-stream , output of writeable stream is input for
    readable-stream , along with few transformations like compression, encryption etc 
    in such cases this duplex stream is called as transform stream 
    Parent of transform stream is Duplex Stream.
    
    For Duplex and Transform we have to implemet custom-stream implementation 

    See the videos.
*/