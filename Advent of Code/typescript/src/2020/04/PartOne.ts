export enum RequiredFields {
  byr = "byr",
  iyr = "iyr",
  eyr = "eyr",
  hgt = "hgt",
  hcl = "hcl",
  ecl = "ecl",
  pid = "pid",
}

export type Passport = Record<RequiredFields, string>

function computeRawPassportString(rawPassportString: string): Partial<Passport> {
  const fields =
    rawPassportString
      .replace(/\nr?\n/g, ' ')
      .trim()
      .split(' ')

  const t = fields
    .map(rawPassportField => rawPassportField.split(':'))
    .map(([key, value]) => ({ [key]: value })) ;

  const obj = Object.assign({}, ...t);

  return obj
}

function isPassport(passport: Partial<Passport>) {
  return Object
    .values(RequiredFields)
    .every((passportField) =>
       Object
         .keys(passport)
         .indexOf(passportField) > -1)
}

export function runner(input: string) {
  const dataset = input.split('\n\n');
  const passports = dataset.map(computeRawPassportString)
  return passports.filter(isPassport).length
}
