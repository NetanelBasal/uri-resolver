# URL resolver

## Install
`npm install resolve-uri --save`

## Usage
```ts
  /** resolved = /path/replacedID/path/replacedNext */
  const resolved = resolve('/path/:id/path/:next', {id: 'replacedID', next: 'replacedNext'});

```