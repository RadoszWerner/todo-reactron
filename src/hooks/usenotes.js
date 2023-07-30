import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useNotes = (url) => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = useCallback(async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setNotes(response.data.notes);
    } catch (err) {
      console.error(err);
    }
  }, [url]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);
  return { notes };
};

export default useNotes;
