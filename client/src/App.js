import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Title" scroll>
                        <Navigation>
                            <a href="/">Home</a>
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                            <a href="/new">Create New Course</a>
                            <a href="/contact">Contact Us</a>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <a href="/">Home</a>
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                            <a href="/new">Create New Course</a>
                            <a href="/contact">Contact Us</a>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
</ApolloProvider>
    );
  }
}

export default App;