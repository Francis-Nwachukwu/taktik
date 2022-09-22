import type { NextPage } from "next";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import { BASE_URL } from "../utils";

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  const router = useRouter();
  const { topic } = router.query;

  return (
    <div className="flex flex-col gap-10 videos h-full">
      {topic && (
        <div>
          <p className="font-bold capitalize text-gray-600 text-sm">
            Showing result for topic "{topic}"{" "}
          </p>
        </div>
      )}
      {videos.length ? (
        videos.map((video) => <VideoCard post={video} key={video._id} />)
      ) : (
        <NoResults text={"No videos"} />
      )}
    </div>
  );
};

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = null;
  if (topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    response = await axios.get(`${BASE_URL}/api/post`);
  }

  return {
    props: {
      videos: response.data,
    },
  };
};

export default Home;
