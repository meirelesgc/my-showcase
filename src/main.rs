mod app;
pub mod components;
pub mod pages;

use app::App;

fn main() {
    yew::Renderer::<App>::new().render();
}
