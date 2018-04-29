import React from "react";
import { connect } from "react-redux";
import * as participantsActions from "../actions/totalLeaderboardActions";
import '../css/table.css';
import TotalLeaderboardAthlete from '../elements/TotalLeaderboardAthlete';
import moment from 'moment';

const TotalLeaderboard = ({ actions, totalLeaderboard }) => {
    const lastUpdated = totalLeaderboard.lastUpdated ? moment(totalLeaderboard.lastUpdated).fromNow() : 'Aldri';
    const error = totalLeaderboard.error ? 'Kunne ikke oppdatere' : '';
    return (
        <div>
            <div className="overtable">
                <span style={{ float: 'right' }}>
                    Sist oppdatert: {lastUpdated}
                    {totalLeaderboard.loading && <i className="fas fa-spinner fa-pulse"></i>} 
                    {error && 
                        <i style={{color: 'orange'}} title="Kunne ikke oppdatere listen, prøv å refreshe siden om et par minutter" className="fal fa-exclamation-triangle"></i>
                    }
                </span>
            </div>
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