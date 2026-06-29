import clsx from 'clsx';

function getYoutubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})(?:[?&]|$)/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})(?:[?&]|$)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function isShortsUrl(url: string): boolean {
  return /youtube\.com\/shorts\//.test(url);
}

export type BannerVideoProps = {
  video?: string;
  url?: string;
  altVideo?: string;
  format?: 'paysage' | 'portrait';
  className?: string;
};

const BannerVideo: React.FC<BannerVideoProps> = ({
  video,
  url,
  altVideo,
  format,
  className,
  ...props
}) => {
  const resolvedFormat = format ?? (url && isShortsUrl(url) ? 'portrait' : 'paysage');

  if (url) {
    const videoId = getYoutubeVideoId(url);
    if (!videoId) return null;

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className={clsx('mx-auto shadow-lg w-fit', className)} {...props}>
        <iframe
          className={clsx(
            'max-w-full',
            resolvedFormat === 'paysage' ? 'w-[560px] h-[315px]' : 'w-[280px] h-[360px]',
          )}
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  if (!video) {
    return null;
  }

  return (
    <div className={clsx('mx-auto shadow-lg w-fit', className)} {...props}>
      <div
        className={clsx(
          'max-w-full',
          resolvedFormat === 'paysage' ? 'w-[560px] h-[315px]' : 'w-[280px] h-[360px]',
        )}
        dangerouslySetInnerHTML={{ __html: video }}
      />
    </div>
  );
};

export default BannerVideo;
