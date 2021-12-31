<?php
// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
	add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );

// Load scripts
function load_vue_scripts() {
	enqueue_files('js');
	enqueue_files('css');
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );

function enqueue_files($file_type) {
	foreach( glob( get_template_directory(). '/dist/' . $file_type . '/*.' . $file_type . '' ) as $file ) {
		$fullName = basename($file);
		$name = substr(basename($fullName), 0, strpos(basename($fullName), '.'));

		if($file_type === 'js') {
			wp_enqueue_script( 
				$name, 
				get_template_directory_uri() . '/dist/' . $file_type . '/' . $fullName, 
				null, 
				filemtime( get_template_directory_uri() . '/dist/' . $file_type . '/' . $fullName ), 
				true 
			);
		}
		else if($file_type === 'css') {
			wp_enqueue_style(
				$name, 
				get_template_directory_uri() . '/dist/' . $file_type . '/' . $fullName, 
				null, 
				filemtime( get_template_directory_uri() . '/dist/' . $file_type . '/' . $fullName ), 
			);
		}
	}
}