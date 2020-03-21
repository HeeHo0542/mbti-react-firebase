import React from "react";
import firebase from "../config/firebase-config";

const Test = () => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  const testRef = db
    .collection("test")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(doc => {
        console.log(doc.data());
      });
    });

  console.log(testRef);
  return <div>Test</div>;
};

export default Test;
