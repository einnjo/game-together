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

export async function getClassified(id: string): Promise<Classified> {
  const result = await client.get(`http://localhost:3001/classifieds/${id}`);

  return result.data;
}

export async function createClassified(params: {
  title: string;
  body: string;
}) {
  const result = await client.post("http://localhost:3001/classifieds", params);

  return result.data;
}

export async function commentOnClassified(params: {
  classifiedId: string;
  comment: string;
}) {
  const result = await client.post(
    `http://localhost:3001/classifieds/${params.classifiedId}/comments`,
    { content: params.comment }
  );

  return result.data;
}
