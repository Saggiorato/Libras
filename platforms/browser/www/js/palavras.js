var appLibras = new Vue({
    el: "#appLibras",
    data: {
        Pronto: false,
        TotalImagensPalavras: 42,
        TotalBotoes: 3,
        ListaImagensPalavras: [
            {
                nome: "Amanh\u00e3",
                endereco: "img/palavras/amanha.gif",
                id: 1
            },
            {
                nome: "Antes",
                endereco: "img/palavras/antes.gif",
                id: 2
            },
            {
                nome: "Aten\u00c7\u00e3o",
                endereco: "img/palavras/atencao.jpg",
                id: 3
            },
            {
                nome: "Como",
                endereco: "img/palavras/como.gif",
                id: 4
            },
            {
                nome: "Novamente",
                endereco: "img/palavras/de_novo.gif",
                id: 5
            },
            {
                nome: "Depois",
                endereco: "img/palavras/depois.gif",
                id: 6
            },
            {
                nome: "Desculpe",
                endereco: "img/palavras/desculpe.jpg",
                id: 7
            },
            {
                nome: "Ela/Ele",
                endereco: "img/palavras/ela_ele.jpg",
                id: 8
            },
            {
                nome: "Eu",
                endereco: "img/palavras/eu.jpg",
                id: 9
            },
            {
                nome: "Homem",
                endereco: "img/palavras/homem.gif",
                id: 10
            },
            {
                nome: "Mais",
                endereco: "img/palavras/mais.gif",
                id: 11
            },
            {
                nome: "Mas",
                endereco: "img/palavras/mas.gif",
                id: 12
            },
            {
                nome: "Mulher",
                endereco: "img/palavras/mulher.gif",
                id: 13
            },
            {
                nome: "N\u00d3s",
                endereco: "img/palavras/nos.gif",
                id: 14
            },
            {
                nome: "Ontem",
                endereco: "img/palavras/ontem.gif",
                id: 15
            },
            {
                nome: "Por que",
                endereco: "img/palavras/pq.gif",
                id: 16
            },
            {
                nome: "Que",
                endereco: "img/palavras/que.jpg",
                id: 17
            },
            {
                nome: "Voc\u00ca",
                endereco: "img/palavras/vc.jpg",
                id: 18
            },
            {
                nome: "Com",
                endereco: "img/palavras/com.jpg",
                id: 19
            },
            {
                nome: "Junto",
                endereco: "img/palavras/junto.jpg",
                id: 20
            },
            {
                nome: "Agora",
                endereco: "img/palavras/agora.gif",
                id: 21
            },
            {
                nome: "Ajudar",
                endereco: "img/palavras/ajudar.gif",
                id: 22
            },
            {
                nome: "Amar",
                endereco: "img/palavras/amar.gif",
                id: 23
            },
            {
                nome: "Amigo",
                endereco: "img/palavras/amigo.gif",
                id: 24
            },
            {
                nome: "Atrasado",
                endereco: "img/palavras/atrasado.gif",
                id: 25
            },
            {
                nome: "Boa Aula",
                endereco: "img/palavras/boa_aula.gif",
                id: 26
            },
            {
                nome: "Brincar",
                endereco: "img/palavras/brincar.gif",
                id: 27
            },
            {
                nome: "Cachorro Quente",
                endereco: "img/palavras/cachorro_quente.gif",
                id: 28
            },
            {
                nome: "Demorado",
                endereco: "img/palavras/demorado.gif",
                id: 29
            },
            {
                nome: "Dia",
                endereco: "img/palavras/dia.gif",
                id: 30
            },
            {
                nome: "Entender",
                endereco: "img/palavras/entender.gif",
                id: 31
            },
            {
                nome: "Estudar",
                endereco: "img/palavras/estudar.gif",
                id: 32
            },
            {
                nome: "Falar",
                endereco: "img/palavras/falar.gif",
                id: 33
            },
            {
                nome: "Fatiar",
                endereco: "img/palavras/fatiar.gif",
                id: 34
            },
            {
                nome: "Fim",
                endereco: "img/palavras/fim.gif",
                id: 35
            },
            {
                nome: "Hoje",
                endereco: "img/palavras/hoje.gif",
                id: 36
            },
            {
                nome: "Ler",
                endereco: "img/palavras/ler.gif",
                id: 37
            },
            {
                nome: "M\u00eas",
                endereco: "img/palavras/mes.gif",
                id: 38
            },
            {
                nome: "Namorar",
                endereco: "img/palavras/namorar.gif",
                id: 39
            },
            {
                nome: "Noite",
                endereco: "img/palavras/noite.gif",
                id: 40
            },
            {
                nome: "R\u00e1pido",
                endereco: "img/palavras/rapido.gif",
                id: 41
            },
            {
                nome: "Trabalhar",
                endereco: "img/palavras/trabalhar.gif",
                id: 42
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

            $(".btnPa").removeAttr("Style");

            //seleciona imagem correta aleatoriamente
            var numeroAleatorioImagem = Math.floor((Math.random() * self.TotalImagensPalavras) + 1);

            while (numeroAleatorioImagem === self.IdImagemAtual) {
                numeroAleatorioImagem = Math.floor((Math.random() * self.TotalImagensPalavras) + 1);
            }

            var imagem = $.grep(self.ListaImagensPalavras, function (e) { return e.id == numeroAleatorioImagem; });

            self.DescricaoImagemAtual = imagem[0].nome;
            self.EnderecoImagemAtual = imagem[0].endereco;
            self.IdImagemAtual = imagem[0].id;

            //seleciona imagem errada um 
            var numeroAleatorioImagemErradaUm = Math.floor((Math.random() * self.TotalImagensPalavras) + 1);

            while (numeroAleatorioImagemErradaUm === numeroAleatorioImagem) {
                numeroAleatorioImagemErradaUm = Math.floor((Math.random() * self.TotalImagensPalavras) + 1);
            }

            var imagemErradaUm = $.grep(self.ListaImagensPalavras, function (e) { return e.id == numeroAleatorioImagemErradaUm; });

            //seleciona imagem errada dois 
            var numeroAleatorioImagemErradaDois = Math.floor((Math.random() * self.TotalImagensPalavras) + 1);

            while (numeroAleatorioImagemErradaDois === numeroAleatorioImagem || numeroAleatorioImagemErradaDois === numeroAleatorioImagemErradaUm) {
                numeroAleatorioImagemErradaDois = Math.floor((Math.random() * self.TotalImagensPalavras) + 1);
            }

            var imagemErradaDois = $.grep(self.ListaImagensPalavras, function (e) { return e.id == numeroAleatorioImagemErradaDois; });


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
                }, 1500);

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