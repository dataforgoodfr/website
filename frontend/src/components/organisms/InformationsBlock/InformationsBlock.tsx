import { Title, TitleProps } from '@/components';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export type InformationsBlockProps = {
    title?: string;
    titleLevel?: TitleProps['level'];
    informations: {
        title: string;
        titleLevel?: TitleProps['level'];
        text: {
            info: string;
            ctaLink?: string;
        }[];
    }[];
    className?: string;
};

const TalksBlock: React.FC<InformationsBlockProps> = ({
    title,
    titleLevel = 2,
    informations,
    className,
    ...props
}) => {
    if (!informations.length) {
        return null;
    }

    return (
        <div
            className={clsx('container', className)}
            {...props}
        >
            {title && (
                <Title variant="medium" className="mb-md text-start" level={titleLevel}>
                    {title}
                </Title>
            )}

            <div className="flex flex-col items-start">
                {informations.map((information, index) => (
                    <>
                        <Title variant='small' className='mb-xs' level={information.titleLevel ?? 3}>
                            {information.title}
                        </Title>
                        <p className='font-normal text-md font-medium font-tertiary relative'>
                            {information.text.map((info) => {
                                if(info.ctaLink) {
                                    return (<span><Link className="underline" href={info.ctaLink}>{info.info}</Link>&nbsp;</span>)
                                }
                                return <span>{info.info}&nbsp;</span>
                            })}
                        </p>
                        {index !== informations.length - 1 &&
                            <Image loading="lazy" src="/images/separate.svg" alt="" width={200} height={10} className="mt-sm mb-sm w-full h-auto" />
                        }
                    </>
                ))}
            </div>
        </div>
    );
};

export default TalksBlock;
