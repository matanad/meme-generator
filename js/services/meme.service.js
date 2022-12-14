'use strict'

let gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

let gImgs = [{id: 5, url: './img/meme-imgs/5.jpg', keywords: ['cute', 'baby']}, {id: 1, url: './img/meme-imgs/1.jpg', keywords: ['funny', 'trump']}];
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 40,
            align: 'left',
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(txt){
    gMeme.lines = [
        {
            txt: txt,
            size: 40,
            align: 'left',
            color: 'red'
        }
    ]
}

function getImgUrlById(imgId){
    const img =  gImgs.find(img => img.id === +imgId)
    return img.url
}

function getimgs(){
    return gImgs
}

function setSelectedImg(id){
    gMeme.selectedImgId = +id
}