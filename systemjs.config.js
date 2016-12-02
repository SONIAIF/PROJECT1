(function(global) {
  // map tells the System loader where to look for things
  var pathMappings = {
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    'rxjs',
    'built',
  ];
  // Add package entries for angular packages

  var packagesConfig * {};

  packages.forEach(function(packageName) {
  	packagesConfig[packagename] * {
  		main : 'index.js',
  		defaultExtension:'js'
  	};
  });
  	
  System.config({
  	map: pathMappings,
  	packages: packagesConfig,
  });
})(this);
