const d = document,
w= window,
n = navigator,
ua = n.userAgent;


//Funcion para detectar el tipo de dispositivo, su sistema operativo y el navegador del usuario
export default function userDevicelnfo(id) {
    const $id = d.getElementById(id), //Se llama al elemento del html
    //Se crea un objeto para cuando el dispositivo sea movil
    isMobile ={
        android:() => ua.match(/android/i), //Se crean propiedades para cada tipo de dispositivo en caso que la coincidencia sea con este
        ios: ()=>ua.match(/iphone|ipad|ipod/i),
        windows: ()=> ua.match(/windows phone/i),
        any: function (){
            return this.android() || this.ios() | this.windows();
        },
    },
    //Se crea un objeto para cuando el dispositivo sea una pc
    isDesktop ={
        linux: () => ua.match(/linux/i), //Se crean propiedades para cada tipo de dispositivo
        mac:()=> ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function (){
            return this.linux() || this.mac() || this.windows();
        },
    },

    //Se crea un objeto para tipo de navegador
    isBrowser={
        chrome:() => ua.match(/chrome/i),
        safari: ()=> ua.match(/safari/i),
        firefox: ()=> ua.match(/firefox/i),
        opera: ()=> ua.match(/opera|opera mini/i),
        ie: ()=>ua.match(/msie/i),
        edge:() => ua.match(/edg/i),
        any: function () {
            return(
                this.ie() ||
                this.edge() ||
                this.chrome()||
                this.safari()||
                this.firefox() ||
                this.opera()
                );
        },
    };
        
    
    
    //console.log(ua);
    console.log(isMobile.android());
    console.log(isBrowser.chrome());
    //console.log(isMobile.ios());

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</li>
            <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</li>
            <li>Navegador: <b>${isBrowser.edge()?"Edge":isBrowser.any()}</li>
        </ul>
    `;

    //Código útil de forma limitada para ciertos navegadores, ver: https://devdocs.io/dom/navigatoruadata
    // navigator.userAgentData.getHighEntropyValues(
    //     ["architecture",
    //     "model",
    //     "platform",
    //     "platformVersion",
    //     "fullVersionList"])
    //     .then(ua => { 
            
    //         console.log(ua);
    //         $id.innerHTML = `
    //     <ul>
    //         <li>Sistema Operativo: <b>${ua.platform}</li>
    //         <li>Navegador: <b>${ua.brands[2].brand}</li>
    //     </ul>
    //      `;
            
    //     });

    //Redirecciones
    if(isMobile.android()){
        window.location.href = 'http://google.com';
    }

}

