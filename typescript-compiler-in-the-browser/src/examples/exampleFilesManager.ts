import { readFileSync } from 'fs';
import { resolve } from 'path';
import { ProgramFile } from '../compiler/programProvider';

//TODO: windows build probably will fail 
// heads up - files are read at compile time with brfs - modify this only if you know what you are doing. 

const files = [
  {
    fileName: resolve('.') + '/dist/../src/examples/tsTranspilingProject1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/tsTranspilingProject1.ts').toString()
  },
  
  {
    fileName: resolve('.') + '/dist/../src/examples/files/tsTranspilingProject1/someImpl.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/files/tsTranspilingProject1/someImpl.ts').toString()
  },
  {
    fileName: resolve('.') + '/dist/../src/examples/files/tsTranspilingProject1/someModel.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/files/tsTranspilingProject1/someModel.ts').toString()
  },
  {
    fileName: resolve('.') + '/dist/../src/examples/files/tsTranspilingProject1/someUI.tsx',
    content: readFileSync(resolve('.') + '/dist/../src/examples/files/tsTranspilingProject1/someUI.tsx').toString()
  },


  {
    fileName: resolve('.') + '/dist/../src/examples/tsSimple1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/tsSimple1.ts').toString()
  },


  {
    fileName: resolve('.') + '/dist/../src/examples/transformation1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/transformation1.ts').toString()
  },
  {
    fileName: resolve('.') + '/dist/../src/examples/files/transformation1/test1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/files/transformation1/test1.ts').toString()
  },
  
  {
    fileName: resolve('.') + '/dist/../src/examples/tsSimpleAst1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/tsSimpleAst1.ts').toString()
  },
  {
    fileName: resolve('.') + '/dist/../src/examples/files/tsSimpleAst1/toRename.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/files/tsSimpleAst1/toRename.ts').toString()
  },

  {
    fileName: resolve('.') + '/dist/../src/examples/tsSimpleAstAndTsQueryTogether.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/tsSimpleAstAndTsQueryTogether.ts').toString()
  },
  
  {
    fileName: resolve('.') + '/dist/../src/examples/typeChecker1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/typeChecker1.ts').toString()
  },

  {
    fileName: resolve('.') + '/dist/../src/examples/languageService1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/languageService1.ts').toString()
  },


  {
    fileName: resolve('.') + '/dist/../src/examples/tsquery1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/tsquery1.ts').toString()
  },
  {
    fileName: resolve('.') + '/dist/../src/examples/files/tsquery1/sample1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/files/tsquery1/sample1.ts').toString()
  },
  
  {
    fileName: resolve('.') + '/dist/../src/examples/loadProjectJsonTest1.ts',
    content: readFileSync(resolve('.') + '/dist/../src/examples/loadProjectJsonTest1.ts').toString()
  },

    // HEADS UP: we pack also ./tsconfig.json so we can transpile user edited code (that could require utilities from this project) using the same configuration to minimize risk when eval()
  {
    fileName: '__parent_project_tsconfig.json',
    content: readFileSync(resolve('.') + '/dist/../tsconfig.json').toString()
  },
]
  .map(f => Object.assign(f, { fileName: f.fileName.replace('//dist/../src/', '') }))

export function getFiles(): ProgramFile[] {
  return files
}



