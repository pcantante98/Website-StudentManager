"use strict";

/**
 * Função que será executada quando a página estiver toda carregada, criando a variável global "info" com um objeto Information
 * @memberof window
 * @params {Event} event - objeto que representará o evento
 */
window.onload = function (event) {
    var info = new Information("divInformation");

    if (typeof (Storage) !== "undefined") {
        let turma = JSON.parse(window.localStorage.getItem('turma'));
        let aluno = JSON.parse(window.localStorage.getItem('aluno'));
        let disciplina = JSON.parse(window.localStorage.getItem('disciplina'));
        let inscricao = JSON.parse(window.localStorage.getItem('inscricao'));
        let revisao = JSON.parse(window.localStorage.getItem('revisao'));

        if (turma) {
            info.turmas = turma;
        }
        if (aluno) {
            info.alunos = aluno;
        }
        if (disciplina) {
            info.disciplinas = disciplina;
        }
        if (inscricao) {
            info.inscricoes = inscricao;
        }
        if (revisao) {
            info.revisoes = revisao;
        }
    } else {
        alert("Não suporta localStorage!");
    }
    window.info = info;
};

/**
 * Função que substitui todos os elementos filhos de um elemento HTML por um novo elemento HTML (facilitador de DOM)
 * @param {string} id - id do elemento HTML para o qual se pretende substituir os filhos.
 * @param {HTMLElement} newSon - elemento HTML que será o novo filho.
 */
function replaceChilds(id, newSon) {
    var no = document.getElementById(id);
    while (no.hasChildNodes()) {
        no.removeChild(no.lastChild);
    }
    if (newSon) no.appendChild(newSon);
};

/**
 * Função que recebe um qualquer objeto e retorna dinamicamente uma linha de tabela HTML com informação relativa ao estado das suas propriedades
 * @param {Object} object - objecto do qual vamos transformar o conteudo dos seus atributos em linhas
 * @param {boolean} headerFormat - controla de o formato é cabeçalho ou linha normal
 */
function tableLine(object, headerFormat) {
    var tr = document.createElement("tr");
    var tableCell = null;
    for (var property in object) {
        if ((object[property] instanceof Function))
            continue;
        if (headerFormat) {
            tableCell = document.createElement("th");
            tableCell.textContent = property[0].toUpperCase() + property.substr(1, property.length - 1);
        } else {
            tableCell = document.createElement("td");
            tableCell.textContent = object[property];
        }
        tr.appendChild(tableCell);
    }
    return tr;
};
function tableLine2(object, headerFormat) {
    var tr = document.createElement("tr");
    var tableCell = null;
    for (var property in object) {
        if ((object[property] instanceof Function))
            continue;
        if (headerFormat) {
            tableCell = document.createElement("th");
            tableCell.textContent = property[0].toUpperCase() + property.substr(1, property.length - 1);
        } else {
            tableCell = document.createElement("td");
            // if (property === "idCountry") {
            //     tableCell.textContent = country.name;
            // }
            tableCell.textContent = object[property];
        }
        tr.appendChild(tableCell);
    }
    if (headerFormat) {
        tableCell = document.createElement("th");
        tableCell.textContent = "-";
    } else {
        let link = document.createElement('a');
        link.value = object.id;
        link.href = "javascript: info.deletePerson();";
        link.textContent = "delete";
        tableCell = document.createElement("td");
        tableCell.appendChild(link);
    }
    tr.appendChild(tableCell);
    return tr;
};

// Store value on the browser beyond the duration of the session
localStorage.setItem('key', 'value');
let item = localStorage.getItem('key');