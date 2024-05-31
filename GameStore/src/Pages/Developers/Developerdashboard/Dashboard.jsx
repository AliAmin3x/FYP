import React, { useState } from "react";
import Dlayout from "../DeveloperLayout/Dlayout";
import Modal from "../../../Components/Modal/modal";
import GameTable from "../../../Components/gameTable/GameTable";
import { db, storage } from "../../../Firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import FetchData from "../../../Context/gamescontext";

function Dashboard() {
  const [gameTitle, setGameTitle] = useState("");
  const [gameDescription, setGameDescription] = useState("");
  const [gamePrice, setGamePrice] = useState(0);
  const [gameType, setGameType] = useState("");
  const [gameImages, setGameImages] = useState(null);
  const [error, setError] = useState("");
  const [gameFile, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const maxFileSize = 100 * 1024 * 1024 * 1024;

    if (selectedFile) {
      if (selectedFile.size <= maxFileSize) {
        setFile(selectedFile);
        setError("");
      } else {
        setError("File size exceeds the limit (100GB).");
      }
    } else {
      setError("Invalid file selected.");
    }
  };

  const handleUpload = () => {
    if (gameFile) {
      const uploadInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(uploadInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const types = [
    "image/png",
    "image/jpg",
    "image/svg",
    "image/gif",
    "image/jpeg",
  ];

  const gameImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setGameImages(selectedFile);
      setError("");
      console.log("File Uploaded");
    } else {
      setGameImages(null);
      console.log("File not Uploaded");
      setError(
        "Only SVG, PNG, JPG or GIF (MAX. 800x400px) types of Images are allowed"
      );
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    console.log(gameImages);

    try {
      const storageRef = ref(storage, gameImages.name);
      const uploadTask = uploadBytesResumable(storageRef, gameImages);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("snapshot->", snapshot);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (err) => console.log("Error->", err),
        async () => {
          try {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            await addDoc(collection(db, "Games"), {
              GameTitle: gameTitle,
              GamePrice: Number(gamePrice),
              GameDescription: gameDescription,
              GameType: gameType,
              GameImages: url,
            });
            setGameTitle("");
            setGamePrice(0);
            setGameDescription("");
            setGameType("");
            setGameImages(null);
            setError("");
            document.getElementById("file_input").value = "";
          } catch (err) {
            setError(err.message);
          }
        }
      );
    } catch (err) {
      console.log("err->", err);
      setError(err.message);
    }
  };

  return (
    <Dlayout>
      <div className="pt-7 px-7 flex">
        <div className="bg-lightgray w-1/5 h-screen flex justify-center rounded-lg">
          <ul className="w-full px-2 font-bold">
            <li className="bg-buttongray2 w-auto h-24 flex justify-center items-center mt-3 rounded-lg">
              <a
                href="/dashboard"
                className="text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out"
              >
                Dashboard
              </a>
            </li>

            <li className="bg-buttongray w-auto h-24 flex justify-center items-center mt-3 rounded-lg">
              <a
                href="/organization-type"
                className="text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out"
              >
                Organization
              </a>
            </li>

            <li className="bg-buttongray w-auto h-24 flex justify-center items-center mt-3 rounded-lg">
              <a
                href="/sales-report"
                className="text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out"
              >
                MyStore
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-grow ml-7 bg-lightgray rounded-lg">
          <h1 className="font-roboto text-5xl px-8 py-10 font-bold text-white">
            Developer's Dashboard
          </h1>

          <h2 className="font-roboto text-3xl px-8 py-1 font-bold text-white">
            Your Products
          </h2>
          <div className="flex justify-end mr-20 mt-20">
            <button
              className="text-white h-14 w-40 mt-5 bg-cosmicpurple hover:bg-purple2 rounded-lg font-bold transition duration-300 ease-in-out"
              onClick={openModal}
            >
              Publish Game
            </button>
          </div>
          <div>
            <GameTable />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Publish Your Game
        </h2>
        <form onSubmit={addProduct}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="gameTitle"
            >
              Game Title
            </label>
            <input
              className="rounded w-full py-2 px-3 text-white bg-darkgray leading-tight focus:outline-none"
              id="gameTitle"
              type="text"
              placeholder="Enter game title"
              onChange={(e) => setGameTitle(e.target.value)}
              value={gameTitle}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="gameTitle"
            >
              Game's Price
            </label>
            <input
              className="rounded w-full py-2 px-3 text-white bg-darkgray leading-tight focus:outline-none"
              id="gamePRICE"
              type="number"
              placeholder="Enter your Game's Price"
              onChange={(e) => setGamePrice(e.target.value)}
              value={gamePrice}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="gameDescription"
            >
              Game Description
            </label>
            <textarea
              className="rounded w-full py-2 px-3 text-white bg-darkgray  leading-tight focus:outline-none"
              id="gameDescription"
              placeholder="Enter game description"
              onChange={(e) => setGameDescription(e.target.value)}
              value={gameDescription}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="gameDescription"
            >
              Game Type
            </label>
            <input
              className="rounded w-full py-2 px-3 text-white bg-darkgray  leading-tight focus:outline-none"
              id="gameDescription"
              list="datalist-dogs"
              placeholder="Enter Your Game's Type"
              onChange={(e) => setGameType(e.target.value)}
              value={gameType}
            />
            <datalist id="datalist-dogs">
              <select name="Select Game Type">
                <option>Recommended Games</option>
                <option>Free Games</option>
                <option>Featured Games</option>
              </select>
            </datalist>
          </div>

          <div>
            <label
              class="block mb-2 text-sm font-bold text-white"
              for="file_input"
            >
              Upload files
            </label>
            <input
              class="block w-full text-sm text-white rounded-lg cursor-pointer bg-darkgray focus:outline-none"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              accept=".svg, .png, .jpg, .jpeg, .gif"
              multiple
              onChange={gameImgHandler}
            />
            <p class="mt-1 mb-2 text-sm text-white" id="file_input_help">
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold pt-2 mb-2"
              htmlFor="gameDescription"
            >
              Upload Game
            </label>
            <div className="flex flex-col items-center justify-center w-full pb-4">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-black border-dashed rounded-lg cursor-pointer bg-darkgray hover:bg-buttongray dark:border-gray-600 dark:hover:border-gray-500 transition duration-300 ease-in-out"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-50"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-50 ">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-50">
                    Any file type (MAX. 100GB)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {gameFile && (
                <div className="mt-4 w-full">
                  <p className="text-sm text-gray-200">
                    Selected file: {gameFile.name}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <button
                    className="text-black mt-4 py-2 px-4 bg-white hover:bg-gray-200 rounded-lg font-bold transition duration-300 ease-in-out"
                    onClick={handleUpload}
                  >
                    Upload
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-cosmicpurple hover:bg-purple2 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-300 ease-in-out"
              type="submit"
            >
              Publish
            </button>
          </div>
          {error && <span>{error}</span>}
        </form>
      </Modal>
    </Dlayout>
  );
}

export default Dashboard;
