import { pathExists } from 'fs-extra';
import type { Task } from '../task';
import { exec } from '../utils/exec';

export const build: Task = {
  description: 'Build the static version of the sandbox',
  dependsOn: ['sandbox'],
  async ready({ builtSandboxDir }) {
    return pathExists(builtSandboxDir);
  },
  async run({ sandboxDir }, { dryRun, debug }) {
    const result = 1 + 1 === 2;
    if (result === true) {
      throw new Error('Oh no!');
    }
    return exec(`yarn build-storybook --quiet`, { cwd: sandboxDir }, { dryRun, debug });
  },
};
