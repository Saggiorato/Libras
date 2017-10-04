var appLibras = new Vue({
    el: "#appLibras",
    data: {
        Pronto: false,
        TotalImagensAlfabeto: 26,
        TotalBotoes: 3,
        ListaImagensAlfabeto: [
            {
                nome: "A",
                endereco: "img/alfabeto/a.jpg",
                id: 1
            },
            {
                nome: "B",
                endereco: "img/alfabeto/b.jpg",
                id: 2
            },
            {
                nome: "C",
                endereco: "img/alfabeto/c.jpg",
                id: 3
            },
            {
                nome: "D",
                endereco: "img/alfabeto/d.jpg",
                id: 4
            },
            {
                nome: "E",
                endereco: "img/alfabeto/e.jpg",
                id: 5
            },
            {
                nome: "F",
                endereco: "img/alfabeto/f.jpg",
                id: 6
            },
            {
                nome: "G",
                endereco: "img/alfabeto/g.jpg",
                id: 7
            },
            {
                nome: "H",
                endereco: "img/alfabeto/h.gif",
                id: 8
            },
            {
                nome: "I",
                endereco: "img/alfabeto/i.jpg",
                id: 9
            },
            {
                nome: "J",
                endereco: "img/alfabeto/j.gif",
                id: 10
            },
            {
                nome: "K",
                endereco: "img/alfabeto/k.gif",
                id: 11
            },
            {
                nome: "L",
                endereco: "img/alfabeto/l.jpg",
                id: 12
            },
            {
                nome: "M",
                endereco: "img/alfabeto/m.jpg",
                id: 13
            },
            {
                nome: "N",
                endereco: "img/alfabeto/n.jpg",
                id: 14
            },
            {
                nome: "O",
                endereco: "img/alfabeto/o.jpg",
                id: 15
            },
            {
                nome: "P",
                endereco: "img/alfabeto/p.gif",
                id: 16
            },
            {
                nome: "Q",
                endereco: "img/alfabeto/q.jpg",
                id: 17
            },
            {
                nome: "R",
                endereco: "img/alfabeto/r.jpg",
                id: 18
            },
            {
                nome: "S",
                endereco: "img/alfabeto/s.jpg",
                id: 19
            },
            {
                nome: "T",
                endereco: "img/alfabeto/t.jpg",
                id: 20
            },
            {
                nome: "U",
                endereco: "img/alfabeto/u.jpg",
                id: 21
            },
            {
                nome: "V",
                endereco: "img/alfabeto/v.jpg",
                id: 22
            },
            {
                nome: "W",
                endereco: "img/alfabeto/w.jpg",
                id: 23
            },
            {
                nome: "Y",
                endereco: "img/alfabeto/y.jpg",
                id: 24
            },
            {
                nome: "Z",
                endereco: "img/alfabeto/z.gif",
                id: 25
            },
            {
                nome: "X",
                endereco: "img/alfabeto/x.gif",
                id: 26
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
            var numeroAleatorioImagem = Math.floor((Math.random() * self.TotalImagensAlfabeto) + 1);

            while (numeroAleatorioImagem === self.IdImagemAtual) {
                numeroAleatorioImagem = Math.floor((Math.random() * self.TotalImagensAlfabeto) + 1);
            }

            var imagem = $.grep(self.ListaImagensAlfabeto, function (e) { return e.id == numeroAleatorioImagem; });

            self.DescricaoImagemAtual = imagem[0].nome;
            self.EnderecoImagemAtual = imagem[0].endereco;
            self.IdImagemAtual = imagem[0].id;

            //seleciona imagem errada um 
            var numeroAleatorioImagemErradaUm = Math.floor((Math.random() * self.TotalImagensAlfabeto) + 1);

            while (numeroAleatorioImagemErradaUm === numeroAleatorioImagem) {
                numeroAleatorioImagemErradaUm = Math.floor((Math.random() * self.TotalImagensAlfabeto) + 1);
            }

            var imagemErradaUm = $.grep(self.ListaImagensAlfabeto, function (e) { return e.id == numeroAleatorioImagemErradaUm; });

            //seleciona imagem errada dois 
            var numeroAleatorioImagemErradaDois = Math.floor((Math.random() * self.TotalImagensAlfabeto) + 1);

            while (numeroAleatorioImagemErradaDois === numeroAleatorioImagem || numeroAleatorioImagemErradaDois === numeroAleatorioImagemErradaUm) {
                numeroAleatorioImagemErradaDois = Math.floor((Math.random() * self.TotalImagensAlfabeto) + 1);
            }

            var imagemErradaDois = $.grep(self.ListaImagensAlfabeto, function (e) { return e.id == numeroAleatorioImagemErradaDois; });


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