import React, { Component } from 'react';
import AthleteDetailsModal from './AthleteDetailsModal';
import moment from 'moment';
import {secondsToHms} from '../utils/timeFormat';

class SegmentLeaderboardAthlete extends Component {
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
        const { ranking, athlete, athleteWithAllSegments } = this.props;
        return (
            <tr>
                <td>{ranking}</td>
                <td className="pointy" onClick={this.openModal}>{athlete.athlete_name}</td>
                <td>{athlete.points}</td>
                <td>{secondsToHms(athlete.elapsed_time)}</td>
                <td>{moment(athlete.start_date).format('DD.MM.YY')}</td>
                <AthleteDetailsModal
                    modalOpen={this.state.modalOpen}
                    athlete={athleteWithAllSegments}
                    closeModal={this.closeModal}
                />
            </tr>
        )
    }
};

export default SegmentLeaderboardAthlete;