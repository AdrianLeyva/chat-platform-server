/**
 * Created by adrianaldairleyvasanchez on 2/21/18.
 */
'use strict';

module.exports = {
    APP: {
        NAME: 'Chat platform'
    },
    SERVER: {
        MOCK:{
            HOST: 'localhost',
            PORT: '8120'
        },
        PROD:{
            HOST: 'https://chat-platform.herokuapp.com/',
            PORT: '8120'
        }

    },
    SUPPORT_CLIENT: {
        NAME: 'Usuario de soporte',
        ID: 'S0X21MSSSD3001MBNPWSLX22XX10YY123XNAJX8CWMXBBDBHCBHQUASax0rRppLm',
        SOCKET_ID: '', //It's variable...
        DESCRIPTION: 'Hola, soy el usuario de soporte y estoy presente para ayudarte en lo que requieras.',
        VERSION: '1.0.0',
        DEPLOY_MODE: 'MOCK'
    }
};