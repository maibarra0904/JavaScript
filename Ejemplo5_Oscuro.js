
const d = document,
 l=localStorage;

export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
    $selector = d.querySelectorAll("[data-darks]");
    
    console.log($selector);

    let moon = "🌙",
        sun = "☀️";

    const lightMode = () => {
        $selector.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        l.setItem("theme", "light");
    };
    
    const darkMode = () => {
        $selector.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        l.setItem("theme", "dark");
    };

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                darkMode();
            }
            else {
                lightMode();
            }

        }
    });

    d.addEventListener("DOMContentLoaded", () => {
        if(l.getItem("theme") === null) l.setItem("theme","light");
        if(l.getItem("theme") === "light") lightMode();
        if(l.getItem("theme") === "dark") darkMode();
    });
}