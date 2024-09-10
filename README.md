see [google analytics](https://developers.google.com/analytics) here.
see [google tag manager](https://tagmanager.google.com/#/home) here.
popular [Youtube channel](https://www.youtube.com/@GoogleAnalytics) for google analytics.

### How to generate API secret

admin > data stream > Measurement Protocol API secrets create API key

### How to get mesurement ID

admin > data stream

### Project Steps

- Go to tag manager site
- Click on the preview button
- enter [website url](http://localhost:3000/)
- then in analytics website
- go to report and realtime
- open /mock/deposit api endpoint with debug parameter
- view in realtime

### How to setup project

```bash
npm install
npm start
```

This will start website service on localhost:3000

### How to get tagmanager environment id

from tagmangar site copy container id

### what are environment variable required to setup in .env

```bash
MEASUREMENT_ID=<from analytics site admin > datastream >
ANALYTICS_API_SECRET = <from analytics site admin > data stream > Measurement Protocol API secrets create API key>
TAGMANAGER_ID=< from tagmanager site container id >
```
