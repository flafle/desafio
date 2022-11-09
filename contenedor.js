const fs = require("fs");

class Contenedor {
  constructor(producto) {
    this.producto = producto;
 
  }

 getAll = async() => {
    try {
      if (fs.existsSync(this.producto)) {
        let data = await fs.promises.readFile(this.producto, "utf-8");
        let allProductos = JSON.parse(data);
        return allProductos
      } else
      {
        console.log
      }
    } catch (error) {
     
         console.log("error")
      };
  };
save = async(title,price,thumbnail)=> {

let azafran = {
  title : title,
  price: price,
  thumbnail:thumbnail
}

let stock = await this.getAll();
try {
  if (stock.length === 0){
    azafran.id = 0;
    stock.push(azafran)
    await fs.promises.writeFile(this.producto, JSON.stringify(stock,null,"\t"));

  }else {
    azafran.id = stock[stock.length-1].id+1
    stock.push(azafran)
    await fs.promises.writeFile(this.producto, JSON.stringify(stock,null,"\t"));

  }
  }
  catch (error){
    console.log(error)
  }
}


getById = async (number) => {
      let stock = await this.getAll();
       try {
       let filter = stock.find(e => e.id == number)
         return filter
      }catch (error){
        console.log(error);
      }

    }

}

deleteAll = async() =>{
  try {
      await fs.promises.writeFile(this.producto,JSON.parse("[]"))
  } catch (error) {
      console.log(error)
  }
}


let producto = new Contenedor("productos.json");
