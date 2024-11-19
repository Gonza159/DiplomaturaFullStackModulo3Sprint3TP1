import {obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, agregarSuperHeroe, actualizarSuperheroe, eliminarSuperheroe, eliminarSuperheroePorNombre } from '../services/superheroesService.mjs'; 
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs'; 

export async function obtenerSuperheroePorIdController(req, res) { 
    const {id} = req.params; 
    const superheroe = await obtenerSuperheroePorId(id); 
    if(superheroe) { 
        res.send(renderizarSuperheroe(superheroe)); 
    }else { 
        res.status(404).send({ mensaje: "Superhéroe no encontrado" }); 
    } 
} 
export async function obtenerTodosLosSuperheroesController(req, res) { 
    const superheroes = await obtenerTodosLosSuperheroes(); 
    res.send(renderizarListaSuperheroes (superheroes)); 
} 
export async function buscarSuperheroesPorAtributoController(req, res) { 
    const { atributo, valor } = req.params; 
    // console.log(atributo, valor);
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor); 
    if(superheroes.length > 0) { 
        res.send(renderizarListaSuperheroes (superheroes)); 
    }else { 
        res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" }) 
    } 
} 
export async function obtenerSuperheroesMayoresDe30Controller (req, res) { 
    const superheroes = await obtenerSuperheroesMayoresDe30(); 
    res.send(renderizarListaSuperheroes (superheroes));
} 
//
export async function agregarNuevoSuperheroeController(req, res, next) {
    try {
      const superHeroData = req.body;
      const newSuperHero = await agregarSuperHeroe(superHeroData);
      return res.status(201).send(renderizarSuperheroe(newSuperHero));
    } catch (error) {
      return next(error);
    }
  }
  
  export async function actualizarSuperheroePorIdController(req, res, next) {
    try {
      const { id } = req.params;
      const superHeroData = req.body;
      await actualizarSuperheroe(id, superHeroData);
      return res.status(200).json({ message: "Superhéroe actualizado" });
    } catch (error) {
      return next(error);
    }
  }
  
  export async function eliminarSuperheroePorIdController(req, res, next) {
    const { id } = req.params;
    try {
      await eliminarSuperheroe(id);
      return res.status(204).json({ message: "Superhéroe eliminado" });
    } catch (error) {
      return next(error);
    }
  }
  
  export async function eliminarSuperheroePorNombreController(req, res, next) {
    const { nombreSuperHeroe } = req.params;
    try {
      await eliminarSuperheroePorNombre(nombreSuperHeroe);
      return res.status(204).json({ message: "Superhéroe eliminado" });
    } catch (error) {
      return next(error);
    }
}