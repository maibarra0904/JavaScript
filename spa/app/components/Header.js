import { Menu } from "./Menu.js"; //Se llama a la función Menu
import { SearchForm } from "./SearchForm.js"; //Se llama a la función SearchForm
import { Title } from "./Title.js"; //Se llama a la función Title


export function Header() {
    const $header = document.createElement("header");
    $header.classList.add("header");

    $header.appendChild(Title());
    $header.appendChild(Menu());
    $header.appendChild(SearchForm());

    return $header;
}