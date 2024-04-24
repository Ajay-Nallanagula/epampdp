/**
 * The Interface Segregation Principle states that “Clients should not be forced
 *  to implement any methods they don’t use. Rather than one fat interface,
 * numerous little interfaces are preferred based on groups of methods with each
 * interface serving one submodule“
 *
 * As per the Single Responsibility Principle of SOLID, like classes, interfaces also should have a single responsibility. 
 * That means we shouldn’t force any class to implement any method(s) which they don’t
 * require.
 * 
 * https://dotnettutorials.net/lesson/interface-segregation-principle/ 
 */


interface IPrinter{
    print(content:string):void;
    scan(image:string):void;
    fax(message:string):void;
    mail(message:string):void
}

//HPPrinter have all the features available
class HPLaserPrinter implements IPrinter{
    print(content: string): void {
        console.log(content)
    }
    scan(image: string): void {
        console.log(image)
    }
    fax(message: string): void {
        console.log(message)
    }
    mail(message: string): void {
        console.log(message)
    }
}

//MiniPrinter cannot fax and mail?.. In this case ISP is used
class HPMiniLaserPrinter implements IPrinter{
    fax(message: string): void {
        throw new Error("Method not implemented.");
    }
    mail(message: string): void {
        throw new Error("Method not implemented.");
    }
    print(content: string): void {
        console.log(content)
    }
    scan(image: string): void {
        console.log(image)
    }
}