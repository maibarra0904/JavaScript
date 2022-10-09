const d = document,
w= window,
n = navigator,
ua = n.userAgent;

export default function userDevicelnfo(id) {
    const $id = d.getElementById(id),
    isMobile ={
        android:() => ua.match(/android/i),
        ios: ()=>ua.match(/iphone|ipad|ipod/i),
        windows: ()=> ua.match(/windows phone/i),
        any: function (){
            return this.android() || this.ios() | this.windows();
        },
    },
    isDesktop ={
        linux: () => ua.match(/linux/i),
        mac:()=> ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function (){
        return this.linux() || this.mac() || this.windows();
        },
    },

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

    //Redirecciones
    if(isMobile.android()){
        window.location.href = 'http://google.com';
    }

}

