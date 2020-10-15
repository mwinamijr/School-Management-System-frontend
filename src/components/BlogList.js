import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const BlogList = (props) => {

const articles = props.data;
  const listItems = articles.map((article) =>
      <span>
        <MDBRow>
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>{ article.title }</strong>
            </h3>
            <p className="dark-grey-text">
              { article.content }
            </p>
            <p>
              by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
            </p>
            <MDBBtn color="primary" size="md">
              Read More
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        </span>
  );

  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recent posts
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>

          { listItems }

      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogList;