"use strict";

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade aluno 
* @constructs Aluno
* @param {int} id - id do aluno
* @param {string} nome - nome do aluno
* @param {Date} dataNascimento - data de nascimento do aluno
* @param {string} genero - genero do aluno
* @param {string} email - email do aluno
* @param {File} foto - foto do aluno
*/
class Aluno {
    constructor(idAluno, nome, dataNascimento, genero, email, foto) {
        this.idAluno = idAluno;
        this.nome=nome;
        this.dataNascimento=dataNascimento;
        this.genero=genero;
        this.email=email;
        this.foto=foto;
    }
}