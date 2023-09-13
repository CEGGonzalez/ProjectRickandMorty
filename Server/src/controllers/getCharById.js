const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const { data } = await axios(`${URL}/${id}`)
    if (!data) throw Error(`ID: ${id} Not found`)
    const { status, name, species, origin, image, gender } = data;
    res.status(200).json({ id, status, name, species, origin, image, gender } );

  } catch (error) {
    return error.message.includes('ID')
    ? res.status(404).send(error.message)
    : res.status(500).send(error.response.data.error)
    
  }

} 
    
  
 
      
//     if (!data.name) throw Error(`ID: ${id} Not found`);

//     const character = { 
//       id: data.id,
//       name: data.name, 
//       species: data.species,
//       origin: data.origin, 
//       image: data.image, 
//       gender: data.gender, 
//       status: data.status 
//     }
    
//     return res.status(200).json({ character });

//   } catch (error) {
//     return error.message.includes('ID')
//     ? res.status(404).send(error.message)
//     : res.status(500).send(error.response.data.error)
//   }


module.exports = getCharById;
