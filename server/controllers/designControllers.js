
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
      success : true,
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

export const getOneDesign = catchAsyncError(async (req, res, next) => {
  const {id} = req.params
  const oneDesign = await Design.findById(id);

  if(!oneDesign) next(new ErrorHandler("THere is no design with this id", 404))

  return res.status(201).json({
    success: "true",
    oneDesign,
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


export const updateDesign = catchAsyncError(async (req, res) => {
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

    const designId = req.params.id;
    const design = await Design.findById(designId);

    if (!design) {
      return res.status(404).json({ error: "Design not found" });
    }

    let houseImageUpload = null;
    if (houseImage) {
      if (design.houseImage && design.houseImage.public_id) {
        await cloudinary.uploader.destroy(design.houseImage.public_id);
      }
      houseImageUpload = await cloudinary.uploader.upload(houseImage.path);
    }

    let architectImageUpload = null;
    if (architectImage) {
      if (design.architectImage && design.architectImage.public_id) {
        await cloudinary.uploader.destroy(design.architectImage.public_id);
      }
      architectImageUpload = await cloudinary.uploader.upload(
        architectImage.path
      );
    }

    const allImageUploads = [];
    for (const file of allImages) {
      const result = await cloudinary.uploader.upload(file.path);
      allImageUploads.push(result);
    }

    if (design.allImages && design.allImages.length > 0) {
      for (const img of design.allImages) {
        await cloudinary.uploader.destroy(img.public_id);
      }
    }

    const areaInSquareFeet = Number(heightInFeet) * Number(widthInFeet);

    design.designTitle = designTitle;
    design.location = location;
    design.heightInFeet = heightInFeet;
    design.widthInFeet = widthInFeet;
    design.areaInSquareFeet = areaInSquareFeet;
    design.noOfBathRooms = noOfBathRooms;
    design.noOfBedRooms = noOfBedRooms;
    design.architectName = architectName;
    design.profession = profession;
    design.popular = popular;
    design.category = category;
    design.designDes = designDes;
    design.houseImage = houseImageUpload
      ? {
          public_id: houseImageUpload.public_id,
          secure_url: houseImageUpload.secure_url,
        }
      : design.houseImage;
    design.architectImage = architectImageUpload
      ? {
          public_id: architectImageUpload.public_id,
          secure_url: architectImageUpload.secure_url,
        }
      : design.architectImage;
    design.allImages = allImageUploads.length
      ? allImageUploads.map((img) => ({
          public_id: img.public_id,
          secure_url: img.secure_url,
        }))
      : design.allImages;

    await design.save();

    res.status(200).json({
      message: "Design updated successfully",
      design,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
