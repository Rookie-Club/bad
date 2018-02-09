
process.stdout.write("> ");

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
	var command = d.toString().trim();
	if(command == ".exit"){
		process.exit(0);
	} else {
    process.stdout.write("Command non reconnue\n");
	}
	process.stdout.write("> ");
});
