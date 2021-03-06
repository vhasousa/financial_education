import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import authConfig from './app/middlewares/auth';

import ModuleController from './app/controllers/ModuleController';
import LessonController from './app/controllers/LessonController';
import ContentController from './app/controllers/ContentController';
import AttachController from './app/controllers/AttachController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import GradeController from './app/controllers/GradeController';
import SchoolController from './app/controllers/SchoolController';
import QuestionController from './app/controllers/QuestionController';
import ScoreController from './app/controllers/ScoreController';

const routes = new Router();
const upload = multer(multerConfig);

routes.use(authConfig);

routes.post('/modules', ModuleController.store);
routes.post('/contents', ContentController.store);
routes.post('/files', upload.single('file'), AttachController.store);
routes.post('/schools', SchoolController.store);
routes.post('/grades', GradeController.store);
routes.post('/lessons', LessonController.store);
routes.post('/users', UserController.store);
routes.post('/questions', QuestionController.store);
routes.post('/answer/:id', ScoreController.store);
routes.put('/users', UserController.update);
routes.post('/sessions', SessionController.store);
routes.get('/lessons', LessonController.index);
routes.get('/modules', ModuleController.index);
routes.get('/answer', ScoreController.index);

export default routes;
