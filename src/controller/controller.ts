import { Request, Response } from "express";
import UploadImagesService from "../services/UploadImagesService";
import DeleteImagesService from "../services/DeleteImagesService"

class Controller {
  public async getTeste(req: Request, res: Response): Promise<Response> {
    return res.json({ ok: true });
  }
  public async upload(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    await UploadImagesService.execute(file);

    return res.send();
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { filename } = req.params;

    await DeleteImagesService.execute(filename);

    return res.send();
  }
}

export default new Controller();
