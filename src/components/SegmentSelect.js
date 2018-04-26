import React from 'react';
import segments, {segmentName} from "../segments";
import {SimpleMenu, MenuItem} from 'rmwc/Menu';
import {Button} from 'rmwc/Button';
import {connect} from "react-redux";
import {withRouter} from 'react-router';

function displayName(currentSegment) {
    if (currentSegment) {
        return segmentName(currentSegment);
    } else {
        return 'Overall';
    }
}

const SegmentSelect = ({history, currentSegment}) => {
    return (
        <div className="segment-select">
            <SimpleMenu
                onSelected={(e) => {
                    if (e.detail.item.id === 'overall') {
                        history.push('/');
                    } else {
                        history.push('/segment/' + e.detail.item.id);
                    }
                }}
                anchorCorner="bottomStart"
                handle={<Button className="segment-select-menu-item" raised>{displayName(currentSegment)}</Button>}
            >
                <MenuItem className="segment-select-menu-item" id="overall">Overall</MenuItem>
                {segments.map(segment => {
                    return <MenuItem className="segment-select-menu-item" id={segment.id}
                                     key={segment.id}>{segment.name}</MenuItem>
                })}
            </SimpleMenu>
        </div>
    )
};

const mapStateToProps = state => ({
    currentSegment: state.segmentLeaderboard.segment_id
});

const mapDispatchToPropes = dispatch => ({
    actions: {}
});

export default withRouter(connect(mapStateToProps, mapDispatchToPropes)(SegmentSelect));