import catchAsyncError from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";
import Design from "../Model/Design.js";

export const createDesign = catchAsyncError(async (req, res, next) => {
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

  const architectImageFile = req.files["architectImage"][0];
  const houseImageFile = req.files["houseImage"][0];
  const allImagesFiles = req.files["allImages"];

  const architectImageUri = getDataUri(architectImageFile).content;
  const houseImageUri = getDataUri(houseImageFile).content;
  const allImagesUris = allImagesFiles.map((file) => getDataUri(file).content);

  const architectImageUpload = await cloudinary.v2.uploader.upload(
    architectImageUri
  );
  const houseImageUpload = await cloudinary.v2.uploader.upload(houseImageUri);
  const designElevationUploads = await Promise.all(
    allImagesUris.map((image) => cloudinary.v2.uploader.upload(image))
  );

  await Design.create({
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
    architectImage: {
      public_id: architectImageUpload.public_id,
      url: architectImageUpload.secure_url,
    },
    houseImage: {
      public_id: houseImageUpload.public_id,
      url: houseImageUpload.secure_url,
    },
    allImages: designElevationUploads.map((upload) => ({
      public_id: upload.public_id,
      url: upload.secure_url,
    })),
  });

  return res.status(201).json({
    success: "true",
    message: "Created",
  });
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
