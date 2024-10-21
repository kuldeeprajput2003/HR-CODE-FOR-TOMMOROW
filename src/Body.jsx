import "./Body.css"
import Image1 from "./Card1";
import Image2 from "./card2";
import Image3 from "./card3";
import Image4 from "./card4";
import Image5 from "./card5";
import Image6 from "./card6";

export default function Body() {
  return (
    < div className="body">
      <div className="upper_images">
        <Image1 className="image1" />
        <Image2 className="image2" />
        <Image3 className="image3" />
      </div>
      <div className="lower_images">
        <Image4 className="image4" />
        <Image5 className="image5" />
        <Image6 className="image6" />
      </div>
    </div>
  )
} 