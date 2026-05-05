import { gendiff } from '../src/findDiff.js'
import { expect, test } from '@jest/globals'

test('two simple JSON', () => {
  const diff = gendiff('/__fixtures__/json-files/file1.json', '/__fixtures__/json-files/file2.json')
  expect(diff).toEqual(
    `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 30
+ timeout: 20
+ verbose: true
}`,
  )
})

test('two simple YML', () => {
  const diff = gendiff('/__fixtures__/yaml-files/file1.yml', '/__fixtures__/yaml-files/file2.yml')
  expect(diff).toEqual(
    `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`,
  )
})

test('two simple YAML', () => {
  const diff = gendiff('/__fixtures__/yaml-files/file1.yaml', '/__fixtures__/yaml-files/file2.yaml')
  expect(diff).toEqual(
    `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 30
+ timeout: 10
+ verbose: true
}`,
  )
})
