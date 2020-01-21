new Vue({
    el: '#desafio',
    data: {
        nome: 'Vitor teste',
        idade: 25,
        imagem: 'deus-e-bom-o-tempo-todo.jpg',
        imagem2: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        multiplicarIdade : function(){
            return this.idade * 3;
        },
        random() {
            return Math.random()
        }
    }
})