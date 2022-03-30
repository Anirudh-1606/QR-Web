import React, { useState } from "react";
import "../mainTab.css";
import "./addScreen.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import firebase, { storage } from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";

//category options
const Category = [
  {
    value: "V",
    label: "Vegetarian",
  },
  {
    value: "NV",
    label: "Non-Vegetarian",
  },
];

const Courses = [
  {
    value: "starters",
    label: "Starters",
  },
  {
    value: "breads",
    label: "Breads",
  },
  {
    value: "biriyanis",
    label: "Biriyanis",
  },
  {
    value: "icecreams",
    label: "Icecreams",
  },
];

const AddScreen = () => {
  const db = firebase.firestore();
  const [cat, setCat] = useState();
  const [course, setCourse] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [descrip, setDescrip] = useState();
  const [image, setImage] = useState();
  const [isLoading, setLoading] = useState(false);

  const putUrl = (url) => {
    const data = {
      name: name,
      price: price,
      cat: cat,
      course: course,
      decription: descrip,
      image: url,
    };

    db.collection("menu")
      .doc(course.toString())
      .collection(name.toString())
      .add(data)
      .then(() => alert("menu item is posted"))
      .catch((error) => alert("error: " + error));

    setName("");
    setPrice("");
    setCat("");
    setCourse("");
    setImage("");
    setDescrip("");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const ref = storage.ref(`/images/${image.name}`);
    const uploadTask = ref.put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            putUrl(url);
            setLoading(false);
          });
      }
    );
  };

  return (
    <div className="mainTabCon">
      <div className="mainCon">
        <h2 style={{ marginBottom: "5vh" }}>Add items to your Menu here!</h2>
        <form onSubmit={onSubmitHandler}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <div
              className="colWrap"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                className="add_1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="name" style={{ marginBottom: "10px" }}>
                  Name of the Item :
                </label>
                <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="name" style={{ marginBottom: "10px" }}>
                  Price of the Item :
                </label>
                <input
                  type="number"
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>

              <div
                className="add_2"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label htmlFor="" style={{ marginBottom: "15px" }}>
                  Select your category:
                </label>
                <TextField
                  style={{ width: "280px" }}
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={cat}
                  onChange={(event) => setCat(event.target.value)}
                >
                  {Category.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <label htmlFor="" style={{ margin: "15px 0" }}>
                  Select your course:
                </label>
                <TextField
                  style={{ width: "280px" }}
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={course}
                  onChange={(event) => setCourse(event.target.value)}
                >
                  {Courses.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div
                className="add_3"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <input
                  type="file"
                  onChange={(event) => setImage(event.target.files[0])}
                  disabled={image}
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={5}
                  onChange={(event) => setDescrip(event.target.value)}
                />
                <p>your data:--</p>
                <p>{name}</p>
                <p>{price}</p>
                <p>{cat}</p>
                <p>{course}</p>
                <p>{descrip}</p>
              </div>
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddScreen;
