export class ConstantesUrl {

  public static get baseServidor(): string {
    return 'http://localhost:80/';
  }

  public static get baseLogin(): string {
    return this.baseServidor + 'auth/signin';
  }

  public static get baseUrlBook(): string {
    return this.baseServidor + 'api/book/v1';
  }

  public static get baseUrlPath(): string {
    return this.baseServidor + 'cursospringrestapi/';
  }

}
