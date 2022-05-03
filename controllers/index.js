const AppError = require("../utils/appError");
const conn = require("../services/db");

const getAllItems = (req, res, next) => {
  conn.query("SELECT * FROM items", function (err, data, fields) { // needs fix
    if(err) return next(new AppError(err))
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
  };

  const createItem = (req, res, next) => {
    console.log('req.body:', req.body);
    if (!req.body) return next(new AppError("No info sent in body", 404));
    const values = [req.body.name, req.body.description, req.body.quantity, req.body.isPurchased];
    conn.query(
      "INSERT INTO items (name, description, quantity, isPurchased) VALUES(?)",
      [values], // placeholder query
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          message: "item created!",
          data: data,
        });
      }
      );
  };

  const updateItem = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "UPDATE items SET status='completed' WHERE id=?", // placeholder query
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          message: "item updated!",
          data: data,
        });
      }
    );
  };

  const deleteItem = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "DELETE FROM items WHERE id=?", // placeholder query
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          message: "item deleted!",
        });
      }
    );
  };

  module.exports = {
    getAllItems,
    createItem,
    updateItem,
    deleteItem,
  }