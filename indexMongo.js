require("./mongoose");
const faker = require("faker");

const Product = require("./models/Products");


const saveProduct = async ()=>{
    const prod = new Product({
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        thumbnail: faker.image.animals(),
    })
    
    const productSaved = await prod.save()
    return productSaved;
}

// saveProduct().then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })

// leer
const getAllProduct = async ()=>{
    const products = await Product.find();
    return products;
}

// getAllProduct().then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })

const getOneProduct = async ()=>{
    const products = await Product.findOne({_id:"asd"});
    return products;
}

const updateProduct = async ()=>{
    const products = await Product.update({_id:"asd"},{
        name:"producto cambiado"
    });
    return products;
}