import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import pubsub from 'pubsub-js';

import * as types from "../../store/types";
import connect from "react-redux/es/connect/connect";
import asyncList from "../../store/actions/asynList";
class HomeCenterNew extends Component{
    componentDidMount(){
        this.props.get()
      }
    render(){
        let {homecenternew} = this.props;
        return (
           
                <dd>
                 <ul>
                     {
                         homecenternew.map((item,index)=>(
                            <li key={item.id}>
                                <Link to={{pathname:'/productinfo/'+item.id,search:'?dataName=new'}}>
                                <b className="goodsPic">
                                    <img src={item.url}/>
                                </b>
                                <div className="goodsInfor">
                                    <h2>
                                        <b>{item.content}</b>
                                    </h2>
                                    <p>
                                        <del>{item.oldPrice}</del>
                                    </p>
                                    <p>
                                        <strong className="price">{item.nowPrice}</strong>
                                    </p>
                                    <i className="addToCart">&#126;</i>
                                </div>
                                </Link>
                            </li>
                         ))
                     }
                </ul>
                </dd>
           
        )
    }
}

const initMapStateToProps=state=>({
    homecenternew:state.homecenternew,
  });
  const initMapDispatchToProps=dispatch=>({
    get:()=>dispatch(asyncList({
      type:types.UPDATE_HOMECENTERNEW,
      url:`/data/new.data`,
    })),
  });
  
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(HomeCenterNew);