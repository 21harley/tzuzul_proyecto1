import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../css/slide.css";

export default function Slider() {
  const movies = [
		{
			id: '1',
			title: 'Spiderman',
			image:
				'https://es.web.img2.acsta.net/pictures/21/12/01/12/07/0243323.jpg',
		},
		{
			id: '2',
			title: 'Venom',
			image:
				'https://depor.com/resizer/dJt2NgUiUYK0qqCx5BI-7Mymxyg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GMHNBALRBVAHNC5YAQWQRKCVWU.jpg',
		},
		{
			id: '3',
			title: 'transilvania',
			image:
				'https://noticiasimportantes.cl/upload/blog/galeria/normal/descargar-hotel-transylvania-transformania-cuevana-3-2620e1332513cc8456f58c01089c2508.jpg',
		},
		{
			id: '4',
			title: 'demon slayer',
			image:
				'https://depor.com/resizer/xFmI9DJEm9l6iU9lXhqaR6w2qPM=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TUANI34MBNDJXKOFH6EW5SSUKI.jpg',
		},
		{
			id: '5',
			title: 'Matrix',
			image:
				'https://i.blogs.es/020f6e/matrix-resurrections-neo-trinity-header/1366_2000.jpeg',
		},
	]
  return (
    // <Carousel className="main-slide">
    <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={true} showThumbs={false}>
      {movies.map((movie) => (
        <div key={movie.id} className='slider__content--item'>
          <img src={movie.image} alt={movie.title}/>
          <p className="Legend">{movie.title}</p>
        </div>
      ))}
    </Carousel>
  );
}
