import { Title, TitleProps } from '@/components';
import ProjectImpactCard, { ProjectImpactCardProps } from '@/components/molecules/ProjectImpactCard/ProjectImpactCard';
import clsx from 'clsx';
import Confetti from 'react-confetti'

export type ProjectImpactBlockProps = {
  title?: string;
  titleLevel?: TitleProps['level'];
  impacts: ProjectImpactCardProps[];
  className?: string;
};

const ProjectImpactBlock: React.FC<ProjectImpactBlockProps> = ({
  title,
  titleLevel = 2,
  impacts,
  className,
  ...props
}) => {
  if (impacts.length !== 3) {
    return null;
  }

  return (
    <div
      className={clsx('container relative', className)}
      {...props}
    >
      <Confetti
        width={typeof window !== 'undefined' ? window.innerWidth : 1200}
        height={typeof window !== 'undefined' ? window.innerHeight : 800}
        recycle={true}
        numberOfPieces={200}
        gravity={0.05}
        friction={0.99}
        wind={0}
        tweenDuration={5000}
        colors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
        confettiSource={{
          x: typeof window !== 'undefined' ? window.innerWidth / 2 : 600,
          y: typeof window !== 'undefined' ? window.innerHeight / 2 : 400,
          w: 0,
          h: 0,
        }}
      />


      {title && <Title variant="medium" className="mb-md" level={titleLevel} hasSeparator>
        {title}
      </Title>}

      <div className="flex flex-col gap-md">
        <div className='flex md:grid md:grid-col-2 md:grid-row-1'>
          <ProjectImpactCard
            value={impacts[0].value}
            text={impacts[0].text}
            className={'max-w-[600px] md:col-start-2'} />
        </div>
        <div className='flex flex-col md:flex-row md:gap-md md:items-end md:justify-evenly'>
          <ProjectImpactCard
            value={impacts[1].value}
            text={impacts[1].text}
            className='max-w-[500px] pb-md' />
          <ProjectImpactCard
            value={impacts[2].value}
            text={impacts[2].text}
            className='max-w-[600px]' />
        </div>
      </div>
    </div>
  );
};

export default ProjectImpactBlock;
