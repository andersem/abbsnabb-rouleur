import React, {Component} from "react";
import moment from 'moment';
import {connect} from "react-redux";
import '../css/table.css';
import * as segmentLeaderboardActions from '../actions/segmentLeaderboardActions';

function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    const hDisplay = h > 0 ? h + ":" : "";
    const mDisplay = m > 0 ? m + ":" : "";
    const sDisplay = s > 0 ? s + "" : "";
    return hDisplay + mDisplay.padStart(3, "0") + sDisplay.padStart(2, "0");
}

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
        const {segmentLeaderboard} = this.props;
        return (
            <div>
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
                        return (<tr key={athlete.athlete_name}>
                            <td>{i + 1}</td>
                            <td>{athlete.athlete_name}</td>
                            <td>{athlete.points}</td>
                            <td>{secondsToHms(athlete.elapsed_time)}</td>
                            <td>{moment(athlete.start_date).format('DD.MM.YY')}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    segmentLeaderboard: state.segmentLeaderboard
});

const mapDispatchToProps = dispatch => ({
    actions: {
        fetchSegmentLeaderboard: (segmentId) => dispatch(segmentLeaderboardActions.fetchSegmentLeaderboard(segmentId)),
        clearSegmentLeaderboard: () => dispatch(segmentLeaderboardActions.clearSegmentLeaderboard())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SegmentLeaderboard);