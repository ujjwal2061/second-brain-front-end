import  { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router"; 
import Loading from "@/components/ui/loading.view";
import Error from "@/components/ui/error-view";
import { Card , type  Brain } from "@/components/ui/card-custom";

interface Content {
  _id: string;
  title: string;
  link: string;
  brain: Brain;
  tags: string[];
  userId: { username: string };
  createdAt: string;
}

export default function Page() {
  const { shareLink } = useParams<{ shareLink: string }>();
  const [data, setData] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/brain/user/share-content/${shareLink}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
          //@ts-ignore
        setData(res.data.content);
      } catch (err) {
        console.error(err);
        setError("Failed to load shared content ❌");
      } finally {
        setLoading(false);
      }
    };

    if (shareLink) {
      fetchContent();
    }
  }, [shareLink]);

  if (loading) return <Loading text="Fetching shared content..." size={50} />;
  if (error) return <Error message={error} onRetry={() => window.location.reload()} />;
  if (!data) return <Error message="Content not found ❌" />;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Card
        key={data._id}
        title={data.title}
        link={data.link}
        brain={data.brain}
        tags={data.tags}
        username={data.userId?.username || "Unknown"}
        upload={data.createdAt}
      />
    </div>
  );
}
