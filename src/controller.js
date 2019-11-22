//user rabotaet tyt i vidsit result
import {Observable} from "./observer"
export class Controller extends Observable
{
        constructor() {//() - tyt to chto prinimaet na vhod {} - a tyt to chto delaetsa
        super()
    }


    DoIt(obj, event, data) 
    {
        if(event == "Send button click")
        {
            //tut logic
            this.YaSkazalAVyDumaite("Otpravit", data);
        }
    }
}
   