import express from 'express'; 
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, agregarNuevoSuperheroeController, actualizarSuperheroePorIdController, eliminarSuperheroePorIdController, eliminarSuperheroePorNombreController } from '../controllers/superheroesController.mjs'; 
//
import { registerSuperHeroValidationRules, updateSuperHeroValidationRules } from "../validations/superHeroValidationRules.mjs";
import { handleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express. Router(); 
router.get('/heroes', obtenerTodosLosSuperheroesController); 
router.get('/heroes/:id', obtenerSuperheroePorIdController); 
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController); 
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller); 
//
router.post("/heroes", registerSuperHeroValidationRules, handleValidationErrors, agregarNuevoSuperheroeController);
router.put("/heroes/:id", updateSuperHeroValidationRules, handleValidationErrors, actualizarSuperheroePorIdController);
router.delete("/heroes/:id", eliminarSuperheroePorIdController);
router.delete("/heroes/nombreSuperHeroe/:nombreSuperHeroe", eliminarSuperheroePorNombreController);

export default router;