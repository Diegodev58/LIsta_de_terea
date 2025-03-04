

const MostrarMensaje = () =>{
    return new Promise(resolve => {
        console.clear()
        console.log('=====================')
        console.log('   Selec a option')
        console.log('=====================')
        console.log('')
        console.log('1. Crear tarea');
        console.log('2. Listar tarea');
        console.log('3. Crear tarea completada');
        console.log('4. Listar tarea Pendiente');
        console.log('5. Completar Tarea');
        console.log('6. Borrar Tarea');
        console.log('0. SALIR');
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresiona ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close();
            resolve(opt);
    });
    })
    


}

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresiona ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close();
            resolve(opt);
            //console.log(opt);
            console.log('\n');
        });
    })
    

  
}


module.exports = {
    MostrarMensaje,
    pausa
}