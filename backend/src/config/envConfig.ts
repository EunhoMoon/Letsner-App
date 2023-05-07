import * as Joi from "joi";

export const envConfig = {
  isGlobal: true,
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid("development", "production", "test", "provision")
      .default("development"),
    PORT: Joi.number().default(5000),
    SECRET_KEY: Joi.string().required(),
    ADMIN_USER: Joi.string().required(),
    ADMIN_PASSWORD: Joi.string().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_NAME: Joi.string().required()
  })
}