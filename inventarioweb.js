const productos = [
    { id: 1, nombre: "Laptop Asus", precio: 800, categoria: "Tecnología", stock: 5 },
    { id: 2, nombre: "Mouse Logi", precio: 25, categoria: "Tecnología", stock: 15 },
    { id: 3, nombre: "Teclado Mecánico", precio: 60, categoria: "Tecnología", stock: 10 },
    { id: 4, nombre: "Monitor 24''", precio: 150, categoria: "Tecnología", stock: 8 },
    { id: 5, nombre: "Auriculares Gamer", precio: 45, categoria: "Tecnología", stock: 12 },
    { id: 6, nombre: "Impresora HP", precio: 120, categoria: "Oficina", stock: 4 },
    { id: 7, nombre: "Escritorio Madera", precio: 200, categoria: "Oficina", stock: 3 },
    { id: 8, nombre: "Silla Ergonómica", precio: 180, categoria: "Oficina", stock: 6 },
    { id: 9, nombre: "Cuaderno Anillado", precio: 5, categoria: "Oficina", stock: 50 },
    { id: 10, nombre: "Lapiceros Flex (x12)", precio: 12, categoria: "Oficina", stock: 30 },
    { id: 11, nombre: "Smartphone Samsung", precio: 600, categoria: "Tecnología", stock: 7 },
    { id: 12, nombre: "Smartwatch Fit", precio: 90, categoria: "Tecnología", stock: 14 },
    { id: 13, nombre: "Cafetera Express", precio: 110, categoria: "Hogar", stock: 5 },
    { id: 14, nombre: "Licuadora Pro", precio: 75, categoria: "Hogar", stock: 9 },
    { id: 15, nombre: "Microondas LG", precio: 130, categoria: "Hogar", stock: 4 },
    { id: 16, nombre: "Ventilador Torre", precio: 55, categoria: "Hogar", stock: 11 },
    { id: 17, nombre: "Lámpara LED Desk", precio: 22, categoria: "Hogar", stock: 20 },
    { id: 18, nombre: "Mochila Impermeable", precio: 35, categoria: "Moda", stock: 25 },
    { id: 19, nombre: "Casaca Cortaviento", precio: 65, categoria: "Moda", stock: 15 },
    { id: 20, nombre: "Zapatillas Urbanas", precio: 85, categoria: "Moda", stock: 10 }
];

console.log("%c--- 1. USO DE .FOREACH ---", "color: #3182ce; font-weight: bold;");

console.log("Sintaxis Tradicional Anónima:");
productos.forEach(function(producto) {
    console.log(` - ${producto.nombre} | Stock: ${producto.stock}`);
});

console.log("Sintaxis Arrow Function:");
productos.forEach(producto => console.log(` => ${producto.nombre} | Stock: ${producto.stock}`));

let retornoForEach = productos.forEach(p => {});
console.log(`Reflexión 1 (Valor devuelto por .forEach): ${retornoForEach}`);

console.log("%c--- 2. USO DE .MAP ---", "color: #3182ce; font-weight: bold;");
const etiquetasProductos = productos.map(producto => `PRODUCTO: ${producto.nombre} $${producto.precio}`);
console.log(etiquetasProductos);

console.log("%c--- 3. USO DE .FILTER ---", "color: #3182ce; font-weight: bold;");
const tecnologiaDisponible = productos.filter(producto => producto.categoria === "Tecnología" && producto.stock > 0);
console.log("Productos de Tecnología Disponibles:", tecnologiaDisponible);

console.log("%c--- 4. USO DE .FIND ---", "color: #3182ce; font-weight: bold;");
const productoId4 = productos.find(producto => producto.id === 4);
console.log("Producto con ID 4 Encontrado:", productoId4);

console.log("%c--- 5. USO DE .REDUCE ---", "color: #3182ce; font-weight: bold;");
const valorTotalInventario = productos.reduce((acumulador, producto) => {
    return acumulador + (producto.precio * producto.stock);
}, 0);
console.log(`Valor Total del Inventario Acumulado: $${valorTotalInventario}`);

console.log("%c--- 6. USO DE .SOME ---", "color: #3182ce; font-weight: bold;");
const existeProductoCostoso = productos.some(producto => producto.precio > 500);
console.log(`¿Existe algún producto que cueste más de $500?: ${existeProductoCostoso}`);



console.log("%c--- FASE 3: PRUEBA DEL CONTEXTO THIS ---", "color: #e53e3e; font-weight: bold;");


productos[0].mostrarNombreArrow = () => {
    console.log("Resultado con Arrow Function -> Nombre: " + this.nombre);
};

productos[0].mostrarNombreTradicional = function() {
    console.log("Resultado con Función Tradicional -> Nombre: " + this.nombre);
};

productos[0].mostrarNombreArrow();
productos[0].mostrarNombreTradicional();
