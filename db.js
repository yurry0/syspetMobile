import SQLite from 'react-native-sqlite-storage';
import { Actions } from 'react-native-router-flux'
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
    // --------------------------------------------------------------------------------------------------------------------------------------------------------//
    // -------------------------------------------------------------------- U S U A R I O ------------------------------------------------------------------//
    //Tabelas criadas: USUARIO
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
                            tx.executeSql('DROP TABLE IF EXISTS usuario', []);
                            tx.executeSql(
                                'CREATE TABLE IF NOT EXISTS usuario(' +
                                'usuario_id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL UNIQUE, senha VARCHAR(50) NOT NULL)', []);
                        }

                        else {
                            console.log('A criação foi bem sucedida');
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
                    tx.executeSql('INSERT INTO usuario (nome, email, senha) VALUES (?,?,?)',
                        [usuario.nome, usuario.email, usuario.senha], (tx, results) => {
                            if (results.rowsAffected > 0) {
                                Alert.alert('Cadastro', 'Registro Inserido com Sucesso');
                                Actions.login()
                            } else {
                                Alert.alert('Cadastro', 'Erro no Registro');
                            }
                        });
                })
            })
    }//fim do método initDb

    confereUsuario(usuario) {
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
                    tx.executeSql('SELECT * FROM usuario WHERE email = ? ', [usuario.email], (tx, results) => {
                        if (results.rowsAffected = 1) {
                            console.log('EMAIL JÁ EXISTE!')
                            Alert.alert('ERRO', 'Já existe um usuário com este email');
                            Actions.refresh('CadastrarUsuario');
                        }

                        else {
                            this.addUsuario(usuario);
                        }
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }

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
                    tx.executeSql('UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?',
                        [
                            usuario.nome,
                            usuario.email,
                            usuario.senha,
                            usuario.usuario_id
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
                            console.log('==================================================================================')
                            console.log(`ID: ${row.usuario_id}, Nome: ${row.nome}, Email: ${row.email},  Senha: ${row.senha} `,);
                            console.log('success');
                        }
                        closeDatabase(db);
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }

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
    // --------------------------------------------------------- L O G I N -------------------------------------------------------------------------- // 

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
                    tx.executeSql('SELECT * FROM usuario WHERE email = ? AND senha = ?',
                        [
                            usuario.email,
                            usuario.senha
                        ], (tx, result) => {
                            if (result.rows.length > 0) {
                                console.log('Retornou verdade');
                                return true;
                            } else {
                                Alert.alert('Erro', 'O login / senha informados não correspondem a nenhum usuario');
                            }
                        });
                })
            })
    }


    // --------------------------------------------------------------------------------------------------------------------------------------------------------- //
    // ---------------------------------------------------------   C L I E N T E  ----------------------------------------------------------------------------- //

    //Inicia Tabela Clientes


    initDbClientes() {
        let db;
        SQLite.openDatabase(database_name,
            database_version,
            database_displayname,
            database_size,
        ).then(DB => {
            db = DB;
            db.transaction(function (tx) {
                tx.executeSql(
                    "SELECT name FROM sqlite_master WHERE type='table' AND name='cliente'",
                    [],
                    function (tx, result) {
                        console.log('item:', result.rows.length);
                        if (result.rows.length == 0) {
                            tx.executeSql('DROP TABLE IF EXISTS cliente', []);
                            tx.executeSql(
                                'CREATE TABLE IF NOT EXISTS cliente(' +
                                'pk_id_cliente INTEGER PRIMARY KEY AUTOINCREMENT, cli_nome VARCHAR(50) NOT NULL, cidade VARCHAR(50) NOT NULL, cli_rg VARCHAR(50) NOT NULL UNIQUE  , cli_estado VARCHAR(100) NOT NULL, cli_cep VARCHAR(100) NOT NULL, cli_endereco VARCHAR(100) NOT NULL, cli_bairro VARCHAR(100) NOT NULL, cli_email VARCHAR(100) UNIQUE NOT NULL)', []);
                        }

                        else {
                            console.log('A criação foi bem sucedida');
                        }
                    }
                );
            });
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
                    tx.executeSql('INSERT INTO cliente (cli_nome, cidade, cli_rg, cli_estado, cli_cep, cli_endereco, cli_bairro, cli_email ) VALUES (?,?,?,?,?,?,?,?)',
                        [cliente.cli_nome, cliente.cidade, cliente.cli_rg, cliente.cli_estado, cliente.cli_cep, cliente.cli_endereco, cliente.cli_bairro, cliente.cli_email], (tx, results) => {
                            if (results.rowsAffected > 0) {
                                Alert.alert('Cadastro', 'Registro Inserido com Sucesso');
                                Actions.ClientesIndex();
                                Actions.refresh({ key: 'ClientesIndex' });


                            } else {
                                Alert.alert('Cadastro', 'Erro no Registro');
                            }
                        });
                })
            })
    }//fim do método initDb

    //AUTENTICAÇÃO DO INSERT CLIENTE

    confereClienteRg(cliente) {
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
                    tx.executeSql('SELECT * FROM cliente WHERE cli_rg = ?', [cliente.cli_rg], (tx, results) => {
                        if (results.rows.length > 0) {
                            console.log('RG JÁ EXITE')
                            Alert.alert('ERRO', 'Já existe um usuário com este RG cadastrado!');
                            Actions.refresh('CadastrarUsuario');
                        }

                        else {

                            this.confereClienteEmail(cliente);
                        }
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }


    confereClienteEmail(cliente) {
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
                    tx.executeSql('SELECT * FROM cliente WHERE cli_email = ?', [cliente.cli_email], (tx, results) => {
                        if (results.rows.length > 0) {
                            console.log('EMAIL JÁ EXISTE!')
                            Alert.alert('ERRO', 'Já existe um cliente com este email');
                            Actions.refresh('CadastrarUsuario');
                        }

                        else {
                            this.addCliente(cliente);
                        }
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }


    updateCliente(cliente) {
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
                    tx.executeSql('UPDATE cliente SET cli_nome = ?, cidade = ?, cli_estado = ?, cli_cep = ?, cli_endereco = ?, cli_bairro = ?, cli_rg = ?, cli_email = ? WHERE pk_id_cliente = ?',
                        [
                            cliente.cli_nome,
                            cliente.cidade,
                            cliente.cli_estado,
                            cliente.cli_cep,
                            cliente.cli_endereco,
                            cliente.cli_bairro,
                            cliente.cli_rg,
                            cliente.cli_email,
                            cliente.pk_id_cliente

                        ], (tx, results) => {
                            if (results.rowsAffected > 0) {

                                Alert.alert('Alteração', 'Dados alterados com Sucesso');
                                Actions.refresh({ key: 'ClientesIndex' });
                                Actions.ClientesIndex();



                            } else {
                                console.log("Nome:" + cliente.cli_nome);
                                console.log("Cidade: " + cliente.cidade);
                                console.log("Estado" + cliente.cli_estado);
                                console.log("CEP" + cliente.cli_cep);
                                console.log("Endereco" + cliente.cli_endereco);
                                console.log("Bairro" + cliente.cli_bairro);
                                console.log('Email: ' + cliente.cli_email);
                                console.log("ID:" + cliente.pk_id_cliente);
                                Alert.alert('Alteração', 'Erro na alteração');
                            }
                        });
                })
            })
    }


    //AUTENTICAÇÃO DO UPDATE CLIENTE


    confereClienteRgEdit(cliente) {
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
                    tx.executeSql('SELECT * FROM cliente WHERE cli_rg = ?', [cliente.cli_rg], (tx, results) => {
                        if (results.rows.length > 1) {
                            console.log('RG JÁ EXITE')
                            Alert.alert('ERRO', 'Já existe um usuário com este RG cadastrado!');
                            Actions.refresh('CadastrarUsuario');
                        }

                        else {

                            this.confereClienteEmailEdit(cliente);
                        }
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }

    confereClienteEmailEdit(cliente) {
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
                    tx.executeSql('SELECT * FROM cliente WHERE cli_email = ?', [cliente.cli_email], (tx, results) => {
                        if (results.rows.length > 1) {
                            console.log('EMAIL JÁ EXISTE!')
                            Alert.alert('ERRO', 'Já existe um cliente com este email');
                            Actions.refresh('CadastrarUsuario');
                        }

                        else {
                            this.updateCliente(cliente);
                        }
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }




    listarCliente() {
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
                    tx.executeSql('SELECT * FROM cliente ORDER BY nome', [], (tx, results) => {
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            console.log('==================================================================================')
                            console.log(`ID: ${row.pk_id_cliente}, Nome do cliente: ${row.cli_nome}, Cidade: ${row.cidade},  CEP: ${row.cli_cep} `,);
                            console.log(`Endereco: ${row.cli_endereco}, Bairro: ${row.cli_bairro}, Email: ${row.cli_email}`,);
                            console.log('success');
                        }
                        closeDatabase(db);
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }

    deletarCliente(id) {
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
                    tx.executeSql('DELETE FROM cliente WHERE pk_id_cliente = ?',
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


    // ----------------------------------------------------------------------------------------------------------------------------------------------------- //
    // --------------------------------------------------------- P E T S ----------------------------------------------------------------------------------- //

    //Inicia Tabela Pets


    initDbPet() {
        let db;
        SQLite.openDatabase(database_name,
            database_version,
            database_displayname,
            database_size,
        ).then(DB => {
            db = DB;
            db.transaction(function (tx) {
                tx.executeSql(
                    "SELECT name FROM sqlite_master WHERE type='table' AND name='pet'",
                    [],
                    function (tx, result) {
                        console.log('item:', result.rows.length);
                        if (result.rows.length == 0) {
                            tx.executeSql('DROP TABLE IF EXISTS pet', []);
                            tx.executeSql(
                                'CREATE TABLE IF NOT EXISTS pet(' +
                                'pk_id_pet INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(50), raca VARCHAR(50), sexo VARCHAR(50), idade VARCHAR(100), vacinas VARCHAR(100), altura VARCHAR(100), peso VARCHAR(100), especie VARCHAR(100), pelagem VARCHAR(100), porte VARCHAR(100), adotado NUMERIC(1), cod_interno VARCHAR(50) NOT NULL UNIQUE)', []);
                        }

                        else {
                            console.log('A criação da tabela PETs foi realizada com sucesso.');
                        }
                    }
                );
            });
        })

    }//fim do método initDb


    //Insere um novo registro na tabela PET


    addPet(pet) {
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
                    tx.executeSql('INSERT INTO pet (nome, raca, sexo, idade, vacinas, altura, peso, especie, pelagem, porte, adotado, cod_interno) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
                        [pet.nome, pet.raca, pet.sexo, pet.idade, pet.vacinas, pet.altura, pet.peso, pet.especie, pet.pelagem, pet.porte, pet.adotado, pet.cod_interno], (tx, results) => {

                            if (results.rowsAffected > 0) {
                                Alert.alert('Cadastro', 'Registro Inserido com Sucesso');
                                Actions.PetsIndex();
                                Actions.refresh({ key: 'ClientesIndex' });
                            } else {
                                Alert.alert('Cadastro', 'Erro no Registro');
                            }
                        });
                })
            })
    }//fim do método initDb

    conferePetAdd(pet) {
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
                    tx.executeSql('SELECT * FROM pet WHERE cod_interno = ?', [pet.cod_interno], (tx, results) => {

                        if (results.rows.length > 0) {
                            console.log('PET JÁ EXISTE!');
                            console.log('PORQUE');
                            Alert.alert('ERRO', 'Já existe um pet com este cadastro');
                            Actions.refresh('PetsCadastrar');
                        }

                        else {
                            this.addPet(pet);
                        }
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }



    updatePet(pet) {
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
                    tx.executeSql('UPDATE pet SET nome = ?, raca = ?, sexo = ?, idade = ? , vacinas = ?, altura = ?, peso = ?, especie = ?, pelagem = ?, porte = ?, adotado = ?, cod_interno = ? WHERE pk_id_pet = ?',
                        [
                            pet.nome,
                            pet.raca,
                            pet.sexo,
                            pet.idade,
                            pet.vacinas,
                            pet.altura,
                            pet.peso,
                            pet.especie,
                            pet.pelagem,
                            pet.porte,
                            pet.adotado,
                            pet.cod_interno,
                            pet.pk_id_pet

                        ], (tx, results) => {
                            if (results.rowsAffected > 0) {
                                Alert.alert('Alteração', 'Dados alterado com Sucesso');
                                Actions.PetsIndex();
                                Actions.refresh({ key: 'ClientesIndex' });
                            } else {
                                Alert.alert('Alteração', 'Erro na alteração');
                            }
                        });
                })
            })
    }

    conferePetEdit(pet) {
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
                    tx.executeSql('SELECT * FROM pet WHERE cod_interno = ?', [pet.cod_interno], (tx, results) => {

                        if (results.rows.length < 1) {
                            console.log('PET INEXISTENTE');
                            console.log('ERROR');
                            Alert.alert('ERRO LÓGICO', 'Você está editando um PET que não está cadastrado no sistema.');
                            Actions.refresh('PetsEditar');
                        }

                        else {
                            this.updatePet(pet);
                        }
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }

    listarPet() {
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
                    tx.executeSql('SELECT * FROM pet ORDER BY nome', [], (tx, results) => {
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            console.log('==================================================================================')
                            console.log(`ID: ${row.pk_id_pet}, Nome do cliente: ${row.nome}, Raça: ${row.raca},  Vacinas: ${row.vacinas} `,);
                            console.log('success');
                        }
                        closeDatabase(db);
                    });
                }).catch(error => {
                    console.log(error);
                });
            })
    }

    deletarPet(id) {
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
                    tx.executeSql('DELETE FROM pet WHERE pk_id_pet = ?',
                        [
                            id
                        ], (tx, results) => {
                            if (results.rowsAffected > 0) {
                                Alert.alert('Exclusão', 'Pet excluído com Sucesso');
                            } else {
                                Alert.alert('Exclusão', 'Erro na exclusão');
                            }
                        });
                })
            })
    }

    // --------------------------------------------------------------------------------------------------------------------------------------------------------//
    // -------------------------------------------------------------------  A D O C A O   ----------------------------------------------------------------------//
    //Tabelas criadas: ADOCAO

    initDbAdocao() {
        let db;
        SQLite.openDatabase(database_name,
            database_version,
            database_displayname,
            database_size,
        ).then(DB => {
            db = DB;
            db.transaction(function (tx) {
                tx.executeSql(
                    "SELECT name FROM sqlite_master WHERE type='table' AND name='adocao'",
                    [],
                    function (tx, result) {
                        console.log('item:', result.rows.length);
                        if (result.rows.length == 0) {
                            tx.executeSql('DROP TABLE IF EXISTS adocao', []);
                            tx.executeSql(
                                'CREATE TABLE adocao (' +
                                'pk_id_adocao INTEGER NOT NULL, id_cliente INTEGER NOT NULL, id_pet INTEGER NOT NULL, PRIMARY KEY(pk_id_adocao AUTOINCREMENT), FOREIGN KEY(id_cliente) REFERENCES cliente(pk_id_cliente), FOREIGN KEY(id_pet) REFERENCES pet(pk_id_pet) )', []);
                        }
                        else {
                            console.log('A criação foi bem sucedida');
                        }
                    }
                );
            });
        })
    }

    addAdocao(adocao) {
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
                    tx.executeSql('INSERT INTO adocao(id_cliente, id_pet) VALUES (?,?)',
                        [adocao.id_cliente, adocao.id_pet], (tx, results) => {

                            if (results.rowsAffected > 0) {
                                Alert.alert('Cadastro', 'Adoção inserida com Sucesso');
                                Actions.PetsIndex();
                                Actions.AdocoesIndex('');
                                Actions.refresh({ key: 'AdocoesIndex' });
                            } else {
                                Alert.alert('Cadastro', 'Erro no Registro');
                            }
                        });
                })
            })
    }//fim do método initDb

}