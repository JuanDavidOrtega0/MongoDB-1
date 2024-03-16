db.createCollection('users');
db.users.insertMany([
    {
        nombres: "Sofia",
        apellidos: "López",
        correo: "sofia@gmail.com",
        ciudad: "Madrid",
        pais: "España",
        salario: 3400,
        edad: 32,
        altura: 168,
        peso: 120
    },
    {
        nombres: "Luis",
        apellidos: "Fernández",
        correo: "luis@gmail.com",
        ciudad: "Londres",
        pais: "Reino Unido",
        salario: 3000,
        edad: 45,
        altura: 175,
        peso: 140
    },
    {
        nombres: "Emma",
        apellidos: "Martínez",
        correo: "emma@gmail.com",
        ciudad: "París",
        pais: "Francia",
        salario: 3200,
        edad: 27,
        altura: 163,
        peso: 110
    },
    {
        nombres: "Miguel",
        apellidos: "González",
        correo: "miguel@gmail.com",
        ciudad: "Berlín",
        pais: "Alemania",
        salario: 3500,
        edad: 38,
        altura: 180,
        peso: 160
    },
    {
        nombres: "Alicia",
        apellidos: "Hernández",
        correo: "alicia@gmail.com",
        ciudad: "Roma",
        pais: "Italia",
        salario: 3300,
        edad: 29,
        altura: 170,
        peso: 130
    },
    {
        nombres: "David",
        apellidos: "Pérez",
        correo: "david@gmail.com",
        ciudad: "Barcelona",
        pais: "España",
        salario: 3100,
        edad: 26,
        altura: 175,
        peso: 150
    },
    {
        nombres: "Isabel",
        apellidos: "Rodríguez",
        correo: "isabel@gmail.com",
        ciudad: "Ámsterdam",
        pais: "Países Bajos",
        salario: 3400,
        edad: 31,
        altura: 165,
        peso: 115
    },
    {
        nombres: "Javier",
        apellidos: "López",
        correo: "javier@gmail.com",
        ciudad: "Praga",
        pais: "República Checa",
        salario: 3200,
        edad: 40,
        altura: 180,
        peso: 170
    },
    {
        nombres: "Laura",
        apellidos: "García",
        correo: "laura@gmail.com",
        ciudad: "Miami",
        pais: "Estados Unidos",
        salario: 3300,
        edad: 35,
        altura: 170,
        peso: 135
    },
    {
        nombres: "Diego",
        apellidos: "Martín",
        correo: "diego@gmail.com",
        ciudad: "Varsovia",
        pais: "Polonia",
        salario: 3100,
        edad: 33,
        altura: 178,
        peso: 155
    },
    {
        nombres: "Sara",
        apellidos: "Sánchez",
        correo: "sara@gmail.com",
        ciudad: "Estocolmo",
        pais: "Suecia",
        salario: 3400,
        edad: 28,
        altura: 165,
        peso: 120
    },
    {
        nombres: "Manuel",
        apellidos: "Ruiz",
        correo: "manuel@gmail.com",
        ciudad: "Lisboa",
        pais: "Portugal",
        salario: 3200,
        edad: 16,
        altura: 175,
        peso: 160
    },
    {
        nombres: "Elena",
        apellidos: "Díaz",
        correo: "elena@gmail.com",
        ciudad: "Atenas",
        pais: "Grecia",
        salario: 3300,
        edad: 30,
        altura: 168,
        peso: 125
    },
    {
        nombres: "Pablo",
        apellidos: "Jiménez",
        correo: "pablo@gmail.com",
        ciudad: "Helsinki",
        pais: "Finlandia",
        salario: 3400,
        edad: 36,
        altura: 180,
        peso: 165
    },
    {
        nombres: "Carolina",
        apellidos: "Morales",
        correo: "carolina@gmail.com",
        ciudad: "Tijuana",
        pais: "Mexico",
        salario: 3300,
        edad: 15,
        altura: 170,
        peso: 140
    },
    {
        nombres: "Jorge",
        apellidos: "Navarro",
        correo: "jorge@gmail.com",
        ciudad: "Moscú",
        pais: "Rusia",
        salario: 3500,
        edad: 39,
        altura: 182,
        peso: 175
    },
    {
        nombres: "Carmen",
        apellidos: "Gutiérrez",
        correo: "carmen@gmail.com",
        ciudad: "Sidney",
        pais: "Australia",
        salario: 3600,
        edad: 34,
        altura: 170,
        peso: 130
    },
    {
        nombres: "Gabriel",
        apellidos: "Ortega",
        correo: "gabriel@gmail.com",
        ciudad: "Rio de Janeiro",
        pais: "Brasil",
        salario: 1500,
        edad: 37,
        altura: 178,
        peso: 160
    },
    {
        nombres: "Ana",
        apellidos: "Romero",
        correo: "ana@gmail.com",
        ciudad: "Buenos Aires",
        pais: "Argentina",
        salario: 1400,
        edad: 31,
        altura: 165,
        peso: 125
    },
    {
        nombres: "Francisco",
        apellidos: "Suárez",
        correo: "francisco@gmail.com",
        ciudad: "Santiago de Chile",
        pais: "Chile",
        salario: 3600,
        edad: 33,
        altura: 180,
        peso: 170
    }
])

db.users.insertOne({
    nombres: "Juan",
    apellidos: "Pérez",
    ciudad: "Barcelona",
    pais: "España",
    salario: 3100,
    edad: 26,
    altura: 175,
    peso: 150
})

db.users.insertOne({
    nombres: "Isabel",
    apellidos: "Rodríguez",
    ciudad: "Calcuta",
    pais: "India",
    edad: 31,
    altura: 165,
    peso: 115
})

//Actividad 1

//Ejercicio 1: Obtener todos los usuarios que sean mayores de 18 años.
db.users.find({
    edad: {
        $gt: 18
    }
})

//Ejercicio 2: Obtener todos los usuarios que sean de Londres o de París.
db.users.find({
    $or: [
        {ciudad: "Londres"},
        {ciudad: "París"}
    ]
})

//Ejercicio 3: Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.users.find({
    $and: [
        {salario: {$gt: 2000}},
        {edad: {$lt: 30}}
    ]
})

//Ejercicio 4: Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.users.find({
    $and: [
        {pais: "España"},
        {salario: {$gt: 3000}}
    ]
})

//Ejercicio 5: Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users.find({
    $and: [
        {edad: {$gt: 25}},
        {edad: {$lt: 35}}
    ]
})

//Ejercicio 6: Obtener a todos los usuarios que no sean de Estados Unidos.
db.users.find({
    pais: {
        $ne: "Estados Unidos"
    }
})

//Ejercicio 7: Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.users.find({
    $and: [
        {ciudad: "Londres"},
        {$or: [
                {salario: {$gt: 2500}},
                {edad: {$gt: 30}}
            ]
        }
    ]
})

//Ejercicio 8: Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.users.find({
    $and: [
        {pais: "Australia"},
        {peso: {$gt: 140}}
    ]
})

//Ejercicio 9: Obtener a todos los usuarios que no sean de Londres ni de París.
db.users.find({
    $nor: [
        {ciudad: "Londres"},
        {ciudad: "París"}
    ]
})

//Ejercicio 10: Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users.find({
    $or: [
        {salario: {$lt: 2000}},
        {edad: {$gt: 40}}
    ]
})

//Ejercicio 11: Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.users.find({
    $and: [
        {pais: "Canadá"},
        {$or: [
            {salario: {$gt: 4000}},
            {altura: {$gt: 180}}
        ]}
    ]
})

//Ejercicio 12: Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.users.find({
    $and: [
        {pais: "Italia"},
        {edad: {$gt: 20}},
        {edad: {$lt: 30}}
    ]
})

//Ejercicio 13: Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.users.find({
    correo: {
        $exists: false
    }
})

//Ejercicio 14: Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find({
    $and: [
        {pais: "Francia"},
        {salario: {$gt: 3000, $lt: 5000}}
    ]
})

//Ejercicio 15: Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.users.find({
    $and: [
        {pais: "Brasil"},
        {$or: [
            {peso: {$lt: 120}},
            {peso: {$gt: 140}}
        ]}
    ]
})

//Ejercicio 16: Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.users.find({
    $and: [
        {edad: {$gt: 25}},
        {$or: [
            {pais: "Argentina"},
            {pais: "Chile"}
        ]}
    ]
})

//Ejercicio 17: Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.users.find({
    $and: [
        {salario: {$lt: 3000}},
        {$nor: [
            {pais: "España"},
            {pais: "México"}
        ]}
    ]
})

//Ejercicio 18: Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.users.find({
    $and: [
        {pais: "Alemania"},
        {$or: [
            {salario: {$lt: 4000}},
            {edad: {$gt: 35}}
        ]}
    ]
})

//Ejercicio 19: Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users.find({
    $and: [
        {pais: {$ne: "Colombia"}},
        {altura: {$lt: 170}}
    ]
})

//Ejercicio 20: Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users.find({
    $and: [
        {pais: "India"},
        {salario: {$exists: false}}
    ]
})