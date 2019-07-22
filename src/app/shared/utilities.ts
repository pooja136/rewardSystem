import { URLSearchParams } from '@angular/http';

export class Utility {

	static isNull(item): boolean {
		return item === undefined || item === null;
	}

	static isEmpty(item): boolean {
		return item === undefined || item === null || item.length === 0 || item === 0 || item === '' || item === 'null';
	}

	static convertObjectToParams(paramObj: object) {
		let params = new URLSearchParams();
		for (let key in paramObj) {
			if (paramObj.hasOwnProperty(key)) {
				params.set(key, paramObj[key])
			}
		}
		return params;
	}

	static setLS(key, value) {
		localStorage.setItem('hb.' + key, value);
	}

	static getLS(key): string {
		if (localStorage.getItem('hb.' + key) === undefined) {
			return '';
		}
		else {
			return localStorage.getItem('hb.' + key);
		}
	}

	static removeLS(key) {
		localStorage.removeItem('hb.' + key);
	}

	doCopy(obj) {
		return JSON.parse(JSON.stringify(obj));
	}
}