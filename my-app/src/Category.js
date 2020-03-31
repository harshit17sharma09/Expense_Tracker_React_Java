import React , { Component } from 'react';
import AppNav from './AppNav';

class Category extends Component {
    state = { 
        isLoading : true,
        Categories : []

     }   
     //sync - you sent a request than you wait for the response ...
     //async. - better user experience , you send a request and you don't have to wait....

     async componentDidMount(){

        const response = await fetch('/api/categories') //calling an api
        const body = await response.json();
        this.setState({Categories : body , isLoading : false});

     }

    render() { 
        const {Categories , isLoading} = this.state ;

        if(isLoading)
        return (<div>Loading.....</div>)
        
        return ( 
            

                <div>
                    <AppNav/>
                        <h2>Categories</h2>
                        {
                            Categories.map( category => 
                                <div id = {category.id}> 
                                    { category.name}

                                </div>

                                )

                        }

                </div>

         );
    }
}
 
export default Category;