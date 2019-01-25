var questions = [
    "what is your name?",
    "what is your fav hobby?",
    "what is your preferred programming language?"
];

var answer = [];

function ask(i){
    process.stdout.write(`\n${questions[i]}`);
    process.stdout.write(' > ');
}

process.stdin.on('data',function(data){
    answer.push(data.toString().trim());
    if(answer.length < questions.length){
        ask(answer.length);
    }
    else{
        process.exit();
    }
});

process.on('exit',function(){
    process.stdout.write(`${answer[0]} ${answer[2]} ${answer[2]}`)
});

ask(0);