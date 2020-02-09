import Axios from "axios";

const client = Axios.create({});

export interface Classified {
  id: string;
  title: string;
  game: string;
  continent: string;
  platform: string;
  createdAt: string;
}

export async function getClassifieds(): Promise<Classified[]> {
  const result = await client.get("http://localhost:3001/classifieds");

  return result.data;
}
