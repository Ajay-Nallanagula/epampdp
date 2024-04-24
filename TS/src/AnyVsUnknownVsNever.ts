/*
any and unknown are the two escape ways that we use when we aren’t sure about
 what will be the type of value, whereas never is used when we are 
 out of all data types, we are left with no values.
*/

let anyThing;
anyThing = 100 //
if(anyThing > 100){//Valid}
anyThing = ()=>'function' //Valid
if(typeof anyThing === 'function'){}//valid
anyThing = null //Valid
anyThing.getSomeSoda()// Valid calling a function on null, Ideally Error
anyThing = undefined
anyThing.thisIsvalid()//Valid calling a function on undefined, Ideally Error

/**
 * Unknown is type-safed any
 when you make any variable of type unknwon , 
 you can assign anything to it just like any , but when you try to access 
 something from it, typescript will give you an error. 
 Stating that whatever you are trying to access 
 for a unkwnown variable type might not exists.
 */

 let putAny:unknown
 putAny = 100
 
 if(putAny >100) { //INVALID , operator cannot be applied between unKnown and number}
//BELOW IS VALID CODE
 if(typeof putAny === 'number'){
        if(putAny >100){
            //unknwon enforces you to add a check, before using anything from a variable of unknown type.
        }
 }
 putAny = null //Valid
 putAny.getSomeSoda()//Invalid 

//BELOW IS VALID CODE
if(putAny!=null && 
typeof putAny === 'object' &&
'getSomeSoda' in putAny &&
typeof putAny['getSomeSoda'] === 'function'
){
    putAny.getSomeSoda()
}
