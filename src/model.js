//user rabotaet tyt i vidsit result
import {Observable} from "./observer"
export class Model extends Observable
{
        constructor() {//() - tyt to chto prinimaet na vhod {} - a tyt to chto delaetsa
        super()
    }


    DoIt(obj, event, data) 
    {
        if(event == "Otpravit")
        {
            if (data != "") 
            {
                //add message into database

                const today = new Date();
                const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date+' '+time;
                
                let superdata = []
                superdata.push(dateTime)
                superdata.push(data)
                this.YaSkazalAVyDumaite("Pokazat'", superdata);
            }
        }
    }
}
   