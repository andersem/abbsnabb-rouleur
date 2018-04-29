import React from "react";
import { connect } from "react-redux";
import * as participantsActions from "../actions/totalLeaderboardActions";
import '../css/table.css';
import TotalLeaderboardAthlete from '../elements/TotalLeaderboardAthlete';

const TotalLeaderboard = ({ actions, totalLeaderboard }) => {
    return (
        <div>
            <table className="container">
                <thead>
                    <tr>
                        <th><h1>#</h1></th>
                        <th><h1>Navn</h1></th>
                        <th><h1>Antall</h1></th>
                        <th><h1>Poeng</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {totalLeaderboard.entries.map((athlete, i) => {
                        return (<TotalLeaderboardAthlete key={athlete.athlete_name} athlete={athlete} ranking={i + 1} />)
                    })}
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = state => ({
    totalLeaderboard: state.totalLeaderboard
});

const mapDispatchToProps = dispatch => ({
    actions: {
        updateParticipantForm: (e) => dispatch(participantsActions.updateLeaderboard(e.target.name, e.target.value)),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TotalLeaderboard);