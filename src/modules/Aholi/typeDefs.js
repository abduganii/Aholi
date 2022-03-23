const {gql} = require('apollo-server-express')

module.exports = gql`
    type Aholilar { 
        id:ID!
        name:String!
        age: Int!
    }
    type Query{
        aholi(ageO:Int! ageT:Int!):[Aholilar!]!
    }
    type Mutation{
        newaholi(name:String! age:Int!):Aholilar
    }
`