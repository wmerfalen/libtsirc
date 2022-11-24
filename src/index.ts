import { exit } from 'node:process';

let username : string;

interface Server {
	name: string;
	ip: string;
	port: number;
}

interface ServerConfiguration {
	username: string;
	server: Server;
}

interface GlobalConfig {
	configurations: Array<ServerConfiguration>;
	openedAt: number; // TODO: FIXME: make this a timestamp type (if possible)
	path: string;
}

function main() : number {

	return 6;
}

let exit_code : number = main();
exit(exit_code);
