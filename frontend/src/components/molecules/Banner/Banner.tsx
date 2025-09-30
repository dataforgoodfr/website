import clsx from 'clsx';

export type BannerProps = {
  content?: string[];
  className?: string;
};

const Banner: React.FC<BannerProps> = ({
  content,
  className,
  ...props
}) => {

  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx(
        'flex justify-center items-center md:min-h-[700px] mask-papper text-white bg-black',
        className,
      )}
      {...props}
    >
      <div className="container-lg whitespace-pre-wrap py-10 prose prose--big text-center lead">
        {content.map((paragraph, index) => ((<div dangerouslySetInnerHTML={{ __html: paragraph }} key={index} />)))}
      </div>
    </div>
  );
};

export default Banner;
