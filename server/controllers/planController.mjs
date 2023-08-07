import Plan from "../schemas/Plan.mjs";

//Create new Plan in DB
const handleNewPlan = async (request, response) => {
  const { name, exercises } = request.body;
  //Missing Required Fields
  if (!name) {
    return response.status(400).json({ message: "Missing name." });
  }
  //Create New Plan
  try {
    const result = await Plan.create({
      name,
      exercises,
    });
    return response.status(201).json({ success: `New Plan: ${name} created!`, result });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

//Get Plans from DB
const handleGetPlans = async (request, response) => {
  const plans = await Plan.find();
  //No Plans found in DB
  if (!plans) {
    return response.status(204).json({ message: "No plans found." });
  }
  return response.status(200).json(plans);
};

//Getting one plan from DB
const handleGetPlan = async (request, response, id) => {
  try {
    const plan = await Plan.findById(id);
    //For deleted items
    if (!plan) {
      return response.status(404).json({ message: `No plan by id ${id} has found.` });
    }
    return response.status(302).json(plan);
    //No exercise watching ID in DB found
  } catch (error) {
    console.error(error);
    return response.status(400).json({ message: "Invalid id." });
  }
};

//Updating a plan from DB
const handleUpdatePlan = async (request, response, id) => {
  //No ID, return error code
  if (!id) {
    return response.status(400).json({ message: "ID parameter is required." });
  }
  try {
    const plan = await Plan.findOne({ _id: id }).exec();
    if (request.body?.name) {
      plan.name = request.body.name;
    }
    if (request.body?.exercises) {
      plan.exercises = request.body.exercises;
    }
    if (request.body?.lastPerformed) {
      plan.lastPerformed = request.body.lastPerformed;
    }
    const result = await plan.save();
    return response.status(200).json(result);
  } catch (error) {
    console.error(error);
    return response.status(400).json({ message: "Invalid id." });
  }
};

//Deleting a plan from DB
const handleDeletePlan = async (request, response, id) => {
  //No ID provided
  if (!id) {
    return response.status(400).json({ message: "ID parameter is required." });
  }
  try {
    const plan = await Plan.findOne({ _id: id }).exec();
    //No plan found for ID
    if (!plan) {
      return response.status(204).json({ message: `No plan matched ${id}` });
    }
    const result = await plan.deleteOne({ _id: id });
    return response.status(200).json(result);
  } catch (error) {
    console.error(error);
    return response.status(400).json({ message: "Invalid id." });
  }
};

export default {
  handleNewPlan,
  handleGetPlans,
  handleGetPlan,
  handleUpdatePlan,
  handleDeletePlan,
};
