# clean-comments
> To remove comments for js/css/c/c++ and more

> 用于清除类c语言的注释

## 安装 Install

`npm i clean-comments -S`

## 使用 Usage

```
const cleanComments = require('clean-comments');

cleanComments(code, options);
```

```
const { readFileSync } = require('fs');
const cleanComments = require('clean-comments');

const code = readFileSync('./file.js', 'utf-8');

const cleanedCode = cleanComments(code);
```

## 配置项 Options
  - onlyBlock
    - Only remove the block comments
    - type : `boolean`
  - onlyLine
    - Only remove the line comments
    - type : `boolean`
