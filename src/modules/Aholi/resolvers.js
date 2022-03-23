const {getAholi,newAholi,CarAge} = require('./model')

module.exports = {
    Query: {
        aholi: async (_,{ageO,ageT}) => {
            try {
                if (ageO && ageT) {
                    return await CarAge(ageO,ageT)
                }
                return await getAholi()
            } catch (error) {
                console.log(error)
            }
        }
    },

    Mutation: {
        newaholi: async (_, { name, age }) => {
            try {
                return await newAholi(name,age)
            } catch (error) {
                console.log(error)
            }
        }
    },
    Aholilar:{
        id:global=> global.aholi_id,
        name:global=> global.aholi_name,
        age:global=> global.aholi_age
    }
}