// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    development: {
        url: 'http://localhost:3000',
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: 3000
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },
    production: {
        url: 'http://blog.vullum.io',
        updateCheck: true,
        fileStorage: true,
        mail: {
            transport: 'SMTP',
            host: 'smtp.mandrillapp.com',
            options: {
                service: 'Mandrill',
                auth: {
                    user: process.env.MANDRILL_USERNAME,
                    pass: process.env.MANDRILL_KEY
                },
            },
        },
        database: {
            client: 'mysql',
            connection: {
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DB,
                charset: 'utf8'
            }
        },
        server: {
            host: process.env.SERVER_HOST,
            port: process.env.PORT
        }
    },
    // **Developers only need to edit below here**
    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },
    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                user: 'root',
                password: '',
                database: 'ghost_testing',
                charset: 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },
    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host: '127.0.0.1',
                user: 'postgres',
                password: '',
                database: 'ghost_testing',
                charset: 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

// Export config
module.exports = config;

