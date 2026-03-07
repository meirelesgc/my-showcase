use crate::components::contact::Contact;
use crate::components::presentation::Presentation;
use crate::components::profile::Profile;
use crate::components::work::Work;
use yew::prelude::*;

#[function_component]
pub fn Home() -> Html {
    html! {
        <div>
            <Presentation />
            <Work />
            <Profile />
            <Contact />
        </div>
    }
}
