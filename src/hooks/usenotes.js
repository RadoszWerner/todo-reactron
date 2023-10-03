import { useEffect, useState } from "react";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const url = "http://localhost:8080/note/get-all";

  const fetchNotes = async () => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      setNotes(result);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const refetchNotes = () => {
    fetchNotes();
  };

  return { notes, refetchNotes };
};

export default useNotes;
