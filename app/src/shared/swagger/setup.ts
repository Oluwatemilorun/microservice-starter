import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

export function SetupSwagger(
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
			openapi: '3.0.0',
			info: {
				title: name,
				version,
				description,
			},
		},
		apis: [
			'src/controllers/**/*.ts',
			'src/controllers/**/definitions.yml',
			'src/models/**/*.ts',
			'src/models/**/definitions.yml',
			'src/shared/swagger/definitions.ts',
		],
	});

	// setup middleware swagger middleware in express
	app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(spec, { explorer: true }));
}
