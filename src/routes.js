import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import ModuleController from './app/controllers/ModuleController';
import LessonController from './app/controllers/LessonController';
import ContentController from './app/controllers/ContentController';
import AttachController from './app/controllers/AttachController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/modules', ModuleController.store);
routes.get('/modules', ModuleController.index);
routes.get('/lessons', LessonController.index);
routes.post('/lessons', LessonController.store);
routes.get('/lessons', LessonController.index);
routes.post('/contents', ContentController.store);
routes.post('/files', upload.single('file'), AttachController.store);
routes.get('/files', AttachController.index);

export default routes;
