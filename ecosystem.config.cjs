module.exports = {
        apps: [{
                name: 'VIRIYAH-FL4-FRONT',
                script: 'pnpm run dev',
                // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
                args: 'one two',
                instances: 1,
                autorestart: true,
                watch: false,
                max_memory_restart: '1G',
                time: true,
                env: {
                        NODE_ENV: 'development',
                        PORT: 4006,
                },
                env_production: {
                        NODE_ENV: 'production',
                        PORT: 4006,
                },
                env_sit: {
                        NODE_ENV: 'sit',
                        PORT: 4006,
                },
        }],

        deploy: {
                production: {
                        user: 'node',
                        host: '192.168.200.26',
                        ref: 'origin/master',
                        repo: 'git@github.com:repo.git',
                        path: '/var/www/production',
                        'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
                },
        } 
};
