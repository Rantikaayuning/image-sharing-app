import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getHomepage } from "../redux/actions/HomepageAction";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { images } = useSelector(state => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomepage());
  }, [dispatch]);

  return (
    <div>
      <div className="homepage-container">
        <div class="row">
        {images && images.map((item, index) => (
          <div class="col-sm-3" key={index}>
            <Link to={`/detail/${item.id}`} style={{textDecoration: "none"}}>
              <Card
                cardPhoto={item.thumbnailUrl}
                cardText={item.title}
              />
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
