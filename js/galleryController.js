'use strict'

function renderGallery() {
    const strHtml = getimgs().map(img => {
        return `
        <img src="${img.url}" alt="" onClick="onImgSelect(${img.id})" data-id='${img.id}'>
        `
    })
    .join('')
    document.querySelector('.image-gallery').innerHTML = strHtml
}

function onImgSelect(imgId) {
    setSelectedImg(imgId)
    hideGallery()
    showEditor()
    renderMeme()
}

function hideGallery() {
    document.querySelector('.gallery-container').style.display = 'none'
    document.querySelector('.gallery-btn').classList.remove('active')
}

function showGallery(){
    document.querySelector('.gallery-container').style.display = ''
    document.querySelector('.gallery-btn').classList.add('active')

}