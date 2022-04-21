const { arrayBuffer } = require("stream/consumers")

function fantabulous(size, ...array) {
    let count = []
    for (let index = 1; index <= size; index++) {
        for (let j = 0; j <= size; j++) {
            const subarray = array.slice(j, j + index)
            if (subarray.length > 1 && (j + index) <= size) {
                //console.log(subarray)
                let currentIndex = subarray.length - 1
                let currentNo = subarray.pop()
                // const resultIndex = subarray.findIndex((item)=>{
                //     return currentNo > item
                // })
                // count.push([resultIndex+1, currentIndex+1])
                for (let i = 0; i < subarray.length; i++) {
                    if (currentNo > subarray[i] && i === currentIndex - 1) { //&& i === currentIndex - 1
                        //console.log(i,currentIndex)
                        count.push([i + 1, currentIndex + 1])
                        // count = count + 1
                        // console.log([subarray[i], currentNo])
                        //console.log([i+1, currentIndex+1])
                        console.log([...subarray, currentNo])

                    }


                }
            }
        }

    }
    console.log({ count })
}

console.log(fantabulous(4, 1, 3, 2, 4))
//console.log([1, 2, 3, 4].slice(0, 1))
