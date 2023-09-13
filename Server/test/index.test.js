const app = require("../src/app");
const session = require("supertest");
const request = session(app);

const character = {
  id: 1528,
  name: "Carlos",
  species: "Human",
  gender: "Male",
  status: "Alive",
  origin: {
    name: "Earth (C-137)",
  },
  image: "imabe.jpg",
};

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await request.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });

    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
      const response = await request.get("/rickandmorty/character/1");
      for (const prop in character) {
        expect(response.body).toHaveProperty(prop);
      }
    });

    it("Si hay un error responde con status: 500", async () => {
      const response = await request.get("/rickandmorty/character/2547");
      expect(response.statusCode).toBe(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    const access = { access: true };

    it("Responde con un objeto con la propiedad access en true si la informacion es valida", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=avg_unix@gmail.com&password=123456d"
      );
      expect(response.body).toEqual(access);
    });

    it("Responde con un objeto con la propiedad access en true si la informacion es valida", async () => {
      const response = await request.get(
        "/rickandmorty/login?email=avg_unix@gmail.com&password=123456x"
      );
      access.access = false;
      expect(response.body).toEqual(access);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Debe guardar personaje en favorito", async () => {
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body).toContainEqual(character);
    });

    it("Debe agregar nuevos personajes a los existentes", async () => {
      character.id = 1356;
      character.name = "Dixon";
      const response = await request.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBe(2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no existe, devuelve un arreglo con todos los favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/2155");
      expect(response.body.length).toBe(2);
    });

    it("Si el ID solicitado existe, deveria ser eliminado de favoritos", async () => {
      const response = await request.delete("/rickandmorty/fav/1356");
      expect(response.body.length).toBe(1);
    });
  });
});
