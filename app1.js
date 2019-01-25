/*
    on run using: $ node app1
    it gives o/p like : you Blew it!!

    but for this : $ node app1 --user Rahul --greeting "good to see you"
        : Hello Rahul, good to see you.
*/

function grab(flag){
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if(!user || !greeting){
    console.log("you Blew it!!!");
}
else{
    console.log(`Hello ${user}, ${greeting}`)
}