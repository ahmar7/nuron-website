import React, { Component } from 'react'
import QrReader from 'react-weblineindia-qrcode-scanner'
import './style.css'
class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: 100,
            result: 'No result',
        }

        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data) {
        this.setState({
            result: data,
        })
    }
    handleError(err) {
        console.error(err)
    }
    render() {
        const previewStyle = {
            height: 240,
            width: 320,

        }

        return (
            <div className='main-qr' >
                <div> <h3 className='scan-head' >Scan QR code</h3></div>
                <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                <p>{this.state.result}</p>
            </div>
        )
    }
}
export default Test;