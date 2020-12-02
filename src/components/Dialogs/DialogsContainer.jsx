
import { addMessageCreator } from '../../Redux/Dialog-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../HOC/withAuthRedirect'



let mapStateToProps = (state) => {
    return{
        dialogPage: state.dialogPage
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessageCreator})
)(Dialogs)