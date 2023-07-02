const {Router} = require('express')
const router  = Router();
const UserCtrl = require('../../controllers/userControllers/userControllers.js')
router.get('/',UserCtrl.index)

router.get('/:id',UserCtrl.show)

router.post('/',UserCtrl.store)

router.patch('/:id',UserCtrl.update)

router.put('/:id',UserCtrl.update)

router.delete('/:id',UserCtrl.delete)


module.exports = router