export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria, 'lista-nota_item-block');
        this.notas.push(novaNota);
        this.notificar();
    }

    filtrarNotas(texto){
        this.notas = this.notas.map((nota) => {
            if(nota.categoria === texto){
                nota.classeDisplay = 'lista-nota_item-block';
            }else{
                console.log(texto);
                nota.classeDisplay = 'lista-nota_item-none';
            }
            return(nota);
        });
        this.notificar();

    }

    apagarNota(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }

    inscrever(func){
        this._inscritos.push(func);
    }
    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar(){
        this._inscritos.forEach(func =>{
            func(this.notas);
        } );
    }
}

class Nota{
    constructor(titulo, texto, categoria, classeDisplay){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
        this.classeDisplay = classeDisplay
    }
}