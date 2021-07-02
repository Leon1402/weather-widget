export const getlocation = () => {
  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };
  
  
  function success(pos) {
    const crd = pos.coords;
  
    return [crd.latitude, crd.longitude]
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);
}