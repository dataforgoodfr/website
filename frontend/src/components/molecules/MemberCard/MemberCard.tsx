import clsx from 'clsx';
import Image from 'next/image';
import { TiltedTitle } from '@/components';

export type MemberCardProps = {
  name: string;
  role: string;
  image?: string;
  className?: string;
};

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  image,
  className,
  ...props
}) => {
  if (!name) {
    return null;
  }

  return (
    <div
      className={clsx(
        'relative pl-2 w-[160px] h-[209px]',
        className,
      )}
      {...props}
    >
      {image && <Image src={image} alt="" className="block w-full h-full object-cover bg-blue shadow-base" loading="lazy" width={160} height={209} />}
      <div className="absolute bottom-3 left-0 w-full flex flex-col gap-2 items-start">
        <TiltedTitle level="p" variant="x-small" rotation={-6.7} className="drop-shadow-1 drop-shadow-black !min-w-0">{name}</TiltedTitle>
        <p className="px-1 text-xs text-black bg-white shadow-base -rotate-3">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
