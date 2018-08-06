export class IRegister {
  _id: string;
  name: string;
  email: string;
password:string;
  lastname:string;
 

   constructor(name, password, email, lastname) {
   
     this.name=name;
     this.email=email;
     this.lastname=lastname;
     this.password=password;
   }
}

