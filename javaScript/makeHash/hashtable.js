//I implmented this using only arrays, no objects. 
function oldFashionedHash(){
    this.hashIndex = []
    //declare a big old array for holding our various hashes
    for(let i = 0; i < 100; i ++){
        this.hashIndex.push([0]) 
    }
}
oldFashionedHash.prototype.insert= function(key, value){
    //I decided to keep the value inside an array. When finding the 
    //value, if there is more than one, a hash collision, it will return all the value stored there as an array. 
    //otherwise it wil just return the first value unwrapped. 
    
    //hash the key. 
    let arrayIndex = hashingFunction(key) 
    if(this.hashIndex[arrayIndex] == 0){
        this.hashIndex[arrayIndex] = [value];
    }else{
        this.hashIndex[arrayIndex].push(value)
    }
}
oldFashionedHash.prototype.find=function(key){
    let arrayIndex = hashingFunction(key)
    if(this.hashIndex[arrayIndex].length > 1){
       return this.hashIndex[arrayIndex]
    }else{
        return this.hashIndex[arrayIndex][0]
    }
}
function hashingFunction(key){
    let stringKey = key.toString()
    let hash = 0
    for(let index = 0; index < stringKey.length; index++){
        hash += stringKey.charCodeAt(index)
    }
    let first = stringKey.charCodeAt(0)
    let arrayIndex = hash%first 
    return arrayIndex
}

let myHastable = new oldFashionedHash()
myHastable.insert('hello','556')
myHastable.insert('hell',84930)
myHastable.insert(123,'a number key? wild')
myHastable.insert('asuperlongkeythatwillprobablyhashoutsideoftheallotedarray','a number key? wild')
myHastable.insert(556,'can this has table handle numbers?')
myHastable.insert('michaela','a c++ developer who orignally learned c, then python, then javascript')
console.log("this is the result:", myHastable.find('asuperlongkeythatwillprobablyhashoutsideoftheallotedarray'))
