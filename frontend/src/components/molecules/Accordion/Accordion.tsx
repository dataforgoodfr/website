import type { PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { ArrowIcon, Title } from '@/components';
import {
  Accordion as AccordionUI,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type AccordionItemData = {
  id: string;
  title: string;
  content: ReactNode;
};

export type AccordionProps = PropsWithChildren<{
  title?: string;
  items: AccordionItemData[];
  className?: string;
  titleClassName?: string;
  defaultValue?: string;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
}>;

const Accordion: React.FC<AccordionProps> = ({
  title,
  items,
  className,
  titleClassName,
  defaultValue,
  type = 'single',
  collapsible = true,
}) => {
  return (
    <div className={clsx('w-full', className)}>
      {title && (
        <>
          <Title level={2} variant="medium" className={clsx('mb-4', titleClassName)}>
            {title}
          </Title>
          <div className="mb-6">
            <Image
              src="/images/separate.svg"
              alt=""
              width={1322}
              height={7}
              className="w-full h-auto"
            />
          </div>
        </>
      )}

      <AccordionUI
        {...(type === 'single' 
          ? { type: 'single' as const, collapsible, defaultValue }
          : { type: 'multiple' as const }
        )}
        className="w-full"
      >
        {items.map((item, index) => (
          <div key={item.id}>
            <AccordionItem value={item.id} className="border-none">
              <AccordionTrigger className="flex items-center justify-between w-full py-4 text-left hover:no-underline group">
                <span className="text-black font-medium text-base">
                  {item.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                {item.content}
              </AccordionContent>
            </AccordionItem>
            
            {index < items.length - 1 && (
              <div className="my-2">
                <Image
                  src="/images/separate.svg"
                  alt=""
                  width={1322}
                  height={7}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        ))}
      </AccordionUI>
    </div>
  );
};

export default Accordion;
