import DAUserModel from "../models/DAUserModel.js";
import slugify from "slugify";
export const registerDAUserController = async (req, res) => {
    try {
      const { name, role, group, subject, N_students } = req.body;
      //validations
      if (!name) {
        return res.send({ error: "Name is Required" });
      }
      //save
      const DAUser = await new DAUserModel({
        name, role, group, subject, N_students, slug: slugify(name),
      }).save();
  
      res.status(200).send({
        success: true,
        message: "User Register Successfully",
        DAUser,
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
  //get all users
  export const DAUserControlller = async (req, res) => {
    try {
      const DAUser = await DAUserModel.find({});
      res.status(200).send({
        success: true,
        message: "All User List",
        DAUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all users",
      });
    }
  };

  //get single user
  export const singleDAUserController = async (req, res) => {
    try {
      const DAUser = await DAUserModel.find({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get Single user Successfully",
        DAUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single user",
        DAUser,
      });
    }
  };

  // update DAUser
  export const updateDAUserController = async (req, res) => {
    try {
      const { N_students } = req.body;
      const { id } = req.params;

      const updatedDAUser = await DAUserModel.findByIdAndUpdate(
        id,
        { N_students },
        { new: true }
      );
      if (!updatedDAUser) {
        return res.status(404).send({ success: false, message: "Students not found" });
      }
      res.status(200).send({
        success: true,
        message: "DAUser updated successfully",
        period: updatedDAUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while updating DAUser",
      });
    }
  };