import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CompostIcon from '@mui/icons-material/Compost';
import './infobox.css';

export default function InfoBox({ info }) {
  const INIT_URL =
    'https://images.unsplash.com/photo-1633239986081-46d072ca30e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const HOT_URL =
    'https://images.unsplash.com/photo-1420593248178-d88870618ca0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const COLD_URL =
    'https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const RAIN_URL =
    'https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // determine the correct image URL
  const imageUrl =
    info.humidity > 70
      ? RAIN_URL
      : info.temp > 30
      ? HOT_URL
      : info.temp < 15
      ? COLD_URL
      : INIT_URL;

  return (
    <div className="info-box">
      <h1 className="info-heading">Weather Info - {info.weather}</h1>
      <div className="infobox-card">
        <Card sx={{ maxWidth: 345, boxShadow: 4 }}>
          <CardMedia
            sx={{ height: 160 }}
            image={imageUrl}
            title="Weather Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{' '}
              {info.humidity > 70 ? (
                <ThunderstormIcon />
              ) : info.temp > 30 ? (
                <SunnyIcon />
              ) : info.temp < 15 ? (
                <AcUnitIcon />
              ) : (
                <CompostIcon />
              )}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Temperature: {info.temp}°C
              <br />
              <br />
              Min Temperature: {info.tempMin}°C
              <br />
              <br />
              Max Temperature: {info.tempMax}°C
              <br />
              <br />
              Humidity: {info.humidity}%
              <br />
              <br />
              The weather is described as {info.weather} and feels like{' '}
              {info.feelsLike}°C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
