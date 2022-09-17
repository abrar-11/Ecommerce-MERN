import ErrorHandler from "../utils/errorHandler.js";

const errorHandler = function (err, req, res, next) {
   //    console.log(err);

   let error = { ...err };

   error.message = err.message;

   //    Mongoose Invalid Id Error

   if (err.name == "CastError") {
      const message = `Not Found Id: ${(err.val = e)}`;
      error = new ErrorHandler(message, 404);
   }

   //    Mongoose Duplicate Data Error
   if (err.code == 11000) {
      const message = "Duplicate Data Found...";
      error = new ErrorHandler(message, 404);
   }

   //    Mongoose Validation Error
   if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 404);
   }

   res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Sorry! Somthing failed .. ",
   });
};

export default errorHandler;
