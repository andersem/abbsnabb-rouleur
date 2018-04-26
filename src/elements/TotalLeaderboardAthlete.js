import React, { Component } from 'react';
import AthletDetailsModal from './AthleteDetailsModal';

class TotalLeaderboardAthlete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        }
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    render() {
        const { ranking, athlete } = this.props;
        return (
            <tr>
                <td>{ranking}</td>
                <td onClick={this.openModal}>{athlete.athlete_name}</td>
                <td>{athlete.segments.length}</td>
                <td>{athlete.points}</td>
                <AthletDetailsModal
                    modalOpen={this.state.modalOpen}
                    athlete={athlete}
                    closeModal={this.closeModal}
                />
            </tr >
        )
    }
};

export default TotalLeaderboardAthlete;