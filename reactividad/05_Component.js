const Component = (function(){
    //Constructor del componente
    const Constructor = function (options) {
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    }

    //Render UI
    Constructor.prototype.render = function () {
        const $el = d.querySelector(this.el);
        if(!$el) return; //Si el elemento no existe no hagas nada
        $el.innerHTML = this.template(this.data );
    };

    //Actualizar el State de forma reactive
    Constructor.prototype.setState = function(obj){
        for(let key in obj) {
            if(this.data.hasOwnProperty(key)) {
                this.data[key] = obj[key];
            }
        }
        this.render();
    };

    //Obtenemos una copia inmutable del State
    Constructor.prototype.getState = function (){
        return JSON.parse(JSON.stringify(this.data))
    }


    return Constructor;
})();