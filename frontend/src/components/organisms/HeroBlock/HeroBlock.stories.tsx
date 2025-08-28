import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import HeroBlock from '../HeroBlock/HeroBlock';
import { TitleProps } from '@/components';

const meta: Meta<typeof HeroBlock> = {
    title: 'Organisms/HeroBlock',
    component: HeroBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        image: {
            control: { type: 'text' },
        },
        title: {
            control: { type: 'object' },
        },
        subtitle: {
            control: { type: 'object' },
        },
        talk: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus, dolor nec iaculis vestibulum, ligula urna vestibulum turpis, eu egestas magna odio et sem. In vel dui est. Donec dictum, quam at commodo pulvinar, turpis risus iaculis purus, gravida condimentum diam nulla in ipsum. Morbi felis ante, bibendum vitae sem sed, tempus aliquam ligula. Cras blandit aliquet ante, eget posuere diam. Maecenas ultrices ipsum et lacus porta facilisis. Donec et venenatis dui. Fusce mattis, sem vitae hendrerit imperdiet, enim nisi finibus ligula, eget semper eros leo eu odio. Donec tincidunt tortor augue, vel condimentum enim varius at. Morbi lacus lorem, pellentesque sed purus in, lobortis faucibus eros. Donec nulla dolor, bibendum eget scelerisque id, fermentum quis arcu. Mauris a enim commodo, gravida purus ac, porta lacus."

const titleWithColorAndRotation =
{
    level: 2 as TitleProps['level'],
    variant: "big" as TitleProps['variant'],
    children: "Bâtir",
    colors: 'text-white bg-building',
    className: "drop-shadow-3 drop-shadow-black before:-z-1",
    rotation: -5,

}

const titleWithImportantRotation =
{
    level: 2 as TitleProps['level'],
    variant: "big" as TitleProps['variant'],
    children: "Un long titre pour tester le fonctionnement",
    colors: 'text-white bg-building',
    className: "drop-shadow-3 drop-shadow-black before:-z-1",
    rotation: -6,
}

const titleWithSmallRotation =
{
    level: 2 as TitleProps['level'],
    variant: "big" as TitleProps['variant'],
    children: "Un long titre pour tester le fonctionnement",
    colors: 'text-white bg-building',
    className: "drop-shadow-3 drop-shadow-black before:-z-1",
    rotation: -2,
}

const subtitleWithColorAndRotation =
{
    level: 3 as TitleProps['level'],
    variant: "medium" as TitleProps['variant'],
    children: "Un très très long sous-titre pour voir le fonctionnement ",
    colors: 'text-black bg-alive',
    className: "drop-shadow-1 drop-shadow-black before:-z-1",
    rotation: -5,
}

const subtitleWithImportantRotation =
{
    level: 3 as TitleProps['level'],
    variant: "medium" as TitleProps['variant'],
    children: "Un contre-pouvoir tech citoyen",
    colors: 'text-black bg-white',
    className: "drop-shadow-1 drop-shadow-black before:-z-1",
    rotation: -6,
}

const subtitleWithSmallRotation =
{
    level: 3 as TitleProps['level'],
    variant: "medium" as TitleProps['variant'],
    children: "Un contre-pouvoir tech citoyen",
    colors: 'text-black bg-white',
    className: "drop-shadow-1 drop-shadow-black before:-z-1",
    rotation: -2,
}

export const Default: Story = {
    args: {
        image: 'https://picsum.photos/100/100?random=2',
        title: titleWithColorAndRotation,
        subtitle: subtitleWithColorAndRotation,
        talk: loremIpsum,
    },
};

export const LongTitresRotationFaible: Story = {
    args: {
        image: 'https://picsum.photos/100/100?random=2',
        title: titleWithSmallRotation,
        subtitle: subtitleWithSmallRotation,
        talk: loremIpsum,
    },
};

export const LongTitresRotationImportante: Story = {
    args: {
        image: 'https://picsum.photos/100/100?random=2',
        title: titleWithImportantRotation,
        subtitle: subtitleWithImportantRotation,
        talk: loremIpsum,
    },
};

export const NoSubtitle: Story = {
    args: {
        image: 'https://picsum.photos/100/100?random=2',
        title: titleWithColorAndRotation,
        talk: loremIpsum,
    },
};