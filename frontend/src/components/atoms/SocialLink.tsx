import clsx from 'clsx';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

type SocialLinkProps = {
  href: string;
  icon?: React.ReactNode;
  label: string;
  className?: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon,
  label,
  className,
}) => {
  return (
    <Link
      className={clsx(
        'flex justify-center items-center w-10 h-10 border border-black transition-colors rounded-full bg-white text-black hover:bg-black hover:text-white',
        className,
      )}
      href={href}
      aria-label={label}
    >
      {icon ?? <Instagram className="w-5 h-5" />}
    </Link>
  );
};

export default SocialLink;
