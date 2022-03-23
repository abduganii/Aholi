const { fetch, fetchAll } = require('../../lib/postgres')

const AHOLILAR = `
    SELECT 
        * 
    FROM 
        Aholi
`

const NEW_AHOLI = `   
    insert into
    Aholi(
        aholi_name, 
        aholi_age
    )
    VALUES($1,$2)
    returning *
`

const CAR_AGE = `
    SELECT 
       * 
    FROM 
        Aholi
    WHERE aholi_age  BETWEEN $1 AND $2 ;
            
`

const getAholi = () => fetchAll(AHOLILAR)
const CarAge = (ageO,ageT)=>fetchAll(CAR_AGE,ageO,ageT)
const newAholi  =(name,age)=>fetch(NEW_AHOLI,name,age)


module.exports = {
    getAholi,
    newAholi,
    CarAge
}