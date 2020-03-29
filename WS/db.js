const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./ws.db')

db.serialize(function(){

    //criar a tabela
 /*   db.run(`
        create TABLE IF NOT EXISTS ideias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT

        );
    `)

    //inserir dados na tabela

    const query = `
   INSERT INTO ideias(
        image,
       title,
        category,
        description,
        link
   ) VALUES (?,?,?,?,?);
   `
const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Cursos de Programação",
    "Estudo",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente modi, odit",
    "https://rocketseat.com.br"

]

   db.run(query, values, function(err){
        if (err) return console.log(err)

       console.log(this)
    })


    deletar um dado na tabela

        db.run(`DELETE FROM ideas WHERE id =?`, [1], function(err){
            if (err) return console.log(err)

           console.log("DELETEI", this)
        })

    //consultar dados na tabela

    db.all(`SELECT * FROM ideias`, function(err, rows){
        if (err) return console.log(err)

        console.log(rows)
    })

 */   



})

//usar o node na plicacao

module.exports = db