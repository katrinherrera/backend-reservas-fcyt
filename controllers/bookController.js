import booksModel from "../models/bookModel.js";
import slugify from "slugify";
import mongoose from "mongoose";




export const registerBookController = async (req, res) => {
  try {
    const { name, capacity, block, webaddress, name_teacher, date, day, schedule } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    const dateschedule = date + schedule + name;
    const existingBook = await booksModel.findOne({ dateschedule });
    if (existingBook) {
      return res.status(400).send({ error: "A book with the same dateschedule already exists" });
    }    
    //save
    const book = await new booksModel({
      name, capacity, block, webaddress, name_teacher, date, day, schedule, dateschedule, slug: slugify(name),
    }).save();


    res.status(200).send({
      success: true,
      message: "book Register Successfully",
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};
//get all books
export const bookControlller = async (req, res) => {
  try {
    const book = await booksModel.find({});
    res.status(200).send({
      success: true,
      message: "All Book List",
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all books",
    });
  }
};


//get single book
export const singleBookController = async (req, res) => {
  try {
    const book = await booksModel.find({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "get single book",
      book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error getting single book",
    });
  }
};




/// Obtener el ambiente con más reservas entre dos fechas

export const mostReservedRoomController = async (req, res) => {
  const { startDate, endDate } = req.params;

  try {
    const result = await booksModel.aggregate([
      {
        $addFields: {
          dateObject: {
            $dateFromString: {
              dateString: "$date"
            }
          }
        }
      },
      {
        $match: {
          dateObject: {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
          }
        }
      },
      {
        $group: {
          _id: "$name",
          reservationCount: { $sum: 1 }
        }
      },
      {
        $sort: { reservationCount: -1 }
      },
      {
        $limit: 1
      }
    ]);

    res.status(200).send({
      success: true,
      message: "Most reserved room between the given dates",
      room: result[0]?._id || null,
      reservationCount: result[0]?.reservationCount || 0
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error getting the most reserved room"
    });
  }
};




// Obtener el docente con más reservas entre dos fechas

export const teacherWithMostReservations = async (req, res) => {
  const { startDate, endDate } = req.params;

  try {
    const result = await booksModel.aggregate([
      {
        $addFields: {
          dateObject: {
            $dateFromString: {
              dateString: "$date"
            }
          }
        }
      },
      {
        $match: {
          dateObject: {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
          }
        }
      },
      {
        $group: {
          _id: "$name_teacher",
          reservationCount: { $sum: 1 }
        }
      },
      {
        $sort: { reservationCount: -1 }
      },
      {
        $limit: 1
      }
    ]);

    res.status(200).send({
      success: true,
      message: "Teacher with most reservations between the given dates",
      teacher: result[0]?._id || null,
      reservationCount: result[0]?.reservationCount || 0
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error getting the teacher with most reservations"
    });
  }
};



