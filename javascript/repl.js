'use strict';

const availableCommands = ['select', 'insert']

const valid = (command) => {
	var splittedCommand = command.split(' ')
	return availableCommands.indexOf(splittedCommand[0]) > -1
}

const exec = (command) => {
	process.stdout.write(`Ceci est un ${command}, mais c'est pas encore implémenté\n`);
}

const printPrompt = () => {
	process.stdout.write("db> ")
}

printPrompt()

var stdin = process.openStdin()

stdin.addListener("data", function(d) {
	var command = d.toString().trim();

	if(command[0] == '.') {
		if(command == ".exit"){
			process.exit(0)
		}
	}

	if(valid(command)) {
		exec(command)
	} else {
		process.stdout.write("Command non reconnue\n")
	}

	process.stdout.write("db> ")

});
