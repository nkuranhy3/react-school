import {gql} from 'apollo-boost'

const getCompanyList = gql`
{
  allCompanies{
    id
    name
    location
    companyHistory
  }
}

`;

const getJobList = gql`
{
  allJobs{
    id
    name
  }
}

`;

const addJobMutation = gql`
mutation($name: String!, $applyBefore: String!, $qualifications: String!, $benefits: String!, $companyId: ID!  ) {
  createNewJob(
    name: $name
    applyBefore: $applyBefore
    qualifications: $qualifications
    benefits: $benefits
		companyId: $companyId
  
  ){
    id
    name
    applyBefore
    qualifications
    description
    benefits
    company{
      id
      name
    }
  }
}

`;

const JobDetailsQuery = gql`
 query($id: ID!){
  getJob(id: $id){
    id
    name
    qualifications
    description
    benefits
    applyBefore
    company{
      id
      name
      location
      managerName
      companyHistory
      jobs{
        id
        name
      }
    }
}
 }

`;
export { getCompanyList, getJobList, addJobMutation, JobDetailsQuery}