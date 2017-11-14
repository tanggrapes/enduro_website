{
	title: 'App',
	$doc_markdown: true,
	$doc_type: 'textarea',
	doc: 'Enduro utilizes the power of generating static files to get the unbelievable performance and simplicity. However, it also enabled developers to either develop api endpoints or even generate endpoint pages dynamically.\n\n## app.js file\nenduro will include $$app/app.js file upon starting the server. The file looks like this:\n\n```\nvar local_app = function () {}\n\n// * ———————————————————————————————————————————————————————— * //\n// * 	init\n// *\n// *	gets called upon starting enduro.js production server\n// *	@param {express app} app - express app\n// *	@return {nothing}\n// * ———————————————————————————————————————————————————————— * //\nlocal_app.prototype.init = function (app) {\n	// express app available here\n	// don\'t forget these routes will be available on production server server (defaults to localhost:5000)\n}\n\nmodule.exports = new local_app()\n\n```\n\nYou can easily create custom api routes like this:\n\n```\nvar local_app = function () {}\n\n// * ———————————————————————————————————————————————————————— * //\n// * 	init\n// *\n// *	gets called upon starting enduro.js production server\n// *	@param {express app} app - express app\n// *	@return {nothing}\n// * ———————————————————————————————————————————————————————— * //\nlocal_app.prototype.init = function (app) {\n	app.get(\'/api/get_random_number\', function (req, res) {\n		res.send(Math.random().toString())\n	})\n}\n\nmodule.exports = new local_app()\n\n```\n\nwhen you open `localhost:5000/api/get_random_number` you will get a different number each time, as you would expect.\n\nTo create dynamic pages, check out [temper](/docs/temper). Temper allows you to render your templates with all the global data, but with custom or extended context.',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>Enduro utilizes the power of generating static files to get the unbelievable performance and simplicity. However, it also enabled developers to either develop api endpoints or even generate endpoint pages dynamically.</p>\n<h2 id="app-js-file">app.js file</h2>\n<p>enduro will include <span class="markdown_folder">app/app.js</span> file upon starting the server. The file looks like this:</p>\n<pre><code>var local_app = function () {}\n\n// * ———————————————————————————————————————————————————————— * //\n// *     init\n// *\n// *    gets called upon starting enduro.js production server\n// *    @param {express app} app - express app\n// *    @return {nothing}\n// * ———————————————————————————————————————————————————————— * //\nlocal_app.prototype.init = function (app) {\n    // express app available here\n    // don&#39;t forget these routes will be available on production server server (defaults to localhost:5000)\n}\n\nmodule.exports = new local_app()\n</code></pre><p>You can easily create custom api routes like this:</p>\n<pre><code>var local_app = function () {}\n\n// * ———————————————————————————————————————————————————————— * //\n// *     init\n// *\n// *    gets called upon starting enduro.js production server\n// *    @param {express app} app - express app\n// *    @return {nothing}\n// * ———————————————————————————————————————————————————————— * //\nlocal_app.prototype.init = function (app) {\n    app.get(&#39;/api/get_random_number&#39;, function (req, res) {\n        res.send(Math.random().toString())\n    })\n}\n\nmodule.exports = new local_app()\n</code></pre><p>when you open <code>localhost:5000/api/get_random_number</code> you will get a different number each time, as you would expect.</p>\n<p>To create dynamic pages, check out <a href="/docs/temper">temper</a>. Temper allows you to render your templates with all the global data, but with custom or extended context.</p>\n',
		contents: [
			{
				heading: 'app.js file',
				level: '2',
				link: 'app-js-file'
			}
		]
	},
	meta: {
		last_edited: 1510613919
	}
}