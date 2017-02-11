import React from 'react'


class Markdown extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	componentDidMount() {
		
	}
	loadTracksDataFromServer(){
		
	}
	render(){
		return(
			<div className="container">
				<div className="row">
					<h1 className="page-header text-center">MarkDown Editor</h1>
					<div className="col-sm-6">
						<textarea className="form-control"></textarea>
					</div>
					<div className="col-sm-6">
					</div>
				</div>
			</div>
		)
	}
}

export {Markdown as default}
