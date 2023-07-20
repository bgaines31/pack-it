import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const TripCard = ({ trip }) => {
  const { endDate, startDate, coverPhoto, id } = trip;
  console.log('trip card: ', id);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={coverPhoto} />
      <Card.Body>
        {/* <Card.Title>{title}</Card.Title> */}
        <Card.Text>
          {startDate} - {endDate}
        </Card.Text>
        {/* <Button variant="primary">Packing List</Button> */}
        <Link
          className="btn btn-primary btn-lg"
          role="button"
          to={`/${id}/packingList`}
          id={id}
        >
          Packing List
        </Link>
      </Card.Body>
    </Card>
  );
};

// export default TripCard;
