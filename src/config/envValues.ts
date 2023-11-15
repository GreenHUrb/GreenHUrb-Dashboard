import Joi from "@hapi/joi";

export const envValues = [
  {
    name: "VITE_OAUTH_CLIENT_ID",
    schema: Joi.string().required()
  }
];
