/* Primary JS
 * ==========
 * The primary set of JavaScipt that should be included _after_ the majority of
 * the DOM has been loaded (e.g. in a <script> tag at the bottom of the <body>).
 * This will include all libraries and custom code required to finish pre-
 * interaction DOM manipulation, and all code that drives dynamic interactions.
 * This file will (probably) include JS language modifications (think
 * `Object.new` before it was added to the standard), and Sprockets `require`
 * statements. Hopefully nothing else.
 */

//TODO: Make sure none of the code in here triggers a FOUC.



/* Vendor Library Includes
 * -----------------------
 * Included one at a time to ensure all requirements are met
 */

//= require ./vendor/modernizr-3.1.1.js
//= require ./vendor/jquery-2.2.4.js
//= require ./vendor/tether-1.1.0.js
//= require ./vendor/bootstrap-v4.0.0-alpha.2-18ee98b.js
//= require ./vendor/highlight-9.7.0.pack.js



/* Basho Code Tools & Library Code
 * -------------------------------
 * Included one at a time to ensure all requirements are met
 */

//= require ./basho/tools/language-extensions.coffee
//= require ./basho/tools/sem-ver.js


/* Basho Code
 * ----------
 * Included one at a time to ensure all requirements are met
 */

//= require ./basho/anchorify-headings.js
//= require ./basho/table-of-contents.js

//= require ./basho/content-navigation.js
//= require ./basho/selectors.js
//= require ./basho/edge-fader.js
//= require ./basho/code-blocks.js



/* Vendor Library Configuration and Initialization
 * -----------------------------------------------
 * Some vendor code requires some configuration and execution. This seems as
 * good a place as any to perform those configurations and execute.
 */
