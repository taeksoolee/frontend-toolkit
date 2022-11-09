
import { createRollupConfig } from './createRollupConfig.js';
import fs from 'fs';
import path from 'path';
const pkg = JSON.parse(fs.readFileSync(path.resolve('package.json'), 'utf8'));

export default createRollupConfig({
  name: 'index',
  format: 'esm',
  input: pkg.source,
});