use wasm_bindgen::prelude::*;
use yew::prelude::*;

// 1. Importando a função JS que criamos no index.html
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = window)]
    fn initHorizontalScroll(selector: &str);
}

#[function_component]
pub fn LandingPage() -> Html {
    // 2. Usando use_effect para disparar a animação APÓS a renderização do HTML
    use_effect(|| {
        // Chamamos a função passando a classe do container alvo
        initHorizontalScroll(".trabalho-scroll");

        || () // Função de cleanup (vazia por enquanto)
    });

    html! {
        <div>
            <section class="yellow-card" id="home">
                <h1>{ "Apresentação" }</h1>
                <nav class="card-nav">
                    <a href="#trabalho">{ "Trabalho" }</a>
                    <a href="#perfil">{ "Perfil" }</a>
                    <a href="#contato">{ "Contato" }</a>
                </nav>
            </section>

            // 3. Estrutura modificada para o Scroll Horizontal
            <section id="trabalho" class="horizontal-container trabalho-scroll">
                <div class="horizontal-wrapper">
                    // Cada 'horizontal-item' será uma "tela" dentro da rolagem
                    <div class="horizontal-item" style="background-color: #ff9ff3;">
                        <h2>{ "Projeto 1" }</h2>
                    </div>
                    <div class="horizontal-item" style="background-color: #feca57;">
                        <h2>{ "Projeto 2" }</h2>
                    </div>
                    <div class="horizontal-item" style="background-color: #48dbfb;">
                        <h2>{ "Projeto 3" }</h2>
                    </div>
                </div>
            </section>

            <section id="perfil" class="more-options">
                <h2>{ "Perfil" }</h2>
            </section>

            <section id="contato" class="more-options">
                <h2>{ "Contato" }</h2>
            </section>
        </div>
    }
}
