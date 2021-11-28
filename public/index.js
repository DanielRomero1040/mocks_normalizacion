const socket = io();



//------- chat socket client --------
socket.on("message_back", (data)=>{
    console.log(data);
    render(data);
});

const render = (data)=>{
    let html = data.map( (element)=>{        
        return `
        <p class="text-light"> <strong class="text-primary"> ${element.author.nombre} : </strong> ${element.text} -- <span class="text-warning"> ${element.author.id} </span></p>
        `
    }).join(" ")

    document.getElementById("messages").innerHTML = html;
};
document.getElementById("enviar").addEventListener("click", function(e){
    e.preventDefault()
    let objetoMensaje = {
        
        author:{
            id: document.getElementById("nombre").value,
            nombre : document.getElementById("nombre").value,
            apellido: document.getElementById("input").value,
            edad: document.getElementById("input").value,
            alias:document.getElementById("input").value,
            avatar: document.getElementById("input").value,

        },
        text : document.getElementById("input").value,
                
    }
    
    socket.emit("data_client", objetoMensaje)

    document.getElementById("nombre").readOnly
    document.getElementById("input").value = ""
    console.log(e)
  });



//------------- products socket client --------------

socket.on("products_back", (data)=>{
    console.log("products back",data);
    renderProducts(data);
});

const renderProducts = (data)=>{
    let html = data.map( (element)=>{
        return `
        <tr>
            <th scope="row" class="align-middle fs-4">${element.id}</th>
            <td class="text-center align-middle fs-4">${element.title}</td>
            <td class="text-center align-middle fs-4">${element.price}</td>
            <td class="text-center align-middle fs-4">
              <img src="${element.thumbnail}" alt="" style="width: 100px" />
            </td>
        </tr>
        `
    }).join(" ")

    document.getElementById("table").innerHTML = html;
};

document.getElementById("enviarProductos").addEventListener("click", function(event){
    event.preventDefault()

    console.log("pasa por evento")
    let objetoProducto = {
        
        title : document.getElementById("title").value,
        price : document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value

    }    
    socket.emit("products_client", objetoProducto)
    
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("thumbnail").value = "";
  });

