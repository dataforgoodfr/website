import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectPresentation, { ProjectPresentationProps } from './ProjectPresentation';

const meta: Meta<typeof ProjectPresentation> = {
    title: 'Organisms/ProjectPresentation',
    component: ProjectPresentation,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Un composant qui affiche la présentation d\'un projet avec sa description, ses tags et ses associations.',
            },
        },
    },
    argTypes: {
        tags: {
            description: 'Tags du projet',
            control: { type: 'object' },
        },
        description: {
            description: 'Description du projet (tableau de paragraphes)',
            control: { type: 'object' },
        },
        associations: {
            description: 'Associations liées au projet',
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
    description: [
        "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L'avion de Bernard » qui suit l'activité des jets privés.",
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
    associations: [
        {
            logo: 'https://picsum.photos/400/300?random=1',
            altLogo: 'assoLogo',
            summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
        }
    ]
};

export const Default: Story = {
    args: project
};

export const NoTagsTemporal: Story = {
    args: {
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L'avion de Bernard » qui suit l'activité des jets privés.",
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
        associations: [
            {
                logo: 'https://picsum.photos/400/300?random=1',
                altLogo: 'assoLogo',
                summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
            }
        ]
    }
};

export const NoTagsSubject: Story = {
    args: {
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L'avion de Bernard » qui suit l'activité des jets privés.",
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
        associations: [
            {
                logo: 'https://picsum.photos/400/300?random=1',
                altLogo: 'assoLogo',
                summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
            }
        ]
    }
};

export const NoTags: Story = {
    args: {
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L'avion de Bernard » qui suit l'activité des jets privés.",
            "La plateforme suit les trajectoires de milliers de bateaux de pêche en quasi temps réel afin de pouvoir analyser leurs pratiques de pêche dans des zones maritimes protégées (AMP) à partir de données GPS récupérées (via antennes satellites et/ou terrestres)",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans.",
            "L'outil combine une interface cartographique interactive avec un système d'alertes en temps réel, permettant à Bloom de documenter la présence de navires industriels dans des zones théoriquement protégées et d'agir rapidement pour la protection des océans."
        ],
        associations: [
            {
                logo: 'https://picsum.photos/400/300?random=1',
                altLogo: 'assoLogo',
                summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
            }
        ]
    }
};

export const NoAssoLogo: Story = {
    args: {
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L'avion de Bernard » qui suit l'activité des jets privés.",
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
        associations: [
            {
                summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
            }
        ]
    }
};

export const LongAssoSummary: Story = {
    args: {
        description: [
            "TrawlWatch est une plateforme de surveillance qui permet de suivre l'activité de plus de 1700 navires de pêche industrielle, particulièrement dans les aires marines protégées françaises et européennes. Elle se base sur le modèle du compte « L'avion de Bernard » qui suit l'activité des jets privés.",
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
        associations: [
            {
                logo: 'https://picsum.photos/400/300?random=1',
                altLogo: 'assoLogo',
                summary: "Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées. Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées. Bloom est une ONG fondée en 2012 par Claire Nouvian qui oeuvre à la protection des océans et des aires marines protégées.",
            }
        ]
    }
};