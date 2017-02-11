import React from 'react'
import showdown from 'showdown'


class Markdown extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			markdown : "",
			html_content: ""
		}
	}
	componentDidMount() {
		
	}
	handleChange(event){
		this.setState({markdown:event.target.value});
		var converter = new showdown.Converter();
		this.setState({html_content: converter.makeHtml(this.state.markdown)});
	}
	render(){
		return(
			<div className="container">
				<div className="row">
					<h1 className="page-header text-center">MarkDown Editor</h1>
					<div className="col-sm-6">
						<textarea className="form-control" value={this.state.markdown} onChange={this.handleChange.bind(this)}></textarea>
					</div>
					<div className="col-sm-6">
						<div dangerouslySetInnerHTML={{__html: this.state.html_content}} />
					</div>
				</div>
			</div>
		)
	}
}

export {Markdown as default}
