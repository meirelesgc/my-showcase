use yew::prelude::*;

#[function_component]
pub fn LandingPage() -> Html {
    html! {
        <div>
            <section class="yellow-card">
                <h1>{ "Apresentação" }</h1>
            </section>

            <section class="more-options">
                <h2>{ "Opções" }</h2>
            </section>
        </div>
    }
}
