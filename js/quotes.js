const quotes = [
    {
        quote: '그래도 지구는 돈다',
        author:'Galileo Galilei'
    },
    {
        quote:'나는 생각한다 고로 나는 존재한다',
        author:'Descartes',
    },
    {
        quote:'내 사전에 불가능이란 단어는 없다',
        author:'Napoléon I',
    },
    {
        quote:'달리는 기차 위에 중립은 없다',
        author:'Howard Zinn',
    },
    {
        quote:'닭의 목을 비틀어도 새벽은 온다',
        author:'YS',
    },
    {
        quote:'왔노라, 보았노라, 이겼노라',
        author:'Julius Caesar',
    },
    {
        quote:'시작은 미약하였으나 끝은 창대하리라',
        author:'Bible',
    },
    {
        quote:'이것 또한 지나가리라',
        author:'Unknown',
    },
    {
        quote:'죄는 미워하되 사람은 미워하지 말라',
        author:'Hipponensis',
    },
    {
        quote:'소년이여, 야망을 가져라',
        author:'William Smith Clark',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');


//we want to get random num 0 to 9

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; //Math.random() ->  0~1 random num

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;