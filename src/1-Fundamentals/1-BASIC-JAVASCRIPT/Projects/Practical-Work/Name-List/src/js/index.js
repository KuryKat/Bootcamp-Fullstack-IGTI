window.addEventListener('load', start)

const globalNames = ["Um", "Dois", "Três"]
var isEditing = false
var currentIndex = null;

function start() {
    console.log("Olá Mundo")
    preventFormSubmit()
    renderNames()

    const inputName = document.querySelector("#inputName")
    textInputFunctions(inputName)
}

/**
 * Previne Que a Página recarregue ao enviar o formulário
 */
function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault()
    }
    let form = document.querySelector("form")
    form.addEventListener('submit', handleFormSubmit)
}


/**
 * Define as funções ao Input Parâmetro:
 *  - Ativa ao Carregar a Página
 *  - Salva e Renderiza o texto ao Enviar o Formulário
 * @param {HTMLFormElement} input 
 */
function textInputFunctions(input) {

    function insertName(newName) {
        globalNames.push(newName)
    }

    function updateName(editedName) {
        globalNames[currentIndex] = editedName
    }

    function handleTyping(event) {
        let hasText = !!event.target.value && event.target.value.trim() !== ""

        if (!hasText) {
            clearInput(input)
            return
        }


        if (event.key === "Enter") {
            if (isEditing) {
                updateName(event.target.value)
            } else {
                insertName(event.target.value)
            }
            isEditing = false
            clearInput(input)
            renderNames()
        }
    }

    input.focus()
    input.addEventListener('keyup', handleTyping)
}

/**
 * Renderiza os Nomes na Tela do Usuário
 */
function renderNames() {
    let input = document.querySelector("#inputName")

    function createDeleteButton(index) {

        function deleteName() {
            globalNames.splice(index, 1)
            renderNames();
            clearInput(input)
        }

        let button = document.createElement("button")
        button.textContent = "x"
        button.classList.add("deleteButton")
        button.addEventListener('click', deleteName)
        return button
    }

    function createSpan(name, index) {
        function editName() {
            input.value = name
            input.focus();
            isEditing = true
            currentIndex = index
        }

        let span = document.createElement("span")
        span.textContent = name
        span.classList.add("clickable")
        span.addEventListener('click', editName)
        return span
    }

    let divNames = document.querySelector("#names")
    divNames.innerHTML = ""

    let ul = document.createElement("ul")

    for (let i = 0; i < globalNames.length; i++) {
        let currentName = globalNames[i]
        let button = createDeleteButton(i)
        let span = createSpan(currentName, i)

        let li = document.createElement("li")
        li.appendChild(button)
        li.appendChild(span)

        ul.appendChild(li)
    }

    divNames.appendChild(ul)
}

/**
 * Limpa o Input e Foca nele novamente :D
 * @param {HTMLFormElement} input 
 */
function clearInput(input) {
    input.value = ""
    input.focus()
}