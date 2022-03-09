function Animal_Function() {
    var Animal_Output;
    var Colors = document.getElementById("Animal_Input").value;
    var Color_String = " is a beautiful animal!";
    switch (Colors) {
        case "Tiger":
            Animal_Output = "A tiger" + Color_String;
            break;
        case "Elephant":
            Animal_Output = "An elephant" + Color_String;
            break;
        case "Giraffe":
            Animal_Output = "A giraffe" + Color_String;
            break;
        case "Zebra":
            Animal_Output = "A zebra" + Color_String;
            break;
        case "House Cat":
            Animal_Output = "A house cat" + Color_String;
            break;
        case "Dog":
            Animal_Output = "A dog" + Color_String;
            break;
            default:
            Animal_Output = "Please type exactly as written above.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Change");
    A[1].innerHTML = "I'm a liar!'";
}

var cat = document.getElementById("My_Cat");
var txt = cat.getContext("2d");
txt.font = "100px Arial";
txt.strokeText("I love my cat", 70, 180);


var c = document.getElementById("my_Gradient");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 5, 200, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(1, 1, 500, 298);







