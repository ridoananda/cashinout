export function convertToSlug(text: string) {
	const randomString = (Math.random() + 1).toString(36).substring(3)
	const string = `${text.toLowerCase()
		.replace(/[^\w ]+/g, '')
		.replace(/ +/g, '-')}-${randomString}`
	return string;
}