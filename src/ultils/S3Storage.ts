import aws, { S3 } from "aws-sdk";
import multerConfig from "../config/upload";
import path from "path";
import mime from "mime";
import fs from "fs";

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: "us-east-1",
    });
  }

  async saveFile(fileName: string): Promise<void> {
    const originalPath = path.resolve(multerConfig.directory, fileName);

    const ContentType = mime.getType(originalPath);

    if (!ContentType) {
      throw new Error("File not found");
    }

    const fileContent = await fs.promises.readFile(originalPath);

    this.client
      .putObject({
        Bucket: "joaoprog-bucket",
        Key: fileName,
        ACL: "public-read",
        Body: fileContent,
        ContentType,
      })
      .promise();

    await fs.promises.unlink(originalPath);
  }

  async deleteFile(filename: string): Promise<void>{
    this.client.deleteObject({
      Bucket: "joaoprog-bucket",
      Key: filename
    })
    .promise()
  }
}

export default new S3Storage();
