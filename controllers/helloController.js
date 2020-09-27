const catchAsync = require('../utils/catchAsync');

exports.getAllHellos = catchAsync(async (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Hello World'
    });
});