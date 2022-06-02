document.querySelector(".openbtn").addEventListener('click', () => {
    document.getElementById("sidepanel").style.width = "50%";
})

document.querySelector(".closebtn").addEventListener('click', () => {
    document.getElementById("sidepanel").style.width = "0";
})

document.querySelector('#Visualization').addEventListener('click', () => { document.querySelector('#sidepanel').style.width = 0;});
