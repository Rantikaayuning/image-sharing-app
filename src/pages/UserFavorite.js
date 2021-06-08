import React, {useEffect, useState} from 'react';
import { Card } from "../components/Card";

const UserFavorite = () => {
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("favorite")) {
      setFavorite(JSON.parse(localStorage.getItem("favorite")));
    }
  }, []);

  const handleRemove = (id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite = [...favorite.filter(item => item.id !== id)];
    localStorage.setItem("favorite", JSON.stringify(favorite));
    setFavorite(favorite);
    window.location.reload();
  };

  return (
    <div className="favorite-container">
      <h5>Your Favorite</h5>
      <br/>
      <div className="container-md">
        {favorite && favorite.map((item, index) => (
          <div class="col-sm-3" key={index}>
            <Card
              cardPhoto={item.thumbnailUrl}
              cardText={item.title}
              cardButton={
                <i class="bi bi-trash" onClick={() => handleRemove(item.id)}></i>
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserFavorite;