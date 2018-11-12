# s3-presigned-multi-image-uploader

NPM module which allows to upload multiple images to S3 using presigned flow


## Installation

`npm install s3-presigned-multi-image-uploader`

## Usage

```
let s3Utils = require('s3-presigned-multi-image-uploader')

let fileObj = {uri, type, name}
let imgUpload = [{preSignedUrl: 'http://s3.com/', file: fileObj},{preSignedUrl: 'http://s3.com/1', file: fileObj1}]

let uplodedImgs = await s3Utils.uploadImages(imgUpload)
```
