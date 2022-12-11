import fs from 'node:fs/promises';
import glob from 'fast-glob';
import path from 'node:path';
import {$}  from 'zx'

const files = await glob(['src/**/*.stories.tsx']);
const stories = files.map(file => ({
  name: path.basename(file, '.stories.tsx'),
  import: `../${file.replace(/\.tsx$/, '')}`,
}));

const baseImports = `
import { RequiredBy } from "@fullstacksjs/toolbox";
import { Route } from "@tanstack/react-location";
`;

const imports = stories.reduce((acc, story) => {
  return `import * as ${story.name} from '${story.import}';
${acc}`;
}, baseImports);

const declarations = `
interface SandboxRoute extends Omit<RequiredBy<Route, 'path'>, 'children'> {
  children: SandboxRoute[];
}
`;

const routes = `export const routes: SandboxRoute[] = [
  ${stories.reduce((acc, story) => {
    return `{
      path: '/${story.name}',
      children: Object.entries(${story.name})
        .map(([name, Com]) => {
          return typeof Com === 'function'
            ? // @ts-ignore
              { path: name, element: <Com {...Com.args} /> }
            : undefined;
        })
        .filter(Boolean) as SandboxRoute[],
    },
    ${acc}`;
  }, '')}
]`;

const file = `${imports}
  ${declarations}
  ${routes}`;

await fs.writeFile('.sandbox/routes.tsx', file);
await $`npx eslint .sandbox/routes.tsx --fix`
