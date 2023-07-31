import { TripCard } from '../../components/TripCard/TripCard';
import { Row, Col } from 'react-bootstrap';
export const AllTrips = ({ trips }) => {
  console.log('trips is', trips);
  return (
    <Row style={{ marginTop: '5rem'}}>
      {trips.map((oneTrip) => (
          <Col className="col-2">
            <TripCard
              trip={oneTrip}
              title={oneTrip.title}
              startDate={oneTrip.startDate}
              endDate={oneTrip.endDate}
              coverPhoto={oneTrip.coverPhoto}
            />
          </Col>
      ))}
    </Row>
  );
};
