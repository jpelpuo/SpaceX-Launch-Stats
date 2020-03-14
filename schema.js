const { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');


// Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        lauch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType }
    })
});

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    })
})


// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            async resolve(parent, args) {
                try {
                    const {data} = await axios.get('https://api.spacexdata.com/v3/launches');
                    return data;
                } catch (error) {
                    console.log(error)
                }
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLString }
            },
            async resolve(parent, args) {
                try {
                    const {data} = await axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`);
                    return data;
                } catch (error) {
                    console.log(error)
                }
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            async resolve(parent, args){
                try{
                    const {data} = await axios.get('https://api.spacexdata.com/v3/rockets');
                    return data;
                }catch(error){
                    console.log(error);
                }
            }
        },
        rocket: {
            type: RocketType,
            args:{
                rocket_id: {type: GraphQLString}
            },
            async resolve(parent, args){
                try{
                    const {data} = await axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`);
                    return data;
                }catch(error){
                    console.log(error)
                }
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: RootQuery
})

module.exports = Schema;