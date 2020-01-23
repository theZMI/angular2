import { IUser } from '../types';

export class User {
  // tslint:disable-next-line:variable-name
  constructor(private _data: IUser) {
  }

  get full_name() {
    const a = [this._data.first_name, this._data.last_name];
    return a.join(' ');
  }
}
