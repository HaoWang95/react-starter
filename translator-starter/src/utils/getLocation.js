export default function getCurrentLocation() {
    window.navigator.geolocation.getCurrentPosition(
        (pos) => {
            console.log(pos);
            return {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
        },
        (err) => {
            console.log(err);
            return err;
        }
    )
}