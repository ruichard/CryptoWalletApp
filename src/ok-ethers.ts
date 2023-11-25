import * as ethers from 'ethers';
import { pbkdf2Sync } from 'crypto';

ethers.pbkdf2.register(
  (
    password: Uint8Array,
    salt: Uint8Array,
    iterations: number,
    keylen: number,
    algo: 'sha256' | 'sha512'
  ) => {
    return ethers.hexlify(pbkdf2Sync(password, salt, iterations, keylen, algo));
  }
);

export * from 'ethers';