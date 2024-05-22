const Business = require("./../models/businessModel");

exports.getBusiness = async (req, res, next) => {
  const data = await Business.find();
  console.log(data);

  res.status(200).json({
    status: "success",
    data,
  });
};

exports.createBusiness = async (req, res, next) => {
  console.log(req.body);
  const data = await Business.create(req.body);

  res.status(200).json({
    status: "success",
    data,
  });
};
