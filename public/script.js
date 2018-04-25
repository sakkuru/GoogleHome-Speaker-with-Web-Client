import axios from 'axios';
new Vue({
    el: '#app',
    data: {
        form: {
            formName: 'Local Google Home Speaker',
            language: 'en',
            text: 'Bing is a web search engine owned and operated by Microsoft.'
        },
        showSubmitFeedback: false
    },
    methods: {
        fakeSubmit() {
            this.showSubmitFeedback = true;

            axios.get("https://yesno.wtf/api").then((r) => {
                this.b = r.data.image
            });

            setTimeout(() => {
                this.showSubmitFeedback = false;
            }, 3000);
        }
    }
});