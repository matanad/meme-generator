let gElCanvas
let gCtx

gElCanvas = document.querySelector('canvas')
gCtx = gElCanvas.getContext('2d')

// const meme = getMeme()
// const memeImgUrl = getImgUrlById(meme.selectedImgId)
// // renderMeme()

function renderMeme() {
    const meme = getMeme()
    const memeImgUrl = getImgUrlById(meme.selectedImgId)
    drawImg(memeImgUrl)
    setTimeout(() => {
        meme.lines.forEach(line => drawText(line, 5))
    }, 300);
}

function drawText({ txt, size = 40, align = 'left', color = 'white' }, x = 50, y = 50) {
    gCtx.lineWidth = 2
    gCtx.fillStyle = color
    gCtx.font = `${size}px sans-serif`
    gCtx.textAlign = align

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function drawImg(img) {
    const elImg = new Image()
    elImg.src = img
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function onTxtInput(elTxt) {
    setLineTxt(elTxt.value)
    renderMeme()
}

function hideEditor() {
    document.querySelector('.editor-container').style.display = 'none'
}

function showEditor() {
    document.querySelector('.editor-container').style.display = ''
}

function renderEditor() {

}