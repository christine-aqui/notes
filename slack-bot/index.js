const SlackBot = require('slackbots');
const axios = require('axios');

// initialize slackbot to create a bot
const bot = new SlackBot({
    token: '', // oOAuth & permissions... Bot uSer OAuth Access Token goes here
    name: 'jokeBot' // give it a name here
});

//  Start Handler
bot.on('start', () => {
    // on bot start, display a message or icon
    const params = {
        icon_emoji: ':smiley:' // slack emoji dp-icon
    }
    //  this takes 3 args, the channel that you are posting to, the message and params we created.
    bot.postMessageToChannel(
        'general',
        'Get Ready to smile',
        params);
});

// Error Handler
// this is done in a single line because its only doing/retuning one thing...
bot.on('error', (err) => console.log(err));

// Message Handler
bot.on('message', (data) => {
    // make sure thatt he data type is a message
    if (data.type !== 'message') {
        // if type is not a message then return
        return;
    }
    // if it is a message type then log it
    console.log(data);
    handleMessage(data.text);
});

// respons to data
// make this a switch statment
function handleMessage(message) {
    if (message.includes(' chucknorris')) {
        chuckJoke();
    } else if (message.includes(' yomama')) {
        yoMamaJoke();
    } else if (message.includes(' random')) {
        randomJoke();
    } else if (message.includes(' help')) {
        runHelp();
    }
};

// tell a chuck norrise joke
function chuckJoke() {
    // axios get request that gives a promise.
    axios.get('http://api.icndb.com/jokes/random').then(res => {
        const joke = res.data.value.joke;
        const params = {
            icon_emoji: ':laughing:'
        };
        bot.postMessageToChannel(
            'general',
            `Chuck Norris: ${joke}`,
            params);
    });
};

// Tell a Yo Mama Joke
function yoMamaJoke() {
    // axios get request that gives a promise.
    axios.get('http://api.yomomma.info').then(res => {
        const joke = res.data.joke;
        const params = {
            icon_emoji: ':laughing:'
        };
        bot.postMessageToChannel(
            'general',
            `Yo Mama: ${joke}`,
            params);
    });
};
// Tell a Random Joke
function randomJoke() {
    const rand = Math.floor(Math.random() * 2) + 1;
    // make this a ternary statment.
    (rand === 1) ? chuckJoke() : (rand === 2) ? yoMamaJoke() : console.log('error');
}

// Show Help Text
function runHelp() {
    const params = {
        icon_emoji: ':question:'
    };
    bot.postMessageToChannel(
        'general',
        `Type @jokebot with either 'chucknorris', 'yomama' or 'random' to get a joke`,
        params
    );
}