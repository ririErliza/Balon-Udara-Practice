const balloon = document.getElementById('balloon');
const gift = document.getElementById('gift');

function animate() {
    balloon
    .velocity({
        left:'-500px',
        
    },{
        duration: 17000,
    }
    )


    gift
    .velocity({
        opacity: 1,
    },{
        delay: 4000,
        duration: 1000,
    })
    .velocity({
        top: window.innerHeight + 100,
    },{
        queue: false,
        delay: 4000,
        duration: 9000,
    })
 
    
}



animate()