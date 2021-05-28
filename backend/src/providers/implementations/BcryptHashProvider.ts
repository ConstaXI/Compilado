import { compare, hash } from 'bcrypt';
import IHashProvider from '../interface/IHashProvider';

export default class HashProvider implements IHashProvider {
  public async compare(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }

  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }
}