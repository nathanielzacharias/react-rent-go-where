import React from "react";

import { IKContext, IKImage, IKUpload } from "imagekitio-react";

// required parameter to fetch images
const urlEndpoint = "https://ik.imagekit.io/vsoncvhkm/";

// optional parameters (needed for client-side upload)
const publicKey = "public_VW2hCnJrSlQCWKZA9Xk7NnP3oxo=";
const authenticationEndpoint = "http://localhost:8000/auth";

const onError = (err) => {
  console.log("Error", err);
};

const onSuccess = (res) => {
  console.log("Success", res);
};

function ImageUpload() {
  return (
    <div
      className="App"
      style={{ textAlign: "left", margin: "0px 0px 15px 0px" }}
    >
      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticationEndpoint={authenticationEndpoint}
      >
        <p>Upload an image</p>
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
        />
      </IKContext>
      {/* ...other SDK components added previously */}
    </div>
  );
}

export default ImageUpload;
