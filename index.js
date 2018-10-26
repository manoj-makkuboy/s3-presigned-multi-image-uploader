//fileObj = {uri, type, name}
//uploadArray = [{preSignedUrl: 'http://s3.com/', file: fileObj},{preSignedUrl: 'http://s3.com/1', file: fileObj1}]
let axios = require("axios");

const uploadImages = async uploadArray => {
  for (let i = 0; i < uploadArray.length; i++) {
    let dataUri = await axios.get(uploadArray[i].file.uri, {
      responseType: "blob"
    });
    uploadArray[i].file.uri = dataUri.data;
    uploadUsingPresignedUrl(uploadArray[i].preSignedUrl, uploadArray[i].file);
  }
};

const uploadUsingPresignedUrl = (preSignedUrl, file) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Image uploaded successfully");
      } else {
        console.log("Image uploaded UNsuccessfully", xhr);
      }
    }
  };
  xhr.open("PUT", preSignedUrl);
  xhr.setRequestHeader("Content-Type", file.type);
  xhr.send(file.uri);
};

module.exports = { uploadImages };
