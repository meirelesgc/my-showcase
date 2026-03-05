mod app;
use app::App;
pub mod pages;

fn main() {
    yew::Renderer::<App>::new().render();
}
