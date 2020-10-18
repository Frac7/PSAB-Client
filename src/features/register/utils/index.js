import { ulid } from 'ulid';

const createDocumentName = (old) => {
	const id = ulid(Date.now());
	const split = old.split('.');

	return `${id}.${split[split.length - 1]}`;
}

const extractInformation = (file) => {
	const reader = new FileReader();
	reader.addEventListener('load', () => {
		const base64 = reader.result;

		return {
			name: createDocumentName(file.name),
			file,
			base64
		};
	});
	reader.readAsDataURL(file);
}

export default extractInformation;
