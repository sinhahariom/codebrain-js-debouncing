var counter = 0;

const keyUpCall = () => {
  counter += 1;
  console.log("New Text Entered..." + counter);
};


const debounceLayer = (delay)=>{
    console.log('sdfds');
    var timer;
    return function (){
        console.log('sdfsd');
        clearTimeout(timer);
        timer = setTimeout(()=>{
            keyUpCall.apply(this,arguments);
        },delay);
    }
}

const callMe = debounceLayer(300);