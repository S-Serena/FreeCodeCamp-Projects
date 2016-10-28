var colors = ["#001f3f", "#FF4136", "#7FDBFF", "#B10DC9", "#2ECC40", "#FFDC00", "#39CCCC", "#7FDBFF", "#3D9970", "#85144b", "#FF851B", "#FFDC00", "#39CCCC"];

var quotes = [
    {text: 'Serena最好看', author: 'Royce'},
    {text: 'Serena最可爱,么么哒', author: 'Serena'},
    {text: '他强由他强，清风拂山冈；他横任他横，明月照大江。', author: '金庸'},
    {text: '慧极必伤，情深不寿，强极则辱，谦谦君子，温润如玉。', author: '《书剑恩仇录》'},
    {text: 'Serena is my lovely baby!', author: '麻麻'},
    {text: '各有因缘莫羡人。', author: '金庸《笑傲江湖》'},
    {text: 'Serena喜欢靖哥哥', author: '靖哥哥你听见了么'},
    {text: 'Serena是前端攻城狮', author: 'Serena'},
    {text: 'Life is what happens to you while you’re working for your future.', author: 'Anonymous'},
    {
        text: 'I love my past. I love my present. I’m not ashamed of what I’ve had, and I’m not sad because I have it no longer.',
        author: 'sabi'
    },
    {text: '君往我亦往，白首不相离', author: '黄蓉 致 郭靖'},
    {text: '红颜弹指老，刹那芳华，与其天涯思君，恋恋不舍，莫若相忘于江湖.', author: '金庸'},
    {
        text: '靖哥哥，我死后你要答应我三件事：一，我允许你为我难过一阵子，但不允许你永远为我难过。 二，我允许你再找一个妻子，但她必须是华筝，因为她真心爱你。 三，我允许你来拜祭我，但不能带着华筝来，因为我毕竟还是很小气.',
        author: '蓉儿'
    }

];

function getQuote() {
    var index = Math.floor(Math.random() * quotes.length);
    var newQuote = quotes[index];
    $("#motto").html('<span>' + newQuote.text + '</span>');
    $("#author").html('<span>' + '-' + newQuote.author + '</span>');
    $('.changeBackgroundColor').css('background-color', colors[index]);
    $('.changeColor').css('color', colors[index]);
}

$(document).ready(function () {
    $("#new-quote").on('click', getQuote);
    getQuote();
});
