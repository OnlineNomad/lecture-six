// TASK ONE ----------------------------------------->
const replaceString = (string, toReplace, toReplaceWith) => {
    let txtx = string.split(' ');
    for(let i in txtx){
        if(txtx[i] == toReplace){
            txtx[i] = toReplaceWith;
        }
    }
    return txtx.join(' ');

}

const stringOg = "Hello This is Nizami !";
console.log(replaceString(stringOg, 'This', 'Thou'));


// ----------------------------------------------|


// TASK TWO ------------------------------------------>
const capitalizeFirst = string => {
    const textArray = string.split(' ');
    return textArray.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ')
}
const text = "hi, my name is nizami uzunalovi";
console.log(capitalizeFirst(text));
// ------------------------------------------|


// TASK THREE ------------------------------------>

const sortByAge = (userArray) => {
    return userArray.sort((a, b) => a.age - b.age);
}

const users = [{name:'Lasha', age:300}, {name:'Saba', age:200}, {name:'Gio', age:155}]
console.log(sortByAge(users));
// -----------------------------------|