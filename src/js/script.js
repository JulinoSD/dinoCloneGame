const dino = document.querySelector('.dino')
let isJumping = false
function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if(!isJumping){
            jump()
        }
        console.log('Pressionou espaço')
    }
}

function jump() {
    let position = 0
    isJumping = true
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)

            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval)
                    isJumping = false
                } else {

                    position -= 20
                    dino.style.bottom = position + 'px'
                }
            }, 20)
        } else {
            //subindo
            position += 20
            dino.style.bottom = position + 'px'
        }
    }, 20)
}
document.addEventListener('keyup', handleKeyUp)