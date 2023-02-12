const showNavibar = document.querySelectorAll(".button_Navibar")

showNavibar[0].onclick = () => {
    document.getElementById('home').style.display='block'
    document.getElementById('biografia').style.display='none'
    document.getElementById('campanha').style.display='none'
    document.getElementById('contato').style.display='none'
}

showNavibar[1].onclick = () => {
    document.getElementById('home').style.display='none'
    document.getElementById('biografia').style.display='block'
    document.getElementById('campanha').style.display='none'
    document.getElementById('contato').style.display='none'
}

showNavibar[2].onclick = () => {
    document.getElementById('home').style.display='none'
    document.getElementById('biografia').style.display='none'
    document.getElementById('campanha').style.display='block'
    document.getElementById('contato').style.display='none'
}

showNavibar[3].onclick = () => {
    document.getElementById('home').style.display='none'
    document.getElementById('biografia').style.display='none'
    document.getElementById('campanha').style.display='none'
    document.getElementById('contato').style.display='block'
}