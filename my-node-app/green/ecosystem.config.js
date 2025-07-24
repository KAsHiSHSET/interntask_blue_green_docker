module.exports = {
  apps: [{
    name: process.env.INSTANCE_NAME || 'node-app',
    script: 'app.js',
    watch: false,
    env: {
      PORT: process.env.PORT || 3000
    }
  }]
}