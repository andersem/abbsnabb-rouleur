import React from 'react';
import segments, { segmentName } from "../segments";
import { SimpleMenu, MenuItem } from 'rmwc/Menu';
import { Button } from 'rmwc/Button';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import moment from 'moment';

function displayName(currentSegment) {
    if (currentSegment) {
        return segmentName(currentSegment);
    } else {
        return 'Overall';
    }
}

const SegmentSelect = ({ history, location, totalLeaderboard}) => {
    const currentSegment = location.pathname.substr(location.pathname.lastIndexOf('/') + 1);
    const lastUpdated = totalLeaderboard.lastUpdated ? moment(totalLeaderboard.lastUpdated).fromNow() : 'Aldri';
    const error = totalLeaderboard.error ? 'Kunne ikke oppdatere' : '';

    return (
        <div>
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
            <div className="overtable">
                <span style={{ float: 'right' }}>
                    Sist oppdatert: {lastUpdated}
                    {totalLeaderboard.loading && <i className="fas fa-spinner fa-pulse"></i>} 
                    {error && 
                        <i style={{color: 'orange'}} title="Kunne ikke oppdatere listen, prøv å refreshe siden om et par minutter" className="fal fa-exclamation-triangle"></i>
                    }
                </span>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    totalLeaderboard: state.totalLeaderboard});

export default withRouter(connect(mapStateToProps)(SegmentSelect));