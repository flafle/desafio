const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.json");

const index = async () => {
  const id1 = await contenedor.save({ title: "Libreta", price: 800 });
  const id2 = await contenedor.save({ title: "Agenda", price: 2500 });
  const id3 = await contenedor.save({ title: "Organizador", price: 1500 });

  console.log(id1, id2, id3); 

  // { title: 'Agenda', price: 2500, id: 2 }
  const object2 = await contenedor.getById(2);
  console.log(object2); 

  await contenedor.deleteById(2);

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);
 
};

index();