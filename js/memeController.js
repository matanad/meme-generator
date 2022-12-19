let gElCanvas
let gCtx

gElCanvas = document.querySelector('canvas')
gCtx = gElCanvas.getContext('2d')

function renderMeme() {
    const meme = getMeme()
    const memeImgUrl = getImgUrlById(meme.selectedImgId)
    drawImg(memeImgUrl)
}

function drawText() {
    const lines = getLines()
    lines.forEach(line => {
        const { txt, pos } = line
        gCtx.lineWidth = 2
        gCtx.fillStyle = line.color
        gCtx.font = `${line.size}px impact`
        gCtx.textAlign = line.align

        gCtx.fillText(txt, pos.x, pos.y)
        gCtx.strokeText(txt, pos.x, pos.y)
    })
}

function drawImg(img) {
    const elImg = new Image()
    elImg.src = img
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText()
    }
}

function isClickedText(line, pos) {
    const width = getLineWidth(line)
    const height = getLineHeight(line)

    return (
        pos.x > line.x - width / 2 &&
        pos.x < line.x + width / 2 &&
        pos.y > line.y - height / 2 &&
        pos.y < line.y + height / 2
    )
}

function getLineWidth({txt}) {
    const textMeasurements = gCtx.measureText(txt)
    return textMeasurements.width
}

function getLineHeight(line) {
    const { txt, size, font, align, bold, italic, x, y } = line
    gCtx.font = `${bold ? 'bold' : 'normal'} ${italic ? 'italic' : 'normal'
        } ${size}px ${font}`
    const textMeasurements = gCtx.measureText(txt)
    const height =
        textMeasurements.actualBoundingBoxAscent +
        textMeasurements.actualBoundingBoxDescent
    return height
}

function onTxtInput(elTxt) {
    setLineTxt(elTxt.value)
    renderMeme()
}

function onTxtColor(elColor) {
    setTxtColor(elColor.value)
    renderMeme()
}

function onChangeFontSize(direction) {
    setFontSize(direction)
    renderMeme()
}

function hideEditor() {
    document.querySelector('.editor-container').style.display = 'none'
}

function showEditor() {
    document.querySelector('.editor-container').style.display = ''
    document.querySelector('.txt-input').value = getSelectedLine().txt
    setMouseListeners(gElCanvas)
}



function resetEditor() {
    resetLines()
    document.querySelector('.txt-input').value = ''
}

function onSwitchLine() {
    switchLine()
    document.querySelector('.txt-input').value = getSelectedLine().txt
}

function getCtx(){
    return gCtx
}