const home = require('google-home-notifier');

const argv = process.argv;
const defaultText = argv[2] || 'Bing is a web search engine owned and operated by Microsoft.';
const defaultLang = argv[3] || 'en';
const device = argv[4] || '';

const notify = (text = defaultText, lang = defaultLang) => {
    home.device(device, lang);
    home.notify(text, (res) => {
        console.log('Said ' + text);
    });
}

module.exports.say = notify;