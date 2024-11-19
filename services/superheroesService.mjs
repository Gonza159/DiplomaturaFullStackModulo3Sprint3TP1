import superHeroRepository from '../repositories/SuperHeroRepository.mjs'; 

export async function obtenerSuperheroePorId(id) { 
    return await superHeroRepository.obtenerPorId(id); 
} 
export async function obtenerTodosLosSuperheroes() { 
    return await superHeroRepository.obtenerTodos (); 
} 
export async function buscarSuperheroesPorAtributo(atributo, valor) { 
    return await superHeroRepository.buscarPorAtributo (atributo, valor); 
} 
export async function obtenerSuperheroesMayoresDe30() { 
    return await superHeroRepository.obtenerMayoresDe30();
} 
//
export async function agregarSuperHeroe(superHeroData) {
    try {
        return await superHeroRepository.crear(superHeroData);
    } catch (error) {
        console.error(error);
        throw new Error("Error al registrar el superhéroe en la base de datos");
    }
}
export async function actualizarSuperheroe(id, superHeroData) {
    const superHeroExists = await superHeroRepository.obtenerPorId(id);
    if (!superHeroExists) {
      throw { status: 404, message: "Superhéroe no encontrado" };
    }
  
    try {
      return await superHeroRepository.actualizar(id, superHeroData);
    } catch (error) {
      console.error(error);
      throw new Error("Error al actualizar los datos del superhéroe");
    }
}
export async function eliminarSuperheroe(id) {
    try {
      return await superHeroRepository.eliminar(id);
    } catch (error) {
      console.error(error);
      throw new Error("Error al eliminar el superhéroe");
    }
}
export async function eliminarSuperheroePorNombre(nombreSuperHeroe) {
    const superHero = await superHeroRepository.obtenerPorAtributo(
      "nombreSuperHeroe",
      nombreSuperHeroe
    );
    if (superHero.length < 1) {
      throw { status: 404, message: "Superhéroe no encontrado" };
    }
  
    try {
      const id = superHero[0]._id;
      return await superHeroRepository.eliminar(id);
    } catch (error) {
      console.error(error);
      throw new Error("Error al eliminar el superhéroe mediante su nombre");
    }
}