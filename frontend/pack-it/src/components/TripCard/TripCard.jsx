import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const TripCard = ({ trip }) => {
  const { endDate, startDate, coverPhoto, id, title } = trip;
  console.log('trip card: ', id);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={coverPhoto} style={{ maxHeight: '9rem' }}/>
      <Card.Body>
        <Card.Title style={{textAlign: "center"}}>{title}</Card.Title>
        <Card.Text>
          Start date: {startDate} - End date: {endDate}
        </Card.Text>
        <div className='d-grid  mx-auto'>
        <Link
          className="btn btn-outline-info btn-lg"
          role="button"
          to={`/${id}/packingList`}
          id={id}
        >
          Packing List
        </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

// export default TripCard;
