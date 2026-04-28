import * as fs from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
// import { Command } from "commander";

const parseFunc = (filepath) => {
  const pathName = path.resolve(`${cwd()}${filepath}`)
  const data = fs.readFileSync(pathName, 'utf-8')
  const parse = JSON.parse(data)
  // console.log(parse)
  return parse
}

// const program = new Command()

/* program
    .description('JSON parse program')
    .argument('<filepath1>')

program.parse()
*/
export { parseFunc }
