import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectPresentation, { ProjectPresentationProps } from './ProjectPresentation';

const meta: Meta<typeof ProjectPresentation> = {
    title: 'Organisms/ProjectPresentation',
    component: ProjectPresentation,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Un composant qui affiche un bloc de talks avec un titre optionnel et une liste de cartes de talks.',
            },
        },
    },
    argTypes: {
        name: {
            description: 'Nom du projet',
            control: { type: 'text' },
        },
        titleLevel: {
            description: 'Niveau du titre (h1, h2, h3)',
            control: { type: 'select' },
            options: [1, 2, 3],
        },
        summary: {
            description: 'Résumé du projet',
            control: { type: 'text' },
        },
        tags: {
            description: 'Tags du projet',
            control: { type: 'object' },
        },
        description: {
            description: 'Description projet',
            control: { type: 'text' },
        },
        association: {
            description: 'Association liée au projet',
            control: { type: 'object' },
        },
        className: {
            description: 'Classes CSS personnalisées',
            control: { type: 'text' },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Données de test pour les projets
const project = {
    name: 'Trawl Watch',
    summary: 'TrawlWatch est un outil de surveillance en temps réel des navires de pêche industrielle dans les aires marines protégées pour documenter et combattre la pêche industrielle dans ces zones sensibles.',
    description: [
        "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L’avion de Bernard » qui suit l’activité des jets privés.",
        "La plateforme suit les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche dans des zones maritimes protégées (AMP) à partir de données GPS récupérées (via antennes satellites et/ou terrestres)",
        "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans.",
        "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans."
    ],
    tags: [
        {
            "label": "Saison 12",
            "type": "temporal" as 'temporal' | 'subject'
        },
        {
            "label": "En cours",
            "type": "temporal" as 'temporal' | 'subject'
        },
        {
            "label": "JJ/MM/AAAA - JJ/MM/AAAA",
            "type": "temporal" as 'temporal' | 'subject'
        },
        {
            "label": "Climat et biodiversité",
            "type": "subject" as 'temporal' | 'subject'
        },
        {
            "label": "Outils",
            "type": "subject" as 'temporal' | 'subject'
        },
    ],
    association: {
        logo: 'https://picsum.photos/400/300?random=1',
        altLogo: 'assoLogo',
        summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
    }
};

export const Default: Story = {
    args: project
};

export const NoTagsTemporal: Story = {
    args: {
        name: 'Trawl Watch',
        summary: 'TrawlWatch est un outil de surveillance en temps réel des navires de pêche industrielle dans les aires marines protégées pour documenter et combattre la pêche industrielle dans ces zones sensibles.',
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L’avion de Bernard » qui suit l’activité des jets privés.",
            "La plateforme suit les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche dans des zones maritimes protégées (AMP) à partir de données GPS récupérées (via antennes satellites et/ou terrestres)",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans.",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans."
        ],
        tags: [
            {
                "label": "Climat et biodiversité",
                "type": "subject" as 'temporal' | 'subject'
            },
            {
                "label": "Outils",
                "type": "subject" as 'temporal' | 'subject'
            },
        ],
        association: {
            logo: 'https://picsum.photos/400/300?random=1',
            altLogo: 'assoLogo',
            summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
        }
    }
};

export const NoTagsSubject: Story = {
    args: {
        name: 'Trawl Watch',
        summary: 'TrawlWatch est un outil de surveillance en temps réel des navires de pêche industrielle dans les aires marines protégées pour documenter et combattre la pêche industrielle dans ces zones sensibles.',
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L’avion de Bernard » qui suit l’activité des jets privés.",
            "La plateforme suit les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche dans des zones maritimes protégées (AMP) à partir de données GPS récupérées (via antennes satellites et/ou terrestres)",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans.",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans."
        ],
        tags: [
            {
                "label": "Saison 12",
                "type": "temporal" as 'temporal' | 'subject'
            },
            {
                "label": "En cours",
                "type": "temporal" as 'temporal' | 'subject'
            },
            {
                "label": "JJ/MM/AAAA - JJ/MM/AAAA",
                "type": "temporal" as 'temporal' | 'subject'
            },
        ],
        association: {
            logo: 'https://picsum.photos/400/300?random=1',
            altLogo: 'assoLogo',
            summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
        }
    }
};

export const NoTags: Story = {
    args: {
        name: 'Trawl Watch',
        summary: 'TrawlWatch est un outil de surveillance en temps réel des navires de pêche industrielle dans les aires marines protégées pour documenter et combattre la pêche industrielle dans ces zones sensibles.',
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L’avion de Bernard » qui suit l’activité des jets privés.",
            "La plateforme suit les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche dans des zones maritimes protégées (AMP) à partir de données GPS récupérées (via antennes satellites et/ou terrestres)",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans.",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans."
        ],
        association: {
            logo: 'https://picsum.photos/400/300?random=1',
            altLogo: 'assoLogo',
            summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
        }
    }
};

export const NoAssoLogo: Story = {
    args: {
        name: 'Trawl Watch',
        summary: 'TrawlWatch est un outil de surveillance en temps réel des navires de pêche industrielle dans les aires marines protégées pour documenter et combattre la pêche industrielle dans ces zones sensibles.',
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L’avion de Bernard » qui suit l’activité des jets privés.",
            "La plateforme suit les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche dans des zones maritimes protégées (AMP) à partir de données GPS récupérées (via antennes satellites et/ou terrestres)",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans.",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans."
        ],
        tags: [
            {
                "label": "Saison 12",
                "type": "temporal" as 'temporal' | 'subject'
            },
            {
                "label": "En cours",
                "type": "temporal" as 'temporal' | 'subject'
            },
            {
                "label": "JJ/MM/AAAA - JJ/MM/AAAA",
                "type": "temporal" as 'temporal' | 'subject'
            },
            {
                "label": "Climat et biodiversité",
                "type": "subject" as 'temporal' | 'subject'
            },
            {
                "label": "Outils",
                "type": "subject" as 'temporal' | 'subject'
            },
        ],
        association: {
            summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
        }
    }
};

export const LongAssoSummary: Story = {
    args: {
        name: 'Trawl Watch',
        summary: 'TrawlWatch est un outil de surveillance en temps réel des navires de pêche industrielle dans les aires marines protégées pour documenter et combattre la pêche industrielle dans ces zones sensibles.',
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L’avion de Bernard » qui suit l’activité des jets privés.",
            "La plateforme suit les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche dans des zones maritimes protégées (AMP) à partir de données GPS récupérées (via antennes satellites et/ou terrestres)",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans.",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans."
        ],
        tags: [
            {
                "label": "Saison 12",
                "type": "temporal" as 'temporal' | 'subject'
            },
            {
                "label": "En cours",
                "type": "temporal" as 'temporal' | 'subject'
            },
            {
                "label": "JJ/MM/AAAA - JJ/MM/AAAA",
                "type": "temporal" as 'temporal' | 'subject'
            },
            {
                "label": "Climat et biodiversité",
                "type": "subject" as 'temporal' | 'subject'
            },
            {
                "label": "Outils",
                "type": "subject" as 'temporal' | 'subject'
            },
        ],
        association: {
            logo: 'https://picsum.photos/400/300?random=1',
            altLogo: 'assoLogo',
            summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées. Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées. Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
        }
    }
};