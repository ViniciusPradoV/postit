import { Injectable } from '@angular/core';
import { HttpAsyncService } from '../modules/http-async/services/http-async.service';
import { TokenProxy } from '../models/proxies/token.proxy';
import { apiRoutes } from '../../environments/api-routes';
import { environment } from '../../environments/environment.prod';
import { CreateUserPayload } from '../models/payloads/create-user.payload';
import { AsyncResult } from '../models/interfaces/async-result';
import { UserProxy } from '../models/proxies/user.proxy';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ProfilePicPayload, UpdateUserPayload } from '../models/payloads/update-user.payload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpAsyncService) {}

  public async login(
    username: string,
    password: string
  ): Promise<AsyncResult<boolean>> {
    const [token, error] = await this.http.post<TokenProxy>(apiRoutes.auth.login, {
      username,
      password,
    });

    if (error) {
      return [false, error.error.message];
    }

    localStorage.setItem(environment.keys.token, token.token);

    return [true, `Bem-vindo de volta!`];
  }

  public async register(payload: CreateUserPayload): Promise<AsyncResult<boolean>> {
    const [user, error] = await this.http.post<UserProxy>(apiRoutes.users.create, payload);

    if (error) {
      return [false, error.error.message];
    }

    return this.login(payload.email, payload.password);
  }

  public getUserTokenFromStorage(): string {
    return localStorage.getItem(environment.keys.token);
  }

  public async getMe(): Promise<AsyncResult<string>>{

    var [user, userError] = await this.http.get<UserProxy>(apiRoutes.users.me);

    if (userError) {
      return [null, userError.error.message];
    }

    const stringfiedUser = JSON.stringify(user)
    
    return [stringfiedUser, `Usuário retornado do banco!`];

  }

  public async setUser(): Promise<AsyncResult<boolean>>{

    const [user, userError] = await this.http.get<UserProxy>(apiRoutes.users.me);

    if (userError) {
      return [false, userError.error.message];
    }

    localStorage.setItem(environment.keys.user, JSON.stringify(user));

    return [true, `Usuário salvo no localStorage!`];
  }

  public getUserFromStorage(): string{
    return localStorage.getItem(environment.keys.user);
  }

  public async updateProfileData(user: UserProxy, payload: ProfilePicPayload): Promise<AsyncResult<UserProxy>> {

    const [success, error] = await this.http.put<UserProxy>(
      apiRoutes.users.update.replace('{userId}', user.id.toString()), payload
    );

    if (error) return [null, error.error.message];

    return [success];
  }

}