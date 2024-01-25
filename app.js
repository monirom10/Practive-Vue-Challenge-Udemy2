const app = Vue.createApp({
    data(){
        return{
            inputValue1: '',
            outputValue1: '',
            inputValue2: '',
            outputValue2: '',
        }
    },
    methods: {
        alert(){
            alert("Hellow world!")
        },
        handleInput(event){
            this.outputValue1 = event.target.value;
        },
        handleEnter(){
            this.outputValue2 = this.inputValue2;
        }

    },
});

app.mount("#container");