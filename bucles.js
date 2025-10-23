//bucles

//for
/*
var numero

while(numero<10){
    numero += 1 
    console.log(numero)
}

for(let numero = 1; numero<=10; numero++){
    console.log(numero)
}

const lista = ['banana', 'manzana', 'pera', 'sandia']

for(let fruta in lista){
    console.log(lista[fruta])
}*/

const bd_supermercado = [
    {
        'producto'  : 'banana',
        'tipo'      : 'fruta'
    },
    {
        'producto'  : 'manzana',
        'tipo'      : 'fruta'
    },
    {
        'producto'  : 'pan sobao',
        'tipo'      : 'harina'
    },
    {
        'producto'  : 'pan integral',
        'tipo'      : 'harina'
    },
    {
        'producto'  : 'salchicha',
        'tipo'      : 'embutido'
    },
    {
        'producto'  : 'salami',
        'tipo'      : 'embutido'
    }
]

for(let id_producto in bd_supermercado){

    const producto = bd_supermercado[id_producto]

    if(producto['tipo']=='harina'){
        console.log(producto)
    }

}