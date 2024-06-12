import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams();
  // Placeholder data
  const property = {
    id,
    title: 'Cozy Apartment',
    description: 'A nice place to stay with modern amenities.',
    price: '$500',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Kitchen'],
    images: ['/path/to/image1.jpg', '/path/to/image2.jpg'],
  };

  return (
    <div className="property-detail">
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      <ul>
        {property.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
      <div className="images">
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`Property image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PropertyDetail;
