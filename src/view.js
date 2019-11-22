//user rabotaet tyt i vidsit result
import {Observable} from "./observer"
export class View extends Observable
{
        constructor(){//() - tyt to chto prinimaet na vhod {} - a tyt to chto delaetsa
        super() //vyzvaly constructor roditelya

        const Otpravit = document.getElementById("button");
        this.textBox = document.getElementById("texting");
        this.messages = document.getElementById("mess");

        Otpravit.addEventListener("click", function(event) {
            this.YaSkazalAVyDumaite("Send button click", this.textBox.value);
            }.bind(this)
        )
        this.textBox.addEventListener("keyup",function(event) {
                if (event.keyCode==13){
                    this.YaSkazalAVyDumaite("Send button click", this.textBox.value);
                }
            }.bind(this)
        )
    }

    DoIt(obj, event, data) 
    {
        if(event == "Pokazat'")
        {
          this.drawMessageIntoview(data)
        }
    }

    drawMessageIntoview(data)
    {
        this.textBox.value = "";
        const bubble = document.createElement('div')
        bubble.className = "bubble"


        const content = document.createElement('div')
        content.className = "textInMessage"


        const info = document.createElement('div')
        info.className = "aboutMessage"


        content.innerHTML = data[1]
        info.innerHTML = data[0]


        bubble.appendChild(content);
        bubble.appendChild(info);

        this.messages.appendChild(bubble);

        let interval = this.messages.scrollHeight
        this.messages.scrollTop = interval
    }
}