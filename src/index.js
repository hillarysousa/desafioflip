import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('R$0.0,00');
debugger;
console.log(`Eu pagaria ${courseValue} por isso!`);