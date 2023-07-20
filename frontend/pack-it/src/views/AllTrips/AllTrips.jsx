import { TripCard } from '../../components/TripCard/TripCard';

export const AllTrips = ({ trips }) => {
  console.log('trips is', trips);
  return trips.map((oneTrip) => (
    <TripCard
      trip={oneTrip}
      title={oneTrip.title}
      startDate={oneTrip.startDate}
      endDate={oneTrip.endDate}
      coverPhoto={oneTrip.coverPhoto}
    />
  ));
};
