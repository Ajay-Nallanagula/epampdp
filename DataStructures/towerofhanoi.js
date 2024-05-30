const towerOfHanoi = (noOfDiscs, fromRod, toRod, auxRod) => {

    if (noOfDiscs === 0) {
        return;
    }

    //Now the auxRod will beacome toRod and fromRod will be source rod in below step
    towerOfHanoi(noOfDiscs - 1, fromRod, auxRod, toRod)
    console.log(`Move disc ${noOfDiscs} from rod ${fromRod} to rod ${toRod}`)
    //Now the auxRod will beacome source Rod and toRod will beacome as to Rod in below step
    towerOfHanoi(noOfDiscs - 1, auxRod, toRod, fromRod)
}

towerOfHanoi(2, 'A', 'C', 'B')
