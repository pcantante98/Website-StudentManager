"use strict";

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade turma
* @constructs Turma
* @param {int} id - id da turma
* @param {string} name - nome da turma
* @param {string} ano - ano da turma
* @param {string} responsavel - responsavel da turma
* @param {string} email - email do responsavel da turma
* @param {string} curso - curso da turma
*/
class Turma {
    constructor(idTurma, nome, ano, responsavel, email, curso) {
        this.idTurma = idTurma;
        this.nome = nome;
        this.ano = ano;
        this.responsavel = responsavel;
        this.email = email;
        this.curso = curso;
    }
}