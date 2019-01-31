'use-strict'
/**
* name: custom-console
*
* Author: Eric Mutua
*
* https://github.com/ertush
*
**/

function custom_console () {
	
  this.name = "custom_console";
  this.description = "simple custom console object with ansi colors";
  
}

var colors = require('ansi-colors');

/**
*
* @param {string} msg
* @param {string} color
*
* @return {void}
*
**/

custom_console.prototype.log = (msg, _color) => {
	
    if(!(typeof msg == 'string' && typeof _color == 'string')){ 
		console.error("[!] wrong types parameters"); 
		return null; 
	}
    
	let require_ansi_colors = [];
	
    for (color in colors) require_ansi_colors.push("ansi-"+color);
	
    for (required_color in require_ansi_colors){
		
        var current_color = require_ansi_colors[required_color].split('-')[1];
		
        if(_color.toLowerCase() == current_color) { 
			console.log(require(require_ansi_colors[required_color])(msg));
            break;
		}
		   
		if(required_color == require_ansi_colors.length - 1) {
			console.error("[!] Could not find specified color");
			break;
		}
	}
    

/**
*
* @return {string []}
*
**/

custom_console.prototype.getAnsiColors = () => {
	
    let available_colors = [];
    for (color in colors) available_colors.push(color);
    return available_colors;
}

module.exports = {
    custom_console: new custom_console()
}

let parsed_msg = process.argv[2];
let parsed_color = process.argv[3];

if(!parsed_msg && !parsed_msg) return null;

new custom_console().log(parsed_msg, parsed_color);

