import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import authConfig from './app/middlewares/auth';

import ModuleController from './app/controllers/ModuleController';
// import LessonController from './app/controllers/LessonController';
import ContentController from './app/controllers/ContentController';
import AttachController from './app/controllers/AttachController';
// import UserController from './app/controllers/UserController';
// import SessionController from './app/controllers/SessionController';
// import GradeController from './app/controllers/GradeController';
// import SchoolController from './app/controllers/SchoolController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/modules', ModuleController.store);
routes.post('/contents', ContentController.store);
routes.post('/files', upload.single('file'), AttachController.store);
routes.get('/modules', ModuleController.index);

export default routes;
