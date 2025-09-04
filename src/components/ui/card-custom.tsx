import { Share2Icon, User2Icon } from "lucide-react";
import { Twitter, Youtube, Music } from "lucide-react";
import { useEffect } from "react";

export type Brain = "twitter" | "youtube" | "spotify";

interface CardProps {
  title: string;
  link: string;
  brain: Brain;
  tags: string[];
  username: string;
  upload: string;
}

export function Card({ title, link, brain, tags, username, upload }: CardProps) {
  useEffect(() => {
    if (brain === "twitter" && (window as any).twttr) {
      (window as any).twttr.widgets.load();
    }
  }, [brain, link]);
  // YouTube embed URL conversion from stackOverflow
  function getYoutubeEmbedUrl(url: string) {
    const short = url.match(/youtu\.be\/([^?]+)/);
    if (short) return `https://www.youtube.com/embed/${short[1]}`;
    const long = url.match(/v=([^&]+)/);
    if (long) return `https://www.youtube.com/embed/${long[1]}`;
    return url;
  }

  return (
    <div
      className={`bg-white   min-w-80 max-rounded-lg border border-gray-200  w-full h-full  rounded-xl  transition-shadow duration-200`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {brain === "twitter" && <Twitter size={20} className="text-blue-500 flex-shrink-0" />}
          {brain === "youtube" && <Youtube size={20} className="text-red-500 flex-shrink-0" />}
          {brain === "spotify" && <Music size={20} className="text-green-500 flex-shrink-0" />}
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight">
            {title}
          </h3>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          aria-label="Open link">
          <Share2Icon size={16} />
        </a>
      </div>
      <div className="p-4 space-y-3">
        {brain === "youtube" && (
          <div className="h-54 w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full   h-full"
              src={getYoutubeEmbedUrl(link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        {brain === "twitter" && (
          <div className="w-full">
            <blockquote className="twitter-tweet" data-theme="light">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        )}
        {brain === "spotify" && (
          <div className="w-full h-full   rounded-lg overflow-hidden">
            <iframe
              className="w-full "
              src={link.replace("open.spotify.com", "open.spotify.com/embed")}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex  flex-col gap-2">
          <div className="flex flex-wrap">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex m-1  items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-end gap-2 items-center text-sm text-gray-500">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 ">
              <User2Icon size={16} /> {username}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 ">
              {new Date(upload).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
