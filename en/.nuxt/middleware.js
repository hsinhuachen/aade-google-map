const middleware = {}

middleware['routerMiddleware'] = require('../middleware/routerMiddleware.js')
middleware['routerMiddleware'] = middleware['routerMiddleware'].default || middleware['routerMiddleware']

export default middleware
