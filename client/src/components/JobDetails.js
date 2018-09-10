import React, {Component } from 'react';
import { graphql} from 'react-apollo';
import {JobDetailsQuery } from './Queries/Queries'

class JobDetails extends Component{    
        render(){
            return(
                <div>
                <h1>job JobDetails</h1>
                </div>
            )
        }
    }
    
    export default graphql(JobDetailsQuery)(JobDetails);