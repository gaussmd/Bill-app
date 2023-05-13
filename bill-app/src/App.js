import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main
        className="m-5 p-5  2xl:max-w-3xl 2xl:max-auto
    bg-white rounded shadow "
      >
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails />
            <ClientDetails />
            <Dates />

            <Table />

            <Notes />

            <Footer />
            <button 
            className=" mt-5 bg-blue-500 text-white
            font-bold py-2 px-8 rounded shadow
            border-2 border-blue-500 
            hover:bg-transparent 
            hover:text-blue-500 
            transition-all duration-300"
            onClick={()=>setShowInvoice(false)}
            >Edit Info</button>
          </div>
        ) : (
          <>
       <div className="flex flex-col justify-center">

       <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter your name"
            autoComplete="off"
          />
          <button className="bg-blue-500 text-white
          font-bold py-2 px-8 rounded shadow
          border-2 border-blue-500 
          hover:bg-transparent 
          hover:text-blue-500 
          transition-all duration-300"
          onClick={()=>setShowInvoice(true)}
          >Bill Preveiw</button>
       </div>
          
          </>
        )}
      </main>
    </>
  );
};

export default App;
