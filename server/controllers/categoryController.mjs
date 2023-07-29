import Category from "../schemas/Category.mjs";

//Getting all categories from DB
const handleGetCategories = async (request, response) => {
  const categories = await Category.find();
  //No exercises in DB return
  if (!categories) {
    return response.status(204).json({ message: "No categories found." });
  }
  return response.status(200).json(categories);
};

// //Creating a new category on DB
// const handleNewCategory = async (request, response) => {
//     const { category } = request.body;
//     //Missing Required Fields
//     if (!category) {
//       return response.status(400).json({ message: "Missing category." });
//     }
//     //Create New Exercise
//     try {
//       const result = await Category.create({
//         name: category,
//       });
//       //Once exercise is created the object is sent back with a message
//       return response
//         .status(201)
//         .json({ success: `New category: ${category} created!`, result });
//     } catch (error) {
//       return response.status(500).json({ message: error.message });
//     }
//   return response.status(401).json({ message: "Unauthorized access" });
// };

const handleNotAuthorized = async (request, response) => {
  return response.status(401).json({ message: "Unauthorized access" });
};

export default { handleGetCategories, handleNotAuthorized };
