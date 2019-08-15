import './index.css';

import numerals from 'numeral';

/* eslint-disable no-console */

const courseValue = numerals(1000).format('$0,0.00');

/* eslint-disable no-debugger */
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
