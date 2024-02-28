import { Request, Response } from "express";
import UploadImagesService from "../services/UploadImagesService";

class Controller {
  public async getTeste(req: Request, res: Response): Promise<Response> {
    return res.json({ ok: true });
  }
  public async upload(req: Request, res: Response): Promise<Response> {
    await UploadImagesService.execute()

    return res.send()
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    return res.json({ ok: true });
  }
}

export default new Controller();