import { ulid } from 'ulid';

const createDocumentName = (old) => {
	const id = ulid(Date.now());
	const split = old.split('.');

	return `${id}.${split[split.length - 1]}`;
}

export default createDocumentName;
