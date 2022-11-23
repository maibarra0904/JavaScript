import STRIPE_KEYS from "./Ejemplo25-llaves.js";

//console.log(STRIPE_KEYS);

const d = document,
$laptops = d.getElementById("laptops"),
$template = d.getElementById("laptop-template").content,
$fragment = d.createDocumentFragment(),
fetchOptions = {
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    }
};

let products,prices;

//Aplicar varios fetch en la misma promesa
Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions)
])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(json => {
    //console.log(json);
    products = json[0].data;
    prices = json[1].data;

    prices.forEach(el => {
        let productData = products.filter((product) => product.id === el.product);
        console.log(productData);

        $template.querySelector(".laptop").setAttribute("data-price", el.id);
        $template.querySelector("img").src = productData[0].images[0];
        $template.querySelector("img").alt = productData[0].name;
        $template.querySelector("figcaption").innerHTML = `
        ${productData[0].name}
        <br>
        $ ${el.unit_amount_decimal.slice(0,-2)}.${el.unit_amount_decimal.slice(-2)} ${el.currency}
        `;

        let $clone = d.importNode($template,true);
        $fragment.appendChild($clone);
    })

    $laptops.appendChild($fragment);

})
.catch((err) => {
    console.log(err);
    let message = err.statusText || "Ocurrió un error al conectarse con la API";
    $laptops.innerHTML = `<p>Error ${err.status}: ${message}</p>`
})

d.addEventListener("click", e => {
    console.log(e.target.matches(".laptop *"));
    if(e.target.matches(".laptop *")){
        let price = e.target.parentElement.getAttribute("data-price");
        //console.log(priceId);

        //Hay un error porque falta completar la suscripcion en Stripe

        Stripe(STRIPE_KEYS.public).redirectToCheckout({
            lineItems:[{price,quantity:1}],
            mode: "subscription",
            successUrl: "http://127.0.0.1:5500/Ejemplo25-exito.html",
            cancelUrl:"http://127.0.0.1:5500/Ejemplo25-exito.html"
        })
        .then(res => {
            if(res.error){
                $laptops.insertAdjacentElement("afterend",res.error.message)
            }
        })
    };
});