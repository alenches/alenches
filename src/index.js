import {View} from "./view"
import {Controller} from "./controller"
import {Model} from "./model"
//document.body.appendChild(component());


window.addEventListener 
(
    "DOMContentLoaded", //dom - document upload, 
    function(){
      const view = new View();
      const conrt = new Controller();
      const modelka = new Model();

      view.Add_Observer(conrt);
      conrt.Add_Observer(modelka);
      modelka.Add_Observer(view);
    }

 
)