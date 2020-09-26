import React from 'react'

class  Ul extends React.Component{
	constructor(){
		super()

		// 第一位护法 state props
		this.state = {
			time:(new Date()).toLocaleTimeString(),
			name:''
		}

		setInterval(()=>{

			// console.log(this);

		// 要想修改state 必须通过setState  setState方法结束之后 会调render()

		// get方法只可读不可写  set方法  设置内容

		// 
		this.setState({
			time:(new Date()).toLocaleTimeString()
		})

		},1000)

		setTimeout(()=>{
			this.setState({
				name:'xiaomage'
			})
		},10000)



	}

	times(t){
		return t;
	}
	say(){
		// alert('太困了');
		console.log('太困了');
	}

	// 一群打杂小弟

	render(){
		console.log('讨厌 又来了')

		return (
			<ul>
				<li className={this.state.name}>{1+1}</li>
				<li>{this.times('6th')}</li>
				<li>{this.state.time}</li>
				<li onClick={this.say}>点我</li>
   
			</ul>
			)

	}

}

export default Ul;