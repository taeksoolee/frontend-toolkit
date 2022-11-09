import { createRollupConfig } from './createRollupConfig.js';
import fs from 'fs';
import path from 'path';
const pkg = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'));

const name = 'index';
const options = [
  {
    name,
    format: 'cjs',
    input: pkg.source,
  },
  { name, format: 'esm', input: pkg.source },
  {
    name,
    format: 'umd',
    input: pkg.source,
  },
];

export default options.map((option) => createRollupConfig(option));