import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import * as types from "../../store/types";
import connect from "react-redux/es/connect/connect";
import asyncList from "../../store/actions/asynList";
class Car extends Component{
    componentDidMount(){
        this.props.get()
      }
    render(){
        let {car} = this.props;
        return (
            <div>
                    <header>
                        <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                        <h1>购物车</h1>
                    </header>
                    <div style={{"height":"1rem"}}></div>
                    <dl className="cart">
                        <dt>
                            <label><input type="checkbox"/>全选</label>
                            <a className="edit">编辑</a>
                        </dt>
                        {
                            car.map((item,index)=>(

                            <dd key={index}>
                                <Link to={{pathname:'/productinfo/'+item.id,search:'?dataName=car'}}>
                                <input type="checkbox"/>
                                <b className="goodsPic"><img src={item.url}/></b>
                                <div className="goodsInfor">
                                    <h2>
                                        <b href="product.html">{item.content}</b>
                                        <span>1</span>
                                    </h2>
                                    <div className="priceArea">
                                        <strong>{item.nowPrice}</strong>
                                        <del>{item.oldPrice}</del>
                                    </div>
                                    <div className="numberWidget">
                                        <input type="button" value="-" className="minus"/>
                                        <input type="text" value="1" disabled  className="number"/>
                                        <input type="button" value="+"  className="plus"/>
                                    </div>
                                </div>
                                <b className="delBtn">删除</b>
                                </Link>
                            </dd>
                            ))
                        }  
                    </dl>
                    <div style={{"height":"1rem"}}></div>
                    <aside className="btmNav">
                        <a>合计：￥0.00</a>
                        <Link to={{pathname:'/confirm'}} style={{"background":"#64ab5b","color":"white","textShadow":"none"}}>立即下单</Link>
                    </aside>
            </div>
        )
    }
}

const initMapStateToProps=state=>({
    car:state.car,
  });
  const initMapDispatchToProps=dispatch=>({
    get:()=>dispatch(asyncList({
      type:types.UPDATE_CAR,
      url:`/data/car.data`,
    })),
  });
  
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Car);