import React from "react";

const DogPhoto = ({ dogPhoto }) => {
  return (
    <div className='col-lg-3 mb-2'>
      <img src={dogPhoto} alt='DogPhoto' width='100%' height='250px' />
    </div>
  );
};
export default DogPhoto;
