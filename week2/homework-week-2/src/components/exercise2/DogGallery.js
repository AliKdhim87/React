import React, { useState, useEffect } from "react";
import DogPhoto from "./DogPhoto";
import Spinner from "../layout/Spinner";
import Button from "../exercise2/Button";
import Error from "../layout/Error";
const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasErorr, setHasErorr] = useState(false);

  const getDogPhoto = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://dog.ceo/api/breeds/image/random/24");
      const data = await res.json();
      setDogPhotos(data);
      setLoading(false);
    } catch (e) {
      setHasErorr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDogPhoto();
    // eslint-disable-next-line
  }, []);
  if (hasErorr) return <Error />;
  if (loading) return <Spinner />;

  return (
    <section className=' mt-3'>
      <Button getDogPhoto={getDogPhoto} />
      <div className='row'>
        {dogPhotos.message.map((dogPhoto, index) => (
          <DogPhoto dogPhoto={dogPhoto} key={index} />
        ))}
      </div>
    </section>
  );
};
export default DogGallery;
