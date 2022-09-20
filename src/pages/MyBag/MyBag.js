import React from "react";

const MyBag = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <h3 className="text-bolder">My Bag</h3>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-7"></div>
          <div className="col-md-5">test</div>
        </div>
      </div>
    </>
  );
};

export default MyBag;
