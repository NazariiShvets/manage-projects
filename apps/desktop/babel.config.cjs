module.exports = {
  presets: ['effector-http-api/babel-preset'],

  plugins: [
    ['effector/babel-plugin', {
      reactSsr: false,
      factories: ['@/shared/lib/misc']
    }]
  ]
};
