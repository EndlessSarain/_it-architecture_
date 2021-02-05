
module.exports.funchelloworldPOST = function funchelloworldPOST(req, res, next) {
  res.send({
    message: 'hello '+req.undefined.value.name
  });
};
