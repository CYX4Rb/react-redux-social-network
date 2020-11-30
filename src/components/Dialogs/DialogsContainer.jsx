
import { addMessageCreator, updateNewMessageCreator } from '../../Redux/Dialog-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../HOC/withAuthRedirect'



let mapStateToProps = (state) => {
    return{
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageCreator: (element) => {
            dispatch(updateNewMessageCreator(element))
        },
        addMessageCreator: () => {
            dispatch(addMessageCreator())
        }

    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)