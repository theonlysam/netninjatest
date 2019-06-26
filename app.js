new Vue({
    el: '#vue-app',
    data: {
        age: '',
        name:''
        
        
    },
    methods: {
        logName(){
            console.log('You entered your name')
        },
        logAge(){
            console.log('You entered your age')
        }
    }
});