import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  id: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        'changeLight': 'yellow'
      }
    },
    yellow: {
      on: {
        'changeLight': 'red'
      }
    },
    red: {
      on: {
        'changeLight': 'green'
      }
    }
  }
});


const service = interpret(lightMachine);

export { lightMachine, service };