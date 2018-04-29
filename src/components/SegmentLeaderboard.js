import React, {Component} from "react";
import {connect} from "react-redux";
import '../css/table.css';
import {Button} from 'rmwc/Button';
import SegmentLeaderboardAthlete from '../elements/SegmentLeaderboardAthlete';


class SegmentLeaderboard extends Component {
    render() {
        const {totalLeaderboard, match} = this.props;
        const segmentId = match.params.segmentId;
        const segmentLeaderboard = totalLeaderboard.segmentLeaderboards[segmentId];
        if (!segmentLeaderboard) {
            return <div></div>;
        }
        const segmentUrl = 'https://www.strava.com/segments/' + segmentLeaderboard.segment_id;
        return (
            <div>
                <div className="overtable">
                    <a href={segmentUrl} style={{textDecoration: 'none'}} target="blank">
                        <Button raised theme="secondary-bg text-primary-on-secondary">Strava</Button>
                    </a>
                </div>
                <table className="container">
                    <thead>
                    <tr>
                        <th><h1>#</h1></th>
                        <th><h1>Navn</h1></th>
                        <th><h1>Poeng</h1></th>
                        <th><h1>Tid</h1></th>
                        <th><h1>Dato for aktivitet</h1></th>
                    </tr>
                    </thead>
                    <tbody>
                    {segmentLeaderboard.entries.map((athlete, i) => {
                        const athleteWithAllSegments = totalLeaderboard.entries.find(a => a.athlete_name === athlete.athlete_name);
                        return <SegmentLeaderboardAthlete 
                            key={athlete.athlete_name} 
                            ranking={i+1} 
                            athlete={athlete} 
                            athleteWithAllSegments={athleteWithAllSegments} 
                        />;
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    totalLeaderboard: state.totalLeaderboard
});

export default connect(mapStateToProps)(SegmentLeaderboard);