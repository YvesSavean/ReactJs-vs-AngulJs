require.config({
	packages : [ {
		name : 'rest',
		location : 'bower_components/rest',
		main : 'browser'
	}, {
		name : 'when',
		location : 'bower_components/when',
		main : 'when'
	}, {
		name : 'react',
		location : 'bower_components/react',
		main : 'react'
	}, {
		name : 'JSXTransformer',
		location : 'bower_components/babel',
		main : 'browser'
	}, {
		name : 'jsx',
		location : 'bower_components/requirejs-react-jsx',
		main : 'jsx'
	}, {
		name : 'text',
		location : 'bower_components/requirejs-text',
		main : 'text'
	} ],
	paths: {
	        "reactDom": 'bower_components/react/react-dom'
	},
	shim : {
		"react" : {
			"exports" : "React",
			"exports" : "ReactDOM"
		}
	},
	config : {
		babel : {
			sourceMaps : "inline", // One of [false, 'inline', 'both']. See
			// https://babeljs.io/docs/usage/options/
			fileExtension : ".jsx" // Can be set to anything, like .es6 or .js.
		// Defaults to .jsx
		}
	}
});

define(function(require) {
	'use strict';

	document.addEventListener('DOMContentLoaded', new function() {

		require('jsx!app');

	}, false);

});