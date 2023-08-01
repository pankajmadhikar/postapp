import React, { useState } from "react";
import { useEffect } from "react";
import PostsGenerator from "./PostsGenerator";
import Cart from "./Cart";
import Remove from "./Remove";
import Chat from "./chatbot/Chat";
import { Dialog } from "@mui/material";

const getlocalstoragedata = () => {
  const lists = localStorage.getItem("MyBlogs");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Main = () => {
  const [opeChatBot, setOpenChatBot] = useState(false);

  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [values, setValues] = useState(getlocalstoragedata());

  const [editData, setEditData] = useState();
  const [toggleBtn, setToggleBtn] = useState(false);

  const [openCmt, setOpenCmt] = useState(false);
  const [cmtId, setCmtId] = useState(0);
  const [cmtText, setCmtText] = useState("");
  const [cmtData, setCmtData] = useState([]);

  const [openCmtBox, setOpenCmtBox] = useState(false);
  const [envFalse, setEnvFalse] = useState(false);

  const AddEvent = () => {
    if (!name && !post) {
      alert("Plzz Add Your Product List");
    } else if (name && toggleBtn && post) {
      setValues(
        values.map((curElem) => {
          if (curElem.id === editData) {
            return { name: name, post: post };
          }
          return curElem;
        })
      );
      setPost("");
      setName("");
      setToggleBtn(false);
      setEditData(null);
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        name: name,
        post: post,
      };

      setValues([...values, newData]);
      setPost("");
      setName("");
    }
  };

  const editEvent = (index) => {
    const findData = values.find((curElem) => {
      return curElem.id === index;
    });
    setName(findData.name);
    setPost(findData.post);
    setToggleBtn(true);
    setEditData(index);
  };

  const deleteEvent = (index) => {
    const filterData = values.filter((curElem) => {
      return curElem.id !== index;
    });
    setValues(filterData);
  };

  const commentEvent = (curElem) => {
    const findForCmt = values.filter((e, i) => {
      return +e.id === +curElem.id;
    });
    console.log(findForCmt, "Find");
    setOpenCmt(true);
    setCmtId(+curElem.id);
    setName(curElem.name);
    setPost(curElem.post);
  };

  const addComment = (id) => {
    if (name && post) {
      setValues(
        values.map((curElem) => {
          if (+curElem.id === id) {
            setCmtData([...cmtData, cmtText]);
            return {
              id: new Date().getTime().toString(),
              name: name,
              post: post,
              comment: cmtData,
            };
          }
          return curElem;
        })
      );
      setPost("");
      setName("");
      setCmtText("");
      setToggleBtn(false);
      setEditData(null);
      setOpenCmt(false);
    }
  };

  const openComment = (id) => {
    setOpenCmtBox(id);
  };

  useEffect(() => {
    localStorage.setItem("MyBlogs", JSON.stringify(values));
  }, [values]);

  return (
    <div className="body">
      <div className="creator-body flex align-center justify-center">
        <div className="todo-creator flex align-center justify-evenly flex-column">
          <PostsGenerator
            post={post}
            setPost={setPost}
            name={name}
            setName={setName}
            AddEvent={AddEvent}
            toggleBtn={toggleBtn}
          />
        </div>
      </div>

      <div className="todo-content ">
        {values.map((curElem, i) => {
          let arrayComments = curElem.comment;
          // console.log(curElem.comment, "arrayCmt");
          return (
            <Cart
              key={i}
              arrayComments={arrayComments}
              curElem={curElem}
              setEnvFalse={setEnvFalse}
              openCmt={openCmt}
              cmtId={cmtId}
              setCmtText={setCmtText}
              cmtText={cmtText}
              addComment={addComment}
              openComment={openComment}
              openCmtBox={openCmtBox}
              editEvent={editEvent}
              deleteEvent={deleteEvent}
              commentEvent={commentEvent}
              setValues={setValues}
            />
          );
        })}
      </div>
      <div className="chat-with-us-parent">
        <button className="chat-btn" onClick={() => setOpenChatBot(true)}>
          Chat with us <i className="fa-regular fa-comments"></i>
        </button>
      </div>
      <Remove setValues={setValues} />
      <Dialog
        open={opeChatBot}
        onClose={() => setOpenChatBot(false)}
        // scroll="none"
      >
        <Chat />
      </Dialog>
    </div>
  );
};

export default Main;
