let gElCanvas
let gCtx

function renderMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.fillStyle = 'white'
    gCtx.font = "40px sans-serif"
    gCtx.textAlign = 'center'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function drawImg(elImg){
    gCtx.drawImage(elImg, 0,0, gElCanvas.width, gElCanvas.height)
}

// function onImgClicked(this){
//     renderMeme()
// }

function hideGallery(){

}

function hideEditor(){

}

function renderEditor(){

}