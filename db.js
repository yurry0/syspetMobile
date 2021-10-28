import SQLite from 'react-native-sqlite-storage';
import { Alert } from 'react-native';

SQLite.DEBUG(true);
SQLite.enablePromise(true);
const database_name = 'syspet_mob.db';
const database_version = '1.0';
const database_displayname = 'SQLite React Offline Database';
const database_size = 200000;
export default class Db {
    //Fechar a base de dados
    closeDatabase(db) {
        return new Promise((resolve) => {
            if (db) {
                console.log("FECHANDO DB");
                db.close()
                    .then(status => {
                        console.log("Database FECHADO -> syspet_mob.db \n\n\n\n\n\n\n");
                        resolve();
                    })
                    .catch(error => {
                        this.errorCB(error);
                    });
            } else {
                console.log("syspet_mob.DB não foi ABERTO");
            }
        })
    };
    //Inicializar a base de dados ou cria a tabela

    //Tabelas criadas: USUARIO | CLIENTES | PET | ADOCAO
    initDb() {
        let db;
        SQLite.openDatabase(database_name,
        database_version,
        database_displayname,
        database_size,
        ).then(DB => {
                db = DB;
                db.transaction(function (tx) {
                    tx.executeSql(
                        "SELECT name FROM sqlite_master WHERE type='table' AND name='usuario'",
                        [],
                        function (tx, result) {
                            console.log('item:', result.rows.length);
                            if (result.rows.length == 0) {
                                tx.executeSql('DROP TABLE IF EXISTS usuario', 
                                              'DROP TABLE IF EXISTS cliente',
                                              'DROP TABLE IF EXISTS pet',
                                              'DROP TABLE IF EXISTS adocao',[]);
                                tx.executeSql(
                                    'CREATE TABLE IF NOT EXISTS usuario(' +
                                    'usuario_id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50), usuario VARCHAR(50), senha VARCHAR(50))',
                                    'CREATE TABLE IF NOT EXISTS cliente(' +
                                    'pk_id_cliente INTEGER PRIMARY KEY AUTOINCREMENT, cli_nome VARCHAR(50), cidade VARCHAR(50), cli_rg VARCHAR(50), cli_estado VARCHAR(100), cli_cep VARCHAR(100), cli_endereco VARCHAR(100), cli_bairro VARCHAR(100) cli_email VARCHAR(100))',
                                    'CREATE TABLE IF NOT EXISTS pet(' +
                                    'pk_id_pet INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50), raca VARCHAR(50), sexo VARCHAR(50), idade INTEGER(20), vacinas VARCHAR(100), altura REAL(20), peso REAL(20), img_pet VARCHAR(50), tipo VARCHAR(50), especie VARCHAR(50), pelagem VARCHAR(50), porte VARCHAR(50), adotado NUMERIC(1), data_cadastro DATETIME(28))',
                                    'CREATE TABLE IF NOT EXISTS adocao(' +
                                    'pk_id_adocao INTEGER PRIMARY KEY AUTOINCREMENT, id_cliente INTEGER, id_pet INTEGER, data_adocao DATETIME(28), deletado NUMERIC(1))',
                                    'ALTER TABLE "adocao" ADD CONSTRAINT "id_cliente" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("pk_id_cliente")',
                                    'ALTER TABLE "adocao" ADD CONSTRAINT "id_pet" FOREIGN KEY ("id_pet") REFERENCES "pet"("pk_id_pet")',                                                              
                                    []
                                );
                            }

                            else{
                                console.log('já foi criado mané kkkkk');
                            }
                        }
                    );
                });
            })

    }//fim do método initDb

    
    //Insere um novo registro na tabela USUARIO
    addUsuario(usuario) {
        let db;
        SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
        )
            .then(DB => {
                db = DB;
                db.transaction((tx) => {
                    tx.executeSql('INSERT INTO usuario (nome, login, senha) VALUES (?,?,?)',
                        [usuario.nome, usuario.login, usuario.senha], (tx, results) => {
                            if (results.rowsAffected > 0) {
                                Alert.alert('Cadastro', 'Registro Inserido com Sucesso');
                            } else {
                                Alert.alert('Cadastro', 'Erro no Registro');
                            }
                        });
                })
            })
    }//fim do método initDb

    
    //Insere um novo registro na tabela CLIENTE
    addCliente(cliente) {
        let db;
        SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
        )
            .then(DB => {
                db = DB;
                db.transaction((tx) => {
                    tx.executeSql('INSERT INTO cliente (cli_nome, cidade, cli_rg, cli_estado, cli_cep, cli_endereco, cli_bairro, cli_email ) VALUES (?,?,?,?,?)',
                        [cliente.cli_nome, cliente.cidade, cliente.cli_rg, cliente.cli_estado, cliente.cli_cep, cliente.cli_endereco, cliente.cli_bairro, cliente.cli_email ], (tx, results) => {
                            if (results.rowsAffected > 0) {
                                Alert.alert('Cadastro', 'Registro Inserido com Sucesso');
                            } else {
                                Alert.alert('Cadastro', 'Erro no Registro');
                            }
                        });
                })
            })
    }//fim do método initDb

    

    updateUsuario(usuario) {
        let db;
        SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
        )
            .then(DB => {
                db = DB;
                db.transaction((tx) => {
                    tx.executeSql('UPDATE usuario SET nome = ?, login = ?, senha = ? WHERE id = ?',
                        [
                            usuario.nome,
                            usuario.login,
                            usuario.senha,
                            usuario.id_usuario
                        ], (tx, results) => {
                            if (results.rowsAffected > 0) {
                                Alert.alert('Alteração', 'Dados alterado com Sucesso');
                            } else {
                                Alert.alert('Alteração', 'Erro na alteração');
                            }
                        });
                })
            })
    }
    //Listar os registros da tabela
    listarUsuario() {
        let db;
        SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
        )
            .then(DB => {
                db = DB;
                db.transaction((tx) => {
                    tx.executeSql('SELECT * FROM usuario ORDER BY nome', [], (tx, results) => {
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            console.log(`ID: ${row.id}, Nome: ${row.nome}`);
                            console.log('success');
                        }
                        closeDatabase(db);
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }//fim do método initDb

    deletarUsuario(id) {
        let db;
        SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
        )
            .then(DB => {
                db = DB;
                db.transaction((tx) => {
                    tx.executeSql('DELETE FROM usuario WHERE id = ?',
                        [
                            id
                        ], (tx, results) => {
                            if (results.rowsAffected > 0) {
                                Alert.alert('Exclusão', 'Usuario excluído com Sucesso');
                            } else {
                                Alert.alert('Exclusão', 'Erro na exclusão');
                            }
                        });
                })
            })
    }

    // ----------------------------------------------------------------------------------------------------------------------------------------------- //
    // -------------------------------------------------- LOGIN -------------------------------------------------------------------------------------- // 

    userLogin(usuario) {
        let db;
        SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
        )
            .then(DB => {
                db = DB;
                db.transaction((tx) => {
                    tx.executeSql('SELECT login, senha FROM usuario WHERE (login = ? AND senha = ?)',
                        [
                            usuario.login,
                            usuario.senha
                        ], (tx, result) => {
                            console.log(result);
                            if (result.rows.length > 0) {
                            return true;
                            } else {
                                Alert.alert('Erro', 'O login / senha informados não correspondem a nenhum usuario');
                            }
                        });
                })
            })
    }
}