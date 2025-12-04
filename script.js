const numberResult = document.querySelector("h4")
const boxArticle = document.querySelector("article")
const button = document.querySelector("button")


function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if( min >= max ){
        numberResult.style.fontSize = "24px" 
        numberResult.innerHTML = "o valor minimo tem que ser MENOR que o valor MÁximo"
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min
        numberResult.innerHTML = result

    }

}

function hiddenArticle(){
        boxArticle.style.left = "50%";
        boxArticle.style.transform = "translatex(-50%)"
}

function byeArticle(){
    boxArticle.style.left = "-930px"
    boxArticle.style.transform = "translatex(0%)"
}
 
 button.addEventListener("click", hiddenArticle)
 

