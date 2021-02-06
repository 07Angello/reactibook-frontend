import React from 'react';
import filterType from '../../helpers/filterTypes';
import ReactTooltip from 'react-tooltip';

export const PostTypeIcon = ({ postType }) => {

    let postIconType;

    if ( postType === filterType.PUBLIC ) postIconType = <i data-tip="Public" className="bi bi-globe2"></i>
    if ( postType === filterType.FRIENDS ) postIconType = <i data-tip="Friends" className="bi bi-people-fill"></i>
    if ( postType === filterType.ONLY_ME ) postIconType = <i data-tip="Only Me" className="bi bi-lock-fill"></i>
    if ( postType === '' || postType === null ) postIconType = <i data-tip="Reactibook" className="bi bi-person-fill"></i>

    return (
        <div  d-flex flex-column justify-content-center align-items-left>
            <ReactTooltip  place="right" type="dark" effect="solid" />
            <p>{ postIconType }</p>
        </div>
    )
}
