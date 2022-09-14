const balloon = document.getElementById('balloon');
const gift = document.getElementById('gift');
const canvas = document.getElementById('canvas');
const clouds = document.getElementById('clouds');
const totalClouds = 150;

//random number between min and max
function random (min, max) {
    return Math.floor(Math.random() * (max-min +1)) +min;
}


function setClouds(){
    for (let i = 1; i <= totalClouds; i++){
        let cloud = document.createElement('div');
        cloud.id = 'cloud'+i;
        cloud.classList.add('cloud' + random(1,6));
        clouds.appendChild(cloud);

        //clouds position
        cloud.style.left = random(-50, -window.innerWidth*1.5) + 'px';
        cloud.style.top = random(0, window.innerHeight) + 'px';
        cloud.style.zIndex = random(1,10);
        
    }
}

function setBackground(){
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight * 2 + 'px';
    canvas.style.top = -window.innerHeight  + 'px';
    
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
        left:'-300px',
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

    canvas
    .velocity({
        top: '0',
    },{
        queue: false,
        duration: 7000,
    })

    for (let i = 1; i <= totalClouds; i++){

        let duration = Math.abs(parseInt(document.getElementById('cloud'+i).style.left)/100)*3000;

        console.log(duration)

        if (duration < 10000){
            duration = random(20000, 45000)
        }

        document.getElementById('cloud'+i)
        .velocity({
            left: window.innerWidth,
        },{
            duration: duration,
        
        })
    

    }
    
}


setClouds();
setBackground();
animate();
