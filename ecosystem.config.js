module.exports = {
  apps : [{
    name: 'Psycology Test',
    script: './server/app.js',
    watch: '.',
    env: {
      'COMMON_VARIABLE': true
    },
    env_production: {
      NODE_ENV: 'production '
    }
  }/* , {
    script: './service-worker/',
    watch: ['./service-worker']
  } */],

  deploy : {
    production : {
      user : 'ushio',
      host : '106.53.51.186',
      port: '52001',
      ref  : 'origin/master',
      repo : 'git@github.com:jylzs369/psycology-test.git',
      path : '~/www/psycology-test/production',
      ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      env: {
        NODE_ENV: 'production'
      },
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && pm2 startOrReload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
