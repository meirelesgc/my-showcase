use yew::prelude::*;

#[function_component]
pub fn Presentation() -> Html {
    html! {
        <section class="yellow-card" id="home">
            <h1>{ "Apresentação" }</h1>
            <nav class="card-nav">
                <a href="#trabalho">{ "Trabalho" }</a>
                <a href="#perfil">{ "Perfil" }</a>
                <a href="#contato">{ "Contato" }</a>
            </nav>
        </section>
    }
}
