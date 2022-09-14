const balloon = document.getElementById('balloon');
const gift = document.getElementById('gift');
const canvas = document.getElementById('canvas');

function setBackground(){
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    
}

function animate() {
    balloon
    .velocity({
        top: '0px',
        left:'45%',
        transform:["rotate(0deg)", "rotate(10deg)"]
    },{
        duration: 7000,
    }
    )
    .velocity({
        left:'40%',
    },{
        duration: 7000,
    }
    )
    .velocity({
        left:'-500px',
        transform:["rotate(0deg)", "rotate(0deg)"]
    },{
        duration: 15000,
    }
    )


    gift
    .velocity({
        opacity: 1,
    },{
        delay: 13000,
        duration: 1000,
    })
    .velocity({
        top: window.innerHeight + 100,
    },{
        queue: false,
        delay: 13000,
        duration: 9000,
    })
 
    
}



animate()