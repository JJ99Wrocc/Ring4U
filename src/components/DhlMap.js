import React, { useState, useCallback, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/InPostMap.css';


// Ikona DHL
const dhlIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    iconSize: [35, 50],
    iconAnchor: [17, 50],
    popupAnchor: [1, -45],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [50, 50]
});


const DhlMap = ({ onSelectPoint }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [foundDhlPoints, setFoundDhlPoints] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [selectedDhlPoint, setSelectedDhlPoint] = useState(null);

    const mapRef = useRef(null);


    useEffect(() => {

        if (!window.google) {

            const script = document.createElement('script');

            script.src =
            "https://maps.googleapis.com/maps/api/js?key=VsBlpUdD0X0bVqgsXkorSAtO8MNLxTTB&libraries=places";

            script.async = true;
            script.defer = true;

            document.head.appendChild(script);
        }
    }, []);


    // Szukanie DHL przez Google Places
    const searchDhlNearby = useCallback((lat, lng) => {


        if (!window.google) {
            return;
        }
        setIsLoading(true);
        setErrorMsg(null);

        const service =
        new window.google.maps.places.PlacesService(
            document.createElement('div')
        );

        const request = {
            location:
            new window.google.maps.LatLng(lat, lng),
            radius: '4000',
            query: 'DHL BOX'
        };




        service.textSearch(request, (results, status) => {

            if (
                status === window.google.maps.places.PlacesServiceStatus.OK
            ) {
                const points = results

                .filter(place => place.geometry)

                .map(place => ({
                    id: place.place_id,
                    name:
                    place.name || "Punkt DHL",
                    address:
                    place.formatted_address || "Brak adresu",
                    lat:
                    place.geometry.location.lat(),
                    lng:
                    place.geometry.location.lng()
                }));

                setFoundDhlPoints(points);
            } else {
                setErrorMsg(
                    `Błąd Google: ${status}`
                );
            }
            setIsLoading(false);
        });
    }, []);







    const handleDhlSelect = (point) => {


        const selected = {
            id: point.id,
            name: point.name,
            address: point.address,
            lat: point.lat,
            lng: point.lng
        };
        setSelectedDhlPoint(selected);
        if(onSelectPoint){
            onSelectPoint(selected);
        }
    };





    const handleSearch = () => {


        if(!searchTerm || !window.google)
            return;

        setIsLoading(true);
        const geocoder =
        new window.google.maps.Geocoder();

        geocoder.geocode(

            {
                address: searchTerm,

                componentRestrictions:{
                    country:'PL'
                }
            },


            (results,status)=>{


                if(status === "OK"){

                    const location =
                    results[0].geometry.location;

                    const lat =
                    location.lat()

                    const lng =
                    location.lng();


                    if(mapRef.current){

                        mapRef.current.flyTo(
                            [lat,lng],
                            15,
                            {
                                animate:true,
                                duration:1.5
                            }
                        );
                    }

                    searchDhlNearby(lat,lng);
                }else{

                    setIsLoading(false);
                    setErrorMsg(
                        "Nie znaleziono adresu."
                    );
                    setTimeout(
                        ()=>setErrorMsg(null),
                        3000
                    );
                }
            }
        );
    };







    const MapController = () => {


        useMapEvents({

            moveend:(e)=>{

                const center =
                e.target.getCenter();


                if(window.searchTimeout)
                clearTimeout(window.searchTimeout);


                window.searchTimeout =
                setTimeout(()=>{

                    searchDhlNearby(
                        center.lat,
                        center.lng
                    );
                },500);
            }
        });

        return null;
    };







    return (

        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="premium-map-wrapper"
        >

            <div className="map-interface-layer">
                <div className="search-container-pro">

                    <input
                        type="text"
                        placeholder="np. Warszawa, Marszałkowska..."
                        value={searchTerm}
                        onChange={   e=>setSearchTerm(e.target.value)      }
                        onKeyDown={ e=>e.key==="Enter" && handleSearch() }
                        className="pro-input"
                    />



                    <button
                        onClick={handleSearch}
                        className="pro-search-btn"

                    >
                        {
                        isLoading
                        ?
                        <div className="mini-spinner"></div>
                        :
                        "SZUKAJ"
                        }
                    </button>
                </div>
                <AnimatePresence>
                {
                errorMsg && (

                    <motion.div
                        initial={{
                            y:-20,
                            opacity:0
                        }}
                        animate={{
                            y:0,
                            opacity:1
                        }}
                        exit={{
                            y:-20,
                            opacity:0
                        }}
                        className="error-toast"
                    >
                        {errorMsg}
                    </motion.div>
                )
                }
                </AnimatePresence>
            </div>



            <MapContainer
                center={[52.2297,21.0122]}
                zoom={13}
                zoomControl={false}
                className="main-leaflet-map"
                whenReady={
                    e=>{   mapRef.current=e.target  }   
                             }
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution="&copy; CartoDB"
                />
                <MapController />
                {
                foundDhlPoints.map(point=>(
                    <Marker
                        key={point.id}
                        position={[
                            point.lat,
                            point.lng
                        ]}
                        icon={dhlIcon}
                    >
                        <Popup className="dhl-popup-style">
                            <div className="popup-premium-content">
                                <h3>  DHL BOX 24/7    </h3>
                                <p className="locker-id"> {point.name}  </p>
                                <p className="locker-addr"> {point.address}  </p>
                                <button
                                    className="select-point-btn"
                                    onClick={
                                        ()=>handleDhlSelect(point)
                                    }
                                >
                                    WYBIERZ TEN PUNKT
                                </button>
                            </div>
                        </Popup>
                    </Marker>

                ))
                }
            </MapContainer>


            <div className="selected-point-info">
            {
            selectedDhlPoint ?
            <>
                <p>
                <strong>   Wybrany punkt DHL:   </strong>
                {selectedDhlPoint.name}
                </p>
                <p>
                <strong>   Adres: </strong>
              {selectedDhlPoint.address}
                </p>
           </>
            :
            <p> Proszę wybrać punkt DHL na mapie   </p>
            }
            </div>
            {
            isLoading && (
                <div className="map-loading-overlay">
                    <div className="shimmer-text">
                        Lokalizowanie punktów DHL...
                    </div>
                </div>
            )            }
        </motion.div>

    );

};


export default DhlMap;