import { useEffect, useState } from 'react'

function MeetMe() {
  const [placeData, setPlaceData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlace = async () => {
      // 1. Get your API key from environment variables
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

      if (!apiKey) {
        setError('VITE_GOOGLE_MAPS_API_KEY is not defined.')
        return
      }

      // 2. Construct the URL for the Google Places API
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=Googleplex&destination=Apple%20Park&key=${apiKey}`

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setPlaceData(data)
      } catch (e) {
        setError(e.message)
      }
    }

    fetchPlace()
  }, []) // Run once on component mount

  return (
    <div>
      <h1>Google Directions API Test</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {placeData ? (
        <div>
          <h2>Place Found:</h2>
          <pre>{JSON.stringify(placeData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading place data...</p>
      )}
    </div>
  )
}

export default MeetMe
