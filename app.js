
const {MenuUsuario} = require('./inquirer/inquirerAj')
const {pausa} = require('./inquirer/inquirerAj')


console.clear()
const main = async() => {

    let opt = '';
    do {
        opt = await MenuUsuario();
        await pausa();
    } while (opt !== '0');

   
}

main();