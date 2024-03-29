import {Router} from "express"
import { createRecipe, getRecipes, saveRecipes, recipeID, getsavedRecipes, getRecipeDetail } from "../controllers/recipes.controller.js"

const router = Router()

router.get("/", getRecipes)

router.post("/create", createRecipe)

// Save recipe
router.put("/", saveRecipes)

// Get id of saved recipes
router.get("/savedRecipes/ids/:userID", recipeID)

// Get saved recipes
router.get("/savedRecipes/:userID", getsavedRecipes)

// Get Detail of single recipe
router.get("/:id", getRecipeDetail)


export {router as recipeRouter}