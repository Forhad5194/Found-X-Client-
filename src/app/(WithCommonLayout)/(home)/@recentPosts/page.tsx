import { Button } from "@nextui-org/button";
import Link from "next/link";
import { getRecentPosts } from "@/src/services/RecentPost/indexx";
import { Card } from "@nextui-org/card";
import { IPost } from "@/src/types";
import Container from "@/src/components/ul/container";
import RecentCard from "@/src/components/ul/Crad";
export default async function RecentPosts() {

    const { data: posts } = await getRecentPosts()




    return (
        <Container>
            <div className="section-title my-8">
                <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
                <p className="text-center">
                    A list of items that have been recently found and reported.
                </p>

                <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
                {
                    posts.map( (post:IPost)=> <RecentCard key={post._id}  post={post} />)
                }
                </div>

            </div>
            <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">

            </div>
            <div className="flex justify-center">
                <Button className="rounded-md bg-default-900 text-default" size="md">
                    <Link href="/find-items">See All</Link>
                </Button>
            </div>
        </Container>
    );
}