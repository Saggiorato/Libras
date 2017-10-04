var appLibras = new Vue({
    el: "#appLibras",
    data: {
        Pronto: false,
        TotalImagensNumeros: 10,
        TotalBotoes: 3,
        ListaImagensNumeros: [
            {
                nome: "0",
                endereco: "img/numeros/0.jpg",
                id: 1
            },
            {
                nome: "1",
                endereco: "img/numeros/1.jpg",
                id: 2
            },
            {
                nome: "2",
                endereco: "img/numeros/2.jpg",
                id: 3
            },
            {
                nome: "3",
                endereco: "img/numeros/3.jpg",
                id: 4
            },
            {
                nome: "4",
                endereco: "img/numeros/4.jpg",
                id: 5
            },
            {
                nome: "5",
                endereco: "img/numeros/5.jpg",
                id: 6
            },
            {
                nome: "6",
                endereco: "img/numeros/6.jpg",
                id: 7
            },
            {
                nome: "7",
                endereco: "img/numeros/7.jpg",
                id: 8
            },
            {
                nome: "8",
                endereco: "img/numeros/8.jpg",
                id: 9
            },
            {
                nome: "9",
                endereco: "img/numeros/9.jpg",
                id: 10
            }

        ],
        //imagem correta
        DescricaoImagemAtual: "",
        EnderecoImagemAtual: "",
        IdImagemAtual: "",
        UltimaImagemId: 0,
        //botoes
        BotaoUmDescricao: "",
        BotaoDoisDescricao: "",
        BotaoTresDescricao: "",

        //correcao
        BotaoCorreto: 0,
        Acertou: false,
        Errou: false,
    },
    methods: {
        PegarImagem: function () {
            var self = this;

            //resetando cores

            $(".btn").removeAttr("Style");

            //seleciona imagem correta aleatoriamente
            var numeroAleatorioImagem = Math.floor((Math.random() * self.TotalImagensNumeros) + 1);

            while (numeroAleatorioImagem === self.IdImagemAtual) {
                numeroAleatorioImagem = Math.floor((Math.random() * self.TotalImagensNumeros) + 1);
            }

            var imagem = $.grep(self.ListaImagensNumeros, function (e) { return e.id == numeroAleatorioImagem; });

            self.DescricaoImagemAtual = imagem[0].nome;
            self.EnderecoImagemAtual = imagem[0].endereco;
            self.IdImagemAtual = imagem[0].id;

            //seleciona imagem errada um 
            var numeroAleatorioImagemErradaUm = Math.floor((Math.random() * self.TotalImagensNumeros) + 1);

            while (numeroAleatorioImagemErradaUm === numeroAleatorioImagem) {
                numeroAleatorioImagemErradaUm = Math.floor((Math.random() * self.TotalImagensNumeros) + 1);
            }

            var imagemErradaUm = $.grep(self.ListaImagensNumeros, function (e) { return e.id == numeroAleatorioImagemErradaUm; });

            //seleciona imagem errada dois 
            var numeroAleatorioImagemErradaDois = Math.floor((Math.random() * self.TotalImagensNumeros) + 1);

            while (numeroAleatorioImagemErradaDois === numeroAleatorioImagem || numeroAleatorioImagemErradaDois === numeroAleatorioImagemErradaUm) {
                numeroAleatorioImagemErradaDois = Math.floor((Math.random() * self.TotalImagensNumeros) + 1);
            }

            var imagemErradaDois = $.grep(self.ListaImagensNumeros, function (e) { return e.id == numeroAleatorioImagemErradaDois; });


            //coloca resposta num botao aleatorio
            var numeroAleatorioBotaoCorreto = Math.floor((Math.random() * 3) + 1);

            if (numeroAleatorioBotaoCorreto == 1) {
                self.BotaoCorreto = 1;
                self.BotaoUmDescricao = self.DescricaoImagemAtual;

                self.BotaoDoisDescricao = imagemErradaUm[0].nome;
                self.BotaoTresDescricao = imagemErradaDois[0].nome;
            }
            else if (numeroAleatorioBotaoCorreto == 2) {
                self.BotaoCorreto = 2;
                self.BotaoDoisDescricao = self.DescricaoImagemAtual;

                self.BotaoUmDescricao = imagemErradaUm[0].nome;
                self.BotaoTresDescricao = imagemErradaDois[0].nome;
            }
            else if (numeroAleatorioBotaoCorreto == 3) {
                self.BotaoCorreto = 3;
                self.BotaoTresDescricao = self.DescricaoImagemAtual;

                self.BotaoUmDescricao = imagemErradaUm[0].nome;
                self.BotaoDoisDescricao = imagemErradaDois[0].nome;
            }

            self.LimparErroAcerto();

            $(".btn").css({ backgroundColor: '#3498d' })
        },
        ApertoBotao: function (botaoNumero) {
            var self = this;

            if (botaoNumero === self.BotaoCorreto) {
                self.Errou = false;
                self.Acertou = true;
                $("#" + botaoNumero).css("background-color", "#9ACD32");

                setTimeout(function () {
                    self.PegarImagem()
                }, 1000);

            } else {
                self.Acertou = false;
                self.Errou = true;
                $("#" + botaoNumero).css("background-color", "#CD5C5C");
                setTimeout(function () {
                    self.LimparErroAcerto()
                }, 2000);

            }
        },
        LimparErroAcerto: function () {
            var self = this;

            self.Errou = false;
            self.Acertou = false;
        }

    },
    created: function () {
        var self = this;

        self.PegarImagem();
    },
    mounted: function () {
        var self = this;

        self.Pronto = true;
    }
})