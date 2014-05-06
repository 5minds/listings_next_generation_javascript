# Beispiele zu Artikel "Next generation JavaScript - Wo geht die Reise mit JavaScript hin und was geht heute schon?"

Die Beispiel sind alle mit Hilfe von Node.js entstanden.

Ausführen der Programme ist der Transpiler [Traceur](https://github.com/google/traceur-compiler "Transpiler Traceur ") verwendet worden.

Die Beispiel können wie folgt gestartet werden:

    >> node index.js <pfad zur Programm>
	
	# Beispiel
	>> node index.js 01_variables\01_simple_let_sample.js

Eine Ausnahme sind die Beispiele zu den [Collections](09_collections), da diese noch nicht mit Traceur gemeinsam verwendet werden können. Hier ist der direkte Aufruf der JavaScript-Dateien notwendig:
	
	 >> node 08_collections\01_map.js


# License
*listings_next_generation_javascript* and the rest of the project is under MIT Style License:

	Copyright (C) 2014 by Martin Moellenbeck, @moellenbeck
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.