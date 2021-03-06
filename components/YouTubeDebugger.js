const React = require('react')

class YoutTubeDebugger extends React.Component{

	constructor(){
		super()
		this.state = {
			errors: [], 
			user: null, 
			settings: {
				bitrate: 8, 
				video: {
					resolution: '1080p'
				}
			}
		} 

		this.handleClickBitrate = this.handleClickBitrate.bind(this)
		this.handleClickResolution = this.handleClickResolution.bind(this)
	}

	handleClickBitrate(){
		this.setState({settings: Object.assign({}, this.state.settings, {bitrate: 12})
		})
	}

	handleClickResolution(){
				this.setState({settings: Object.assign({}, this.state.settings, {
					video: Object.assign({}, this.state.video, {resolution: '720p'})
				})
		})
	}

	render() {
		return(
			<div>
				<button className= 'bitrate' onClick={this.handleClickBitrate}> </button>
				<button className= 'resolution' onClick={this.handleClickResolution}> </button>
				</div>
		)
	}
}

module.exports = YoutTubeDebugger