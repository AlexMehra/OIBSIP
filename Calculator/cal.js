//const { Launch } = require("@material-ui/icons");

let buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id== 'clear')
        {
            display.innerText='';
        }else if (item.id=='backspace'){
            let string =display.innerText.toString();
            display.innerText=string.substr(0,string.length);
        }
        else if(display.innerText!='' && item.id=='equal'){
              display.innerText=eval(display.innerText);
        }
        else if(display.innerText=='' && item.id=='equal'){
              display.innerText = 'Empty!';
              setTimeout(()=>(display.innerText=''),2000);
        }
        else if(item.id=='del'){
            let string =display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        }
        // else if(item.id=='equal'+item.id=='.'){

        // }
        else{
            display.innerText += item.id;
        }
    }
})

