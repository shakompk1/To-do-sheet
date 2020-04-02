let container = document.querySelector('.readyToDoList');
let pointscheck = container.querySelector('.pointscheck');
pointscheck.addEventListener('mousedown', handleMouseDown);
const shift = {};

function handleMouseDown(e) {
    container.style.position = 'absolute';
    container.style.backgroundColor = "#FFDC40"
    console.log('handleMouseDown')
    const rect = container.getBoundingClientRect() ;
    shift.y = e.pageY - rect.top + 10 ;
    document.addEventListener('mousemove', handleMouseMove) ;
    document.addEventListener('mouseup', handleMouseUp) ;
    //container.className = 'shadow' ;
    container.style.top = rect.top + 'px' ;
}

function handleMouseMove(e) {
    console.log('handleMouseMove')
    container.style.top = (e.pageY - shift.y) + 'px';
}

function handleMouseUp(e) {
    console.log(e.srcElement.parentNode)
    document.removeEventListener('mousemove', handleMouseMove) ;
    document.removeEventListener('mouseup', handleMouseUp) ;
    //container.className = '' ;
    container.style.position = 'static';
    container.style.backgroundColor = "white"
    const rect = container.getBoundingClientRect() ;
    container.style.top = (rect.top + 10) + 'px' ;
}

