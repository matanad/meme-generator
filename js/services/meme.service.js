'use strict'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gImgs = [{ id: 1, url: './img/meme-imgs/1.jpg', keywords: ['funny', 'trump'] },
{ id: 2, url: './img/meme-imgs/2.jpg', keywords: ['cute', 'puppy', 'dog'] },
{ id: 3, url: './img/meme-imgs/3.jpg', keywords: ['cute', 'baby', 'dog', 'puppy'] },
{ id: 4, url: './img/meme-imgs/4.jpg', keywords: ['funny', 'trump'] },
{ id: 5, url: './img/meme-imgs/5.jpg', keywords: ['cute', 'baby'] },
{ id: 6, url: './img/meme-imgs/6.jpg', keywords: ['cute', 'baby'] },
{ id: 7, url: './img/meme-imgs/7.jpg', keywords: ['cute', 'baby'] },
{ id: 8, url: './img/meme-imgs/8.jpg', keywords: ['cute', 'baby'] },
{ id: 9, url: './img/meme-imgs/9.jpg', keywords: ['cute', 'baby'] },
{ id: 10, url: './img/meme-imgs/10.jpg', keywords: ['cute', 'baby'] },
{ id: 11, url: './img/meme-imgs/11.jpg', keywords: ['cute', 'baby'] },
{ id: 12, url: './img/meme-imgs/12.jpg', keywords: ['cute', 'baby'] },
{ id: 13, url: './img/meme-imgs/13.jpg', keywords: ['cute', 'baby'] },
{ id: 16, url: './img/meme-imgs/16.jpg', keywords: ['cute', 'baby'] },
{ id: 17, url: './img/meme-imgs/17.jpg', keywords: ['cute', 'baby'] },
{ id: 18, url: './img/meme-imgs/18.jpg', keywords: ['cute', 'baby'] },
];

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            align: 'left',
            color: 'red',
            pos: {
                x: 10,
                y: 50
            }
        },
        {
            txt: 'I sometimes eat Humus',
            size: 40,
            align: 'left',
            color: 'red',
            pos: {
                x: 10,
                y: 400
            }
        }
    ]
}

function resetLines() {
    setSelectedLineIdx(0)
    gMeme.lines = [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            align: 'left',
            color: 'red',
            pos: {
                x: 10,
                y: 50
            }
        },
        {
            txt: 'I sometimes eat Humus',
            size: 40,
            align: 'left',
            color: 'red',
            pos: {
                x: 10,
                y: 400
            }
        }
    ]
}


function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function moveLine(mousePos, startPos) {
    const linePos = getSelectedLine().pos
    linePos.x += mousePos.x - startPos.x
    linePos.y += mousePos.y - startPos.y
}

//Check if the click is inside the txt 
function isLineClicked(line, clickedPos) {
    let isClicked = false
    const { txt, size, pos: linePos } = line
    const { width } = getCtx().measureText(txt)
    isClicked = (clickedPos.x >= linePos.x && clickedPos.x <= linePos.x + width &&
        clickedPos.y >= linePos.y - size && clickedPos.y <= linePos.y)
    return isClicked
}

// SETTERS

function setLineDrag(isDrag) {
    const line = getSelectedLine()
    line.isDrag = isDrag
}

function setSelectedLineIdx(idx) {
    gMeme.selectedLineIdx = idx
}

function setLinePos({ x, y }) {
    const linePos = getSelectedLine().pos
    linePos.x = x
    linePos.y = y
}

function setLineTxt(txt) {
    const line = getSelectedLine()
    line.txt = txt
}

function setTxtColor(color) {
    const line = getSelectedLine()
    line.color = color
}

function setFontSize(direction) {
    const line = getSelectedLine()
    line.size += direction * 5
}

function setSelectedImg(id) {
    gMeme.selectedImgId = +id
}

// GETTERS

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getImgUrlById(imgId) {
    const img = gImgs.find(img => img.id === +imgId)
    return img.url
}

function getimgs() {
    return gImgs
}

function getLines() {
    return gMeme.lines
}

function getMeme() {
    return gMeme
}