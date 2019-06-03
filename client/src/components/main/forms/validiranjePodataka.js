export const validiranjePodataka = (formValues,formProps) => {
    console.log(formProps);
    const errors = {};
    const email = formValues.email;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const name = formValues.name;
    const minBrKaraktera = 4;
    const pass = formValues.password;
    const passRegex = /^[a-zA-Z]\w{3,14}$/;
    if (!email) {
      errors.email = "Polje za email ne sme ostati prazno";
    }
    if (email && !emailRegex.test(email)) {
      errors.email = "Unesite ispravnu email adresu";
    }
    if (!name) {
      errors.name = "Polje za name ne sme ostati prazno";
    }
    if (name && name.length < minBrKaraktera) {
      errors.name = `Polje za name ne sme biti manje od ${minBrKaraktera} karaktera`;
    }
    if (!pass) {
      errors.pass = "Morate popuniti polje za lozinku";
    }
    if (pass && !passRegex.test(pass)) {
      errors.pass =
        "Lozinka mora imati izmedju 4 i 15 karaktera i prvo slovo mora biti veliko";
    }
  
    return errors;
  };