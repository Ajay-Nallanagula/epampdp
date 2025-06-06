function getStringSubsequence(str) {

    if (!str.length) {
        return str
    }

    const first = str.charAt(0);//a,b,c
    const rest = getStringSubsequence(str.substring(1));//bc
    //console.log(rest.indexOf(','), rest)
    let results = '';

    const splitResult = rest.split(',')
    //console.log({splitResult, first, results})
    splitResult.forEach(e => {
        // console.log('forEach-->',{rest})
        results += ',' + first + e; //,bc
        //  console.log('1',results)
        results += ',' + e //,bc,c,
        //console.log('2',results)
    })

    return results.substring(1);

}


//console.log(getStringSubsequence('abc'))

//getStringSubsequence('abc')
//Expected Output: a,b,c, ab, ac, abc,bc

function tOH(numRings, fromRod, toRod, auxRod) {
    if (numRings === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    } else {
        tOH(numRings - 1, fromRod, auxRod, toRod)
        console.log(`Move disc ${numRings}th from rod ${fromRod} to rod ${toRod}`)
        tOH(numRings - 1, auxRod, toRod, fromRod)
        //console.log(`Move disc ${numRings} from rod ${auxRod} to rod ${toRod}`)
    }

}

console.log(`yOU SHOULD SEE ALL THE RINGS MOVED TO toRod`)
console.log(tOH(4, 'F', 'T', 'A'))

















