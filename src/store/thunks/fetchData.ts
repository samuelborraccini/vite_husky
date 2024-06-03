import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchData = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get<Data[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return res.data;
});

export { fetchData };
