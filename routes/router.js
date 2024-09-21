const express = require('express'); 
const router = express.Router();
const main = require('../controller/Maincontroller');

router.get('/', main.index);
router.get('/index', main.index);
router.get('/about', main.about);
router.get('/blog', main.blog);
router.get('/causes', main.causes);
router.get('/contact', main.contact);
router.get('/donation', main.donation);
router.get('/event', main.event);
router.get('/projects', main.projects);
router.get('/shop', main.shop);
router.get('/team', main.team);

module.exports = router;