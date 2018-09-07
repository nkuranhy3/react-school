const { ApolloServer, gql } = require("apollo-server-express");
const Job = require("./models/Job");
const Applicant = require("./models/Applicant");


const typeDefs = gql`
type Job {
    id: ID
    name: String,
    postedBy: String,
    postedDate: String,
    applyBy: String,
    yearsOfEducation: Int,
    benefits: String,
    areasOfStudy: AreasOfStudy,
    jobType: JobType
}

type Applicant {
  id: ID
  name: String,
  gender: Gender,
  age: Int,
  yearsOfEducation: Int,
  areasOfStudy: AreasOfStudy,
  workExperience: String,
  jobtype: JobType
}

enum AreasOfStudy {
    JAVA
    JAVASCRIPT
    REACT
    ANGULAR JS
    XAMARIN
    RUBY ON RAILS
    PYTON
    NODE JS
}

enum JobType {
    FULLTIME
    PARTTIME
    CONTRACT
}

enum Gender {
    MALE
    FEMALE
    OTHER
}

type Query {
    getJob(id: ID): Job
    allJobs: [Job]
    getApplicant(id: ID): Applicant
    allApplicants: [Applicant]
}

type Mutation {
    addJob(
        name: String,
        postedBy: String,
        postedDate: String,
        applyBy: String,
        yearsOfEducation: Int,
        benefits: String,
        areasOfStudy: AreasOfStudy,
        jobType: JobType
    ): Job
    addApplicant(
        name: String,
        gender: Gender,
        age: Int,
        yearsOfEducation: Int,
        areasOfStudy: AreasOfStudy,
        workExperience: String,
        jobtype: JobType
    ): Applicant
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
        getApplicant: (root, { id }) => {
            return Applicant.findById(id);
            },
        allApplicants: root => {
            return Applicant.find();
        },

        },
    Mutation: {
        addJob: (root, { name, postedBy, postedDate, applyBy, yearsOfEducation, benefits, areasOfStudy, jobType }) => {
            let job = new Job({
              name: name,
              postedBy: postedBy,
              postedDate: postedDate,
              applyBy: applyBy,
              yearsOfEducation: yearsOfEducation,
              benefits: benefits,
              areasOfStudy: areasOfStudy,
              jobType: jobType
            });
            return job.save();
          },
          addApplicant: (root, { name, gender, age, yearsOfEducation, areasOfStudy, workExperience, jobType }) => {
            let applicant = new Applicant({
              name: name,
              gender: gender,
              yearsOfEducation: yearsOfEducation,
              workExperience: workExperience,
              areasOfStudy: areasOfStudy,
              age: age,
              jobType: jobType
            });
            return applicant.save();
          },
    }
};

module.exports = new ApolloServer({ typeDefs, resolvers });
