const mysql = require('mysql2');
const { dbHost,dbName, dbPort, dbUser, dbPassword } = require('.');


const connection = mysql.createConnection({
    host:dbHost,
    port:dbPort,
    user:dbUser,
    password:dbPassword,
    database:dbName
});



// Encapsulando con promesas:
function query(){
    return new Promise((resolve,reject)=>{

        connection.query('SELECT * FROM users',function(error,result){
            //Error first callback
            if(error){
                reject(error.sqlMessage)

            }else{
                resolve(result)
            }
        })
    })
    
}

async function insert(tableName,data){
    try{
        await query(`INSERT INTO ${tableName}(??) VALUES(?)`,[Object.keys(data),Object.values(data)])
        return {data,success:true}
    }catch(error){
        return {error,success:false}
    }
}

async function del(tableName,data){
    try{
        await query(`DELETE FROM ${tableName} WHERE id=?`,[data])
        return data
    }catch(error){
        return error
    }
}

// Exportamos un objeto
module.exports = {query,insert,del}