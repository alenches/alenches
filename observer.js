class Observable 
{
    constructor() 
    {
        this.observers = []; //sozdali massive nabludateley
    }
    
    Add_Observer(obj)
    {
        this.observers.push(obj)
    }

    Remove_Observer(obj)
    {
        this.observers.splice(this.observers.indexOf(obj));
    }

    YaSkazalAVyDumaite(e, data) 
    {
        for (var i = 0; i < this.observers.length; i++) 
        {
            this.observers[i].DoIt(this, e, data); 
        }
    }
}