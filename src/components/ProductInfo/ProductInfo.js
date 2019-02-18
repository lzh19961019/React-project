import React,{Component} from 'react';
import querystring from 'query-string';
import {Link} from 'react-router-dom';

import * as types from "../../store/types";
import connect from "react-redux/es/connect/connect";
import asyncList from "../../store/actions/asynList";
class ProductInfo extends Component{
    componentDidMount(){
      let id=this.props.match.params.id-0;
      let dataName=querystring.parse(this.props.location.search).dataName;
      this.props.get(id, dataName)
  
    }
    render(){
        let productinfo=this.props.productinfo;
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>产品详情</h1>
                    <Link to='/car' className="topCart"><em>0</em></Link>
                    </header>
                    <div style={{"height":"1rem"}}></div>
                    <div className="pro_bigImg">
                    <img src={productinfo.url}/>
                    </div>
                    <section className="pro_baseInfor">
                    <h2>{productinfo.content}</h2>
                    <p>
                    <strong>{productinfo.nowPrice}</strong>
                    <del>{productinfo.oldPrice}</del>
                    </p>
                    </section>
                    <dl className="pro_attr">
                    <dt>产品属性信息</dt>
                    <dd>
                    <ul>
                    <li>
                        <span>上市时间</span>
                        <em>2015年09月</em>
                    </li>
                    <li>
                        <span>产品规格</span>
                        <em>1斤装</em>
                    </li>
                    <li>
                        <span>产品重量</span>
                        <em>0.5kg</em>
                    </li>
                    <li>
                        <span>包装方式</span>
                        <em>散装</em>
                    </li>
                    <li>
                        <span>保质期</span>
                        <em>6个月</em>
                    </li>
                    <li>
                        <span>所属品牌</span>
                        <em>三星</em>
                    </li>
                    </ul>
                    </dd>
                    </dl>
                    <div style={{"height":"1rem"}}></div>
                    <aside className="btmNav">
                    <a style={{"background":"#64ab5b","color":"white","textShadow":"none"}}>加入购物车</a>
                    <a style={{"background":"#87a983","color":"white","textShadow":"none"}}>加入常购单</a>
                    </aside>
            </div>
        )
    }
}

const initMapStateToProps=state=>({
    productinfo:state.productinfo,
  });
  const initMapDispatchToProps=dispatch=>({
    get:(id,dataName)=>dispatch(asyncList({
      id:id,
      type:types.UPDATE_PRODUCTINFO,
      url:`/data/${dataName}.data`,
    })),
  });
  
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(ProductInfo);