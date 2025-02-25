import { Typography } from "@web/libs/components/core/typography/typography";
import { FC } from "react";

interface VideoCardProps {
  title: string;
  videoId: string;
}

export const VideoCard: FC<VideoCardProps> = ({ title, videoId }) => (
  <div className="rounded-lg overflow-hidden bg-zinc-900">
    <div className="relative pb-[56.25%]">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
      />
    </div>
    <div className="p-4">
      <Typography variant="body">{title}</Typography>
    </div>
  </div>
);
