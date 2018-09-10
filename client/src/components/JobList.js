import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getJobList} from './Queries/Queries';



class JobList extends Component{
displayJobs(){
    const data = this.props.data;
    if(data.loading){
        return(
            <div>
                <h1>Loading ...</h1>
            </div>
        )
    }else{
        return data.allJobs.map(job =>{
            return <li key={job.id}>{job.name}</li>
})
    }
}

    render(){
        return(
            <div>
                <ul>
               {this.displayJobs() }
               </ul>
            </div>
        )
    }
}

export default graphql(getJobList)(JobList);