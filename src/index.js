import React from 'react';
import ReactDOM from 'react-dom';
import { Switch,HashHistory,BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import Home from './client/home';
import Ming from './client/ming';
import store from './store/store';
import Childs from './client/childs';
import { Provider }  from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

/*讲解的是router4.0版本以上
   import { history,Route,Link } from 'react-router-dom';

命令：

   npm install --save-dev react-router-dom

   路由4.0以后将路由里面的Router，IndexRoute都废弃，代替它的是BrowserRouter
   exact：是严格匹配路径，也就是说所有的路径与跳转的对应路径完全一致的情况下才让当前所在的路由显

示高亮状态。
   Router 里面传入hashHistory之类的属性时，是集中的路由状态


   to=对象，带参数跳转（pathname, query, hash, state(额外数据）），
     		
   注意:这些参数都被存放到this.props.location中
  
  
   Browser是浏览器的正常跳转，是一般开发时用的路由跳转，
   而到了线上是用hash进行路由跳转（hash路由跳转只是将#后面的路径进行了切换，
                                相当于tab切换不会请求后台{减少http请求，提高网页性能}）


   Switch:是选择性的加载当前唯一的路由，其它的是不会去匹配*/

ReactDOM.render(
		<Router>
			<Switch className='hahome'>
				<Route exact path="/" component={Home} />
	        	<Route path="/ming" component={Ming} />
			</Switch>
		</Router>
		/*<Provider store={store}>
			<Childs />
		</Provider>*/,
	 document.getElementById('root'));
registerServiceWorker();
