import React,{Component} from 'react';
import { connect } from 'react-redux';

class Childs extends Component{
	constructor(props){
		super(props);
		this.state={
          a:'游客1'
      }
	}	
	render(){
		const {array,reducers,addreducer} =this.props;
		// console.log(this.props);
		const style = {
			width:"100%",
			height:'500px',
			position: "relative",
			h1:{
				width:"100%",
				height:"50px",
				backgroundColor:"#abcdef",
				textAlign:'center',
				lineHeight:'50px',
				fontSize:"16px",
			},
			div:{
				width:"500px",
				height:"30px",
				textAlign:'center',
				lineHeight:'30px',
				margin:"0 auto",
				marginTop:"20px",
				backgroundColor:"red",
			},
			btn:{
				width:"10",
				height:"10",
				padding:"10px  50px",
				margin:"0 0 25px 25px",
				float:"left",
			},
			btnbox:{
				width:"200px",
				height:"200px",
				backgroundColor:"#abcdef",
				position: "absolute",
				top:"50px"
			}
		}		
		return (
			<div style={style}>
				<h1 style={style.h1}>我是redux</h1>
				{
					array.map((ietm,index)=>{
						return (
							<div key={index} style={style.div}> {ietm} </div>
						)
					})
				}

				<div style={style.btnbox}>
					<button onClick={() =>reducers()}  style={style.btn}> 删除 </button>
					<br/>
					<button onClick={() =>addreducer({text1:"你好啊！ "+this.state.a,text2:"你好2"})} style={style.btn}> 添加 </button>
					 <input type="text" placeholder="请输入名字" ref="helloTo"  onChange={()=>this.inputVal()}/>
				    <p>{this.state.a}</p>
				</div>				
		    </div>
		)
	}
	inputVal(e){
		// console.log(this.refs.helloTo.value);
		this.setState({ a : this.refs.helloTo.value })
	}
}

function mapStateToProps(state){
	// console.log(state.addReducer.array)
	return {
		array : state.addReducer.array
	}
}

function mapDispatchToProps(dispatch){
	// console.log(dispatch)
	return {
		reducers:()=>dispatch({type:"REDUCE",text:123}),
		addreducer:(res)=>dispatch({type:"ADD",text:res})
	}
}

export default  connect(
	mapStateToProps,
	mapDispatchToProps
)(Childs)