export class ConstantesUrl {

  public static get baseServidor(): string {
    return 'http://localhost:80/';
  }

  public static get baseLogin(): string {
    return this.baseServidor + 'auth/signin';
  }

  public static get baseUrl(): string {
    return this.baseServidor + 'cursospringrestapi/usuario/';
  }

  public static get baseUrlPath(): string {
    return this.baseServidor + 'cursospringrestapi/';
  }

}
