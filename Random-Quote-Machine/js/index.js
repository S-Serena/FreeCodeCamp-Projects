var colors = ["#001f3f", "#FF4136", "#7FDBFF", "#B10DC9", "#AAAAAA", "#2ECC40", "#FFDC00", "#39CCCC", "#DDDDDD", "#7FDBFF", "#3D9970", "#85144b", "#FF851B", "#FFDC00", "#39CCCC"];

var quotes = [
    { text: 'Serena最好看', author: 'Serena' },
    { text: 'Serena最可爱', author: 'Serena' },
    { text: 'Serena最聪明', author: 'Serena' },
    { text: 'Serena最善良', author: 'Serena' },
    { text: 'Serena最勇敢', author: 'Serena' },
    { text: 'Serena最坚强', author: 'Serena'},
    { text: 'Serena是女汉纸', author: 'Serena'},
    { text: 'Serena是前端攻城狮', author: 'Serena'}
];

function getQuote() {
     var index = Math.floor(Math.random() * 10);
     for ( var i=0;i<quotes.length;i++) {
        if (i == index){
           $("#new-quote").  quotes[index];
        }
    }
}


$(document).ready(){
    $("#new-quote").on('click', getQuote());
}