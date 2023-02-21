



function translate(){
    let textToTranslate = arguments[0]
    textToTranslate = "prueba"
    return textToTranslate
}





let tags = document.getElementsByTagName("*") //como es la mejor forma de agarrar los tags que tienen texto?
console.log(tags.length)

for(let i = 0; i < tags.length ; i++){
let insideText = tags[i].textContent 
insideTextTranslated = translate(insideText)
tags[i].innerHTML = "<strong>"+ insideTextTranslated +"</strong>"
}

