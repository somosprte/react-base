import validate from 'validate.js';
import CPF from 'gerador-validador-cpf';

/**
 * Custom validators messages.
 */
validate.validators.presence.options = { message: '^Este campo é obrigatório.' };
validate.validators.email.options = { message: '^Insira um e-mail válido.' };
validate.validators.length.options = { tooShort: '^Este campo exige no mínimo %{count} caracteres.' };

validate.validators.required = (value, options, key, attributes) => {
  if (value === null || value === '') return '^Este campo é obrigatório';
};

validate.validators.cpf = (value, options, key, attributes) => {
  if (!CPF.validate(value)) return '^Insira um CPF válido';
};

export default function(attributes, rules) {
  const errors = validate(attributes, rules);

  return {
    valid: errors !== undefined ? false : true,
    errors: errors !== undefined ? errors : {},
  };
}
