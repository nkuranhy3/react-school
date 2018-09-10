import React, {Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {getCompanyList, addJobMutation, getJobList } from './Queries/Queries'
class AddJob extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            applyBefore: "",
            qualifications: "",
            description: "",
            benefits: "",
            companyId: ""
        }
    }

displayCompany(){
    var data= this.props.getCompanyList;
    console.log(this.props);
    if(data.loading){
        return <option disabled>loading allCompanies ...</option>
    }else{
        return data.allCompanies.map(company => {
           return<option key={company.id} value={company.id} >{ company.name}</option> 
        })
    }
}

submitForm(e){
    e.preventDefault();
    this.props.addJobMutation({
    variables:{
        name: this.state.name,
        qualifications: this.state.qualifications,
        description: this.state.description,
        benefits: this.state.benefits,
        companyId: this.state.companyId 
    },
    refetchQueries: [{query: getJobList}]
    });
}

    render(){

        return(
            <div>
              <form onSubmit={this.submitForm.bind(this)} >
                <div>
                    <label>Job Name</label>
                    <input type="text" onChange={(e)=>this.setState({name: e.target.value}) }/>
                </div>  
                <div>
                    <label>Description</label>
                    <input type="text" onChange={(e)=>this.setState({description: e.target.value}) }/>
                </div>  
                <div>
                    <label>Qualifications</label>
                    <input type="text" onChange={(e)=>this.setState({qualifications: e.target.value}) }/>
                </div>  
                <div>
                    <label>Benefits</label>
                    <input type="text" onChange={(e)=>this.setState({benefits: e.target.value}) }/>
                </div>  
                <div>
                    <label>Deadline</label>
                    <input type="date" onChange={(e)=>this.setState({applyBefore: e.target.value}) }/>
                </div> 
                <div>
                    <label>Possted Company</label>
                    <select onChange={(e)=>this.setState({companyId: e.target.value}) }>
                        <option>Select Company</option>
                        { this.displayCompany() }
                    </select>
                </div> 
                <input type="submit" value="submit" />  
            </form>  
            </div>
        )
    }
}

export default compose(
    graphql(getCompanyList,{ name: "getCompanyList"}),
    graphql(addJobMutation,{ name: "addJobMutation "})
)(AddJob);