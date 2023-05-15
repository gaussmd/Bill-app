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
  const[name,setName] =useState("");
  const[address,setAddress] =useState("");
  const[email,setEmail] =useState("");
  const[phone,setPhone] =useState("");
  const[bankName,setBankName] =useState("");
  const[bankAccount,setBankAccount] =useState("");
  const[website,setWebsite] =useState("");
  const[clientName,setClientName] =useState("");
  const[clientAddress,setClientAddress] =useState("");
  const[billNumber,setBillNumber] =useState("");
  const[billDate,setBillDate] =useState("");
  const[dueDate,setDueDate] =useState("");
  const[notes,setNotes] =useState("");
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
    {/* name,address, email,phone,bank name,
    bank account number,client website name,
    client name,client address
    bill number,bill date,due date,notes
    */}
      <main
        className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl 
    xl:max-w-4xl bg-white rounded shadow "
      >
        {showInvoice ? (
          <div>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address}/>
            <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
            <Dates billNumber={billNumber} billDate={billDate} dueDate={dueDate} />

            <Table />

            <Notes notes={notes}/>

            <Footer name={name} address={address} website={website} email={email}
            phone={phone} bankAccount={bankAccount} bankName={bankName} />
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
       <article className="grid grid-cols-2">
          <div>
          <label htmlFor="name"> Your Full Name</label>
       <input
            type="text"
            name="text"
            id="name"
            placeholder="Enter your name"
            autoComplete="off"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          </div>
           <div>
           <label htmlFor="address">Enter your Address</label>
       <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter your Address"
            autoComplete="off"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />
           </div>
       </article>
        <label htmlFor="email">Enter your Email</label>
       <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            autoComplete="off"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
            <label htmlFor="website">Enter your Website</label>
       <input
            type="url"
            name="website"
            id="website"
            placeholder="Enter your Website"
            autoComplete="off"
            value={website}
            onChange={(e)=>setWebsite(e.target.value)}
          />
           <label htmlFor="phone">Enter your Phone</label>
       <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            autoComplete="off"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
            <label htmlFor="bankName">Enter your Bank Name</label>
       <input
            type="text"
            name="bankName"
            id="bankName"
            placeholder="Enter your Bank Name"
            autoComplete="off"
            value={bankName}
            onChange={(e)=>setBankName(e.target.value)}
          />
                  <label htmlFor="bankAccoount">Enter your Bank Account Number</label>
       <input
            type="text"
            name="bankAccoount"
            id="bankAccoount"
            placeholder="Enter your Bank Account Number"
            autoComplete="off"
            value={bankAccount}
            onChange={(e)=>setBankAccount(e.target.value)}
          />
         <label htmlFor="clientName">Enter your Client's Name</label>
       <input
            type="text"
            name="clientName"
            id="clientName"
            placeholder="Enter your Client's Name"
            autoComplete="off"
            value={clientName}
            onChange={(e)=>setClientName(e.target.value)}
          />
             <label htmlFor="clientAddress">Enter your Client Address</label>
       <input
            type="text"
            name="clientAddress"
            id="clientAddress"
            placeholder="Enter your Client Name"
            autoComplete="off"
            value={clientAddress}
            onChange={(e)=>setClientAddress(e.target.value)}
          />
             <label htmlFor="billNumber">Enter your Bill Number</label>
       <input
            type="text"
            name="billNumber"
            id="billNumber"
            placeholder="Enter your Bill Number"
            autoComplete="off"
            value={billNumber}
            onChange={(e)=>setBillNumber(e.target.value)}
          />
          <label htmlFor="billDate">Enter your Bill Date</label>
       <input
            type="date"
            name="billDate"
            id="billDate"
            placeholder="Enter your Bill Date"
            autoComplete="off"
            value={billDate}
            onChange={(e)=>setBillDate(e.target.value)}
          />
                   <label htmlFor="dueDate">Enter your Due Date</label>
       <input
            type="date"
            name="dueDate"
            id="dueDate"
            placeholder="Enter your Due Date"
            autoComplete="off"
            value={dueDate}
            onChange={(e)=>setDueDate(e.target.value)}
          />
          <label htmlFor="notes">Additional Notes</label>
          <textarea name="notes" id="notes" cols="30" rows="10"
          placeholder="Notes For the clients"
          value={notes} onChange={(e)=>setNotes(e.target.value)}>


          </textarea>
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
