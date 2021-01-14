const path = require('path')
const middleware = require('../../middleware/index')

const FILE_BASE = '/mnt/sdb';

module.exports = {
    httpPort: 3000,
    httpsPort: 3001,

    controllerDir: './api/*/controllers',
    models: './api/*/models',
    // log: { path: '', level: '' },
    cors: '*',
    syncDb: false,
    VVIDParse: false,
    redisSessionKey: 'xingzhen-cms:',
    sessionRule: true,
    httpLog: true,
    cache: true,
    publicUrl: [
        /^\/$/,
        /^\/detail\/.*/i,
    ],
    statics: {
        '/': path.resolve(__dirname, '../../assets'),
        '/doc': path.resolve(__dirname, '../../doc'),
        '/files': path.resolve(FILE_BASE, './files')
    },
    Mysql: {
        username: '',
        password: '',
        database: '',
        host: '',
        port: 3306,
        dialect: 'mysql',
    },
    Redis: {
        host: '',
        port: '6379',
        password: '',
        db: 1,
    },
    ejsView: {
        root: path.join(__dirname, '../../views'),
        layout: 'layout',
        viewExt: 'ejs',
        cache: false,
        debug: false,
    },
    order: [
    ],
}