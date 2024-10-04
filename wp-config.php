<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'eBp*+[>+k[W(/,I!/[FHeDOqUoM>&6(9`.u-E2AYwNITWieEu|*}yhC[ izzXOwi' );
define( 'SECURE_AUTH_KEY',   '%Lu>LMKK&Bx{5}.i?u~L*`ZU:TQc2,@X<Qp^}i3TA~Qss1DLx!Z(G_ILfR3H%riS' );
define( 'LOGGED_IN_KEY',     't,(5d#*zWV)6O]2)$Tb.NS~E86RLd#f&,@br5-@UDoe~qO}VZ_4a&TYF.&bq.G,y' );
define( 'NONCE_KEY',         '6_;UTB%Sn)*n8)AIIC6# .TA;|TAFz~Sq6iM<gE61&]ic}(~YRAMY[@_VTI+M|B0' );
define( 'AUTH_SALT',         '@sok(GrB!lIs)f.Vn7/$k6pVWkl GLPfX%o&N]DPep<(i!olTkqMloU?Z}U8qa|N' );
define( 'SECURE_AUTH_SALT',  'VDyvS$P1,vS 0)8bcycde!)0qqsL#j%k}lsO(n90&I(a <S_AG,Oe&k+yqUkSA`J' );
define( 'LOGGED_IN_SALT',    'Neh4Xki!fC{0-*R~Q5dH 9Ap:Q|?2ZLx[^@J/E2G9zEi*yt5Pp9:/v>9uOe I<A+' );
define( 'NONCE_SALT',        'LBFakBs[zM!YbviKRq!?f[A=4 77!eE:154sj+o3-#S7JCZvjFQ{9o%o8U[ZBSBD' );
define( 'WP_CACHE_KEY_SALT', 'HI0)U&^(MPKuu1Y%Sz*;+,?e?+CPB.};qZ^%Tl4Ly5+#|2OYGK=[i!]c%%w1f%/V' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
