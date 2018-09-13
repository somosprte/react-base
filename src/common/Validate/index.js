import validate from 'validate.js';

/**
 * Custom validators messages.
 */
validate.validators.presence.options = { message: '^Este campo é obrigatório.' };
validate.validators.email.options = { message: '^Insira um e-mail válido.' };
validate.validators.length.options = { tooShort: '^Este campo exige no mínimo %{count} caracteres.' };

export default function(attributes, rules) {
  const errors = validate(attributes, rules);

  return {
    valid: errors !== undefined ? false : true,
    errors: errors !== undefined ? errors : {},
  };
}
