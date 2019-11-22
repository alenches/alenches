const delay = 1000;


function a() {
    var args = arguments;
    for (var i =  0; i < args.length; i++) {
        (function () {
            var b = args[i];
            timerId = setTimeout(function(){
                console.log(b)
            
            }, delay*i);
        } ())
    }
}

a(1, 2, 3);

