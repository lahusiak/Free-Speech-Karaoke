module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            client: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controllers: {
                src: 'client/scripts/controllers/*.js',
                dest: 'server/public/assets/scripts/controllers/controllers.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularUI: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-ui-grid/ui-grid.min.css",
                    "angular-ui-grid/ui-grid.min.js"
                ],
                "dest": "server/public/vendors/"
            },
            angularAnimate: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-animate/angular-animate.min.js",
                    "angular-animate/angular-animate.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css',
                src: [
                    "bootstrap.min.css"
                ],
                "dest": "server/public/vendors/bootstrap"
            },
            html: {
                expand: true,
                cwd: "client/views",
                src: "*.html",
                dest: "server/public/assets/views"
            },
            htmlRoutes:{
                expand: true,
                cwd: "client/views/routes/",
                src: "*.html",
                dest: "server/public/assets/views/routes/"
            },
            htmlTemplates: {
                expand: true,
                cwd: "client/views/templates",
                src : "*.html",
                dest: "server/public/assets/views/templates/"
            },
            style: {
                expand: true,
                cwd: "client/styles/",
                src: '*.css',
                dest: 'server/public/assets/styles'
            },
            images: {
                expand: true,
                cwd: "client/styles/images",
                src: "*.png",

                dest: "server/public/assets/styles/images"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};