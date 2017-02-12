import React from 'react'
import showdown from 'showdown'


class Markdown extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			markdown: "",
		}
	}
	componentDidMount() {
		
	}
	handleChange(event){
		this.setState({markdown:event.target.value}, () =>{
			var converter = new showdown.Converter();
			this.setState({html_content: converter.makeHtml(this.state.markdown)});
		});	
	}
	render(){
		return(
			<div className="page-content">
				<div className="container">
					<div className="row">
						<h1 className="page-header text-center">MarkDown Editor</h1>
						<div className="col-sm-6 editor-col">
							<textarea className="markdown-editor" value={this.state.markdown} placeholder="Start typing from here." onChange={this.handleChange.bind(this)}></textarea>
						</div>
						<div className="col-sm-6 html-col">
							<div dangerouslySetInnerHTML={{__html: this.state.html_content}} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export {Markdown as default}
