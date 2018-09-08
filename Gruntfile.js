module.exports=function(grunt) {
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						name:'superlarge',
						width:1200
					},{
						name:'large',
						width:800
					},{
						name: 'mid',
						width:600
                    },{
                    	name: 'small',
                    	width:400
                    }]
                },
			    files: [{
			    	expand: true,
			       	src: ['*.{gif,jpg,png}'],
			    	cwd: 'images/logo',
			    	dest: 'images_src'
			    }] 
			  }
            },
		copy: {
			dev: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['images/*', 'images/***'],
					dist: 'images_src'
				}]
			}
		}
   
});
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-responsive-images');

grunt.registerTask('default', ['responsive_images']);
};