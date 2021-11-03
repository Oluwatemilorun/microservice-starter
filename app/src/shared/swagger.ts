import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

export default function SetupSwagger(
	app: Express,
	props: {
		version: string;
		name: string;
		description: string;
	}
) {
	// resolve the spec
	const { version, name, description } = props;
	const spec = swaggerJSDoc({
		swaggerDefinition: {
			info: {
				title: name,
				version,
				description,
			},
		},
		apis: ['src/controllers/**/*.ts', 'src/models/**/*.ts'],
	});

	// setup middleware swagger middleware in express
	app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(spec, { explorer: true }));
}
