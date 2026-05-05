import path from 'node:path'

const dataFormat = (filepath) => {
  return path.extname(filepath)
}

export { dataFormat }
