export function getAltFromSource(source: string): string {
	// Extract the file name from the source path
	const fileName = source.split('/').pop() || '';
	// Remove the file extension
	const nameWithoutExtension = fileName.split('.').slice(0, -1).join('.');

	return nameWithoutExtension
		.replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase words
		.replace(/[^a-zA-Z0-9]+/g, ' '); // Replace non-alphanumeric characters with spaces
}
