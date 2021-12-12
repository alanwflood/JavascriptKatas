import { promises } from 'fs';
import { resolve } from 'path';

export interface Input<T, A = undefined> {
	input: T;
	args?: A | undefined;
}

export function read<A>(year: number, day: number, file = 'input.txt') {
  return async (): Promise<Input<string, A>> => {
		const baseUrl = `./resources/${year}/${day < 10 ? '0' + day : day}/`;

		const [input, args] = await Promise.all([
			promises.readFile(resolve(`${baseUrl}${file}`), {
				encoding: 'utf-8',
			}) as Promise<string>,
			promises
				.readFile(`${baseUrl}${file.split(/(.*)\..*/)[1]}.args.json`, {
					encoding: 'utf-8',
				})
				.catch(() => undefined) as Promise<string>,
		]);

		return { input, args: args && JSON.parse(args) };
	};
};

export function splitLine(string: string) {
  return string
    .split(/\r?\n/)
    .filter(Boolean);
}

export function splitBlankLine(string: string) {
  return string
    .split('\n\n')
    .filter(Boolean);
}
