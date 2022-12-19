'use strict'

let gIsDragging
let gStartPos

function mosuseDown(ev) {
    gStartPos = getEvPos(ev)
    const lines = getLines()
    gIsDragging = false
    lines.forEach((line, idx) => {
        if (isLineClicked(line, gStartPos)) {
            setSelectedLineIdx(idx)
            gIsDragging = true
        }
    })
}

function mouseMove(ev) {
    if (!gIsDragging) return
    const mousePos = getEvPos(ev)
    moveLine(mousePos, gStartPos)
    gStartPos = mousePos
    renderMeme()
}

function mouseUp() {
    gIsDragging = false
}

function setMouseListeners(el) {
    el.addEventListener('mousedown', mosuseDown)
    el.addEventListener('mousemove', mouseMove)
    el.addEventListener('mouseup', mouseUp)
}