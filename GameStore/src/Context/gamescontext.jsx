import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

import { db } from '../Firebase/firebase';
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

function FetchData() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

				const Gamesdata = []

				// const docRef = doc(db, "Games", "SF");
				const q = query(collection(db, "Games"))

				const querySnapshot = await getDocs(q);
				

        // Extract relevant data and update state
        querySnapshot.forEach(doc => {
					const docData = doc.data()
					const dataObject = {
						id: docData.id,
						GameTitle: docData.GameTitle,
						GameDescription: docData.GameDescription,
						GamePrice: docData.GamePrice,
						GameImages: docData.GameImages,
						GameType: docData.GameType
					}
					Gamesdata.push(dataObject)
				});
        setGameData(Gamesdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once after component mount

  return (
    <div>
      <h1>Game Data</h1>
      <ul>
        {gameData.map((game, index) => (
          <li key={index}>
            <h2>{game.GameTitle}</h2>
            <p>{game.GameDescription}</p>
            <p>Price: ${game.GamePrice}</p>
						<p>{game.GameType}</p>
            {/* Render GameImages as needed */}
						{game.GameImages}
            {/* {game.GameImages && game.GameImages.map((image, imgIndex) => (
              <img key={imgIndex} src={image} alt={`Image ${imgIndex}`} />
            ))} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
