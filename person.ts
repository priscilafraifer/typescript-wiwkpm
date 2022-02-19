export class Person{
  
  getFullName(pessoa: { name: string; lastname: string }): string {
    return pessoa.name + ' ' + pessoa.lastname;
  }
  
  getBirthdayYear(){

  }
}