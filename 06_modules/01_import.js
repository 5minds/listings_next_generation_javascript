// 01_import.js

import {firstname, lastname} from './02_export_simple';

console.log(firstname);
console.log(lastname);

import {fkt as hello_world, MyClass} from './03_export_function_and_class';

hello_world("welt");

let myClass = new MyClass();

import default_fkt from './04_export_default';
import {fkt} from './04_export_default';

default_fkt();
fkt();
