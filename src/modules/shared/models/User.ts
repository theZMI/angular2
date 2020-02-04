import { IUser } from '../types';

export class User {
  // tslint:disable-next-line:variable-name
  constructor(private _data: IUser) {
  }

  get full_name() {
    const a = [this._data.first_name, this._data.last_name];
    return a.join(' ');
  }

  get first_name(): string {
    return this._data.first_name;
  }

  set first_name(value: string) {
    this._data.first_name = value;
  }

  get last_name(): string {
    return this._data.last_name;
  }

  set last_name(value: string) {
    this._data.last_name = value;
  }

  get email(): string {
    return this._data.email;
  }

  set email(value: string) {
    this._data.email = value;
  }

  get pwd(): string {
    return this._data.pwd;
  }

  set pwd(value: string) {
    this._data.pwd = value;
  }
}
