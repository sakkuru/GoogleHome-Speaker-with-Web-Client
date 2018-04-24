const home = require('google-home-notifier');

const argv = process.argv;
const text = argv[2] || 'Bing is a web search engine owned and operated by Microsoft.';
const lang = argv[3] || 'en';
const device = argv[4] || '';

home.device(device, lang);
home.notify(text, (res) => {
    console.log('Said ' + text);
});