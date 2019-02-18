import React,{Component} from 'react';
import Header from "../common/Header/Header";
import Home from "./Home/Home";
import Car from "./Car/Car";
import Sort from './Sort/Sort';
import User from './User/User';
import Login from './Login/Login';
import Reg from './Reg/Reg';
import Product from './Product/Product';
import ProductInfo from './ProductInfo/ProductInfo';
import Search from './Search/Search';
import Order from './Order/Order';
import Confirm from './Confirm/Confirm';
import Favorite from './Favorite/Favorite';
import UserInfo from './UserInfo/UserInfo';
import Footer from "../common/Footer/Footer";
import UserSet from '../components/UserSet/UserSet';
import ReturnState from '../components/ReturnState/ReturnState'
import Error from '../common/Error/Error';
import Loading from '../common/Loading/Loading';
// import HomeCenterHot from './HomeCenterHot/HomeCenterHot';
// import HomeCenterNew from './HomeCenterNew/HomeCenterNew';
// import HomeCenterReduce from './HomeCenterReduce/HomeCenterReduce';
import {Route,Redirect,Switch} from 'react-router-dom';
import Auth from "../guard/Auth";

import {connect} from 'react-redux'
import * as types from '../store/types'
class App extends Component{

    componentWillReceiveProps(nextProps){
        console.log(nextProps.location.pathname);
    
        //监听路由
        let path = nextProps.location.pathname;
        this.watchRouter(path)
      }

      watchRouter(path){

        //监听路由
        let {viewNav,viewFoot}=this.props;
        if(/home/.test(path)){
        //    this.setState({
        //        bHeader:true,
        //        bFooter:true,
        //    })
        viewNav(true);viewFoot(true)
        }
        if(/sort|user|login|reg|order/.test(path)){
            // this.setState({
            //     bHeader:false,
            //     bFooter:true,
            // })
            viewNav(false);viewFoot(true)
         }
         if(/confirm|favorite|product|productinfo|search|userinfo|car|returnstate|userset/.test(path)){
            // this.setState({
            //     bHeader:false,
            //     bFooter:false,
            // })
            viewNav(false);viewFoot(false)
         }
    }
    componentDidMount(){
        let path = this.props.location.pathname;
        this.watchRouter(path)
      }
    render(){
        let {bNav,bFoot,bLoading} = this.props;
        return(
            <>
                {bNav && <Header/>}
                    <Switch>
                    <Route path="/home" component={Home}/>>
                    <Route path="/car" component={Car}/>
                    <Route path="/returnstate" component={ReturnState}/>
                    <Route path="/sort" component={Sort}/>
                    {/* <Route path="/user" component={User}/> */}
                    <Auth path="/user" component={User}/>
                    <Route path="/userset" component={UserSet}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/productinfo/:id" component={ProductInfo}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/confirm" component={Confirm}/>
                    <Route path="/favorite" component={Favorite}/>
                    <Route path="/userinfo" component={UserInfo}/>
                    <Route path="/userinfo" component={UserInfo}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={Error}/>
                    </Switch>
                {bLoading &&  <Loading/>}
                {bFoot &&  <Footer/>}
            </>
        )
    }
}
const initMapStateToProps=state=>({
    bNav:state.bNav,
    bFoot:state.bFoot,
    bLoading:state.bLoading,
  });
  const initMapDispatchToProps=dispatch=>({
    viewNav:(bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
    viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
  });
  
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(App);

