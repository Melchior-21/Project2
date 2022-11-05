import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://images.ecestaticos.com/Trx-5wqmvhLiXTTzSn5rtAEjQp4=/0x0:1918x1078/600x450/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F506%2Fc40%2F931%2F506c40931bdbb5de2b16db8dac8f3766.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/c1b95ab8-7052-445d-8d2b-efe8dae0b6af/ad2bc32e-5d00-4f1b-9d0d-40d8d386145d_560_420.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/c1b95ab8-7052-445d-8d2b-efe8dae0b6af/aec2381f-0b93-4915-b2ab-4832c4f500c0.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;