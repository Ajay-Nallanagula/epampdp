class Directory{
    constructor(name,lastModified,size){
        this.name = name
        this.lastModified = lastModified
        this.size = size
    }
    getLastmodified(){}
    getSize(){}
    getName(){}
}


class File extends Directory{
    constructor(name,lastModified,size){
        super(name,lastModified,size)
    }

    getLastmodified(){
        return this.lastModified
    }

    getSize(){
        return this.size
    }
    getName(){
        return this.name
    }

    print(){
        console.log('\n')
        console.log(`${this.name}-${this.size}-${this.lastModified}`)
    }
}

class Folder extends Directory{
    constructor(composites,lastModified,size){
        super(composites,lastModified,size)
    }

    getLastmodified(){
        return this.lastModified
    }

    getSize(){
        return this.size
    }
    getName(){
        return this.composites
    }

    print(){
        console.log(`Folder of size:${this.getSize()}`)
        this.composites.forEach(file => {
            file.print()
        })
    }
}