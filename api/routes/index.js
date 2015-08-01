import Express from 'express';
import taxonomy from './taxonomy';

let router = Express.Router();

router
.use('/taxonomy', taxonomy);

export default router;