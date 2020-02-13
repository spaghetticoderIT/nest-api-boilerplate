import { Injectable, Scope, Inject } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import { JWT_PROVIDER } from 'src/utils/constants';

@Injectable({ scope: Scope.DEFAULT })
export class JwtService {
  constructor(
    @Inject(JWT_PROVIDER)
    private readonly secret: string,
  ) {}

  /**
   *
   * @param expiresIn - jwt expiration in seconds
   * @param body - any object
   */
  generateToken(expiresIn: number, body: any): string {
    return jwt.sign(body, this.secret, { expiresIn });
  }

  decodeToken(token: string): any {
    try {
      const decoded = jwt.decode(token);
      return decoded;
    } catch (err) {
      throw err;
    }
  }

  verify(token: string): boolean {
    try {
      jwt.verify(token, this.secret);
    } catch (err) {
      return false;
    }
    return true;
  }
}
