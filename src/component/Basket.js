import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Basket.css';

class Basket extends Component {
    constructor() {
        super();

        this.state = {
            groceries : [{index:1, c:1, name:'Potato'}, {index:2, c:1, name:'Tomato'}, {index:3, c:1, name:'Onion'}, {index:4, c:1, name:'Mango'}, {index:5, c:1, name:'Apple'}],            
            basket : []
        }
    }

    handleLiClick = (i) => {
        const { groceries} = this.state;
        var arr = groceries.filter((s, id) => {
            if(i === id)
            {
                return s.name;
            } 
            else 
            {
                return null;
            } 
        });
        const newvalue = arr[0] ;
        const {basket} = this.state;
        console.log('newvalue' , newvalue);
        if(basket.length < 1 || basket.every((e)=> e.index !== newvalue.index))
        {
            basket.push(newvalue);
            this.setState({basket:basket});

        }
        else{
       const newarr =  basket.map((m)=>{
            if(m.index == newvalue.index){
              m.c++;
              console.log('m', m);
            }
            return m;
        })
        console.log(newarr)
        this.setState({basket:newarr});
         }
    }

    handleLineThrough = (val) => {
        const {basket} = this.state;
        const arrNew = basket.filter((fi) => {
            if(fi.c > 1 && val.index === fi.index){
                fi.c--;
                return fi;
            }
            if(val.index != fi.index){

                return fi;
            }
        })
        console.log('arrNew', arrNew);
        this.setState({basket:arrNew});
    }

    render() {
        return (
        <div className='container'>
            <div className='G'>
                <div className='heading'>Groceries</div>
               {this.state.groceries.map((g, i) => <div className='list' key={i}><Button onClick = {()=>this.handleLiClick(i)}>+</Button>{g.name}</div>)}
           </div>
           <div className='B'>
           <div className='heading'>Basket</div>
               {this.state.basket.map((val) => <div className='list'><Button onClick={()=>this.handleLineThrough(val)} className='button'>-</Button>{val.c}{val.name}</div> )}
           </div>
        </div>
        );
    }
}
export default Basket;