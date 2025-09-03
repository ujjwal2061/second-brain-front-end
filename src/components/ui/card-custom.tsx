import { Share2Icon } from "lucide-react";
import { Twitter, Youtube } from "lucide-react";

type IconCategory = "twitter" | "youtube";
type Brain = "twitter" | "youtube";

interface CardProps {
  title: string;
  link: string;
  type: Brain;
  category: IconCategory;
  tags: string;
}

export function Card({ title, link, type, category, tags }: CardProps) {
  // YouTube embed URL conversion from stackOverflow
  function getYoutubeEmbedUrl(url: string) {
    const short = url.match(/youtu\.be\/([^?]+)/);
    if (short) return `https://www.youtube.com/embed/${short[1]}`;
    const long = url.match(/v=([^&]+)/);
    if (long) return `https://www.youtube.com/embed/${long[1]}`;
    return url;
  }

  return (
    <div className="bg-white  min-h-48 min-w-72 max-wrounded-lg border border-gray-200  w-full  rounded-xl  transition-shadow duration-200">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {category === "twitter" && (
            <Twitter size={20} className="text-blue-500 flex-shrink-0" />
          )}
          {category === "youtube" && (
            <Youtube size={20} className="text-red-500 flex-shrink-0" />
          )}
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight">
            {title}
          </h3>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          aria-label="Open link"
        >
          <Share2Icon size={16} />
        </a>
      </div>
      <div className="p-4 space-y-3">
        {type === "youtube" && (
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src={getYoutubeEmbedUrl(link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        {type === "twitter" && (
          <div className="w-full">
            <blockquote className="twitter-tweet" data-theme="light">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
            {tags}
          </span>
        </div>
      </div>
    </div>
  );
}
