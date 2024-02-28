import { Request, Response } from "express";

class Controller {
    public async getTeste(req: Request, res: Response): Promise<Response> {
        return res.json({ok: true})
    }
    public async upload(req: Request, res: Response): Promise<Response> {
        return res.json({ok: true})
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        return res.json({ok: true})
    }
    
}

export default new Controller()