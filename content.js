
const interval = setInterval( () => {
    const header = document.querySelector("._1QUKR")

    if(header){
        clearInterval(interval)


        const button = document.createElement("button")
        button.innerHTML = "2X"
        button.classList.add("twoTimesButton")

        header.appendChild(button)

        button.onclick = function(){
            const audios = document.querySelectorAll('audio')

        
            audios.forEach( (audio) => {
                if(audio.playbackRate == undefined || audio.playbackRate == "1"){
                    audio.playbackRate = "2"
                }else{
                    audio.playbackRate = "1"
                }

        })
        }
    }
},1000) 

