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
                        console.log("Database FECHADO -> Empresa.DB \n\n\n\n\n\n\n");
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

    initDb() {
        let db;
        SQLite.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
        )
            .then(DB => {
                db = DB;
                db.transaction(function (tx) {
                    tx.executeSql(
                        "SELECT name FROM sqlite_master WHERE type='table' AND name='usuario'",
                        [],
                        function (tx, result) {
                            console.log('item:', result.rows.length);
                            if (result.rows.length == 0) {
                                tx.executeSql('DROP TABLE IF EXISTS usuario', []);
                                tx.executeSql(
                                    'CREATE TABLE IF NOT EXISTS usuario(' +
                                    'id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50), login VARCHAR(50), senha VARCHAR(50))',
                                    []
                                );
                            }
                        }
                    );
                });
            })

    }//fim do método initDb
    

    //Insere um novo registro na tabela
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

    selectUser(usuario) {
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
                    tx.executeSql('SELECT * FROM usuario WHERE login = AND senha = ?',
                        [
                            usuario.login,
                            usuario.senha
                        ], (tx, results) => {
                            if (results.rowsAffected > 0) {
                                this.props.navigation.navigate('Home')
                            } else {
                                Alert.alert('Erro', 'O login / senha informados não correspondem a nenhum usuario');
                            }
                        });
                })
            })
    }
}