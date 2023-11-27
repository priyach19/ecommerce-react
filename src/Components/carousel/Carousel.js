import Carousel from "react-bootstrap/Carousel";
// Importing Images
import IMG1 from "../../assets/mart5.png";
import IMG2 from "../../assets/mart.png";
import IMG3 from "../../assets/mart4.jpg";

function MealDemo() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={IMG2} alt="First slide" />
        <Carousel.Caption>
          <p style={{ color: "blue", fontSize: "30px" }}>
            <strong>Your favourite Snacks</strong>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={IMG1} alt="Second slide" />

        <Carousel.Caption>
          <p style={{ color: "blue", fontSize: "30px" }}>
            <strong>Your North Indian Dishes</strong>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={IMG3} alt="Third slide" />

        <Carousel.Caption>
          <p style={{ color: "blue", fontSize: "30px" }}>
            <strong>Your favourite Chinese dishes</strong>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
//exporting MealDemo component
export default MealDemo;
