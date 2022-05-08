const AppError = require("../utils/appError");
const conn = require("../services/db");

const getAllItems = (req, res, next) => {
  conn.query("SELECT * FROM items", function (err, data, fields) { // needs fix
    if(err) return next(new AppError(err))
    res.status(200).json({
      status: 200,
      length: data?.length,
      data: data,
    });
  });
  };

  const createItem = (req, res, next) => {
    if (!req.body) return next(new AppError("No info sent in body", 404));
    conn.query(
      "INSERT INTO items (name, description, quantity, isPurchased) VALUES(?, ?, ?, ?)",
      [req.body.name, req.body.description, req.body.quantity, req.body.isPurchased],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: 200,
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
      "UPDATE items SET name=?, description=?, quantity=?, isPurchased=? WHERE id=?",
      [req.body.name, req.body.description, req.body.quantity, req.body.isPurchased, req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: 200,
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
      "DELETE FROM items WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: 200,
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