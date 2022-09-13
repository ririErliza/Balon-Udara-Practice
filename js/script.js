const balloon = document.getElementById('balloon');
const gift = document.getElementById('gift');

function animate() {
    balloon
    .velocity({
        top: '10px',
        left:'40%',
        transform:["rotate(0deg)", "rotate(10deg)"]
    },{
        duration: 7000,
    }
    )


    gift
    .velocity({
        opacity: 1,
    },{
        delay: 7000,
        duration: 1000,
    })
    .velocity({
        top: 500,
    },{
        delay: 7000,
        duration: 12000,
    })
 
    
    
}

animate()