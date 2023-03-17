"use strict";

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade disciplina
* @constructs Disciplina
* @param {int} idDisciplina - id da turma
* @param {string} nomeDisciplina - nome da turma
* @param {string} docenteDisciplina - nome da turma abreviado
*/
class Disciplina {
    constructor(idDisciplina, nomeDisciplina, docenteDisciplina) {
        this.idDisciplina = idDisciplina;
        this.nomeDisciplina = nomeDisciplina;
        this.docenteDisciplina = docenteDisciplina;
    }
}