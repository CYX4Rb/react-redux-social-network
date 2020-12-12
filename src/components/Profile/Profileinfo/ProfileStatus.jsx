import React from 'react'
/* import s from './ProfileInfo.module.css'
 */
class StatusProfile extends React.Component {

    state = {

        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        console.log("this:", this)
        this.props.updateStatus(this.state.status)
        this.setState({
            editMode: false
        })
    }

    onStatusOnChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode && this.props.userId == 12707 // HARD CODE!!!!1
                    ? <div>
                        <input onChange={this.onStatusOnChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                    </div>

                }
            </div>
        )
    }
}

export default StatusProfile