import React from 'react'
import axios from 'axios';

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			input_value: "",
			tabledata: []
		};

	}
	query() {
		console.log(this.state.input_value)
		if (this.state.input_value.length != 8) {
			alert("学号输入有错！")
			return
		}
		let url = `/api/individual/json?id=${this.state.input_value}`
		let that = this
		axios.get(url)
			.then(function (response) {
				console.log(response.data)
				that.setState({
					tabledata: response.data.timetable
				})
			})
			.catch(function (error) {
				alert("没有找到这个学号的信息")
				that.setState({
					tabledata: []
				})
			});

	}
	input_change(e) {
		this.setState({
			input_value: e.target.value
		})
	}
	render() {

		return (
			<div className="content">
				<input value={this.state.input_value} onChange={this.input_change.bind(this)} type="text" id="lin" placeholder="请输入需要搜索的学号" />
				<button className="queryScore" onClick={this.query.bind(this)}>查询</button>

				<table id="table-1" style={{ textAlgin: "center" }}>
					<tbody><tr>
						<th>Activity</th>
						<th>Day</th>
						<th>Start</th>
						<th>End</th>
						<th>Room</th>
					</tr>
						{this.state.tabledata.map((element, index) => {
							return (
								<tr >
									<td>{element.Activity}</td>
									<td>{element.Day}</td>
									<td>{element.Start}</td>
									<td>{element.End}</td>
									<td>{element.Room}</td>
								</tr>
							)
						})

						}


					</tbody></table>
			</div>
		)
	}


}
