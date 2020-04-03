import React , { Component } from 'react' ;
import AppNav from './AppNav';
import DatePicker from 'react-datepicker' ;
import './App.css' ;
import "react-datepicker/dist/react-datepicker.css" ;


import {Table,Container,Input,Button,Label,FormGroup,Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

class Expenses  extends Component {

    // {"id":100,
    // "expensedate":"2019-06-16T17:00:00Z",
    // "descript":"New York trip",
    // "category":{
    //  "id":1,
    // "name":"Travel"},
    // "location":"New york"
    // }

// example value to sent to api
    emptyItem = {

        id : '103',
        expensedate : new Date(),
        description : '',
        location : '',
        categories : [1,'Travel']
    }

    constructor(props){

        super(props)

        this.state = {

            date : new Date(),
            isLoading : false ,
            Expenses :[],
             Categories : [],
             item : this.emptyItem
                }

                this.handleSubmit = this.handleSubmit.bind(this); //for call back you need to bind this
                this.handleChange = this.handleChange.bind(this);
                this.handleDateChange = this.handleDateChange.bind(this);
         }

    
    async handleSubmit(event) {

            const item = this.state.item;

        
        await fetch ('/api/expenses',{
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(item),
        });

        console.log(this.state);
        this.props.history.push("/expenses");  //when refresh
        
    }

    handleDateChange(date) {

        let item = {...this.state.item};
        item.expensedate = date ;
        this.setState({item});



    }


    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name ;

        let item = {...this.state.item};
        item[name] = value ;
        this.setState({item});
        console.log(this.state);

    }   


        




    




// error in delete api
        async remove(id) {
            await fetch('/api/expenses/${id}'  , {
                method : 'DELETE' ,
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }

            }).then( () => {

                   let updatedExpenses = [...this.state.Expenses].filter(i => i.id !== id);
                   this.setState({Expenses : updatedExpenses});

            });

        }




// api call
    async componentDidMount(){
        const response = await fetch ('/api/categories');
        const body = await response.json();
        this.setState({ Categories : body , isLoading : false});


        const responseExp = await fetch ('/api/expenses');
        const bodyExp = await responseExp.json();
        this.setState({ Expenses : bodyExp , isLoading : false});

    }

    render() { 
        const title = <h3> Add Expense</h3>
        const {Categories} = this.state;
        const {Expenses,isLoading} = this.state;



        if(isLoading)
        return(<div>Loading....</div>)


       let optionList =  
        Categories.map( category => 
            <option value = {category.id} key = {category.id}> 
                { category.name}

            </option>

            )

        let rows = 
        Expenses.map( expense => 
            <tr key ={expense.id}>
                <td>{expense.descript}</td>
                <td>{expense.location}</td>
                 <td><Moment date = {expense.expensedate} format = "YYYY/MM/DD"/></td>
                <td>{expense.category.name}</td>
                <td><Button size ="sm" color="danger" onClick = { () => this.remove(expense.id)}>Delete</Button></td>
            
            </tr>
            )    

    


        
        return ( 
                   <div>
                       <AppNav/>
                       <Container>
                           { title }

                                <Form onSubmit = {this.handleSubmit}>

                                    <FormGroup>

                                        <Label for = "title">Title</Label>
                                        <Input type = "text" name ="title" id ="title" 
                                            onChange ={this.handleChanage}/> 

                                    </FormGroup>

                                    <FormGroup>

                                        <Label for = "category">Category</Label>

                                            <select>

                                                    {optionList}

                                            </select>

                                        <Input type = "text" name ="category" id ="category" 
                                            onChange ={this.handleChanage}/> 

                                    </FormGroup>

                                    
                                    <FormGroup>
                                        <Label for = "expenseDate">Expense Date</Label>
                                        <DatePicker selected = {this.state.item.expensedate} onChange ={this.handleDateChange}/>   
                                    </FormGroup>


                                    <FormGroup>
                                        <Label for = "location">Location</Label>
                                        <Input type = "text" name ="location" id ="location" onChange ={this.handleChanage}/> 
                                    </FormGroup>


                                    <FormGroup>
                                        <Button color = "primary" type = "submit">Save</Button> {' '}
                                        <Button color = "secondary" tag = {Link} to="/">Cancel </Button>
                                    </FormGroup>

                                </Form>

                       </Container>

                    
                    <Container>
                        <h3>Expense List</h3>
                        <Table className ="mt-4">
                            <thead>
                                <tr>
                                    <th width = "20%">Description</th>
                                    <th width = "10%">Location</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th width = "10%">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>

                        </Table>
                    </Container>




                       
                   </div>

         );
    }
}
 
export default Expenses ;