var numberOfButton = document.querySelectorAll(".drum").length;
for(i=0; i<numberOfButton; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
console.log(this.innerHTML)
var buttonInnerHTML = this.innerHTML
playSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}
 //detecting keypress
document.addEventListener('keypress', function(event){
    playSound(event.key);
});

function playSound(key){
     switch (key) {
        case "w":
            var tom1 = new Audio("tom-1.mp3")
    tom1.play();
            break;
    
            case "a":
                var tom2 = new Audio("tom-2.mp3")
        tom2.play();
                break;
    
                case "s":
                    var tom3 = new Audio("tom-3.mp3")
            tom3.play();
                    break;
    
                    case "d":
            var tom4 = new Audio("tom-4.mp3")
                tom4.play();
                        break;
    
                        case "j":
             var tom5 = new Audio("tom-5.mp3")
                    tom5.play();
                            break;
    
                            case "k":
                               var tom6 = new Audio("tom-6.mp3")
                        tom6.play();
                                break;
    
                                case "l":
            var tom7 = new Audio("tom-7.mp3")
                            tom7.play();
                                    break;
                            
        default:console.log(buttonInnerHTML)
               }
       }
function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
setTimeout(function()  {
        activeButton.classList.remove("pressed");
}, 100);
}


    

    



