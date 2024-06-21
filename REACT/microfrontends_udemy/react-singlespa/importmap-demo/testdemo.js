//import  moment from 'moment';
//import _ from 'lodash';

import _ from "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"

export const getCurrentDate = () => {
    // const currentdate = moment()
    // console.log(currentdate.toString())
    const result = _.chunk(['a', 'b', 'c', 'd'], 2);
    console.log(result)
}

getCurrentDate()