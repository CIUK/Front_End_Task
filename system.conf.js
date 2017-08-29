System.defaultJSExtensions = true;
System.config({
  baseURL: '.'
});
System.config({
    map: {
      'plugin-babel': 'vendors/plugin-babel/plugin-babel.js',
      'systemjs-babel-build': 'vendors/plugin-babel/systemjs-babel-browser.js',
    },
    transpiler: 'plugin-babel',
  });

System.import('system.map');

System.import('app');
