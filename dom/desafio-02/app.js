new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('alerta sendo exibido');
        },
        alterarValor(e){
            this.valor = e.target.value;
        }
    }
})