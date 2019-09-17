from flask import render_template, request, redirect, flash, url_for, Blueprint
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash
from flaskapp import app, uber_client, lyft_client, geo, ws
import urllib, time

@app.route('/static/index.html')
@app.route('/index.html')
@app.route('/')
def index():
    return render_template('web/index.html')



@app.route('/result', methods=['POST', 'GET'])
def result():
    if(request.method == 'POST'):
        # Do some stuff here with the variables
        source = request.form.get('source')
        destination = request.form.get('destination')


        sourceURL = urllib.parse.quote(source)
        destinationURL = urllib.parse.quote(destination)


        try:
            slat,slong = geo.geocode(source).coordinates
        except:
            return index()

        try:
            dlat,dlong = geo.geocode(destination).coordinates
        except:
            return index()


        dregion = geo.reverse_geocode(dlat,dlong).county


        weather = ws.get_weather(dlat,dlong)

        try:
            ride_estimates_uber = uber_client.get_price_estimates(slat, slong, dlat, dlong).json
        except:
            ride_estimates_uber = {}

        try:
            ride_estimates_lyft = lyft_client.get_cost_estimates(slat, slong, dlat, dlong).json
        except:
            ride_estimates_lyft = {}


        lotsMarkers = []
        # for lot in lots:
        #     entry={}
        #     entry['name']= lot['name']
        #     mlat,mlong = geo.geocode(lot['address']+" "+dregion).coordinates
        #     entry['address']= lot['address']+ " "+dregion
        #     entry['mlat'] = mlat
        #     entry['mlong'] = mlong
        #     lotsMarkers.append(entry)


        return render_template('web/result.html', source=source, destination=destination, uber=ride_estimates_uber, lyft=ride_estimates_lyft, weather=weather, slong=slong,slat=slat,dlong=dlong,dlat=dlat, destinationURL=destinationURL,sourceURL=sourceURL, lotsMarkers=lotsMarkers)
        # return render_template('web/result.html', source=source, destination=destination, uber=ride_estimates_uber, lyft=ride_estimates_lyft, lots=lots, weather=weather, slong=slong,slat=slat,dlong=dlong,dlat=dlat, destinationURL=destinationURL,sourceURL=sourceURL, lotsMarkers=lotsMarkers)