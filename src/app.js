import './assets/scss/app.scss';
import { sum } from './assets/js/sum'; //import sum js module
import 'jquery';
import 'bootstrap'; // importing bootstrap.js

import 'bootstrap/scss/bootstrap.scss'; // bootstrap.scss

const total = sum(10,5);
console.log(total);
