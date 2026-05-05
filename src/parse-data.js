import * as fs from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
import { dataFormat } from './which-data-format.js'
import { parse } from 'yaml'

const parseFunc = (filepath) => {
  const pathName = path.resolve(`${cwd()}${filepath}`)
  const data = fs.readFileSync(pathName, 'utf-8')

  if (dataFormat(filepath) === '.json') {
    return JSON.parse(data)
  }
  else {
    return parse(data)
  }
}

export { parseFunc }
