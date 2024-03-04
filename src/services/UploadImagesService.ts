import S3Storage from "../ultils/S3Storage";

class UploadImagesService {
  async execute(file: Express.Multer.File): Promise<void> {
    await S3Storage.deleteFile(file.filename)
  }
}

export default new UploadImagesService();
