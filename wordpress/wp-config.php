<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'africapostinfo_wp' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'eliseekn' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>sS@n(2(pbWEq%n57{ C|<q`YT3hJe;4MM!DwnmU7M_4{N8Vex/#T3iuH4e?G _O' );
define( 'SECURE_AUTH_KEY',  '/GCsF(W!<lJfhSOw-u(u^Z9$iv_y~=CQh>bsmNLFsbZ~Xlr%U%4=[w|:++;rhe4M' );
define( 'LOGGED_IN_KEY',    '^[2jzGV^IMA.f_viC;]ux,aOi75qkgCx ;D0a1J@*[6dZEWv`PN@]HEzH:328 q+' );
define( 'NONCE_KEY',        'x>M@+Knszq-Kg<Gf:}nahQ_4oRT%6P{He-h4|}$]7Kn>dPX:t&8w12HVCao~]dXp' );
define( 'AUTH_SALT',        'FqAeb%t2zxRCU(>H:1^vJtHN2bvKhh#3cmFiFk<S#gRzd+`SxZT#~v=zIDB&B;QP' );
define( 'SECURE_AUTH_SALT', 'b&P4rIjPuQ5sw]bF_J3PTGPHZSq*i|z^nR>JhG%8sV^=t9UO2@AmLI P dNh{>=y' );
define( 'LOGGED_IN_SALT',   'V6O/gMBXMGZV-5^`>2S+!3@LRaA(fZTSU/*<~sX<[c@DV*72(eh^iI#Z8z7:9_&u' );
define( 'NONCE_SALT',       'yL&t=8(5Dh=REe#:f^~}@9=}%,:&=CtSlY:)y~wq5>.Cr:AA5CX@Yzi(}HLWc/r8' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

/*disable FTP update*/
define('FS_METHOD','direct');
