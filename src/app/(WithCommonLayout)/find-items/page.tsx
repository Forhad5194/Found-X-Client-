
import Container from "@/src/components/ul/container";
import Post from "@/src/components/ul/Post";
import axiosInstance from "@/src/lib/axiosInstance";
import { IPost } from "@/src/types";

export default async function FoundItems() {
  const { data } = await axiosInstance.get(`/items`);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => < Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
}