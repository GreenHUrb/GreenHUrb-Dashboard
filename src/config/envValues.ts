import Joi from "@hapi/joi";

const envValues = [
  {
    name: "VITE_USE_REST_API",
    schema: Joi.boolean().required()
  },
  {
    name: "VITE_REST_API_URL",
    schema: Joi.string()
    .when(".USE_REST_API", {
      is: true,
      then: Joi.required(),
      // otherwise: Joi.optional()
    })
  },
  {
    name: "VITE_GRAPHQL_API_URL",
    schema: Joi.string()
    .when(".USE_REST_API", {
      is: false,
      then: Joi.required(),
      // otherwise: Joi.forbidden()
    })
  }
];

export default envValues