import React from 'react'
import GoogleMapsReact from 'google-maps-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import locationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlinedIcon'
import Rating from '@material-ui/lab'

import useStyles from './styles'

const Map = () => {

  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px')

  const coordinates = { lat: 0, lng: 0}

  return (
    <div className={classes.mapContainer}>
      <GoogleMapsReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[ 50, 50, 50, 50 ]}
        options={ '' }
        onChange={ '' }
        onChildClick={ '' }
      >
      </GoogleMapsReact>
    </div>
  )
}

export default Map
