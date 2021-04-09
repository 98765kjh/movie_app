import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return <div>
    <h1> I like {name}</h1>
    <h3> rating: {rating}/5.0</h3>
    <img src={picture} alt={name} />
  </div>
}

const foodList = [
  {
    id: 1,
    name: "김치",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "삼겹살",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 5.0
  },
  {
    id: 3,
    name: "비빔밥",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.3
  },
  {
    id: 4,
    name: "돈까스",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.6
  },
  {
    id: 5,
    name: "김밥",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.1
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      <h1>Hi</h1>
      <h1>{foodList.map(f => (
        <Food key={f.id} name={f.name} picture={f.image} rating={f.rating} />
      ))}</h1>
    </div>
  );
}

export default App;
