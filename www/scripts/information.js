"use strict";

/** 
 * @class Guarda toda informação necessaria na execução do exercicio 
 * @constructs Informacao
 * @param {string} id - id do elemento HTML que contém a informação.
 * 
 * @property {string} id - id do elemento HTML que contém a informação.
 * @property {alunos[]} aluno - Array de objetos do tipo Aluno, para guardar todos os alunos do nosso sistema
 * @property {turmas[]} turma - Array de objetos do tipo Turma, para guardar todas as turmas do nosso sistema
 * @property {disciplinas[]} disciplina - Array de objetos do tipo Disciplina, para guardar todas as disciplinas do nosso sistema
 * @property {inscricoes[]} inscricao - Array de objetos do tipo Inscrição, para guardar todas as inscrições do nosso sistema
 * @property {revisoes[]} revisao - Array de objetos do tipo Disciplina, para guardar todas as revisões do nosso sistema
 */
class Information {
    constructor(id) {
        this.id = id;
        this.alunos = [];
        this.turmas = [];
        this.disciplinas = [];
        this.inscricoes = [];
        this.revisoes = [];
    }
    //Home
    showHome() {
        document.getElementById("headerTitle").textContent = "Home";
        replaceChilds(this.id);
        document.getElementById("main_column").style.display = "block";
        document.getElementById("listaTurmas").style.display = "none";
        document.getElementById("infoTurma").style.display = "none";
        document.getElementById("listaAlunos").style.display = "none";
        document.getElementById("listaDisciplinas").style.display = "none";
        document.getElementById("listaInscricoes").style.display = "none";
        document.getElementById("listaRevisoes").style.display = "none";
        document.getElementById("creditos").style.display = "none";
    };
    //Créditos
    showCreditos() {
        document.getElementById("headerTitle").textContent = "Créditos";
        replaceChilds(this.id);
        document.getElementById("main_column").style.display = "none";
        document.getElementById("listaTurmas").style.display = "none";
        document.getElementById("infoTurma").style.display = "none";
        document.getElementById("listaAlunos").style.display = "none";
        document.getElementById("listaDisciplinas").style.display = "none";
        document.getElementById("listaInscricoes").style.display = "none";
        document.getElementById("listaRevisoes").style.display = "none";
        document.getElementById("creditos").style.display = "block";
    };

    //Turmas
    showTurmas() {
        document.getElementById("headerTitle").textContent = "Turmas";

        let table = document.createElement("table");

        let th = new tableLine(new Turma(), true);

        table.appendChild(th);

        this.turmas.forEach(turma => {
            let tr = tableLine(turma, false);
            table.appendChild(tr);
        });

        //populate turmaAno
        var select = document.getElementById("turmaAno");
        for(var i = 2022; i >= 2015; --i) {
            var option = document.createElement('option');
            option.text = option.value = i;
            select.add(option, 0);
        }

        replaceChilds("divInformation", table);

        document.getElementById("main_column").style.display = "none";
        document.getElementById("listaTurmas").style.display = "block";
        document.getElementById("infoTurma").style.display = "none";
        document.getElementById("listaAlunos").style.display = "none";
        document.getElementById("listaDisciplinas").style.display = "none";
        document.getElementById("listaInscricoes").style.display = "none";
        document.getElementById("listaRevisoes").style.display = "none";
        document.getElementById("creditos").style.display = "none";
    };

    /**
    Gerador de IDs únicas (para localDB)
    geradorId(arrayAVerificar) {
        let generatedId;
        for (let i = 0; i < arrayAVerificar.length; i++) {
            if(arrayAVerificar[i].idTurma == arrayAVerificar.length+1){
                return generatedId = arrayAVerificar.length+2;
            }
        }
    };
    */

    addTurma() {
        let tNome = document.getElementById("turmaNome").value;
        let tAno = document.getElementById("turmaAno").value;
        let tNResp = document.getElementById("turmaDocente").value;
        let tEResp = document.getElementById("turmaDocenteEmail").value;
        let tCurso = document.getElementById("turmaCurso").value;

        let turma = new Turma(this.turmas.length+1, tNome, tAno, tNResp, tEResp, tCurso);

        this.turmas.push(turma);
        this.showTurmas();

        localStorage.setItem('turma', JSON.stringify(this.turmas));
    };

    updateTurma() {
        let tId = document.getElementById("turmaId").value;
        let tAno = document.getElementById("turmaAno").value;
        let tNome = document.getElementById("turmaNome").value;
        let tCurso = document.getElementById("turmaCurso").value;
        let tNResp = document.getElementById("turmaDocente").value;
        let tEResp = document.getElementById("turmaDocenteEmail").value;

        for (let i = 0; i < this.turmas.length; i++) {
            if (this.turmas[i].idTurma == tId) {
                this.turmas[i].ano = tAno;
                this.turmas[i].nome = tNome;
                this.turmas[i].curso = tCurso;
                this.turmas[i].responsavel = tNResp;
                this.turmas[i].email = tEResp;
            }
        }
        this.showTurmas();

        localStorage.setItem('turma', JSON.stringify(this.turmas));
    };

    deleteTurma() {
        let idTurma = document.getElementById("turmaId").value;
        let encontra = 0;
        let indice, i;
        for (i = 0; i < this.turmas.length; i++) {
            if (this.turmas[i].idTurma == idTurma) {
                encontra = 1;
                indice = i;
            }
        }
        if (encontra == 1) {
            this.turmas.splice(indice, 1);
        } else {
            alert("Não existe uma turma com esse código")
        }

        this.showTurmas();

        localStorage.setItem('turma', JSON.stringify(this.turmas));

    };

    //Info. Turma
    showInfoTurma() {
        document.getElementById("headerTitle").textContent = "Informação da Turma";

        let table = document.createElement("table");

        let th = new tableLine(new Aluno(), true);

        table.appendChild(th);

        this.alunos.forEach(aluno => {
            let tr = tableLine(aluno, false);
            table.appendChild(tr);
        });

        replaceChilds("divInformation", table);

        document.getElementById("main_column").style.display = "none";
        document.getElementById("listaTurmas").style.display = "none";
        document.getElementById("infoTurma").style.display = "block";
        document.getElementById("listaAlunos").style.display = "none";
        document.getElementById("listaDisciplinas").style.display = "none";
        document.getElementById("listaInscricoes").style.display = "none";
        document.getElementById("listaRevisoes").style.display = "none";
        document.getElementById("creditos").style.display = "none";
    };
    //Alunos
    showAlunos() {
        document.getElementById("headerTitle").textContent = "Alunos";

        let table = document.createElement("table");

        let th = new tableLine(new Aluno(), true);

        table.appendChild(th);

        this.alunos.forEach(aluno => {
            let tr = tableLine(aluno, false);
            table.appendChild(tr);
        });

        replaceChilds("divInformation", table);

        document.getElementById("main_column").style.display = "none";
        document.getElementById("listaTurmas").style.display = "none";
        document.getElementById("listaAlunos").style.display = "block";
        document.getElementById("listaDisciplinas").style.display = "none";
        document.getElementById("listaInscricoes").style.display = "none";
        document.getElementById("listaRevisoes").style.display = "none";
        document.getElementById("creditos").style.display = "none";
    };

    addAluno() {
        let nome = document.getElementById("nomeAluno").value;
        let nascimento = document.getElementById("nascimentoAluno").value;
        let genero = document.querySelector('input[name="generoAluno"]:checked').value;
        let email = document.getElementById("emailAluno").value;
        let foto = document.getElementById("foto").value;

        let aluno = new Aluno(this.alunos.length+1, nome, nascimento, genero, email, foto);

        this.alunos.push(aluno);
        this.showAlunos();

        localStorage.setItem('aluno', JSON.stringify(this.alunos));
    };

    updateAluno() {
        let alunoID = document.getElementById("alunoID").value;
        let nome = document.getElementById("nomeAluno").value;
        let nascimento = document.getElementById("nascimentoAluno").value;
        let genero = document.getElementById("generoAluno").value;
        let email = document.getElementById("emailAluno").value;
        let foto = document.getElementById("foto").value;

        for (let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].idAluno == alunoID) {
                this.alunos[i].nome = nome;
                this.alunos[i].dataNascimento = nascimento;
                this.alunos[i].genero = genero;
                this.alunos[i].email = email;
                this.alunos[i].foto = foto;

            }
        }
        this.showAlunos();

        localStorage.setItem('aluno', JSON.stringify(this.alunos));
    };

    deleteAluno() {
        let idAluno = document.getElementById("alunoID").value;
        let encontra = 0;
        let indice, i;
        for (i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].idAluno == idAluno) {
                encontra = 1;
                indice = i;
            }
        }
        if (encontra == 1) {
            this.alunos.splice(indice, 1);
        } else {
            alert("Não existe uma disciplina com esse código")
        }


        this.showAlunos();

        localStorage.setItem('aluno', JSON.stringify(this.alunos));
    };

    //Disciplinas
    showDisciplinas() {
        document.getElementById("headerTitle").textContent = "Disciplinas";

        let table = document.createElement("table");

        let th = new tableLine(new Disciplina(), true);

        table.appendChild(th);

        this.disciplinas.forEach(disciplina => {
            let tr = tableLine(disciplina, false);
            table.appendChild(tr);
        });

        replaceChilds("divInformation", table);
        
        document.getElementById("main_column").style.display = "none";
        document.getElementById("listaTurmas").style.display = "none";
        document.getElementById("infoTurma").style.display = "none";
        document.getElementById("listaAlunos").style.display = "none";
        document.getElementById("listaDisciplinas").style.display = "block";
        document.getElementById("listaInscricoes").style.display = "none";
        document.getElementById("listaRevisoes").style.display = "none";
        document.getElementById("creditos").style.display = "none";
    };

    addDisciplina() {
        let dNome = document.getElementById("disciplinaNome").value;
        let dDocente = document.getElementById("disciplinaDocente").value;

        let disciplina = new Disciplina(this.disciplinas.length+1, dNome, dDocente);

        this.disciplinas.push(disciplina);
        this.showDisciplinas();

        localStorage.setItem('disciplina', JSON.stringify(this.disciplinas));
    };

    updateDisciplina() {
        let idDisciplina = document.getElementById("disciplinaId").value;
        let disNome = document.getElementById("disciplinaNome").value;
        let disDocente = document.getElementById("disciplinaDocente").value;

        for (let i = 0; i < this.disciplinas.length; i++) {
            if (this.disciplinas[i].idDisciplina == idDisciplina) {
                this.disciplinas[i].nomeDisciplina = disNome;
                this.disciplinas[i].docenteDisciplina = disDocente;
            }
        }
        this.showDisciplinas();

        localStorage.setItem('disciplina', JSON.stringify(this.disciplinas));
    };

    deleteDisciplina() {
        let idDisciplina = document.getElementById("disciplinaId").value;
        let encontra = 0;
        let indice, i;
        for (i = 0; i < this.disciplinas.length; i++) {
            if (this.disciplinas[i].idDisciplina == idDisciplina) {
                encontra = 1;
                indice = i;
            }
        }
        if (encontra == 1) {
            this.disciplinas.splice(indice, 1);
        } else {
            alert("Não existe uma disciplina com esse código")
        }


        this.showDisciplinas();

        localStorage.setItem('disciplina', JSON.stringify(this.disciplinas));
    };

    //Inscrição
    showInscricoes() {
        document.getElementById("headerTitle").textContent = "Inscrições";

        let table = document.createElement("table");

        let th = new tableLine(new Inscricao(), true);

        table.appendChild(th);

        this.inscricoes.forEach(inscricao => {
            let tr = tableLine(inscricao, false);
            table.appendChild(tr);
        });
        
        //popular ids disciplina para escolha
        let selectdis = document.getElementById('disciplinaInsId');
        replaceChilds('disciplinaInsId');
        this.disciplinas.map(disciplina => {
            let option = document.createElement('option');
            option.value = disciplina.idDisciplina;
            option.textContent = disciplina.nomeDisciplina;
            selectdis.appendChild(option);
        })

        //popular ids aluno para escolha
        let selectal = document.getElementById('alunoInsId');
        replaceChilds('alunoInsId');
        this.alunos.map(aluno => {
            let option = document.createElement('option');
            option.value = aluno.idAluno;
            option.textContent = aluno.nome;
            selectal.appendChild(option);
        })

        // populate dropdown nota
        var selectn = document.getElementById("nota");
        for(var i = 0; i <= 20; ++i) {
            var option = document.createElement('option');
            option.text = option.value = i;
            selectn.add(option, 0);
        }

        replaceChilds("divInformation", table);

        document.getElementById("main_column").style.display = "none";
        document.getElementById("listaTurmas").style.display = "none";
        document.getElementById("infoTurma").style.display = "none";
        document.getElementById("listaAlunos").style.display = "none";
        document.getElementById("listaDisciplinas").style.display = "none";
        document.getElementById("listaInscricoes").style.display = "block";
        document.getElementById("listaRevisoes").style.display = "none";
    };

    addInscricao() {
        let insDisID = document.getElementById("disciplinaInsId").value;
        let insAluID = document.getElementById("alunoInsId").value;
        let nota = document.querySelector('input[name="nota"]:checked').value;
        let encontraDis = 0;
        let encontraAlu = 0;
        for (let i = 0; i < this.disciplinas.length; i++) {
            if (this.disciplinas[i].idDisciplina == insDisID) {
                encontraDis = 1;
            }
        }
        for (let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].idAluno == insAluID) {
                encontraAlu = 1;
            }
        }
        if (encontraAlu == 1 && encontraDis == 1) {
            let inscricao = new Inscricao(this.inscricoes.length+1, insDisID, insAluID, nota);

            this.inscricoes.push(inscricao);
        }

        this.showInscricoes();

        localStorage.setItem('inscricao', JSON.stringify(this.inscricoes));
    }

    updateInscricao() {
        let insID = document.getElementById("inscricaoId").value;
        let insDisID = document.getElementById("disciplinaInsId").value;
        let insAluID = document.getElementById("alunoInsId").value;
        let nota = document.getElementById("nota").value;

        for (let i = 0; i < this.inscricoes.length; i++) {
            if (this.inscricoes[i].id == insID) {
                this.inscricoes[i].idDisciplina = insDisID;
                this.inscricoes[i].idAluno = insAluID;
                this.inscricoes[i].nota = nota;

            }
        }
        this.showInscricoes();

        localStorage.setItem('incricao', JSON.stringify(this.inscricoes));
    };

    deleteInscricao() {
        let insID = document.getElementById("inscricaoId").value;
        let encontra = 0;
        let indice, i;
        for (i = 0; i < this.inscricoes.length; i++) {
            if (this.inscricoes[i].id == insID) {
                encontra = 1;
                indice = i;
            }
        }
        if (encontra == 1) {
            this.inscricoes.splice(indice, 1);
        } else {
            alert("Não existe uma inscrição com esse código")
        }

        this.showInscricoes();

        localStorage.setItem('inscricao', JSON.stringify(this.inscricoes));

    };

    //Revisões
    showRevisoes() {
        document.getElementById("headerTitle").textContent = "Revisões";

        let table = document.createElement("table");

        let th = new tableLine(new Revisao(), true);

        table.appendChild(th);

        this.revisoes.forEach(revisao => {
            let tr = tableLine(revisao, false);
            table.appendChild(tr);
        });

        let selectdis = document.getElementById('disciplinaRevId');
        replaceChilds('disciplinaRevId');
        this.disciplinas.map(disciplina => {
            let option = document.createElement('option');
            option.value = disciplina.idDisciplina;
            option.textContent = disciplina.nomeDisciplina;
            selectdis.appendChild(option);
        });

        let selectal = document.getElementById('revisaoAlunoId');
        replaceChilds('revisaoAlunoId');
        this.alunos.map(aluno => {
            let option = document.createElement('option');
            option.value = aluno.idAluno;
            option.textContent = aluno.nome;
            selectal.appendChild(option);
        })

        var selectar = document.getElementById("notaAntesRevisao");
        for(var i = 0; i <= 20; ++i) {
            var option = document.createElement('option');
            option.text = option.value = i;
            selectar.add(option, 0);
        }

        var selectdr = document.getElementById("notaDepoisRevisao");
        for(var i = 0; i <= 20; ++i) {
            var option = document.createElement('option');
            option.text = option.value = i;
            selectdr.add(option, 0);
        }

        // ^^ to do (otimizar)

        replaceChilds("divInformation", table);

        document.getElementById("main_column").style.display = "none";
        document.getElementById("listaTurmas").style.display = "none";
        document.getElementById("infoTurma").style.display = "none";
        document.getElementById("listaAlunos").style.display = "none";
        document.getElementById("listaDisciplinas").style.display = "none";
        document.getElementById("listaInscricoes").style.display = "none";
        document.getElementById("listaRevisoes").style.display = "block";
        document.getElementById("creditos").style.display = "none";
    };

    addRevisao() {
        let rData = document.getElementById("dataRevisao").value;
        let rDisciplinaId = document.getElementById("disciplinaRevId").value;
        let rAlunoId = document.getElementById("revisaoAlunoId").value;
        let rNotaAntesRevisao = document.getElementById("notaAntesRevisao").value;
        let rNotaDepoisRevisao = document.getElementById("notaDepoisRevisao").value;
        let rEfetivada = document.querySelector('input[name="efetivada"]:checked').value;
        let rFechada = document.querySelector('input[name="fechada"]:checked').value;
        let encontraDis = 0;
        let encontraAlu = 0;
        for (let i = 0; i < this.disciplinas.length; i++) {
            if (this.disciplinas[i].idDisciplina == rDisciplinaId) {
                encontraDis = 1;
            }
        }
        for (let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].idAluno == rAlunoId) {
                encontraAlu = 1;
            }
        }
        if (encontraAlu == 1 && encontraDis == 1) {
            let revisao = new Revisao(this.revisoes.length+1, rData, rDisciplinaId, rAlunoId, rNotaAntesRevisao, rNotaDepoisRevisao, rEfetivada, rFechada);

            this.revisoes.push(revisao);
        }

        this.showRevisoes();

        localStorage.setItem('revisao', JSON.stringify(this.revisoes));
    };

    updateRevisao() {
        let rID = document.getElementById("revisaoId").value;
        let rData = document.getElementById("dataRevisao").value;
        let rDisciplinaId = document.getElementById("disciplinaRevId").value;
        let rAlunoId = document.getElementById("revisaoAlunoId").value;
        let rNotaAntesRevisao = document.getElementById("notaAntesRevisao").value;
        let rNotaDepoisRevisao = document.getElementById("notaDepoisRevisao").value;
        let rEfetivada = document.querySelector('input[name="efetivada"]:checked').value;
        let rFechada = document.querySelector('input[name="fechada"]:checked').value;

        for (let i = 0; i < this.revisoes.length; i++) {
            if (this.revisoes[i].id == rID) {
                this.revisoes[i].data = rData;
                this.revisoes[i].idDisciplina = rDisciplinaId;
                this.revisoes[i].idAluno = rAlunoId;
                this.revisoes[i].notaAntesRevisao = rNotaAntesRevisao;
                this.revisoes[i].notaDepoisRevisao = rNotaDepoisRevisao;
                this.revisoes[i].efetivada = rEfetivada;
                this.revisoes[i].fechada = rFechada;
            }
        }
        this.showRevisoes();

        localStorage.setItem('disciplina', JSON.stringify(this.revisoes));
    };

    deleteRevisao() {
        let idRevisao = document.getElementById("revisaoId").value;
        let encontra = 0;
        let indice, i;
        for (i = 0; i < this.revisoes.length; i++) {
            if (this.revisoes[i].id == idRevisao) {
                encontra = 1;
                indice = i;
            }
        }
        if (encontra == 1) {
            this.revisoes.splice(indice, 1);
        } else {
            alert("Não existe uma revisão com esse código")
        }

        this.showRevisoes();

        localStorage.setItem('revisao', JSON.stringify(this.revisoes));
    };
}