// ==================== 1. DATA: TEORÍA ====================
const theoryData = [
    { title: "Variables Primitivas", icon: "fa-cube", content: "Tipos básicos: <code>int, double, boolean, char</code>. Se guardan en la Pila (Stack). Contienen el valor real. No tienen métodos." },
    { title: "Variables Referencia", icon: "fa-link", content: "Objetos (String, Arrays, Scanner). La variable guarda una dirección de memoria (puntero) al Heap. Pueden ser <code>null</code>." },
    { title: "String Inmutable", icon: "fa-font", content: "Los Strings no cambian. <code>s.toUpperCase()</code> crea un nuevo objeto. Si no lo asignas, el cambio se pierde." },
    { title: "String Pool", icon: "fa-database", content: "Java optimiza memoria reutilizando literales. <code>String a='Hola'</code> y <code>b='Hola'</code> apuntan al mismo objeto." },
    { title: "Métodos Void", icon: "fa-ban", content: "<code>void</code> indica que el método no devuelve valor. Usar <code>return;</code> sirve para salir del método, pero sin valor." },
    { title: "Static", icon: "fa-bolt", content: "Pertenece a la Clase. Se carga al inicio. No puede acceder a <code>this</code> ni a variables de instancia directamente." },
    { title: "Constructor", icon: "fa-industry", content: "Método para inicializar objetos. Mismo nombre que la clase. NO tiene tipo de retorno (ni void). Si no creas uno, Java pone uno vacío." },
    { title: "Sobrecarga", icon: "fa-clone", content: "Mismo nombre, distintos parámetros (tipo o cantidad). El retorno no importa. Java decide cuál usar según los argumentos." },
    { title: "Herencia", icon: "fa-sitemap", content: "<code>extends</code>. Una clase hija hereda atributos y métodos visibles (no private) del padre. Java solo permite herencia simple de clases." }
];

// ==================== 2. DATA: DICCIONARIO ====================
const dictionaryData = [
    { term: "Algoritmo", def: "Secuencia ordenada de pasos finitos para resolver un problema." },
    { term: "Bytecode", def: "Código intermedio (.class) generado por el compilador Java, ejecutable por la JVM." },
    { term: "Casting", def: "Conversión de tipos. Implícito (int a double) o Explícito/Forzado (double a int)." },
    { term: "Clase", def: "Plantilla o molde que define atributos y métodos para crear objetos." },
    { term: "Constructor", def: "Bloque de código que se ejecuta al instanciar (new) un objeto." },
    { term: "Encapsulamiento", def: "Principio de ocultar el estado interno (private) y acceder vía métodos públicos (get/set)." },
    { term: "Garbage Collector", def: "Proceso automático de la JVM que libera memoria de objetos que ya no se usan." },
    { term: "IDE", def: "Entorno de Desarrollo Integrado (Eclipse, IntelliJ, NetBeans)." },
    { term: "Instancia", def: "Un objeto concreto creado a partir de una clase." },
    { term: "JVM", def: "Java Virtual Machine. Máquina virtual que ejecuta el bytecode en cualquier SO." },
    { term: "Método", def: "Función dentro de una clase que define el comportamiento de los objetos." },
    { term: "Objeto", def: "Entidad en memoria con estado (atributos) y comportamiento (métodos)." },
    { term: "Overloading", def: "Sobrecarga: Mismo nombre de método, distintos parámetros." },
    { term: "Overriding", def: "Sobrescritura: Redefinir un método heredado de la clase padre (@Override)." },
    { term: "Paquete", def: "Directorio que agrupa clases relacionadas (package com.miempresa...)." },
    { term: "Polimorfismo", def: "Capacidad de un objeto de comportarse de múltiples formas (Variable padre -> Objeto hijo)." },
    { term: "Scope", def: "Ámbito o alcance de una variable (dónde es visible)." },
    { term: "Stack Trace", def: "Rastro de la pila de llamadas que se muestra cuando ocurre una excepción." },
    { term: "Variable Local", def: "Variable declarada dentro de un método. No tiene valor por defecto." },
    { term: "Wrapper", def: "Clase que envuelve un primitivo (Integer, Double) para tratarlo como objeto." }
];

// ==================== 3. DATA: PRÁCTICA (50 PREGUNTAS) ====================
const practice50 = [
    { code: "int x = 10; // Variable tipo ______", answer: "int" },
    { code: "double d = 5.5; // Variable decimal tipo ______", answer: "double" },
    { code: "char c = 'A'; // Variable caracter tipo ______", answer: "char" },
    { code: "boolean b = true; // Variable lógica tipo ______", answer: "boolean" },
    { code: "String s = ______ String(\"Hola\");", answer: "new" },
    { code: "final double PI = 3.14; // PI es una ______", answer: "constante" },
    { code: "long num = 100______; // Sufijo long", answer: "L" },
    { code: "float f = 10.5______; // Sufijo float", answer: "f" },
    { code: "______(x > 0) { } // Condicional", answer: "if" },
    { code: "if(x>0){} ______ {} // Si no...", answer: "else" },
    { code: "______ (int i=0; i<10; i++) {}", answer: "for" },
    { code: "______ (condicion) { } // Bucle mientras", answer: "while" },
    { code: "do { } ______ (condicion);", answer: "while" },
    { code: "switch(x) { ______ 1: ... }", answer: "case" },
    { code: "switch(x) { ... ______; } // Romper", answer: "break" },
    { code: "for(...) { if(x) ______; } // Saltar iteración", answer: "continue" },
    { code: "int[] a = {1,2}; int size = a.______;", answer: "length" },
    { code: "String s = \"A\"; int len = s.______();", answer: "length" },
    { code: "char c = s.______(0);", answer: "charAt" },
    { code: "int[] arr = ______ int[5];", answer: "new" },
    { code: "if(s1.______(s2)) ... // Comparar Strings", answer: "equals" },
    { code: "public ______ Coche {}", answer: "class" },
    { code: "______ miCoche = new Coche();", answer: "Coche" },
    { code: "private int id; // Visible solo en ______", answer: "clase" },
    { code: "void m() { ______; } // Salir de void", answer: "return" },
    { code: "int m() { return 5; } // Devuelve ______", answer: "int" },
    { code: "public Coche() {} // Es un ______", answer: "constructor" },
    { code: "______ void m() {} // Método de clase", answer: "static" },
    { code: "this.x = x; // this es el ______", answer: "objeto" },
    { code: "class A ______ B {} // Herencia", answer: "extends" },
    { code: "class A ______ Interface {} // Interfaz", answer: "implements" },
    { code: "super(); // Llama constructor ______", answer: "padre" },
    { code: "x______; // Incremento", answer: "++" },
    { code: "x______; // Decremento", answer: "--" },
    { code: "10 ______ 3; // Módulo (resto)", answer: "%" },
    { code: "if(a ______ b) // Igualdad", answer: "==" },
    { code: "if(a ______ b) // Desigualdad", answer: "!=" },
    { code: "if(A ______ B) // AND", answer: "&&" },
    { code: "if(A ______ B) // OR", answer: "||" },
    { code: "System.______.println();", answer: "out" },
    { code: "new Scanner(System.______);", answer: "in" },
    { code: "______ static void main(...)", answer: "public" },
    { code: "public static ______ main(...)", answer: "void" },
    { code: "package com.x; // Define ______", answer: "paquete" },
    { code: "______ java.util.*;", answer: "import" },
    { code: "try {} ______ (Exception e) {}", answer: "catch" },
    { code: "String s = null; // Valor ______", answer: "nulo" },
    { code: "int x = (______) 5.5; // Casting", answer: "int" },
    { code: "Integer.______(str); // String a int", answer: "parseInt" },
    { code: "Math.______(2,3); // Potencia", answer: "pow" }
];

// ==================== 4. DATA: PREGUNTAS EXAMEN ====================
const DB_EXAM = {
    poo: [
        { q: "¿Qué imprime?", code: "class A { static int x=0; A(){ x++; } }\nnew A(); new A(); print(A.x);", opts: ["0", "1", "2", "Error"], ans: 2, expl: "Static es compartido por todas las instancias. Se incrementa 2 veces." },
        { q: "La palabra 'this' se refiere a:", code: null, opts: ["La clase actual", "La instancia actual", "La clase padre", "Un método estático"], ans: 1, expl: "Referencia al objeto que está ejecutando el código." },
        { q: "Si no defines ningún constructor:", code: null, opts: ["Error de compilación", "Java crea uno vacío por defecto", "No puedes hacer new", "Es abstracta"], ans: 1, expl: "El compilador inyecta un constructor por defecto sin argumentos." },
        { q: "¿Qué hace 'super()'?", code: null, opts: ["Crea una superclase", "Llama al constructor del padre", "Llama al constructor actual", "Reinicia el objeto"], ans: 1, expl: "Invoca al constructor de la clase superior inmediata." },
        { q: "Visibilidad: 'private' es accesible desde:", code: null, opts: ["Cualquier sitio", "Solo su propia clase", "Su paquete", "Sus hijos"], ans: 1, expl: "Encapsulamiento estricto: solo visible dentro de las llaves de la clase." },
        { q: "¿Puede una clase ser 'private'?", code: null, opts: ["Sí, siempre", "No, nunca", "Solo si es Inner Class", "Si es abstracta"], ans: 2, expl: "Las clases Top-Level solo pueden ser public o package-private. Las anidadas sí." },
        { q: "¿Palabra clave para heredar?", code: null, opts: ["inherits", "implements", "extends", "super"], ans: 2, expl: "Class A extends B." },
        { q: "Un método 'static' puede acceder a:", code: null, opts: ["Variables de instancia", "Métodos de instancia", "Solo otros miembros static", "This"], ans: 2, expl: "Static no tiene contexto de 'this', solo ve lo estático." },
        { q: "¿Clase padre de todas las clases?", code: null, opts: ["Main", "Java", "Object", "Root"], ans: 2, expl: "java.lang.Object es la raíz de la jerarquía." },
        { q: "¿Qué significa 'final' en una clase?", code: null, opts: ["Es constante", "No se puede heredar de ella", "No tiene constructor", "Es abstracta"], ans: 1, expl: "Rompe la cadena de herencia (ej: String es final)." },
        { q: "¿Resultado?", code: "A a = new A(); A b = a; b.x=5; print(a.x);", opts: ["0", "5", "null", "Error"], ans: 1, expl: "a y b apuntan al mismo objeto en memoria." },
        { q: "¿Sobrecarga de constructores?", code: null, opts: ["No permitida", "Tener varios con distintos params", "Usar extends", "Mismo nombre distinto retorno"], ans: 1, expl: "Permite inicializar objetos de distintas formas." },
        { q: "¿Qué es un Objeto?", code: null, opts: ["Un archivo .java", "Una instancia de una clase", "Un método", "Una variable primitiva"], ans: 1, expl: "Es la entidad en tiempo de ejecución." },
        { q: "El operador 'instanceof' devuelve:", code: null, opts: ["int", "String", "boolean", "Class"], ans: 2, expl: "True si el objeto es de ese tipo o subtipo." },
        { q: "¿Polimorfismo básico?", code: "Animal a = new Perro();", opts: ["Correcto", "Error", "Necesita cast", "Perro pierde métodos"], ans: 0, expl: "Una referencia del padre puede apuntar a un objeto hijo." }
    ],
    methods: [
        { q: "Firma correcta del main:", code: null, opts: ["void main()", "public static void main(String[] a)", "static void main()", "public void main(String a)"], ans: 1, expl: "Estándar requerido por la JVM." },
        { q: "¿Salida?", code: "void m(int x){x=0;} int a=5; m(a); print(a);", opts: ["0", "5", "Null", "Error"], ans: 1, expl: "Paso por valor: se copia el 5, la variable original no se toca." },
        { q: "Return en método void:", code: "void test() { return; }", opts: ["Error", "Correcto", "Devuelve null", "Warning"], ans: 1, expl: "Válido para terminar la ejecución del método." },
        { q: "Sobrecarga: ¿Qué NO importa?", code: null, opts: ["Nombre", "Parámetros", "Tipo de retorno", "Orden parámetros"], ans: 2, expl: "Cambiar solo el return no es sobrecarga válida." },
        { q: "Varargs correcto:", code: null, opts: ["int... x", "int x...", "int[] ...x", "...int x"], ans: 0, expl: "Sintaxis de argumentos variables." },
        { q: "Un método que no devuelve nada es:", code: null, opts: ["null", "empty", "void", "blank"], ans: 2, expl: "Palabra clave void." },
        { q: "¿Math.random() devuelve?", code: null, opts: ["int 0-10", "double 0.0-1.0", "float", "boolean"], ans: 1, expl: "Double entre 0.0 (inc) y 1.0 (exc)." },
        { q: "¿Qué pasa si un método recursivo no para?", code: null, opts: ["Bucle infinito", "StackOverflowError", "NullPointer", "System crash"], ans: 1, expl: "Se llena la pila de llamadas." },
        { q: "¿Pasar un Array a un método es?", code: null, opts: ["Por valor (referencia)", "Por valor (copia profunda)", "Clonación", "Ilegal"], ans: 0, expl: "Se pasa una copia de la REFERENCIA. Modificar el array dentro afecta fuera." },
        { q: "Ámbito de variable local:", code: null, opts: ["Toda la clase", "Solo el bloque/método", "Todo el proyecto", "Público"], ans: 1, expl: "Nace y muere en su bloque {}." },
        { q: "System.out.println es:", code: null, opts: ["Un método", "Una clase", "Un paquete", "Un constructor"], ans: 0, expl: "Método del objeto out." },
        { q: "Parámetro 'final':", code: "void m(final int x)", opts: ["x es opcional", "x no se puede modificar dentro", "x debe ser 0", "Error"], ans: 1, expl: "Se vuelve constante dentro del método." },
        { q: "¿Llamar a método no static desde static?", code: null, opts: ["Directamente", "Usando this", "Creando una instancia", "Imposible"], ans: 2, expl: "Static no ve instancias. Debes hacer 'new Clase().metodo()'." },
        { q: "Casting implícito:", code: "double d = 5;", opts: ["Error", "Correcto", "Necesita (double)", "Warning"], ans: 1, expl: "int cabe en double automáticamente." },
        { q: "Método con return int:", code: "int m() { return 5.5; }", opts: ["Devuelve 5", "Devuelve 6", "Error compilación", "Redondea"], ans: 2, expl: "Tipos incompatibles sin cast explícito." }
    ],
    flow: [
        { q: "Condición del 'if' debe ser:", code: null, opts: ["int", "boolean", "String", "Cualquiera"], ans: 1, expl: "Solo acepta true o false." },
        { q: "¿Salida?", code: "int x=0; if(x=5) print('A');", opts: ["A", "Nada", "Error", "5"], ans: 2, expl: "Asignación en if devuelve int, no boolean." },
        { q: "Switch: caso por defecto", code: null, opts: ["else", "default", "case default", "break"], ans: 1, expl: "Se ejecuta si no coincide ningún case." },
        { q: "Bucle que ejecuta al menos una vez:", code: null, opts: ["while", "for", "do-while", "foreach"], ans: 2, expl: "Evalúa la condición al final." },
        { q: "Romper un ciclo inmediatamente:", code: null, opts: ["return", "exit", "break", "continue"], ans: 2, expl: "Sale del bucle más cercano." },
        { q: "Saltar a la siguiente iteración:", code: null, opts: ["next", "continue", "skip", "break"], ans: 1, expl: "Omite el resto del código y evalúa condición." },
        { q: "Bucle infinito for:", code: "for(;;)", opts: ["Error", "Infinito", "Ejecuta 1 vez", "Null"], ans: 1, expl: "Sintaxis válida para bucle eterno." },
        { q: "Operador Ternario:", code: "x = (a>b) ? 1 : 0;", opts: ["Switch corto", "If-else corto", "Bucle", "Cast"], ans: 1, expl: "Evalúa condición y devuelve valor 1 o 2." },
        { q: "Enhanced For (Foreach):", code: "for(String s : lista)", opts: ["Recorre índices", "Recorre valores", "Recorre al revés", "Solo arrays"], ans: 1, expl: "Itera sobre los elementos directamente." },
        { q: "Scope en bucle:", code: "for(int i=0...); print(i);", opts: ["Imprime valor", "Error compilación", "Imprime 0", "Null"], ans: 1, expl: "La 'i' solo existe dentro del for." },
        { q: "Short-circuit AND:", code: "if(false && metodo())", opts: ["Ejecuta método", "No ejecuta método", "Error", "Ambos"], ans: 1, expl: "Como el primero es false, no evalúa el segundo." },
        { q: "Dangling Else:", code: "if(a) if(b) x; else y;", opts: ["else es de a", "else es de b", "Aleatorio", "Error"], ans: 1, expl: "El else se pega al if más cercano." },
        { q: "Tipos en Switch:", code: null, opts: ["Solo int", "int, string, enum", "double, float", "boolean"], ans: 1, expl: "No admite booleanos ni flotantes." },
        { q: "¿While(true) necesita llaves?", code: "while(true) print(1);", opts: ["Sí", "No", "Error", "Solo si hay break"], ans: 1, expl: "Si es una sola línea, no son obligatorias (aunque recomendables)." },
        { q: "Etiquetas (Labels):", code: "bucle1: for(...)", opts: ["GOTO", "Nombre variable", "Para break con etiqueta", "Comentario"], ans: 2, expl: "Permite salir de bucles anidados específicos." }
    ],
    hell: [
        { q: "Incremento raro:", code: "int i=5; print(i++ + ++i);", opts: ["10", "11", "12", "13"], ans: 2, expl: "5 (post-inc queda 6) + 7 (pre-inc de 6) = 12." },
        { q: "División enteros:", code: "double d = 1/2;", opts: ["0.5", "0.0", "1.0", "Error"], ans: 1, expl: "División int trunca a 0. Luego cast a double 0.0." },
        { q: "Concatenación:", code: "print(1 + 2 + \"A\");", opts: ["12A", "3A", "A12", "A3"], ans: 1, expl: "Aritmética primero: 3 + \"A\"." },
        { q: "Concatenación 2:", code: "print(\"A\" + 1 + 2);", opts: ["A12", "A3", "Error", "3A"], ans: 0, expl: "String primero fuerza todo a String." },
        { q: "Octal Trap:", code: "int x = 010;", opts: ["10", "8", "0", "Error"], ans: 1, expl: "Prefijo 0 significa base Octal. 1*8 = 8." },
        { q: "Integer Cache:", code: "Integer a=100, b=100; a==b?", opts: ["true", "false", "Error", "null"], ans: 0, expl: "Valores entre -128 y 127 se cachean (mismo objeto)." },
        { q: "Integer Cache 2:", code: "Integer a=200, b=200; a==b?", opts: ["true", "false", "Error", "null"], ans: 1, expl: "Fuera de rango caché, son objetos distintos." },
        { q: "Char Math:", code: "print('A' + 1);", opts: ["B", "A1", "66", "Error"], ans: 2, expl: "Char se promueve a int (65) + 1 = 66." },
        { q: "Byte Overflow:", code: "byte b=127; b++;", opts: ["128", "Error", "-128", "0"], ans: 2, expl: "Desbordamiento: vuelve al valor mínimo." },
        { q: "Float Literal:", code: "float f = 3.5;", opts: ["3.5", "Error", "0.0", "null"], ans: 1, expl: "3.5 es double. Requiere 'f' (3.5f) o cast." },
        { q: "Null Array:", code: "int[] a = new int[5]; print(a[0]);", opts: ["null", "0", "Indefinido", "Error"], ans: 1, expl: "Arrays numéricos se inicializan a 0." },
        { q: "Boolean Array:", code: "boolean[] b = new boolean[1];", opts: ["true", "false", "null", "0"], ans: 1, expl: "Default boolean es false." },
        { q: "Modulus Signo:", code: "print(-5 % 2);", opts: ["1", "-1", "2", "Error"], ans: 1, expl: "En Java el resto conserva el signo del dividendo." },
        { q: "Assignment in If:", code: "boolean b=false; if(b=true)...", opts: ["No entra", "Entra", "Error", "Warning"], ans: 1, expl: "Asigna true a b, y la expresión devuelve true." },
        { q: "String Null:", code: "String s; print(s);", opts: ["null", "Error compilación", "", "crash"], ans: 1, expl: "Variable local no inicializada no se puede usar." }
    ]
};

// ==================== APP LOGIC ====================

const app = {
    state: {
        practiceIdx: 0,
        practicePool: [],
        examQuestions: [],
        currentQuestion: 0,
        score: 0,
        mistakes: [],
        timer: 0,
        timerInterval: null,
        examCategory: ''
    },

    init() {
        this.renderTheory();
        this.renderDictionary();
        this.setupSearch();

        // Carga preguntas de práctica
        this.state.practicePool = [...practice50].sort(() => Math.random() - 0.5);
        this.renderPractice();

        // Listener Enter (usamos ?. por si acaso el elemento no existe en memoria aun)
        document.getElementById('practice-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkPractice();
        });

        // Tab por defecto
        this.switchTab('theory');
    },

    // --- FUNCIÓN ADAPTADA PARA MÓVIL (NAVBAR) ---
    switchTab(tab) {
        // Ocultar todas las secciones
        ['theory', 'dictionary', 'practice', 'exam-menu', 'exam-interface', 'exam-results'].forEach(id => {
            document.getElementById('section-' + id)?.classList.add('hidden');
        });

        // Reset estilo botones menú (quitamos la clase active-tab)
        document.querySelectorAll('.nav-btn').forEach(b => {
            b.classList.remove('active-tab', 'text-blue-400');
            // Si no es el botón central, volver a gris
            if (b.id !== 'btn-practice') b.classList.add('text-gray-400');
        });

        // Mostrar sección objetivo
        const targetSection = (tab === 'exam') ? 'exam-menu' : tab;
        const sectionEl = document.getElementById('section-' + targetSection);
        if (sectionEl) sectionEl.classList.remove('hidden');

        // Activar botón en el menú inferior
        const btnId = (tab === 'exam') ? 'exam' : tab;
        const activeBtn = document.getElementById('btn-' + btnId);

        if (activeBtn) {
            activeBtn.classList.add('active-tab');
            if (activeBtn.id !== 'btn-practice') {
                activeBtn.classList.remove('text-gray-400');
            }
        }

        // Scroll al top
        window.scrollTo(0, 0);
    },

    // --- LÓGICA TEORÍA ---
    renderTheory() {
        const container = document.getElementById('theory-container');
        if (container) {
            container.innerHTML = theoryData.map(c => `
                <div class="glass-panel p-4 rounded-xl active:scale-[0.98] transition-transform">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                            <i class="fa-solid ${c.icon}"></i>
                        </div>
                        <h3 class="font-bold text-white text-sm">${c.title}</h3>
                    </div>
                    <p class="text-gray-400 text-xs leading-relaxed">${c.content}</p>
                </div>
            `).join('');
        }
    },

    // --- LÓGICA DICCIONARIO ---
    renderDictionary(filter = "") {
        const container = document.getElementById('dictionary-container');
        if (!container) return;

        const filtered = dictionaryData.filter(item =>
            item.term.toLowerCase().includes(filter.toLowerCase()) ||
            item.def.toLowerCase().includes(filter.toLowerCase())
        );

        if (filtered.length === 0) {
            container.innerHTML = `<div class="text-gray-500 col-span-1 md:col-span-2 text-center py-4 text-sm">No encontrado.</div>`;
        } else {
            container.innerHTML = filtered.map(item => `
                <div class="glass-panel p-3 rounded-lg border-l-2 border-yellow-500">
                    <h3 class="font-bold text-yellow-400 text-sm mb-1">${item.term}</h3>
                    <p class="text-gray-400 text-xs leading-snug">${item.def}</p>
                </div>
            `).join('');
        }
    },

    setupSearch() {
        document.getElementById('dict-search')?.addEventListener('input', (e) => {
            this.renderDictionary(e.target.value);
        });
    },

    // --- LÓGICA PRÁCTICA ---
    renderPractice() {
        if (this.state.practiceIdx >= this.state.practicePool.length) {
            this.state.practiceIdx = 0;
            this.state.practicePool.sort(() => Math.random() - 0.5);
        }

        const q = this.state.practicePool[this.state.practiceIdx];
        const input = document.getElementById('practice-input');
        const feedback = document.getElementById('practice-feedback');

        if (document.getElementById('practice-code')) document.getElementById('practice-code').textContent = q.code;
        if (document.getElementById('practice-counter')) document.getElementById('practice-counter').textContent = `${this.state.practiceIdx + 1} / ${this.state.practicePool.length}`;

        if (input) {
            input.value = "";
            input.disabled = false;
            input.classList.remove('border-green-500', 'border-red-500', 'text-green-400', 'text-red-400', 'shake-anim');
            input.focus();
        }

        if (feedback) feedback.style.opacity = "0";
    },

    checkPractice() {
        const q = this.state.practicePool[this.state.practiceIdx];
        const input = document.getElementById('practice-input');
        const feedback = document.getElementById('practice-feedback');

        if (!input || !feedback) return;

        if (input.value.trim() === q.answer) {
            input.classList.add('border-green-500', 'text-green-400');
            input.disabled = true;
            feedback.textContent = "¡CORRECTO!";
            feedback.className = "mt-4 text-center font-bold h-6 text-green-400 opacity-100 text-sm";
        } else {
            input.classList.add('border-red-500', 'text-red-400', 'shake-anim');
            setTimeout(() => input.classList.remove('shake-anim'), 500);
            feedback.textContent = "Incorrecto";
            feedback.className = "mt-4 text-center font-bold h-6 text-red-400 opacity-100 text-sm";
        }
    },

    nextPractice() {
        this.state.practiceIdx++;
        this.renderPractice();
    },

    // --- LÓGICA EXAMEN ---
    startExam(category) {
        this.state.examCategory = category;
        let pool = [];

        if (category === 'global') {
            Object.values(DB_EXAM).forEach(cat => pool = pool.concat(cat));
        } else {
            pool = DB_EXAM[category] || [];
        }

        if (pool.length === 0) return alert("Error cargando preguntas");

        this.state.examQuestions = pool.sort(() => Math.random() - 0.5).slice(0, 20);
        this.state.currentQuestion = 0;
        this.state.score = 0;
        this.state.mistakes = [];
        this.state.timer = 0;

        // UI Manual Switch para evitar conflictos
        document.getElementById('section-exam-menu').classList.add('hidden');
        document.getElementById('section-exam-interface').classList.remove('hidden');

        if (this.state.timerInterval) clearInterval(this.state.timerInterval);
        this.state.timerInterval = setInterval(() => {
            this.state.timer++;
            const m = Math.floor(this.state.timer / 60).toString().padStart(2, '0');
            const s = (this.state.timer % 60).toString().padStart(2, '0');
            const tEl = document.getElementById('exam-timer');
            if (tEl) tEl.innerText = `${m}:${s}`;
        }, 1000);

        this.renderExamQuestion();
    },

    renderExamQuestion() {
        const q = this.state.examQuestions[this.state.currentQuestion];
        const total = this.state.examQuestions.length;

        document.getElementById('q-current').innerText = this.state.currentQuestion + 1;
        document.getElementById('q-total').innerText = total;
        document.getElementById('exam-progress').style.width = `${((this.state.currentQuestion) / total) * 100}%`;

        document.getElementById('q-category-badge').innerText = this.state.examCategory.toUpperCase();
        document.getElementById('q-text').innerText = q.q;

        const codeBlock = document.getElementById('q-code-block');
        const codeCont = document.getElementById('q-code-container');
        if (q.code) {
            codeCont.classList.remove('hidden');
            codeBlock.textContent = q.code;
        } else {
            codeCont.classList.add('hidden');
        }

        const optsCont = document.getElementById('q-options');
        optsCont.innerHTML = '';

        q.opts.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = "w-full text-left p-4 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-600 transition-all font-mono text-sm active:scale-[0.98]";
            btn.innerText = opt;
            btn.onclick = () => this.answerExam(idx, btn);
            optsCont.appendChild(btn);
        });

        const nav = document.getElementById('exam-nav');
        if (nav) {
            nav.classList.add('opacity-0', 'pointer-events-none');
            // Mover al fondo (hack visual para movil)
            nav.style.zIndex = "-1";
        }
    },

    answerExam(idx, btn) {
        const q = this.state.examQuestions[this.state.currentQuestion];
        const allBtns = document.getElementById('q-options').children;
        const feedback = document.getElementById('feedback-msg');

        Array.from(allBtns).forEach(b => {
            b.disabled = true;
            b.classList.add('opacity-50');
        });
        btn.classList.remove('opacity-50');

        if (idx === q.ans) {
            this.state.score++;
            btn.classList.remove('bg-gray-800', 'border-gray-600');
            btn.classList.add('bg-green-600', 'border-green-400', 'text-white');
            feedback.innerHTML = "<span class='text-green-400'>¡Correcto!</span>";
        } else {
            btn.classList.remove('bg-gray-800', 'border-gray-600');
            btn.classList.add('bg-red-600', 'border-red-400', 'text-white', 'shake-anim');

            allBtns[q.ans].classList.remove('bg-gray-800', 'border-gray-600', 'opacity-50');
            allBtns[q.ans].classList.add('bg-green-600', 'border-green-400', 'text-white');

            feedback.innerHTML = `<span class='text-red-400'>Mal. ${q.expl}</span>`;
            this.state.mistakes.push({ q: q.q, yours: q.opts[idx], correct: q.opts[q.ans], expl: q.expl });
        }

        const nav = document.getElementById('exam-nav');
        if (nav) {
            nav.classList.remove('opacity-0', 'pointer-events-none');
            nav.style.zIndex = "50";
        }
    },

    nextExamQuestion() {
        if (this.state.currentQuestion < this.state.examQuestions.length - 1) {
            this.state.currentQuestion++;
            this.renderExamQuestion();
        } else {
            this.finishExam();
        }
    },

    finishExam() {
        clearInterval(this.state.timerInterval);
        document.getElementById('section-exam-interface').classList.add('hidden');
        document.getElementById('section-exam-results').classList.remove('hidden');

        const pct = Math.round((this.state.score / this.state.examQuestions.length) * 100);
        document.getElementById('result-score').innerText = pct + "%";

        const m = Math.floor(this.state.timer / 60).toString().padStart(2, '0');
        const s = (this.state.timer % 60).toString().padStart(2, '0');
        document.getElementById('result-time').innerText = `${m}:${s}`;

        const list = document.getElementById('result-mistakes');
        list.innerHTML = '';

        if (this.state.mistakes.length === 0) {
            document.getElementById('no-mistakes-msg').classList.remove('hidden');
        } else {
            document.getElementById('no-mistakes-msg').classList.add('hidden');
            this.state.mistakes.forEach(m => {
                list.innerHTML += `
                    <li class="bg-black/30 p-3 rounded border-l-2 border-red-500">
                        <div class="text-white font-bold mb-1 leading-tight">${m.q}</div>
                        <div class="text-red-400 text-[10px]">Tu: ${m.yours}</div>
                        <div class="text-green-400 text-[10px]">OK: ${m.correct}</div>
                        <div class="text-gray-400 text-[10px] italic mt-1">${m.expl}</div>
                    </li>`;
            });
        }
    },

    exitExam() {
        if (confirm("¿Salir del examen?")) {
            clearInterval(this.state.timerInterval);
            this.switchTab('exam');
        }
    },

    retryExam() {
        this.startExam(this.state.examCategory);
    },

    downloadQuestions() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(DB_EXAM, null, 2));
        const a = document.createElement('a');
        a.href = dataStr;
        a.download = "java_arena_preguntas.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());