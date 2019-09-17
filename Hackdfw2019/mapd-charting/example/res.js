

function supBro(){

    let source = document.getElementById("src-field")

    // let destination = (document.getElementById("dst-field")).innerText
    console.log(source.innerText)

    //
    // let sourceURL = urllib.parse.quote(source)
    // let destinationURL = urllib.parse.quote(destination)

    // console.log(sourceURL)

//     try {
//         slat, slong = geo.geocode(source).coordinates
//         console.log(slat)
//     }
// catch (e) {
//     return index()
// }
//
//     try {
//         dlat, dlong = geo.geocode(destination).coordinates
//     }
//     catch (e) {
//         return index()
//     }


    // dregion = geo.reverse_geocode(dlat,dlong).county
    //
    // lots = pms.getLots(dlat, dlong)[:5]
    //
    //
    // weather = ws.get_weather(dlat,dlong)
    //
    // try:
    // ride_estimates_uber = uber_client.get_price_estimates(slat, slong, dlat, dlong).json
    // except:
    //     ride_estimates_uber = {}
    //
    // try:
    // ride_estimates_lyft = lyft_client.get_cost_estimates(slat, slong, dlat, dlong).json
    // except:
    //     ride_estimates_lyft = {}
    //
    //
    // lotsMarkers = []
    // for lot in lots:
    // entry={}
    // entry['name']= lot['name']
    // mlat,mlong = geo.geocode(lot['address']+" "+dregion).coordinates
    // entry['address']= lot['address']+ " "+dregion
    // entry['mlat'] = mlat
    // entry['mlong'] = mlong
    // lotsMarkers.append(entry)
    //
    // if current_user.is_authenticated:
    // history_item = {
    //     'time':time.ctime(),
    //     'source':source,
    //     'destination':destination,
    //     'src_latlng':(slat, slong),
    //     'dst_latlng':(dlat, dlong),
    //     'uber':ride_estimates_uber,
    //     'lyft':ride_estimates_lyft,
    //     'parking':lots,
    //     'weather':weather
    // }
    // current_user.add_history_item(history_item)
    //
    //
    // return render_template('web/result.html', source=source, destination=destination, uber=ride_estimates_uber, lyft=ride_estimates_lyft, lots=lots, weather=weather, slong=slong,slat=slat,dlong=dlong,dlat=dlat, destinationURL=destinationURL,sourceURL=sourceURL, lotsMarkers=lotsMarkers)
    //

}
