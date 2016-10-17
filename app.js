var express = require('express');
var app = express();
var routes = require('./config/routes');
var http = require('http');


var access_token = "c1d9a85bc3e5be1093d41123fa8ce03e23babd93";



var strava = require('strava-v3');

var allActivities;

for (var count = 0; count < 10; count++) {
  strava.athlete.listActivities({
      'access_token': access_token,
      'page':count,
      'per_page':200
  }, function(err, payload) {
      // console.log(payload);
      for (var i in payload) {
        var newI = count*100 + i;
        console.log(count);
        console.log(newI, "Country: ", payload[i].location_country);
        console.log(i, "Name: ", payload[i].name);
        console.log(i, "activit", payload[i].id);
      }
  });
}







var activities = [{
    id: 726389407,
    resource_state: 2,
    external_id: 'garmin_push_1380587700',
    upload_id: 800643957,
    athlete: {
        id: 395827,
        resource_state: 1
    },
    name: 'Morning Ride',
    distance: 1451,
    moving_time: 399,
    elapsed_time: 399,
    total_elevation_gain: 0,
    type: 'Ride',
    start_date: '2016-09-27T07:52:03Z',
    start_date_local: '2016-09-27T08:52:03Z',
    timezone: '(GMT+00:00) Europe/London',
    start_latlng: [53.79, -1.54],
    end_latlng: [53.8, -1.56],
    location_city: null,
    location_state: null,
    location_country: 'United Kingdom',
    start_latitude: 53.79,
    start_longitude: -1.54,
    achievement_count: 0,
    kudos_count: 0,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
        id: 'a726389407',
        summary_polyline: 'gpigId~kHzClJpAlXaBlWoAbAIfXuAlDqE@qExE',
        resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    flagged: false,
    gear_id: 'b599183',
    average_speed: 3.637,
    max_speed: 7.1,
    average_watts: 40.5,
    kilojoules: 16.2,
    device_watts: false,
    has_heartrate: false,
    elev_high: 32.6,
    elev_low: 27.5,
    total_photo_count: 0,
    has_kudoed: false,
    workout_type: null
}, {
    id: 725731763,
    resource_state: 2,
    external_id: 'garmin_push_1379723096',
    upload_id: 799886243,
    athlete: {
        id: 395827,
        resource_state: 1
    },
    name: 'Afternoon Ride',
    distance: 1602.1,
    moving_time: 345,
    elapsed_time: 345,
    total_elevation_gain: 0,
    type: 'Ride',
    start_date: '2016-09-26T15:58:49Z',
    start_date_local: '2016-09-26T16:58:49Z',
    timezone: '(GMT+00:00) Europe/London',
    start_latlng: [53.8, -1.56],
    end_latlng: [53.79, -1.54],
    location_city: null,
    location_state: null,
    location_country: 'United Kingdom',
    start_latitude: 53.8,
    start_longitude: -1.56,
    achievement_count: 1,
    kudos_count: 1,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
        id: 'a725731763',
        summary_polyline: 'g{igIr~nH|G{@rAuCx@sYfA[PoJnG{\\]aDgK_L{AsJ',
        resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    flagged: false,
    gear_id: 'b599183',
    average_speed: 4.644,
    max_speed: 9,
    average_watts: 62.8,
    kilojoules: 21.7,
    device_watts: false,
    has_heartrate: false,
    elev_high: 32.2,
    elev_low: 27.5,
    total_photo_count: 0,
    has_kudoed: false,
    workout_type: null
}];
