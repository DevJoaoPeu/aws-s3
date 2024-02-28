import { Router, Request, Response } from "express";
import controller from "./controller/controller";
import multerConfig from "./config/upload";
import multer from "multer";

const upload = multer(multerConfig);

class Routes {
  routes = Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.routes.get("/teste", controller.getTeste);
    this.routes.post("/", upload.single("image"), controller.upload);
    this.routes.delete("/:filename", controller.delete);
  }
}

export default new Routes();

// const routes = Router();

// routes.get("/", async (req: Request, res: Response) => {
//   return res.json({ok: true})
// });

// routes.post("/", async (req: Request, res: Response) => {});

// routes.delete("/:filename", async (req: Request, res: Response) => {});

// export default routes;
