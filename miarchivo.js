const carrito = [];

function agregarAlCarrito (producto){
    carrito.push (producto);
    console.log(carrito);
}

agregarAlCarrito({id: 1001, name: 'Matafuegos Polvo Quimico (1 kg.)', risk: 'incendio', capacidad: '1 kilogramo'});
agregarAlCarrito({id: 1002, name: 'Matafuegos Polvo Quimico (2,5 kg.)', risk: 'incendio', capacidad: '2,5 kilogramo'});
agregarAlCarrito({id: 1003, name: 'Matafuegos Polvo Quimico (100 kg.)', risk: 'incendio', capacidad: '100 kilogramo'});
agregarAlCarrito({id: 1004, name: 'Kit Automotor', risk: 'incendio', capacidad: '1 kilogramo + varios'});
agregarAlCarrito({id: 1005, name: 'Barbijo Descartable x 50 U.', risk: 'covid19', capacidad: '50 unidades'});
agregarAlCarrito({id: 1006, name: 'Barbijo Tricapa x 50 U.', risk: 'covid19', capacidad: '50 unidades'});
agregarAlCarrito({id: 1007, name: 'Barbijo N95 x 50 U.', risk: 'covid19', capacidad: '50 unidades'});
agregarAlCarrito({id: 1008, name: 'Mascara Facial', risk: 'covid19', capacidad: '1 unidad'});



