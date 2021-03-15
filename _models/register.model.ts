export class RegisterModel {
    Name?: any;
    Email?: any;
    Password?: any;

    NameError?: any;
    EmailError?: any;
    PasswordError?: any;


    constructor(data: any = {}) {
        this.Name = data.Name || "";
        this.Email = data.Email || "";
        this.Password = data.Password || "";
    }
}