import { useEffect, useState } from "react";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const url = "http://localhost:8080/note/get-all";

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setNotes(result);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return { notes };
};

export default useNotes;
