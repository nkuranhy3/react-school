const { ApolloServer, gql } = require("apollo-server-express");
const Job = require("./models/Job");
const Company = require("./models/Company");


const typeDefs = gql`
type Job {
    id: ID
    name: String
    applyBefore: String
    qualifications: String
    description: String
    benefits: String
    company: Company
}
type Company {
    id: ID 
    name: String
    location: String
    managerName: String
    companyHistory:String
    jobs: [Job]
}


type Query {
    getJob(id: ID): Job
    allJobs: [Job]
    getCompany(id: ID): Company
    allCompanies: [Company]

}

type Mutation {
    createNewJob(
        name: String
        applyBefore: String
        qualifications: String
        description: String
        benefits: String
        companyId: ID
        ): Job

    createNewCompany(
        name: String
        location: String
        managerName: String
        companyHistory:String
        ): Company
}
`;

const resolvers = {
    Query: {
        getJob: (root, { id }) => {
        return Job.findById(id);
        },
        allJobs: root => {
            return Job.find();
        },
        getCompany: (root, { id }) => {
        return Company.findById(id);
        },
        allCompanies: root => {
            return Company.find();
        },

        },
    Mutation: {
        createNewJob: (root, { name, applyBefore, qualifications, benefits, companyId }) => {
            let job = new Job({
              name: name,
              applyBefore: applyBefore,
              qualifications: qualifications,
              benefits: benefits,
              companyId: companyId,
            });
            return job.save();
          },
         createNewCompany: (root, { name, location, managerName, companyHistory}) => {
            let company = new Company({
                name: name,
                location: location,
                managerName: managerName,
                companyHistory:companyHistory,
            });
            return company.save();
          },
        },
        Company:{
            jobs: company =>Job.find({companyId: company.Id})
        },
        Job: {
           company: job =>Company.findById(job.companyId) 
        }
};

module.exports = new ApolloServer({ typeDefs, resolvers });




// Author: {
//     // books: author => _.filter(books, { authorId: author.id })
//     books: author => Book.find({ authorId: author.id })
//   },
//   Book: {
//     // author: book => _.find(authors, { id: book.authorId })
//     author: book => Author.findById(book.authorId)
