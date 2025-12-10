// Audio Context para generar sonidos
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency, duration, type = 'sine') {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

function playCorrectSound() {
    playSound(523.25, 0.2);
    setTimeout(() => playSound(659.25, 0.2), 100);
    setTimeout(() => playSound(783.99, 0.3), 200);
}

function playIncorrectSound() {
    playSound(200, 0.1, 'sawtooth');
    setTimeout(() => playSound(150, 0.2, 'sawtooth'), 100);
}

function playClickSound() {
    playSound(400, 0.05, 'square');
}

// Banco de preguntas completo - 90 PREGUNTAS TOTALES
const questions = [
    // DOCUMENTO 1 - Preguntas 1-20
    {
        type: "multiple",
        category: "Conceptos Fundamentales",
        question: "¿Cuál es el propósito principal del Plan de Gestión de Proyecto (PGP) para el desarrollo del SIGIBE?",
        options: [
            "Definir únicamente el presupuesto del proyecto",
            "Definir el alcance, planificar tiempos y recursos, y establecer estrategias de gestión",
            "Crear la documentación técnica del sistema",
            "Asignar roles al equipo de desarrollo"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Gestión del Alcance",
        question: "Complete: Los elementos de nivel más bajo de la EDT son los '_____', que representan el nivel de detalle manejable y asignable.",
        answer: "paquetes de trabajo",
        hints: ["Se relacionan con trabajo", "Son asignables", "Nivel más bajo de EDT"]
    },
    {
        type: "multiple",
        category: "Gestión del Cronograma",
        question: "¿Cuáles son los tres pilares de la estimación en la gestión de proyectos de software?",
        options: [
            "Esfuerzo, Costo y Tiempo",
            "Calidad, Alcance y Recursos",
            "Planificación, Ejecución y Control",
            "Requisitos, Diseño y Pruebas"
        ],
        correct: 0
    },
    {
        type: "multiple",
        category: "Estimación",
        question: "¿En qué unidades se expresa usualmente la Estimación de Esfuerzo?",
        options: [
            "Días calendario",
            "Horas-hombre, días-hombre, meses-hombre",
            "Puntos de función",
            "Líneas de código"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Gestión del Cronograma",
        question: "Complete: La herramienta principal para visualizar y controlar el plan temporal del proyecto es el Diagrama de _____.",
        answer: "gantt",
        hints: ["Visualiza cronograma", "Muestra dependencias", "Barras horizontales"]
    },
    {
        type: "multiple",
        category: "Arquitectura de Software",
        question: "¿Por qué los Requisitos No Funcionales (RNF) son considerados los principales impulsores arquitectónicos?",
        options: [
            "Porque son más importantes que los funcionales",
            "Porque imponen restricciones sobre cómo debe construirse el sistema",
            "Porque son más fáciles de implementar",
            "Porque definen las interfaces de usuario"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Arquitectura de Software",
        question: "Complete: El diagrama UML que muestra la organización lógica del software y sus dependencias es el Diagrama de _____.",
        answer: "componentes",
        hints: ["Organización lógica", "Muestra dependencias", "Vista estructural"]
    },
    {
        type: "multiple",
        category: "Arquitectura de Software",
        question: "En un Diagrama de Componentes, ¿qué simboliza el 'lollipop' (○—)?",
        options: [
            "Una interfaz que el componente requiere",
            "Una interfaz que el componente provee",
            "Una dependencia entre componentes",
            "Un componente opcional"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Gestión de Riesgos",
        question: "¿Cuál es la distinción fundamental entre un Riesgo y un Problema?",
        options: [
            "El riesgo es más grave que el problema",
            "El riesgo está en el futuro (potencial), el problema está en el presente (real)",
            "El riesgo es técnico, el problema es de gestión",
            "No hay diferencia, son sinónimos"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Gestión de Riesgos",
        question: "Complete: El objetivo de la gestión de riesgos es evitar que los Riesgos se conviertan en _____.",
        answer: "problemas",
        hints: ["Estado actual", "Ya ocurrió", "Requiere solución inmediata"]
    },
    {
        type: "multiple",
        category: "Gestión de Riesgos",
        question: "¿Cuáles son las dos dimensiones evaluadas en el Análisis Cualitativo de riesgos?",
        options: [
            "Costo y Beneficio",
            "Probabilidad e Impacto",
            "Urgencia e Importancia",
            "Causa y Efecto"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Gestión de Riesgos",
        question: "Complete: Un _____ es la señal de alerta que indica que el riesgo está a punto de ocurrir.",
        answer: "disparador",
        hints: ["Señal de alerta", "Trigger en inglés", "Activa contingencia"]
    },
    {
        type: "multiple",
        category: "Gestión de la Calidad",
        question: "¿Cuál es la diferencia entre Aseguramiento de la Calidad (SQA) y Control de Calidad (SQC)?",
        options: [
            "SQA se enfoca en el proceso, SQC se enfoca en el producto",
            "SQA es para software, SQC es para hardware",
            "SQA es preventivo, SQC es correctivo (ambos son iguales)",
            "No hay diferencia real entre ambos"
        ],
        correct: 0
    },
    {
        type: "multiple",
        category: "Pruebas de Software",
        question: "¿Cuál es el objetivo principal de las Pruebas de Aceptación de Usuario (UAT)?",
        options: [
            "Encontrar bugs técnicos",
            "Validar que el software resuelve el problema del negocio",
            "Probar el rendimiento del sistema",
            "Verificar la seguridad"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Pruebas de Software",
        question: "Complete: En metodología ágil, las Pruebas de Aceptación (UAT) ocurren durante la Sprint _____.",
        answer: "review",
        hints: ["Final del sprint", "Cliente valida", "Revisión del incremento"]
    },
    {
        type: "multiple",
        category: "EDT/WBS",
        question: "¿Qué diferencia fundamental existe entre la EDT/WBS y una simple lista de tareas?",
        options: [
            "La EDT es más larga que una lista de tareas",
            "La EDT es una descomposición jerárquica orientada a entregables",
            "La EDT solo la usa el gerente de proyecto",
            "No hay diferencia significativa"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Metodologías Ágiles",
        question: "En Metodologías Ágiles, ¿qué tipo de unidades se prefieren para medir el esfuerzo?",
        options: [
            "Horas exactas de trabajo",
            "Líneas de código",
            "Unidades relativas como Puntos de Historia",
            "Días calendario"
        ],
        correct: 2
    },
    {
        type: "complete",
        category: "Gestión de Riesgos",
        question: "Complete: La estrategia de _____ consiste en cambiar el plan del proyecto para eliminar la amenaza por completo.",
        answer: "evitar",
        hints: ["Elimina el riesgo", "Probabilidad = 0", "Cambia el plan"]
    },
    {
        type: "multiple",
        category: "Arquitectura de Software",
        question: "¿Cuál es la principal ventaja de la Arquitectura en 3 Capas sobre la Arquitectura Monolítica?",
        options: [
            "Es más rápida en ejecución",
            "Requiere menos recursos de hardware",
            "Proporciona mejor separación de responsabilidades y facilita el mantenimiento",
            "Es más económica de desarrollar"
        ],
        correct: 2
    },
    {
        type: "complete",
        category: "Gestión de la Calidad",
        question: "Complete: Una buena métrica de calidad debe contener el Atributo, la Métrica y el Valor _____.",
        answer: "meta",
        hints: ["Objetivo", "Target en inglés", "Umbral de aceptación"]
    },

    // DOCUMENTO 2 - Preguntas 21-40
    {
        type: "multiple",
        category: "Estimación de Esfuerzo",
        question: "¿Cómo se convierte el esfuerzo en duración?",
        options: [
            "Multiplicando el esfuerzo por el costo",
            "Considerando cuántos recursos (personas) se asignarán y su productividad",
            "Dividiendo el esfuerzo entre los días del proyecto",
            "Sumando todas las tareas del proyecto"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Técnicas de Estimación",
        question: "Complete: La Estimación _____ es más adecuada cuando la EDT está bien hecha, estimando cada paquete de trabajo y sumándolos.",
        answer: "ascendente",
        hints: ["Bottom-Up en inglés", "De abajo hacia arriba", "Suma de paquetes"]
    },
    {
        type: "multiple",
        category: "Técnicas de Estimación",
        question: "¿Cuál de las siguientes es una técnica de estimación que utiliza modelos matemáticos basados en datos históricos?",
        options: [
            "Juicio de expertos",
            "Estimación paramétrica",
            "Estimación por analogía",
            "Estimación descendente"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Metodologías de Estimación",
        question: "¿Cuándo se realiza la estimación en las Metodologías Clásicas como Cascada?",
        options: [
            "Durante cada sprint",
            "Al final del proyecto",
            "Al inicio del proyecto, intentando estimar todo de una vez",
            "Durante la fase de pruebas"
        ],
        correct: 2
    },
    {
        type: "complete",
        category: "Metodologías Ágiles",
        question: "Complete: En Scrum, la estimación es una actividad _____ y liviana que ocurre al inicio de cada iteración corta.",
        answer: "continua",
        hints: ["No es única", "Se repite", "Cada sprint"]
    },
    {
        type: "multiple",
        category: "EDT/WBS",
        question: "¿Cómo se garantiza que la EDT cubre el 100% del alcance definido?",
        options: [
            "Contando todas las tareas del proyecto",
            "Verificando que todos los RF importantes estén representados en algún paquete de trabajo",
            "Sumando las horas de todos los paquetes",
            "Consultando con el cliente final"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Arquitectura de Software",
        question: "Si un RNF requiere disponibilidad 24/7 (uptime 99.5%), ¿qué decisión arquitectónica se debe tomar?",
        options: [
            "Usar un único servidor potente",
            "Implementar redundancia con múltiples servidores y balanceador de carga",
            "Aumentar la memoria RAM del servidor",
            "Contratar más desarrolladores"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Diagramas UML",
        question: "Complete: En un Diagrama de Componentes, el símbolo _____ representa una interfaz que el componente requiere (usa).",
        answer: "socket",
        hints: ["C— símbolo", "Lo que necesita", "Interfaz requerida"]
    },
    {
        type: "multiple",
        category: "Diagrama de Despliegue",
        question: "¿Qué representa un 'Nodo' en un Diagrama de Despliegue?",
        options: [
            "Un componente de software",
            "Una clase del sistema",
            "La infraestructura de hardware o entorno de ejecución",
            "Una interfaz de usuario"
        ],
        correct: 2
    },
    {
        type: "multiple",
        category: "Gestión de Riesgos",
        question: "Según la Fórmula Maestra del PMBOK para redactar riesgos, ¿qué representa la CAUSA?",
        options: [
            "Un evento futuro incierto",
            "Un hecho presente o verdad actual",
            "El impacto en el proyecto",
            "La probabilidad de ocurrencia"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Análisis de Riesgos",
        question: "Complete: El Nivel de Riesgo (Severidad) se calcula multiplicando la Probabilidad por el _____.",
        answer: "impacto",
        hints: ["Consecuencia", "Daño potencial", "Segunda dimensión"]
    },
    {
        type: "multiple",
        category: "Estrategias de Riesgos",
        question: "¿Qué estrategia de respuesta a riesgos implica tomar acciones proactivas para reducir la probabilidad y/o el impacto?",
        options: [
            "Evitar",
            "Transferir",
            "Mitigar",
            "Aceptar"
        ],
        correct: 2
    },
    {
        type: "multiple",
        category: "Estrategias de Riesgos",
        question: "¿Cuál es un ejemplo de TRANSFERIR un riesgo?",
        options: [
            "Implementar backups automáticos cada hora",
            "Contratar un servicio de nube con SLA garantizado",
            "Cambiar el plan del proyecto",
            "No hacer nada y asumir el riesgo"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Gestión de la Calidad",
        question: "Complete: El Aseguramiento de la Calidad (SQA) está enfocado en el _____ para prevenir defectos.",
        answer: "proceso",
        hints: ["Cómo lo hacemos", "Prevención", "No es el producto"]
    },
    {
        type: "multiple",
        category: "Métricas de Calidad",
        question: "¿Cuántos elementos debe contener una Métrica de Calidad objetiva y cuantificable?",
        options: [
            "Dos elementos",
            "Tres elementos",
            "Cuatro elementos",
            "Cinco elementos"
        ],
        correct: 2
    },
    {
        type: "multiple",
        category: "Métricas de Calidad",
        question: "¿Cuál de los siguientes NO es un elemento de una Métrica de Calidad?",
        options: [
            "Atributo",
            "Valor Meta (Target)",
            "Método de Medición",
            "Presupuesto del proyecto"
        ],
        correct: 3
    },
    {
        type: "complete",
        category: "Modelo en V",
        question: "Complete: El Modelo en V ilustra que para cada etapa de definición, existe una etapa de _____ correspondiente.",
        answer: "verificación",
        hints: ["Prueba", "Validación", "Testing"]
    },
    {
        type: "multiple",
        category: "Pruebas de Sistema",
        question: "¿Qué verifican las Pruebas de Sistema (Nivel 3)?",
        options: [
            "Solo los requisitos funcionales",
            "Solo la interfaz de usuario",
            "Que el sistema cumpla con los RF y RNF especificados",
            "La satisfacción del usuario final"
        ],
        correct: 2
    },
    {
        type: "multiple",
        category: "Casos de Prueba",
        question: "¿Qué se busca al diseñar pruebas para 'Caminos Alternativos/Error'?",
        options: [
            "Verificar que el sistema funciona con datos correctos",
            "Probar escenarios que intentan 'romper' el sistema",
            "Validar la interfaz de usuario",
            "Confirmar que el código está bien documentado"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Casos de Prueba",
        question: "Complete: Un componente esencial de un Caso de Prueba es el _____ asociado para garantizar la trazabilidad.",
        answer: "caso de uso",
        hints: ["Requisito funcional", "Historia de usuario", "Funcionalidad"]
    },

    // DOCUMENTO 3 - Preguntas 41-90
    {
        type: "multiple",
        category: "Arquitectura de Software",
        question: "¿Con qué concepto se compara la Arquitectura de Software?",
        options: [
            "Con un organigrama empresarial",
            "Con los planos estructurales de un edificio",
            "Con un diagrama de flujo",
            "Con una base de datos"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Arquitectura de Software",
        question: "Complete: La arquitectura no se elige por _____, sino que se diseña para satisfacer los RNF.",
        answer: "moda",
        hints: ["Tendencia", "No por popularidad", "Según necesidades reales"]
    },
    {
        type: "multiple",
        category: "RNF Seguridad",
        question: "¿Qué componentes específicos exige un RNF de Seguridad crítico?",
        options: [
            "Solo encriptación de datos",
            "Un firewall y antivirus",
            "Servicio de Autenticación y Servicio de Autorización (RBAC)",
            "Solo contraseñas fuertes"
        ],
        correct: 2
    },
    {
        type: "multiple",
        category: "RNF Rendimiento",
        question: "Si el RNF de Rendimiento es crítico, ¿qué técnicas pueden ser necesarias?",
        options: [
            "Aumentar el personal",
            "Usar caché o separar BD de reportes en servidor diferente",
            "Reducir funcionalidades",
            "Cambiar el lenguaje de programación"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Arquitectura Monolítica",
        question: "Complete: En la Arquitectura Monolítica, todo se construye como una sola unidad _____.",
        answer: "indivisible",
        hints: ["No se puede separar", "Todo junto", "Unidad completa"]
    },
    {
        type: "multiple",
        category: "Arquitectura en 3 Capas",
        question: "¿Cuáles son las tres capas lógicas horizontales de la Arquitectura en 3 Capas?",
        options: [
            "Cliente, Servidor y Base de Datos",
            "Presentación, Lógica de Negocio y Acceso a Datos",
            "Frontend, Backend y Storage",
            "Input, Processing y Output"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Microservicios",
        question: "¿Qué estilo arquitectónico ofrece máxima escalabilidad al descomponer la aplicación en servicios pequeños e independientes?",
        options: [
            "Arquitectura Monolítica",
            "Arquitectura en Capas",
            "Arquitectura de Microservicios",
            "Arquitectura Cliente-Servidor"
        ],
        correct: 2
    },
    {
        type: "complete",
        category: "Microservicios",
        question: "Complete: La principal complejidad de los Microservicios es que es mucho más complejo de _____ y monitorear.",
        answer: "gestionar",
        hints: ["Administrar", "Controlar", "Manejar"]
    },
    {
        type: "multiple",
        category: "Diagramas UML",
        question: "¿Qué dos diagramas UML se utilizan para documentar la arquitectura de software?",
        options: [
            "Diagrama de Clases y Diagrama de Secuencia",
            "Diagrama de Casos de Uso y Diagrama de Estados",
            "Diagrama de Componentes y Diagrama de Despliegue",
            "Diagrama de Actividades y Diagrama de Objetos"
        ],
        correct: 2
    },
    {
        type: "multiple",
        category: "Diagrama de Componentes",
        question: "¿Cuál es el propósito del Diagrama de Componentes?",
        options: [
            "Mostrar el flujo de datos",
            "Mostrar cómo se organiza lógicamente el software y sus dependencias",
            "Mostrar la infraestructura física",
            "Mostrar los casos de uso"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Diagrama de Despliegue",
        question: "Complete: Un _____ es el archivo de software real que se despliega dentro de un nodo.",
        answer: "artefacto",
        hints: ["Archivo ejecutable", "Software deployable", "Ej: .war, .js"]
    },
    {
        type: "multiple",
        category: "Documentación de Arquitectura",
        question: "¿Qué elementos debe documentar la Sección 4 del PGP relativa a la Arquitectura?",
        options: [
            "Solo el diagrama de componentes",
            "Estilo Arquitectónico, Diagrama de Componentes y Diagrama de Despliegue",
            "Solo la justificación técnica",
            "Los requisitos funcionales"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Justificación Arquitectónica",
        question: "Si se elige la Arquitectura Cliente-Servidor de 3 capas, ¿cuál es una justificación técnica clave?",
        options: [
            "Es la más barata",
            "Es la más moderna",
            "Proporciona buena separación de responsabilidades, permitiendo cambiar la UI sin tocar la lógica",
            "Es la más rápida"
        ],
        correct: 2
    },
    {
        type: "complete",
        category: "Aseguramiento de Calidad",
        question: "Complete: El SQA tiene como objetivo _____ defectos.",
        answer: "prevenir",
        hints: ["Evitar", "Anticipar", "No detectar"]
    },
    {
        type: "multiple",
        category: "Control de Calidad",
        question: "¿Cuál es el enfoque del Control de Calidad (SQC)?",
        options: [
            "El proceso de desarrollo",
            "El producto y detectar defectos",
            "La gestión del equipo",
            "La documentación"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Métricas de Calidad",
        question: "¿Qué se debe hacer para transformar un RNF en un valor cuantificable y controlable?",
        options: [
            "Ignorarlo hasta las pruebas",
            "Traducirlo en una Métrica de Calidad",
            "Asignarlo a un desarrollador",
            "Agregarlo al backlog"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Componentes de Métrica",
        question: "Complete: Una métrica de calidad incluye Atributo, Métrica, Valor Meta y Método de _____.",
        answer: "medición",
        hints: ["Cómo obtener el dato", "Forma de medir", "Técnica de evaluación"]
    },
    {
        type: "multiple",
        category: "Métricas de Disponibilidad",
        question: "¿Cuál es un ejemplo de Métrica de Calidad relacionada con disponibilidad?",
        options: [
            "100% de código comentado",
            "Disponibilidad del 99.9% mensual (Máximo 43 minutos de inactividad/mes)",
            "Cero errores de compilación",
            "10 usuarios simultáneos"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Modelo en V",
        question: "¿Qué ilustra el Modelo en V de la Estrategia de Pruebas?",
        options: [
            "La estructura organizacional",
            "La relación entre cada fase de desarrollo y su fase de pruebas correspondiente",
            "El flujo de trabajo del equipo",
            "La arquitectura del sistema"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Pruebas de Sistema",
        question: "Complete: Las Pruebas de Sistema verifican el sistema contra los requisitos _____ y _____.",
        answer: "rf y rnf",
        hints: ["Funcionales y No Funcionales", "Dos tipos", "Requisitos técnicos"]
    },
    {
        type: "multiple",
        category: "Pruebas de Aceptación",
        question: "¿Qué nivel de prueba verifica que el software resuelve el problema del negocio?",
        options: [
            "Pruebas Unitarias",
            "Pruebas de Integración",
            "Pruebas de Sistema",
            "Pruebas de Aceptación de Usuario (UAT)"
        ],
        correct: 3
    },
    {
        type: "multiple",
        category: "Cascada - Desventaja",
        question: "¿Cuál es la principal desventaja del enfoque Cascada en pruebas?",
        options: [
            "Es muy rápido",
            "Si se encuentra un error grave en UAT (tarde), corregirlo es muy costoso",
            "No tiene documentación",
            "No permite pruebas"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Modelo en V Ágil",
        question: "Complete: En Ágil, en lugar de una Gran V secuencial, se ejecutan muchas V _____ y rápidas.",
        answer: "pequeñas",
        hints: ["Mini V", "Cortas", "Cada sprint"]
    },
    {
        type: "multiple",
        category: "Sprint Review",
        question: "¿Qué actividad de prueba se lleva a cabo al final de cada Sprint (Sprint Review)?",
        options: [
            "Pruebas Unitarias",
            "Pruebas de Integración",
            "Pruebas de Aceptación (UAT)",
            "Pruebas de Carga"
        ],
        correct: 2
    },
    {
        type: "complete",
        category: "Caso de Prueba",
        question: "Complete: Un Caso de Prueba es un conjunto de _____ bajo las cuales se determinará si una funcionalidad cumple con los requisitos.",
        answer: "condiciones",
        hints: ["Circunstancias", "Situaciones", "Escenarios"]
    },
    {
        type: "multiple",
        category: "Precondiciones",
        question: "¿Qué se debe especificar en las 'Precondiciones' de un Caso de Prueba?",
        options: [
            "Lo que el sistema debería hacer",
            "El estado del sistema necesario antes de empezar la prueba",
            "Los errores esperados",
            "El tiempo de ejecución"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Resultado Esperado",
        question: "Complete: El Resultado Esperado es lo que el sistema debería hacer si todo está _____.",
        answer: "bien",
        hints: ["Correcto", "Funciona OK", "Sin errores"]
    },
    {
        type: "multiple",
        category: "Tipos de Escenarios",
        question: "Mencione dos tipos de escenarios a probar además del 'Camino Feliz'.",
        options: [
            "Caminos Rápidos y Caminos Lentos",
            "Caminos Alternativos o Excepciones con datos inválidos",
            "Caminos Directos e Indirectos",
            "Caminos Simples y Complejos"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Plan de Pruebas",
        question: "Complete: El propósito del Plan de Pruebas de Alto Nivel es definir la estrategia de _____ y validación.",
        answer: "verificación",
        hints: ["Testing", "Comprobación", "Pruebas"]
    },
    {
        type: "multiple",
        category: "Pruebas de Integración",
        question: "¿Quién es responsable de realizar las Pruebas de Integración?",
        options: [
            "Solo el cliente",
            "Desarrolladores / DevOps / QA Técnico",
            "Solo el gerente de proyecto",
            "Los usuarios finales"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Riesgo vs Problema",
        question: "¿Cuál es la distinción esencial entre un Riesgo y un Problema respecto al tiempo?",
        options: [
            "El riesgo es más importante",
            "El Riesgo es futuro (potencial), el Problema es presente (real)",
            "El riesgo es técnico, el problema es gerencial",
            "No hay diferencia"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Objetivo de Gestión de Riesgos",
        question: "Complete: El objetivo de la gestión de riesgos es evitar que los Riesgos se conviertan en _____.",
        answer: "problemas",
        hints: ["Incidentes", "Realidad", "Presente"]
    },
    {
        type: "multiple",
        category: "Evaluación de Riesgos",
        question: "¿Cuáles son las dos dimensiones utilizadas para evaluar cualitativamente un riesgo?",
        options: [
            "Costo y Tiempo",
            "Probabilidad e Impacto",
            "Frecuencia y Duración",
            "Urgencia e Importancia"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Severidad de Riesgo",
        question: "Complete: La Severidad o Nivel de Riesgo se calcula como Probabilidad _____ Impacto.",
        answer: "por",
        hints: ["Multiplicado", "X", "Símbolo: x"]
    },
    {
        type: "multiple",
        category: "Zona Roja de Riesgos",
        question: "¿Qué representan los riesgos ubicados en la 'Zona Roja' de la Matriz de Probabilidad e Impacto?",
        options: [
            "Riesgos aceptables",
            "Riesgos de baja prioridad",
            "Riesgos Críticos que requieren plan de respuesta inmediato",
            "Riesgos ya resueltos"
        ],
        correct: 2
    },
    {
        type: "multiple",
        category: "Estrategia Mitigar",
        question: "¿Qué implica la estrategia de Mitigar un riesgo?",
        options: [
            "Eliminarlo completamente",
            "Tomar acciones proactivas para reducir probabilidad y/o impacto",
            "Pasarlo a un tercero",
            "No hacer nada"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Estrategia Transferir",
        question: "Complete: Transferir un riesgo implica pasar la responsabilidad a un _____ como AWS con SLA garantizado.",
        answer: "tercero",
        hints: ["Otra entidad", "Proveedor externo", "No nosotros"]
    },
    {
        type: "multiple",
        category: "Estrategia Aceptar",
        question: "¿Qué implica la estrategia de Aceptar un riesgo?",
        options: [
            "Siempre hacer algo al respecto",
            "Reconocer el riesgo y decidir no tomar acciones preventivas",
            "Transferirlo al cliente",
            "Eliminarlo del registro"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Disparador de Riesgo",
        question: "¿Qué es el 'Disparador' (Trigger) de un riesgo?",
        options: [
            "La causa del riesgo",
            "El impacto del riesgo",
            "La señal de alerta que indica que el riesgo está a punto de ocurrir",
            "El costo de mitigarlo"
        ],
        correct: 2
    },
    {
        type: "complete",
        category: "Fórmula de Riesgo",
        question: "Complete: La estructura formal de un riesgo es: 'Debido a [CAUSA], existe el riesgo de que ocurra [_____], lo que resultaría en [EFECTO]'.",
        answer: "evento incierto",
        hints: ["Lo que podría pasar", "Incertidumbre", "Riesgo futuro"]
    },
    {
        type: "multiple",
        category: "Plan de Respuesta",
        question: "¿Qué dos tipos de acciones debe incluir el Plan de Respuesta para un riesgo crítico?",
        options: [
            "Acciones técnicas y administrativas",
            "Acciones Preventivas (AHORA) y Acciones de Contingencia (DESPUÉS)",
            "Acciones rápidas y acciones lentas",
            "Acciones obligatorias y opcionales"
        ],
        correct: 1
    },
    {
        type: "complete",
        category: "Registro de Riesgos",
        question: "Complete: El _____ de Riesgos es un repositorio central y vivo donde se gestiona toda la información de riesgos.",
        answer: "registro",
        hints: ["Risk Register", "Documento central", "Lista maestra"]
    },
    {
        type: "multiple",
        category: "Siguiente Paso después de EDT",
        question: "Después de crear la EDT/WBS, ¿cuál es el siguiente paso fundamental?",
        options: [
            "Comenzar a codificar",
            "Contratar personal",
            "La estimación de esfuerzo, costo y tiempo",
            "Hacer pruebas"
        ],
        correct: 2
    },
    {
        type: "multiple",
        category: "Nodo en Diagrama",
        question: "¿Cómo se dibuja un 'Nodo' en el Diagrama de Despliegue?",
        options: [
            "Como un círculo",
            "Como una flecha",
            "Como una caja 3D (un cubo)",
            "Como un rectángulo plano"
        ],
        correct: 2
    },
    {
        type: "complete",
        category: "Arquitectura y RNF",
        question: "Complete: Los RNF indican cómo de _____ debe hacerlo el sistema, imponiendo restricciones y definiendo la estructura.",
        answer: "bien",
        hints: ["Calidad", "Qué tan bien", "Nivel de desempeño"]
    },
    {
        type: "multiple",
        category: "Decisiones Arquitectónicas",
        question: "¿Qué define la Arquitectura de Software?",
        options: [
            "Solo el código fuente",
            "Las decisiones estructurales de más alto nivel sobre un sistema",
            "La interfaz de usuario",
            "El presupuesto del proyecto"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Arquitectura Monolítica - Desventaja",
        question: "¿Cuál es una principal desventaja de la Arquitectura Monolítica?",
        options: [
            "Es muy cara",
            "Es difícil de escalar, mantener y actualizar",
            "Requiere muchos servidores",
            "No se puede documentar"
        ],
        correct: 1
    },
    {
        type: "multiple",
        category: "Arquitectura Orientada a Eventos",
        question: "Si un RNF requiere soportar 5,000 usuarios concurrentes, ¿hacia qué tipo de arquitectura se podría empujar el diseño?",
        options: [
            "Arquitectura Monolítica",
            "Arquitectura en Capas simple",
            "Microservicios o Arquitectura Orientada a Eventos",
            "Arquitectura Cliente-Servidor básica"
        ],
        correct: 2
    }
];

// Variables del estado del juego
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let selectedAnswer = null;

// Elementos del DOM
const questionCard = document.getElementById('question-card');
const questionType = document.getElementById('question-type');
const questionCategory = document.getElementById('question-category');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnSubmit = document.getElementById('btn-submit');
const feedback = document.getElementById('feedback');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const btnRestart = document.getElementById('btn-restart');

// Inicializar quiz
function initQuiz() {
    totalQuestionsEl.textContent = questions.length;
    shuffleQuestions();
    showQuestion();
}

// Mezclar preguntas
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Mostrar pregunta actual
function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    
    questionType.textContent = question.type === 'multiple' ? '📝 Opción Múltiple' : '✍️ Completar';
    questionCategory.textContent = question.category;
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    feedback.innerHTML = '';
    feedback.className = 'feedback';
    selectedAnswer = null;
    btnSubmit.disabled = false;
    
    if (question.type === 'multiple') {
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => selectOption(index, optionDiv));
            optionsContainer.appendChild(optionDiv);
        });
    } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Escribe tu respuesta aquí...';
        input.id = 'answer-input';
        input.addEventListener('input', () => {
            selectedAnswer = input.value.trim();
        });
        optionsContainer.appendChild(input);
    }
}

// Seleccionar opción
function selectOption(index, element) {
    playClickSound();
    
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    
    element.classList.add('selected');
    selectedAnswer = index;
}

// Verificar respuesta
btnSubmit.addEventListener('click', () => {
    if (selectedAnswer === null && selectedAnswer !== 0) {
        playIncorrectSound();
        alert('Por favor, selecciona o escribe una respuesta');
        return;
    }
    
    const question = questions[currentQuestionIndex];
    let isCorrect = false;
    
    if (question.type === 'multiple') {
        isCorrect = selectedAnswer === question.correct;
        
        const allOptions = document.querySelectorAll('.option');
        allOptions.forEach((opt, index) => {
            opt.classList.add('disabled');
            if (index === question.correct) {
                opt.classList.add('correct');
            } else if (index === selectedAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
    } else {
        const userAnswer = selectedAnswer.toLowerCase().trim();
        const correctAnswer = question.answer.toLowerCase().trim();
        isCorrect = userAnswer === correctAnswer || userAnswer.includes(correctAnswer);
        
        const input = document.getElementById('answer-input');
        input.disabled = true;
        
        if (isCorrect) {
            input.style.borderColor = '#10b981';
            input.style.background = '#d1fae5';
        } else {
            input.style.borderColor = '#ef4444';
            input.style.background = '#fee2e2';
        }
    }
    
    if (isCorrect) {
        playCorrectSound();
        correctAnswers++;
        correctCountEl.textContent = correctAnswers;
        feedback.className = 'feedback correct';
        feedback.innerHTML = '✅ ¡Correcto! Excelente trabajo.';
    } else {
        playIncorrectSound();
        incorrectAnswers++;
        incorrectCountEl.textContent = incorrectAnswers;
        feedback.className = 'feedback incorrect';
        
        if (question.type === 'multiple') {
            feedback.innerHTML = `❌ Incorrecto. <strong>Respuesta correcta: ${question.options[question.correct]}</strong>`;
        } else {
            feedback.innerHTML = `❌ Incorrecto. <strong>Respuesta correcta: ${question.answer}</strong>`;
        }
    }
    
    btnSubmit.disabled = true;
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 3000);
});

// Mostrar resultados
function showResults() {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    document.getElementById('final-percentage').textContent = percentage + '%';
    document.getElementById('final-correct').textContent = correctAnswers;
    document.getElementById('final-incorrect').textContent = incorrectAnswers;
    document.getElementById('final-total').textContent = questions.length;
    
    const messageEl = document.getElementById('score-message');
    if (percentage >= 90) {
        messageEl.textContent = '¡Excelente! Dominas el tema perfectamente.';
        playCorrectSound();
    } else if (percentage >= 70) {
        messageEl.textContent = '¡Muy bien! Tienes un buen conocimiento.';
    } else if (percentage >= 50) {
        messageEl.textContent = 'Buen intento. Sigue estudiando para mejorar.';
    } else {
        messageEl.textContent = 'Necesitas repasar más el material.';
    }
}

// Reiniciar quiz
btnRestart.addEventListener('click', () => {
    playClickSound();
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    
    correctCountEl.textContent = '0';
    incorrectCountEl.textContent = '0';
    
    resultsContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    
    shuffleQuestions();
    showQuestion();
});

// Iniciar quiz al cargar
initQuiz();