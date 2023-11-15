import { envValues } from "./envValues";

export const config: any = {};

export const configureAndValidateENV = () => {
  // Validate loaded environment variables
  const validationResults = envValues.map(variable => {
    const { error } = variable.schema.validate(import.meta.env[variable.name]);
    return { variableName: variable.name, error };
  });

  const invalidVariables = validationResults.filter(result => result.error);

  if (invalidVariables.length > 0) {
    const invalidVariablesError: string[] = [];
    invalidVariables.forEach(result => {
      // console.error(`${result.variableName}: ${result.error!.details[0].message}`);
      invalidVariablesError.push(`${result.variableName}: ${result.error!.details[0].message}`);
    });

    return invalidVariablesError;
  } else {
    envValues.map(variable => {
      config[variable.name.toLocaleLowerCase()] = import.meta.env[variable.name];
    });
  }
};
