//arr.map(func(item,index))

const map = (arr,func)=>{
    return arr.reduce((acc,item) =>{
        const result = func(item)
        acc = [...acc,result]
        return acc
    },[])
}

const filter = (arr,func)=>{
    return arr.reduce((acc,item) =>{
        const isCorrect = func(item)
        if(isCorrect){
            acc = [...acc,item]
        }
        return acc
    },[])
}