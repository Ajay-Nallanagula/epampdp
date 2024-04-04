// Adaptee
/*
The Adapter Pattern is a design pattern that allows objects with incompatible interfaces to work together. In JavaScript, the Adapter 
Pattern can be used to provide a common interface to objects with different 
interfaces or to modify an existing interface to meet the 
needs of a specific client.

Example:
In this example, we have an EuropeanSocket class that represents a socket with a European interface. We also have an AmericanSocket class, which acts as an adapter that wraps an instance of EuropeanSocket and provides a different interface.
Finally, we have a Device class that needs a socket to connect to. It doesn't care about the interface of the socket as long as it has a plugIn() method. When a device is created, it is passed an instance of AmericanSocket, which internally uses an instance of EuropeanSocket to perform the actual plug in operation.
This way, the Device class can connect to a socket with a different interface than it was originally designed for, without having to modify its code.

*/

class EuropeanSocket {
    plugIn() {
        console.log('Plug in European socket');
    }
}

// Adapter
class AmericanSocket {
    constructor(europeanSocket) {
        this.europeanSocket = europeanSocket;
    }

    plugIn() {
        console.log('Plug in American socket');
        this.europeanSocket.plugIn();
    }
}

// Client
class Device {
    constructor(socket) {
        this.socket = socket;
    }

    connect() {
        this.socket.plugIn();
    }
}

const europeanSocket = new EuropeanSocket();
const americanSocket = new AmericanSocket(europeanSocket);
const device = new Device(americanSocket);

device.connect(); // Outputs: Plug in American socket
                    //         Plug in European socket
