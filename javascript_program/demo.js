function hi(){
    console.log("Hello");
}
hi()

function func(){
    console.log("Favorite Actor:"+factor);
    console.log("Favorite Player:"+fplayer);
    console.log("Favorite Movie:"+fmovie);
}

var factor="kamal"
var fplayer="dhoni"
var fmovie="rrr"
func()

function add(a,b){
    console.log(a+b)
}
add(10,20)

/*
RETURN TYPE
the return keyword is used within a function to specify the value that the function should producce as its result or return to the caller. when a function is exceuted and encounters a return statement , it immediately stops executing and return the specific value to the calling code. here how the return keyword works;*/

function myname()
{
    return "priya"
}
var a=myname()
console.log(a)


