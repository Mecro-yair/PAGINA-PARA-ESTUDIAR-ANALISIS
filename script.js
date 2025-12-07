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

// Banco de preguntas
const questions = [
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