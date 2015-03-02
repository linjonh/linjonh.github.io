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
					livereload:'&lt;%= connect.options.livereload%>'
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

# Intall Jekyil
jekyil depend on ruby gem, so first of all, you must ensure that your windows has been installed ruby gem.
<pre>
	~$: gem install jekyll
</pre>
if you encounter a problem like this:
<pre>
ERROR:  Could not find a valid gem 'jekyll' (>= 0), here is why:
          Unable to download data from https://rubygems.org/ - SSL_connect returned=1 errno=0 state=SSLv3 read 
          server certificate B: certificate verify failed (https://api.rubygems.org/latest_specs.4.8.gz)
</pre>
you may should run the command:
<pre> 
~$: curl -o `ruby -ropenssl -e 'p OpenSSL::X509::DEFAULT_CERT_FILE' |tr -d \"` http://curl.haxx.se/ca/cacert.pem
</pre>
or
<pre>
	~$: curl http://curl.haxx.se/ca/cacert.pem -o cacert.pem
</pre>
if above commands dosen't work, you may change gem mirror like this: 
<pre>
	~$:sudo gem sources -r https://rubygems.org
	~$:sudo gem sources -a http://rubygems.org  
</pre>
for more detail information about that, reference this site:
<a href="http://stackoverflow.com/a/19179835/1227911">http://stackoverflow.com/a/19179835/1227911</a>
