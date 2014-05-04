// 01_import.js

import {firstname, lastname} from './02_export_simple';

console.log(firstname);
console.log(lastname);

import {fkt as hello_world} from './03_export_function';

hello_world("welt");

import d from './04_export_default';
import {fkt} from './04_export_default';

d();
fkt();
