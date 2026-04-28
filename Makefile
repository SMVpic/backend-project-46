install:
	npm ci
gendiff: 
	node ./gendiff.js
lint:
	npx eslint .
test:
	npm run test
test-coverage:
	npm test -- --coverage

