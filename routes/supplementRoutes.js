
const express = require('express');
const router = express.Router();
const supplementController = require('../controllers/supplementController');

router.get('/store/supplements', supplementController.getAllSupplements);
router.get('/store/supplements/:id', supplementController.getSupplementById);
router.post('/store/supplements', supplementController.addSupplement);
router.delete('/store/supplements', supplementController.deleteAllSupplements);
router.delete('/store/supplements/:id', supplementController.deleteSupplementById);

module.exports = router;
