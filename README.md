# Install grunt.
	the following command is to add grunt to your system path so that you can run grunt commod anywhere.
	(This will put the grunt command in your system path, allowing it to be run from anywhere.)
- npm install -g grunt 

# Install grunt-init.
	grunt-init could create some templated files such as Guntfile.js and package.json into your project root diretory.
- npm install -g grunt-init

# Use grunt-init to install init template file.

	clone a exits templated file from github.
	On windows:
- git clone https://github.com/gruntjs/grunt-init-gruntfile.git %USERPROFILE%.grunt-init/gruntfile
	
	On Linux:
- git clone https://github.com/gruntjs/grunt-init-gruntfile.git ~/.grunt-init/gruntfile

# run "grunt-init gruntfile" command to init project with Gruntfile.js and package.json.

# Edit Gruntfile.js to add your grunt tasks.

# Configurate Gruntfile.js
## Add watch & connect grunt-plugin to refresh pages realtime.
- npm install grunt-contrib-connect --save-dev
- npm install grunt-contrib-watch --save-dev

In Gruntfile.js file, we regiter a task to run grunt serve:
<pre>
	grunt.initConfig({
		connect:{
			options:{
				port:8080,
				livereload:35729,
				hostname:'localhost',
			}

		},
		server:{
			options:{
				open:true,
			}
		},
		
		watch:{
			page_refresh:{
				options:{
					livereload:'<%= connect.options.livereload%>'
				}
				files: ['**/*.js', '**/*.html','**/*.css'],
			}
		}

	});
	grunt.registerTask('serve',[
		'connect:server',
		'watch'
	]);
</pre>