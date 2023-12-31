export class ConstantesUrl {

  public static get baseServidor(): string {
    return 'http://localhost:8081/';
  }

  public static get baseLogin(): string {
    return this.baseServidor + 'cursospringrestapi/login';
  }

  public static get baseUrl(): string {
    return this.baseServidor + 'cursospringrestapi/usuario/';
  }

  public static get baseUrlPath(): string {
    return this.baseServidor + 'cursospringrestapi/';
  }

}
