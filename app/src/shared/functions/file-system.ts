import { APP_NAME } from '../constants';

export const generateFilePath = (idPath: string, folder = '') => {
	const paths = folder.split('/:id');
	const destFolder =
		paths.length === 0 && paths[0].length === 0
			? `/${APP_NAME}`
			: paths.length === 0 && paths[0].length >= 1
			? `/${APP_NAME}/${folder}`
			: paths.length >= 1 && paths[1].length === 0
			? `/${APP_NAME}/${paths[0]}/${idPath}`
			: `/${APP_NAME}/${paths[0]}/${idPath}${paths[1]}`;

	return destFolder;
};
