import $api from './../http';   // тя не смущает что у тя тут ошибка? позже
import { AxiosResponse } from 'axios';
import { Tokens } from './../models/Response/Tokens';

export default class AuthService {
  static async signin(login: string, password: string): Promise<AxiosResponse<Tokens>> {
    return $api.post<Tokens>('/auth', { login, password });
  }

  static async signup(login: string, password: string): Promise<AxiosResponse<Tokens>> {
    return $api.post<Tokens>('/users', { login, password });
  }
  
  // static async logout(): Promise<void> {
  //   return $api.post('/logout');
  // }
}
