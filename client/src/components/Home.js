import React, { Component } from 'react';
import JobList from './JobList';
// import AddJob from './AddJob';


class Home extends Component {
    render(){
        return(
            <div>
                <h1>home page </h1>
                <JobList />
                {/* <AddJob /> */}

            </div>
        )
    }
}

export default Home;