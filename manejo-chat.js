const fs = require('fs')

async function escribir(newData){

    try {
        const escritura = await fs.promises.writeFile('./chat.txt',JSON.stringify(newData, null, 2));
                    
    } catch (error) {
        console.log('error al escribir el documento', error)
    }
}


class Chat{
    constructor(nombreArchivo){}    
    
    save(objeto){

        async function leer(){
            try {
                const contenido = await fs.promises.readFile('./chat.txt', 'utf-8');
                    const newData = JSON.parse(contenido).map(el=>el);
                    let newId ;
                    newData.length? (newId = Number(newData[newData.length-1].id) + 1):(newId=1)                    
                    objeto.id = `${newId}`;
                    newData.push(objeto);
                    
                    escribir(newData);

                    return objeto
            } catch (error) {
                console.log('se creará una archivo para este nuevo producto')
                try {
                    objeto.id = `1`;
                    console.log('el nuevo ID es: ', 1 );
                    const escritura = await fs.promises.writeFile('./chat.txt',`[${JSON.stringify(objeto, null, 2)}]`);                
                } catch (error) {
                    console.log('error al escribir el documento', error)
                }
            }    
        }
        return leer();
    };

    getAll(){
        async function leer(){
            try {
                const contenido = await fs.promises.readFile('./chat.txt', 'utf-8'); 
                    return JSON.parse(contenido);    
            } catch (error) {
                console.log('error de lectura', error)
            }    
        }
        return leer()
    }

}


module.exports = {Chat} 

