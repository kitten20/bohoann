function MapComponent({ mapVariant = 1, className = "", serverData = [] }) {
  const MoscowVariant = () => (
    <iframe
      src={serverData[0]?.offlineStore[0].map}
      style={{ border: 0 }}
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
      {...{ className }}
    ></iframe>
  );

  const SpbVariant = () => (
    <iframe
      src={serverData[0]?.offlineStore[1].map}
      style={{ border: 0 }}
      allowFullScreen=""
      {...{ className }}
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );

  return mapVariant === 1 ? (
    <MoscowVariant />
  ) : mapVariant === 2 ? (
    <SpbVariant />
  ) : (
    <></>
  );
}

export default MapComponent;
