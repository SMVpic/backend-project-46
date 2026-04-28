import { gendiff } from '../src/findDiff.js'
import { expect, test } from '@jest/globals'

test('two simple JSON', () => {
  const diff = gendiff('/__fixtures__/file1.json', '/__fixtures__/file2.json')
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
