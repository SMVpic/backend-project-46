#!/usr/bin/env node
import { gendiff } from './src/findDiff.js'
import { Command } from 'commander'
// import * as fs from 'node:fs'
// import _ from "lodash"

const program = new Command()

program
  .description(' Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2))
  })

program.parse()

// export default genDiff
