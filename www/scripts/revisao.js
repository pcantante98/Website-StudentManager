"use strict";

/** 
* @class Estrutura com capacidade de armazenar o estado de uma entidade Revisão
* @constructs Revisao
* @param {int} id - id da revisão
* @param {date} data - dia da revisão
* @param {int} idDisciplina - id da disciplina
* @param {int} idAluno - id do aluno
* @param {string} notaAntesRevisao - nota antes da revisão
* @param {string} notaDepoisRevisao - nota depois da revisão
* @param {boolean} efetivada - revisao efetivada (s/n)
* @param {boolean} fechada - revisao fechada (s/n)
*/
class Revisao{
    constructor(id, data, idDisciplina, idAluno, notaAntesRevisao, notaDepoisRevisao, efetivada, fechada) {
        this.id = id;
        this.data = data;
        this.idDisciplina = idDisciplina;
        this.idAluno = idAluno;
        this.notaAntesRevisao = notaAntesRevisao;
        this.notaDepoisRevisao = notaDepoisRevisao;
        this.efetivada = efetivada;
        this.fechada = fechada;
    }
}