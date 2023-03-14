// TASK TWO ------------------------------------------>
function capitalizeFirst(string) {
    const textArray = string.split(' ');
    for (let i = 0; i < textArray.length; i++) {
        textArray[i] = textArray[i][0].toUpperCase() + textArray[i].substring(1); 
    }   
    return textArray.join(' ');
}

const text = "hi, my name is nizami uzunalovi";
console.log(capitalizeFirst(text));

// ------------------------------------------|