console.log('Inicio de script');


setTimeout(() => {
    console.log('Primer TimeOut');
}, 5000);
setTimeout(() => {
    console.log('Segundo TimeOut');
}, 0);
setTimeout(() => {
    console.log('Tercer TimeOut');
}, 0);
console.log('Fin de script');