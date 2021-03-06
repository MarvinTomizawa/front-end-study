'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, stores, version, dbName, connection, close, ConnectionFactory;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            stores = ['negociacoes'];
            version = 1;
            dbName = 'aluraframe';

            _export('ConnectionFactory', ConnectionFactory = function () {
                function ConnectionFactory() {
                    _classCallCheck(this, ConnectionFactory);

                    throw new Error("Não é possível instanciar esta classe");
                }

                _createClass(ConnectionFactory, null, [{
                    key: 'getConnection',
                    value: function getConnection() {

                        return new Promise(function (resolve, reject) {
                            var openRequest = window.indexedDB.open(dbName, version);

                            openRequest.onupgradeneeded = function (event) {
                                var conection = event.target.result;
                                ConnectionFactory._createStores(conection);
                            };

                            openRequest.onsuccess = function (event) {
                                if (!connection) {
                                    connection = event.target.result;
                                    close = connection.close.bind(connection);
                                    connection.close = function () {
                                        throw new Error("A conection deve ser fechada pela conection factory");
                                    };
                                }
                                resolve(connection);
                            };

                            openRequest.onerror = function (event) {
                                reject(event.target.error);
                            };
                        });
                    }
                }, {
                    key: '_createStores',
                    value: function _createStores(conection) {
                        stores.forEach(function (store) {
                            if (conection.objectStoreNames.contains(store)) {
                                conection.deleteObjectStore(store);
                            }

                            conection.createObjectStore(store, { autoIncrement: true });
                        });
                    }
                }, {
                    key: 'closeConnection',
                    value: function closeConnection() {
                        if (connection) {
                            close();
                            connection = null;
                        }
                    }
                }]);

                return ConnectionFactory;
            }());

            _export('ConnectionFactory', ConnectionFactory);
        }
    };
});
//# sourceMappingURL=ConnectionFactory.js.map