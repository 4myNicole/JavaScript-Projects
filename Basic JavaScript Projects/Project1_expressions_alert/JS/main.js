window.alert("Hello, World!");

document.write("Hello, World!");

var A = "Cats are Awesome!";
document.write(A);

window.alert(A);

document.write("I\'ve got a lovely bunch of coconuts!");

document.write("This is a sentence"
    + " This is another sentence"
    + " And a third");


var B = "concatenated" + " String";
var B = B.fontcolor("red");
document.write(B);

var Family = "The Smiths", Dad = "Callum", Mum = "Amy", Daughter = "Luna", Son= "Archie";

document.write(Dad); //This writes 'Callum'

document.write(10+20);

function This_is_a_function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("green_text").innerHTML = result;
    }
