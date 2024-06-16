import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import { selectLoading, selectError } from "./redux/contactsSlice.js";
import { fetchContacts } from "./redux/contactsOps.js";

export default function App() {
  const dispatch = useDispatch();

  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error...</p>}
        <ContactList />
      </div>
    </>
  );
}
