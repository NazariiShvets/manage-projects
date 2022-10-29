module.exports = {
  presets: ['effector-http-api/babel-preset'],

  plugins: [
    [
      'effector/babel-plugin', {
        reactSsr: false,
        factories: ['@/shared/lib/misc']
      }
    ],
    [
      'babel-plugin-direct-import', {
        modules: [
          '@mui/material',
          '@mui/icons-material'
        ]
      },
    ],

  ]
};
