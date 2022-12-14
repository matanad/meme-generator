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
    document.querySelector('.serch-area').style.display = 'none'
    document.querySelector('.image-gallery').style.display = 'none'
}