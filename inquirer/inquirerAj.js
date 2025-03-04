const { default: inquirer } = require('inquirer');

require('inquirer');

//const {preguntas} = require('./preguntas');


const preguntas = [
    {
    type:'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
        {
            value: '1',
            name: 'Crear tarea'
        },
        {
            value: '2',
            name: 'Listar tarea'
        },
        {
            value: '3',
            name: 'Crear tarea completada'
        },
        {
            value: '4',
            name: 'Listar tarea Pendiente'
        },
        {
            value: '5',
            name: 'Completar Tarea'
        },
        {
            value: '6',
            name: 'Borrar Tarea'
        },
        {
            value: '0',
            name: 'SALIR'
        }
    ]
}
];


const MenuUsuario = async() => {
    console.clear()
    console.log('=====================')
    console.log('   Selec a option')
    console.log('=====================')
    console.log('')

    const opcion = await inquirer.prompt(preguntas);

    return opcion;


}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presiona ENTER para continuar`
        }
    ]
    const opt = await inquirer.prompt(question);
    return opt
}
module.exports = {
    MenuUsuario,
    pausa
}