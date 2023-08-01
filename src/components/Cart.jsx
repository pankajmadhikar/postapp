import React from "react";

const Cart = ({
  curElem,
  setEnvFalse,
  openCmt,
  cmtId,
  setCmtText,
  cmtText,
  addComment,
  openComment,
  openCmtBox,
  editEvent,
  deleteEvent,
  commentEvent,
  setValues,
  arrayComments,
}) => {
  return (
    <div
      className="product-content"
      key={curElem.id}
      onClick={() => setEnvFalse(false)}>
      <div>
        <p className="curElem"> {curElem.post} </p>
        <b className="curElem"> {curElem.name} </b>
        <div>
          {openCmt && cmtId === +curElem.id ? (
            <div className="cmt-creator">
              <input
                type="text"
                value={cmtText}
                onChange={(e) => setCmtText(e.target.value)}
                name=""
                placeholder="comment..."
                id=""
              />
              <i
                className="fa-regular fa-comment add-cmt-btn"
                onClick={() => addComment(+curElem.id)}></i>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr />
      <div>
        <p
          style={{ cursor: "pointer" }}
          className=" d-flex justify-content-between"
          onClick={() => openComment(+curElem.id)}>
          <span> Comments </span>{" "}
          <span>
            {openCmt ? (
              <i className="fa-solid fa-angle-down"></i>
            ) : (
              <i className="fa-solid fa-angle-up"></i>
            )}
          </span>
        </p>
        {arrayComments &&
          arrayComments.map((e, i) => {
            return (
              <div className="comment-box">
                {openCmtBox === +curElem.id && <p key={i}>{e}</p>}
              </div>
            );
          })}
      </div>
      <div className="cart-btns">
        <i
          className="fa-solid fa-pen-to-square edit-btn"
          onClick={() => editEvent(curElem.id)}></i>
        <i
          className="fa-regular fa-trash-can delete-btn"
          onClick={() => deleteEvent(curElem.id)}></i>
        <i
          className="fa-sharp fa-regular fa-comments "
          onClick={() => commentEvent(curElem)}></i>
      </div>
    </div>
  );
};

export default Cart;
