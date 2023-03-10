import { http } from "../http/http";

export async function createPost(payload) {
  const res = await http.post("/post", {
    ...payload,
  });

  return res.data;
}

export async function createAttachemt(payload) {
  const res = await http.post("/post/attachment", {
    ...payload,
  });

  return res.data;
}
