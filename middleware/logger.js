// @desc    logs middleware
//Add middleware, variables that we add to the request here, can be used in routing objects, like in the controllers
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

module.exports = logger;
