import BodyPart from "../schemas/BodyPart.mjs";

//Getting all categories from DB
const handleGetBodyParts = async (request, response) => {
  const bodyParts = await BodyPart.find();
  //No exercises in DB return
  if (!bodyParts) {
    return response.status(204).json({ message: "No categories found." });
  }
  return response.status(200).json(bodyParts);
};

// //Creating a new category on DB
// const handleNewBodyPart = async (request, response) => {
//   const { bodyPart } = request.body;
//   //Missing Required Fields
//   if (!bodyPart) {
//     return response.status(400).json({ message: "Missing bodyPart." });
//   }
//   //Create New Exercise
//   try {
//     const result = await BodyPart.create({
//       name: bodyPart,
//     });
//     //Once exercise is created the object is sent back with a message
//     return response
//       .status(201)
//       .json({ success: `New body part: ${bodyPart} created!`, result });
//   } catch (error) {
//     return response.status(500).json({ message: error.message });
//   }
//   return response.status(401).json({ message: "Unauthorized access" });
// };

const handleNotAuthorized = async (request, response) => {
  return response.status(401).json({ message: "Unauthorized access" });
};

export default { handleGetBodyParts, handleNotAuthorized };
