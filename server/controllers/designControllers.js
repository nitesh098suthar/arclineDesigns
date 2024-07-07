
// export const createDesign = catchAsyncError(async (req, res, next) => {
//   const {
//     designTitle,
//     location,
//     heightInFeet,
//     widthInFeet,
//     noOfBathRooms,
//     noOfBedRooms,
//     architectName,
//     profession,
//     popular,
//     category,
//     designDes,
//   } = req.body;

//   const areaInSquareFeet = heightInFeet * widthInFeet;

//   const architectImageFile = req.files["architectImage"][0];
//   const houseImageFile = req.files["houseImage"][0];
//   const allImagesFiles = req.files["allImages"];

//   const architectImageUri = getDataUri(architectImageFile).content;
//   const houseImageUri = getDataUri(houseImageFile).content;
//   const allImagesUris = allImagesFiles.map((file) => getDataUri(file).content);

//   const architectImageUpload = await cloudinary.v2.uploader.upload(
//     architectImageUri
//   );
//   const houseImageUpload = await cloudinary.v2.uploader.upload(houseImageUri);
//   const designElevationUploads = await Promise.all(
//     allImagesUris.map((image) => cloudinary.v2.uploader.upload(image))
//   );

//   await Design.create({
//     designTitle,
//     location,
//     heightInFeet,
//     widthInFeet,
//     noOfBathRooms,
//     noOfBedRooms,
//     architectName,
//     profession,
//     popular,
//     category,
//     designDes,
//     areaInSquareFeet,
//     architectImage: {
//       public_id: architectImageUpload.public_id,
//       url: architectImageUpload.secure_url,
//     },
//     houseImage: {
//       public_id: houseImageUpload.public_id,
//       url: houseImageUpload.secure_url,
//     },
//     allImages: designElevationUploads.map((upload) => ({
//       public_id: upload.public_id,
//       url: upload.secure_url,
//     })),
//   });

//   return res.status(201).json({
//     success: "true",
//     message: "Created",
//   });
// });

import catchAsyncError from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";
import Design from "../Model/Design.js";
// import express from "express";
// import upload from "./uploadMiddleware.js";

// const router = express.Router();

export const createDesign = catchAsyncError(async (req, res) => {
  try {
    const {
      designTitle,
      location,
      heightInFeet,
      widthInFeet,
      noOfBathRooms,
      noOfBedRooms,
      architectName,
      profession,
      popular,
      category,
      designDes,
    } = req.body;

    const houseImage = req.files.houseImage ? req.files.houseImage[0] : null;
    const architectImage = req.files.architectImage
      ? req.files.architectImage[0]
      : null;
    const allImages = req.files.allImages || [];

    const MAX_FILE_SIZE = 10485760; // 10 MB

    // Check file sizes
    if (
      (houseImage && houseImage.size > MAX_FILE_SIZE) ||
      (architectImage && architectImage.size > MAX_FILE_SIZE) ||
      allImages.some((file) => file.size > MAX_FILE_SIZE)
    ) {
      return res.status(400).json({
        error: "One or more files are too large. Maximum file size is 10 MB.",
      });
    }

    let houseImageUpload = null;
    if (houseImage) {
      houseImageUpload = await cloudinary.uploader.upload(houseImage.path);
    }

    let architectImageUpload = null;
    if (architectImage) {
      architectImageUpload = await cloudinary.uploader.upload(
        architectImage.path
      );
    }

    const allImageUploads = [];
    for (const file of allImages) {
      const result = await cloudinary.uploader.upload(file.path);
      allImageUploads.push(result);
    }
    const areaInSquareFeet = Number(heightInFeet) * Number(widthInFeet)
    const imageObject = {
      designTitle,
      designDes,
      location,
      heightInFeet,
      widthInFeet,
      areaInSquareFeet,
      noOfBathRooms,
      noOfBedRooms,
      architectName,
      profession,
      popular,
      category,
      houseImage: houseImageUpload
        ? {
            public_id: houseImageUpload.public_id,
            secure_url: houseImageUpload.secure_url,
          }
        : null,
      architectImage: architectImageUpload
        ? {
            public_id: architectImageUpload.public_id,
            secure_url: architectImageUpload.secure_url,
          }
        : null,
      allImages: allImageUploads.map((img) => ({
        public_id: img.public_id,
        secure_url: img.secure_url,
      })),
    };

    const newImageDocument = new Design(imageObject);

    await newImageDocument.save();

    res.status(200).json({
      message: "Images and design details uploaded and stored successfully",
      allListings: newImageDocument,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export const getAllDesigns = catchAsyncError(async (req, res, next) => {
  const allListings = await Design.find();
  
  return res.status(201).json({
    success: "true",
    allListings,
  });
});

export const updateDesign = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new ErrorHandler("There is no id in url"));

  const existingDesign = await Design.findById(id);
  if (!existingDesign)
    return next(new ErrorHandler("There is no design with this id"));

  const {
    designTitle,
    location,
    heightInFeet,
    widthInFeet,
    noOfBathRooms,
    noOfBedRooms,
    architectName,
    profession,
    popular,
    category,
    designDes,
  } = req.body;

  const areaInSquareFeet = heightInFeet * widthInFeet;

  let architectImageUpload, houseImageUpload, designElevationUploads;

  if (req.files["architectImage"]) {
    // Delete the existing architect image from Cloudinary
    await cloudinary.v2.uploader.destroy(
      existingDesign.architectImage.public_id
    );

    const architectImageFile = req.files["architectImage"][0];
    const architectImageUri = getDataUri(architectImageFile).content;
    architectImageUpload = await cloudinary.v2.uploader.upload(
      architectImageUri
    );
  }

  if (req.files["houseImage"]) {
    // Delete the existing house image from Cloudinary
    await cloudinary.v2.uploader.destroy(existingDesign.houseImage.public_id);

    const houseImageFile = req.files["houseImage"][0];
    const houseImageUri = getDataUri(houseImageFile).content;
    houseImageUpload = await cloudinary.v2.uploader.upload(houseImageUri);
  }

  if (req.files["allImages"]) {
    // Delete the existing all images from Cloudinary
    for (const image of existingDesign.allImages) {
      await cloudinary.v2.uploader.destroy(image.public_id);
    }

    const allImagesFiles = req.files["allImages"];
    const allImagesUris = allImagesFiles.map(
      (file) => getDataUri(file).content
    );
    designElevationUploads = await Promise.all(
      allImagesUris.map((image) => cloudinary.v2.uploader.upload(image))
    );
  }

  const updateData = {
    designTitle,
    location,
    heightInFeet,
    widthInFeet,
    noOfBathRooms,
    noOfBedRooms,
    architectName,
    profession,
    popular,
    category,
    designDes,
    areaInSquareFeet,
  };

  if (architectImageUpload) {
    updateData.architectImage = {
      public_id: architectImageUpload.public_id,
      url: architectImageUpload.secure_url,
    };
  }

  if (houseImageUpload) {
    updateData.houseImage = {
      public_id: houseImageUpload.public_id,
      url: houseImageUpload.secure_url,
    };
  }

  if (designElevationUploads) {
    updateData.allImages = designElevationUploads.map((upload) => ({
      public_id: upload.public_id,
      url: upload.secure_url,
    }));
  }

  await Design.updateOne({ _id: id }, { $set: updateData });

  return res.status(201).json({
    success: "true",
    message: "Design updated successfully",
  });
});


export const deleteDesign = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(new ErrorHandler("There is no id in url"));

  const existingDesign = await Design.findById(id);
  if (!existingDesign)
    return next(new ErrorHandler("There is no design with this id"));

  // Delete the images from Cloudinary
  if (existingDesign.architectImage) {
    await cloudinary.v2.uploader.destroy(existingDesign.architectImage.public_id);
  }
  if (existingDesign.houseImage) {
    await cloudinary.v2.uploader.destroy(existingDesign.houseImage.public_id);
  }
  if (existingDesign.allImages && existingDesign.allImages.length > 0) {
    for (const image of existingDesign.allImages) {
      await cloudinary.v2.uploader.destroy(image.public_id);
    }
  }

  // Delete the design document from the database
  await Design.findByIdAndDelete(id);

  return res.status(201).json({
    success: "true",
    message: "Design deleted successfully",
  });
});
