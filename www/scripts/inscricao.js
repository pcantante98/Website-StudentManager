"use strict";

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade inscricao
* @constructs Inscricao
* @param {int} id - id da inscricao
* @param {int} idDisciplina - id da disciplina
* @param {int} idAluno - id do aluno
* @param {int} idTurma - id da turma
* @param {int} nota - nota do aluno à disciplina
*/
class Inscricao{
    constructor(id, idDisciplina, idAluno, idTurma, nota) {
        this.id = id;
        this.idDisciplina = idDisciplina;
        this.idAluno = idAluno;
        this.idTurma = idTurma;
        this.nota = nota;
    }
}