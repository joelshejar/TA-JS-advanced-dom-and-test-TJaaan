let fills = document.querySelectorAll("fill")
let empties = document.querySelectorAll("empty")
let required
fills.forEach((elm) => {
    elm.addEventListener('dragstart', (e) => {
        dragStart(elm,e)
    })
    required = elm
    console.log(elm.dataset.id)
})

empties.forEach((elm) => {
    elm.addEventListener('dragenter', (e)=>{
        dragEnter(elm,e)
    })
    elm.addEventListener('dragover', (e)=>{
        dragOver(elm,e)
    })
    elm.addEventListener('dragdrop', (e)=>{
        dragDrop(elm,e)
    })
})

function dragStart(elm){
    console.log('ddd')
}
function dragOver(elm){
    e.preventDefault()
}
function dragEnter(elm){
    console.log(dragenter)
    
}
function dragDrop(elm){
    if(elm.datset.id == required.dataset.id)
    {
        console.log('dragdrop')
        elm.classList.remove('empty')
        elm.classList.add('fill')
        required.classList.add('hide')
        required = ''

    }
}


























