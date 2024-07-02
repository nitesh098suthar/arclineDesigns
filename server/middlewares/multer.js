import multer from "multer"

const storage = multer.memoryStorage();

// const singleUpload = multer({storage}).single("file")

export const uploadArchitectImage = multer({ storage }).single("architectImage");
export const uploadDesignThumbnail = multer({ storage }).single("houseImage");
export const uploadDesignElevation = multer({ storage }).array("allImages", 10); // Assuming a max of 10 images for designElevation
