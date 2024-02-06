module.exports = (func, ...excludeRoutes) => {
  return (req, res, next) => {
    for (let route of excludeRoutes) {
      if (req.path === route|| req.path.startsWith('/docs/')) {
        return next();
      }
    }
    return func(req, res, next);
  };
};
