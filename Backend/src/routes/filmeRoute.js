const express = require('express');
const router = express.Router();

const filmeController = require('../controllers/filmeController')

router.get('/save', (req, res) => {
    res.json({ status: 'Filme Saved' });
});

router.get('/list',filmeController.list);
router.get('/get/:id',filmeController.get);
router.post('/update/:id', filmeController.update);
router.post('/create',filmeController.create);
router.delete('/delete/:id', filmeController.delete);

module.exports = router;