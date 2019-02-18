//异步action //返回函数
import * as types from '../types';

const asyncList=({type,url,start,count,id})=>(dispatch,getState)=>{

  dispatch({type:types.VIEW_LOADING,payload:true});

  fetch(
    url,
    /*{
      method:'post',
      headers:{"Content-type":"application/x-www-form-urlencoded"},
      body:{
        start:start,
        count:count
      }
    }*/
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:types.VIEW_LOADING,payload:false});
      if (id){
        dispatch({
          type:type,
          payload:{data,id}
        })
      } else {
        dispatch({type:type,payload:data})
      }

    }
  )
};


export default asyncList;