function MapComponent({ className = "" }) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.2947496258835!2d37.65145582103027!3d55.76713446891939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a62b8d75343%3A0x297575a55fc34a88!2z0KHQsNC00L7QstCw0Y8t0KfQtdGA0L3QvtCz0YDRj9C30YHQutCw0Y8g0YPQuy4sIDPQsdGBMSwg0JzQvtGB0LrQstCwLCAxMDcwNzg!5e0!3m2!1sru!2sru!4v1676227112337!5m2!1sru!2sru"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      {...{ className }}
    ></iframe>
  );
}

export default MapComponent;
