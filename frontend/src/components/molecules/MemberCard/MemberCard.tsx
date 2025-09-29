import clsx from 'clsx';
import Image from 'next/image';
import { TiltedTitle } from '@/components';
import Link from 'next/link';

export type MemberCardProps = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  className?: string;
};

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  image,
  linkedin,
  className,
  ...props
}) => {
  if (!name) {
    return null;
  }

  const Card = (
    <div
      className={clsx(
        'relative pl-2 w-[240px] h-[315px]',
        className,
      )}
      {...props}
    >
      {image && <Image src={image} alt="" className="block w-full h-full object-cover bg-blue shadow-lg" loading="lazy" width={240} height={315} />}
      <div className="absolute bottom-3 left-0 w-full flex flex-col gap-2 items-start">
        <TiltedTitle level="p" variant="x-small" rotation={-6.7} className="drop-shadow-1 drop-shadow-black !min-w-0">{name}</TiltedTitle>
        <p className="px-1 text-xs text-black bg-white shadow-base -rotate-3">{role}</p>
      </div>
    </div>
  );

  return (
    linkedin 
    ? (<Link href={linkedin} className="block">
      {Card}
    </Link>) 
    : Card
  );
};

export default MemberCard;
