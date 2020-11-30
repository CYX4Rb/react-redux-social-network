import React from 'react'
import { connect } from 'react-redux'
import SideBar from './SideBar'

const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
}
const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer
