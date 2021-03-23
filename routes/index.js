const router = require('express').Router()

router.use('/api', require('./category-routes.js'))
router.use('/api', require('./product-routes.js'))
router.use('/api', require('./tag-routes.js'))

//router.use('/api', require('./producttagRoutes.js'))    //why missing this file and line of code

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>')
})

module.exports = router
