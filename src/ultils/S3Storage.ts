import aws, { S3 } from "aws-sdk";

class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: "us-east-1",
    });
  }
}

export default new S3Storage();
