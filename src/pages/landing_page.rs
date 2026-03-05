use yew::prelude::*;
#[function_component]
pub fn LandingPage() -> Html {
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

            <section id="trabalho" class="more-options">
                <h2>{ "Trabalho" }</h2>
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
