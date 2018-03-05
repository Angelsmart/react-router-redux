import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/home.css'

class Home extends Component{
	constructor(props){
        super(props);
        
    };
    num(){
    	const params = {
    		data:this.props.location.state.data
    	}
    	this.$http.post('/api',params).then(()=>{
    		if(this.props.location.state.data === 'hello'){
    			console.log(1)
    		}
    	}).catch(error=>{

    	})
    };
	render(){

		return (
            <div className="home">
                <Link to={{pathname:'/ming',hash:'#fdfdf',search:'id',query:{foo:'boo'},state:{data:'hello'}}}>
					来来来----->链接
				</Link>
            </div>
		)
	}
}

export default Home;