export const required = (value, allValues, props, name) =>
  value || typeof value === "number"
    ? undefined
    : `polje za ${name} ne sme biti prazno`;

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;    
export const emailAdresa = (value, allValues, props, name) =>
  value && !emailRegex.test(value)
    ? `Polje za ${name} nije validno`
    : undefined;

    const maxLength = max => value =>
    value && value.length > max ? `Mora biti najvise ${max} karaktera` : undefined
  
    const minLength = min => value =>
    value && value.length < min ? `Mora biti najmanje ${min} karaktera` : undefined
  export const minLength2 = minLength(2)
  export const minLength4 = minLength(4)
  
  const number = value =>
    value && isNaN(Number(value)) ? 'Polje mora biti broj' : undefined

  const minValue = min => value =>
    value && value < min ? `Najmanja vrednost je ${min}` : undefined
  export const minValue13 = minValue(13)

  const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
      ? 'Dozvoljena su samo slova'
      : undefined

  export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
      ? 'Invalid phone number, must be 10 digits'
      : undefined
  
      const passRegex = /^[a-zA-Z]\w{3,14}$/;
    export const password=value=>
    value && !passRegex.test(value)
    ? "Lozinka mora imati izmedju 4 i 15 karaktera i prvo slovo mora biti veliko"
    :undefined

