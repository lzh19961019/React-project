import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
// import pubsub from 'pubsub-js';
class Car extends Component{
    render(){
        return (
            <div>
                <header>
                <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                <h1>设置</h1>
                </header>
                <div style={{"height":"1rem"}}></div>
                <ul className="inforList">
                <li><a href="change_pwd.html" className="isNext">修改密码</a></li>
                <li><a href="address.html" className="isNext">我的地址</a></li>
                <li><a href="article.html" className="isNext">关于我们</a></li>
                <li><a href="login.html" className="lastBtn">安全退出</a></li>
                </ul>
            </div>
        )
    }
}
export default Car;