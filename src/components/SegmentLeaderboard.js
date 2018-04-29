import React, {Component} from "react";
import {connect} from "react-redux";
import '../css/table.css';
import * as segmentLeaderboardActions from '../actions/segmentLeaderboardActions';
import {Button} from 'rmwc/Button';
import SegmentLeaderboardAthlete from '../elements/SegmentLeaderboardAthlete';


class SegmentLeaderboard extends Component {
    componentDidMount() {
        this.props.actions.fetchSegmentLeaderboard(this.props.match.params.segmentId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.segmentId !== prevProps.match.params.segmentId) {
            this.props.actions.fetchSegmentLeaderboard(this.props.match.params.segmentId);
        }
    }

    componentWillUnmount() {
        this.props.actions.clearSegmentLeaderboard();
    }

    render() {
        const {segmentLeaderboard, totalLeaderboard} = this.props;
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
    segmentLeaderboard: state.segmentLeaderboard,
    totalLeaderboard: state.totalLeaderboard
});

const mapDispatchToProps = dispatch => ({
    actions: {
        fetchSegmentLeaderboard: (segmentId) => dispatch(segmentLeaderboardActions.fetchSegmentLeaderboard(segmentId)),
        clearSegmentLeaderboard: () => dispatch(segmentLeaderboardActions.clearSegmentLeaderboard())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SegmentLeaderboard);