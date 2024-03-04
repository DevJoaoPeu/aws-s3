import S3Storage from "../ultils/S3Storage";


class DeleteImagesService {
  async execute(filename: string ): Promise<void> {
    await S3Storage.deleteFile(filename)
  }
}

export default new DeleteImagesService();
