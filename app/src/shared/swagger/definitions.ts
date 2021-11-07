export const swaggerDefinition = () => {
	// Global swagger defs:
	/**
	 * @swagger
	 *
	 * definitions:
	 *   Environment:
	 *     type: string
	 *     minimum: 1
	 *     enum:
	 *       - development
	 *       - staging
	 *       - production
	 *
	 * components:
	 *    securitySchemes:
	 *       bearerAuth:
	 *         type: http
	 *         scheme: bearer
	 *         bearerFormat: JWT
	 *
	 *    responses:
	 *      NotFound:
	 *        content:
	 *          application/json:
	 *            schema:
	 *              - $ref: '#/components/schemas/Error'
	 *
	 *      BadRequest:
	 *        content:
	 *          application/json:
	 *            schema:
	 *              - $ref: '#/components/schemas/Error'
	 *
	 *      Unauthorized:
	 *        content:
	 *          application/json:
	 *            schema:
	 *              - $ref: '#/components/schemas/Error'
	 *
	 *    schemas:
	 *      Error:
	 *        type: object
	 *        properties:
	 *          code:
	 *            type: string
	 *          message:
	 *            type: string
	 *          errors:
	 *            type:
	 *              oneOf:
	 *                - array
	 *                - object
	 *        required:
	 *          - code
	 *          - message
	 *
	 * security:
	 *   - bearerAuth: []
	 */
};
