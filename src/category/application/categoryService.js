import Category from "../domain/Category.model.js";

//creacion de la categoria
export const CreatebyId = async (categoryData, user) => {
  const { nameCategory } = categoryData;
  try {
    const categoryFound = await Category.findOne({
      nameCategory,
      user: user.id,
    });
    if (categoryFound) return ["la categoria ya existe"];

    const newCategory = new Category({
      nameCategory,
      user: user.id,
    });

    const categorySave = await newCategory.save();

    const populateCategory = await Category.findById(categorySave._id).populate(
      "user"
    );
    return populateCategory;
  } catch (error) {
    throw new Error("Error al crear la categoria");
  }
};

//obtener las categorias

export const getCategories = async (user) => {
  try {
    const categoryFound = await Category.find({ user: user.id });
    return categoryFound;
  } catch (error) {
    throw new Error("Error al encontrar la categoria");
  }
};

//editar categoria

export const updateById = async (categoryId, categoryData) => {
  try {
    const updateCategory = await Category.findByIdAndUpdate(
      categoryId,
      categoryData,
      { new: true }
    );
    if (!updateCategory) return { error: "No se encontró la categoria" };
    return updateCategory;
  } catch (error) {
    throw new Error("Error al editar la categoria");
  }
};

//borrar categoria

export const delteById = async (categoryId) => {
  try {
    const category = await Category.findByIdAndDelete({ _id: categoryId });
    if (!category) return ["no se encontro la categoria"];
    return category;
  } catch (error) {
    throw new Error("Error al editar la categoria");
  }
};

//encontrar una categoria

export const findCategorybyId = async (categoryId) => {
  try {
    return Category.findById(categoryId);
  } catch (error) {
    throw new Error("Error al encontrar la categoria");
  }
};

//encontrar categoria por el nombre

export const findCategoryByName = async (categoryName) => {
  try {
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      throw new Error("Categoría no encontrada");
    }
    return category;
  } catch (error) {
    throw new Error("Error al encontrar el nombre de la categoría");
  }
};
