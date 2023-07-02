const {Router} = require('express')
const router = Router()
const userRoutes = require('./userRoutes/userRoutes.js')
const bookRoutes = require('./bookRoutes/bookRoutes.js')
router.use('/users',userRoutes)
router.use('/books',bookRoutes)

module.exports = router