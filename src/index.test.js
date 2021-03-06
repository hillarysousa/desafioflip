import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe ('Teste de teste', () => {
	it ('deve passar', () => {
		expect(true).to.equal(true);
	});
});

describe ('index.html', () => {
	it ('deve dizer Hello', (done) => {
		const index = fs.readFileSync('./src/index.html', "utf-8");
		jsdom.env(index, function(error, window) {
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal("Hello World! :)");
			done();
			window.close();
		});
	});
});