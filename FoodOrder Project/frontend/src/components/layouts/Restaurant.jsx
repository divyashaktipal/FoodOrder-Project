import React from "react";

export default function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src="https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/1f840b33-7507-497d-bffb-80f1ca296260_PMClassicHome.jpg?ver=V0.0.1"
          alt="Domino's Pizza"
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Dominos Pizza</h5>
          <p className="rest_address">123 Street, Place, City - 0000, State</p>

          <div className="rating-outer">
            <div className="rating-inner">
              <spna className="no_of_reviews">140 reviews</spna>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
