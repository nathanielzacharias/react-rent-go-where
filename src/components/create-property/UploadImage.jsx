// require("dotenv").config();

import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";

// required parameter to fetch images
const urlEndpoint = "https://ik.imagekit.io/vsoncvhkm/";
// optional parameters (needed for client-side upload)
const publicKey = "public_VW2hCnJrSlQCWKZA9Xk7NnP3oxo=";
const authenticationEndpoint = `${process.env.BASE_BACKEND_URL}/auth`;

function ImageUpload({ propertyImages, setPropertyImages }) {
  const [imagePath, setImagePath] = useState([]);

  const [imageNumber, setImageNumber] = useState(0);
  const onError = (err) => {
    console.log("Error", err);
  };
  const onSuccess = (res) => {
    console.log("Success", res);
    toast.success("Upload successful");
    setPropertyImages((propertyImages) => [
      ...propertyImages,
      res.thumbnailUrl,
    ]);
    setImagePath((imagePath) => [...imagePath, res.filePath]);
    console.log(propertyImages);
    console.log(imagePath);
    setImageNumber(imageNumber + 1);
  };
  const deleteImage = (event) => {
    event.preventDefault();
    setImageNumber(0);
    setPropertyImages([]);
    setImagePath([]);
  };
  console.log(propertyImages);
  console.log(imageNumber);
  console.log(imagePath);
  return (
    <div
      className="App"
      style={{
        textAlign: "left",
        margin: "0px 0px 15px 0px",
      }}
    >
      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticationEndpoint={authenticationEndpoint}
      >
        <p>Upload image</p>

        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
          style={{
            textAlign: "left",
            margin: "0px 0px 15px 0px",
          }}
        />
        <span>{imageNumber} uploaded </span>
        <span>
          <Button variant="light" type="reset" onClick={deleteImage}>
            Reset
          </Button>
        </span>
        <br />
        {imagePath.map((img, index) => (
          <IKImage
            style={{ margin: "5px 15px 5px 0px" }}
            key={index}
            path={img}
            transformation={[{ height: 300, width: 400 }]}
          />
        ))}
        {/* <IKImage path={imagePath[0]} /> */}
      </IKContext>
      {/* ...other SDK components added previously */}
    </div>
  );
}
export default ImageUpload;