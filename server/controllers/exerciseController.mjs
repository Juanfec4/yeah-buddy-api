import Exercise from "../schemas/Exercise.mjs";

//Creating a new exercise on DB
const handleNewExercise = async (request, response) => {
  const { name, category, bodyPart, sets } = request.body;
  //Missing Required Fields
  if (!name || !category || !bodyPart) {
    return response
      .status(400)
      .json({ message: "Missing name, category or body part." });
  }
  //Create New Exercise
  try {
    const result = await Exercise.create({
      name,
      category,
      bodyPart,
      sets,
    });
    //Once exercise is created the object is sent back with a message
    return response
      .status(201)
      .json({ success: `New exercise: ${name} created!`, result });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

//Getting all exercises from DB
const handleGetExercises = async (request, response) => {
  const exercises = await Exercise.find();
  //No exercises in DB return
  if (!exercises) {
    return response.status(204).json({ message: "No exercises found." });
  }
  return response.status(200).json(exercises);
};
//Getting one exercise from DB
const handleGetExercise = async (request, response, id) => {
  try {
    const exercise = await Exercise.findById(id);
    //For deleted items
    if (!exercise) {
      return response
        .status(404)
        .json({ message: `No exercise by id ${id} has found.` });
    }
    return response.status(302).json(exercise);
    //No exercise watching ID in DB found
  } catch (error) {
    console.error(error);
    return response.status(400).json({ message: "Invalid id." });
  }
};

//Updating an exercise from DB
const handleUpdateExercise = async (request, response, id) => {
  //No ID, return error code
  if (!id) {
    return response.status(400).json({ message: "ID parameter is required." });
  }
  try {
    const exercise = await Exercise.findOne({ _id: id }).exec();
    //No exercise found for ID
    if (!exercise) {
      return response
        .status(204)
        .json({ message: `No exercise matches ${id}` });
    }
    //UPDATE if body contains a value
    if (request.body?.name) {
      exercise.name = request.body.name;
    }
    if (request.body?.category) {
      exercise.category = request.body.category;
    }
    if (request.body?.bodyPart) {
      exercise.bodyPart = request.body.bodyPart;
    }
    if (request.body?.sets && Array.isArray(request.body?.sets)) {
      exercise.sets = request.body.sets;
    }
    if (request.body?.notes && Array.isArray(request.body?.notes)) {
      exercise.notes = request.body.notes;
    }
    //Return updated object
    const result = await exercise.save();
    return response.status(200).json(result);
  } catch (error) {
    console.error(error);
    return response.status(400).json({ message: "Invalid id." });
  }
};

//Deleting an exercise from DB
const handleDeleteExercise = async (request, response, id) => {
  //No ID, return error code
  if (!id) {
    return response.status(400).json({ message: "ID parameter is required." });
  }
  try {
    const exercise = await Exercise.findOne({ _id: id }).exec();
    //No exercise found for ID
    if (!exercise) {
      return response
        .status(204)
        .json({ message: `No exercise matches ${id}` });
    }
    const result = await exercise.deleteOne({ _id: id });
    return response.status(200).json(result);
  } catch (error) {
    console.error(error);
    return response.status(400).json({ message: "Invalid id." });
  }
};

export default {
  handleNewExercise,
  handleGetExercises,
  handleGetExercise,
  handleUpdateExercise,
  handleDeleteExercise,
};
