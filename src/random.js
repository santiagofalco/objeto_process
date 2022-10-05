import yargs from "yargs";

const defaultRandom = 100000000

const {argv} = yargs(process.argv.slice(2)).alias({q:'quantity'})

const RANDOM = () => {
    if (argv.hasOwnProperty('quantity')) {
        return {
            random: argv.quantity,
            message: `cantidad de numeros a calcular: ${argv.quantity}`,
        }
    } else {
        return {
            random: defaultRandom,
            message: `cantidad default de numeros a calcular: ${defaultRandom}`,
        }
    }
}

export default RANDOM