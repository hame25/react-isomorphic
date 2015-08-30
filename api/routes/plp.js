import Express from 'express';

let router = Express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
  	products: [
  		{name: 'PlayStation', price: '109.99'},
  		{name: 'Xbox', price: '201.99'}
  	]
  });
});

export default router;