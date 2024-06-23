import spacesModel from "../models/spaceModel.js";
import slugify from "slugify";
export const registerSpaceController = async (req, res) => {
  try {
    const { name, capacity, minCapacity, block, webaddress } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    // if (
    //   capacity < minCapacity ||
    //   capacity > maxCapacity ||
    //   maxCapacity < minCapacity
    // ) {
    //   return res.send({ error: "Capacity have inconsistencies" });
    // }
    {
      /*
      if (!capacity) {
        return res.send({ message: "capacity is Required" });
      }
      if (!block) {
        return res.send({ message: "block is Required" });
      }
      if (!webaddress) {
        return res.send({ message: "WebAddress is Required" });
      }*/
    }
    //save
    const space = await new spacesModel({
      name,
      capacity,
      minCapacity,
      block,
      webaddress,
      slug: slugify(name),
    }).save();

    res.status(200).send({
      success: true,
      message: "space Register Successfully",
      space,
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
//get all spaces
export const spaceControlller = async (req, res) => {
  try {
    const space = await spacesModel.find({});
    res.status(200).send({
      success: true,
      message: "All Space List",
      space,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all spaces",
    });
  }
};

//get single space
export const singleSpaceController = async (req, res) => {
  try {
    const space = await spacesModel.findOne({ name: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get SIngle Space SUccessfully",
      space,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Space",
    });
  }
};

// update Space
export const updateSpaceController = async (req, res) => {
  try {
    const { name, capacity, minCapacity, block, webaddress } = req.body;
    const { id } = req.params;

    const updatedSpace = await spacesModel.findByIdAndUpdate(
      id,
      { name, capacity, minCapacity, block, webaddress },
      { new: true }
    );
    if (!updatedSpace) {
      return res.status(404).send({ success: false, message: "Space not found" });
    }
    res.status(200).send({
      success: true,
      message: "Space updated successfully",
      period: updatedSpace,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating space",
    });
  }
};

//delete Space
export const deleteSpaceController = async (req, res) => {
  try {
    const { id } = req.params;
    await spacesModel.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: "Space Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting space",
      error,
    });
  }
};