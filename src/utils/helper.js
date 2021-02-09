function getTitle(pathName) {
	const mapPathWithTitle = {
		"/applications": "Application",
		"/packages": "Module",
		"/license-management": "License",
		"/setting": "Setting",
		"/applications/action/create": "Create Application",
	};
	return mapPathWithTitle[pathName];
}

module.exports = {
	getTitle,
};
