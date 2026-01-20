// JavaScript para funcionalidades do site

// Função para mostrar/esconder botão "Voltar ao Topo"
window.onscroll = function() {
    const btnTopo = document.getElementById('btnTopo');
    if (btnTopo) {
        btnTopo.style.display = (window.scrollY > 100) ? 'block' : 'none';
    }
};

// Função para rolar suavemente ao topo
function topo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Dados dos produtos para a galeria
const produtos = [
    {
        nome: "Mouse Gamer RGB",
        descricao: "Alta precisão e 7 botões programáveis",
        preco: "R$ 149,90",
        imagem: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=200"
    },
    {
        nome: "Teclado Mecânico",
        descricao: "Switches azuis, retroiluminação RGB",
        preco: "R$ 289,90",
        imagem: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=200"
    },
    {
        nome: "Headset 7.1",
        descricao: "Som surround, microfone removível",
        preco: "R$ 199,90",
        imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=200"
    }
];

// Função para gerar cards de produtos
function gerarCardsProdutos() {
    const galeria = document.getElementById('galeria-produtos');
    
    if (!galeria) return; // Se não existir na página, sai da função
    
    produtos.forEach(produto => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6';
        
        col.innerHTML = `
            <div class="card h-100">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text flex-grow-1">${produto.descricao}</p>
                    <p class="h4 text-primary"><strong>${produto.preco}</strong></p>
                    <a href="#" class="btn btn-primary mt-2">Comprar</a>
                </div>
            </div>
        `;
        
        galeria.appendChild(col);
    });
}

// jQuery para alternância de formulários (apenas na página login)
$(document).ready(function() {
    // Verifica se estamos na página de login
    if ($('#btnLogin').length > 0) {
        $('#btnLogin').click(function() {
            $('#formLogin').show();
            $('#formCadastro').hide();
            $(this).removeClass('btn-outline-primary').addClass('btn-primary');
            $('#btnCadastro').removeClass('btn-primary').addClass('btn-outline-primary');
        });
        
        $('#btnCadastro').click(function() {
            $('#formCadastro').show();
            $('#formLogin').hide();
            $(this).removeClass('btn-outline-primary').addClass('btn-primary');
            $('#btnLogin').removeClass('btn-primary').addClass('btn-outline-primary');
        });
    }
    
    // Validação de formulários
    $('#loginForm, #cadastroForm').on('submit', function(e) {
        e.preventDefault();
        alert('Formulário enviado! (funcionalidade simulada)');
    });
    
    // Validação de confirmação de senha
    $('#confirmarSenha').on('keyup', function() {
        const senha = $('#cadastroSenha').val();
        const confirmar = $(this).val();
        
        if (senha !== confirmar) {
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid').addClass('is-valid');
        }
    });
});

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    gerarCardsProdutos();
    
    // Substituir [Seu Nome Completo] e ano no rodapé
    const anoAtual = new Date().getFullYear();
    const rodapeTextos = document.querySelectorAll('footer p.mb-0');
    
    rodapeTextos.forEach(texto => {
        if (texto.textContent.includes('[Seu Nome Completo]')) {
            texto.textContent = texto.textContent
                .replace('[Seu Nome Completo]', 'Seu Nome Aqui')
                .replace('2024', anoAtual);
        }
    });
});