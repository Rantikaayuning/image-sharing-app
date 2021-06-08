import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { getPictureDetail } from "../redux/actions/HomepageAction";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";

const PictureDetail = () => {
  const { id } = useParams();
  const { pictureDetail } = useSelector(state => state.home);
  const dispatch = useDispatch();

  const addToFavorite = (picture, id) => {
    if (localStorage.getItem("favorite")) {
        let favorite = JSON.parse(localStorage.getItem("favorite"));
        favorite = [...favorite.filter(item => item.id !== id), picture];
        localStorage.setItem("favorite", JSON.stringify(favorite));
    } else {
        localStorage.setItem("favorite", JSON.stringify([picture]));
    }
  };

  useEffect(() => {
    dispatch(getPictureDetail(id));
  }, [id, dispatch]);

  return (      
    <div className='detail-container'>
      <div className="back-button">
        <Link to="/">
          <h2>
            <i class="bi bi-arrow-left-circle"></i>
          </h2>
        </Link>
      </div>
      <div className="col-sm-6">
        <Card 
          cardPhoto={pictureDetail && pictureDetail.thumbnailUrl}
          cardText={pictureDetail && pictureDetail.title}  
          cardButton={
            <button type="button" class="btn btn-danger" onClick={() => addToFavorite(pictureDetail, pictureDetail.id)}>
              <span>Simpan</span>{" "}
              <span><i class="bi bi-heart" ></i></span>
            </button>
          }
        />
      </div>
    </div>
  )
}

export default PictureDetail;