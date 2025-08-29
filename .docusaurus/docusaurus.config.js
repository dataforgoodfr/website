export default {
  "title": "Data For Good",
  "tagline": "Rediriger la technologie au service de l'intérêt général",
  "url": "https://dataforgood.fr",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "deploymentBranch": "main",
  "favicon": "img/logo-dfg-new.png",
  "organizationName": "dataforgoodfr",
  "projectName": "dataforgoodfr.github.io",
  "plugins": [
    [
      "@docusaurus/plugin-content-blog",
      {
        "id": "projects",
        "routeBasePath": "projects",
        "path": "./projects",
        "postsPerPage": "ALL"
      }
    ]
  ],
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/Users/remiriviere/Projects/perso/data-for-good/dataforgoodfr.github.io/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "theme": {
          "customCss": "/Users/remiriviere/Projects/perso/data-for-good/dataforgoodfr.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "scripts": [
    {
      "src": "https://plausible.io/js/script.file-downloads.hash.outbound-links.js",
      "defer": true,
      "data-domain": "dataforgood.fr"
    }
  ],
  "themeConfig": {
    "navbar": {
      "title": "Data For Good",
      "logo": {
        "alt": "Data For Good Logo",
        "src": "img/logo-dfg-new2.png"
      },
      "items": [
        {
          "label": "🌎 L'association",
          "position": "left",
          "dropdownActiveClassDisabled": true,
          "items": [
            {
              "label": "A propos de Data For Good",
              "to": "/"
            },
            {
              "label": "Calendrier",
              "to": "https://dataforgood.notion.site/calendrier"
            }
          ]
        },
        {
          "label": "⭐ Projets",
          "position": "left",
          "dropdownActiveClassDisabled": true,
          "items": [
            {
              "label": "Tous les projets",
              "to": "/projects"
            },
            {
              "label": "Saison 13",
              "to": "/projects/tags/saison-13"
            },
            {
              "label": "Saison 12",
              "to": "/projects/tags/saison-12"
            },
            {
              "label": "Saison 11",
              "to": "/projects/tags/saison-11"
            },
            {
              "label": "Saison 10",
              "to": "/projects/tags/saison-10"
            },
            {
              "label": "Le serment d'Hippocrate du Data Scientist",
              "to": "/hippocrate"
            },
            {
              "label": "Les projets qui ont besoin d'aide",
              "to": "https://dataforgood.notion.site/Trouver-un-projet-6244df9394d048fca5e7350260919c8c"
            }
          ]
        },
        {
          "to": "/blog",
          "label": "📚 Blog",
          "position": "left"
        },
        {
          "to": "/iagenerative",
          "label": "🤖 IA Générative",
          "position": "left"
        },
        {
          "to": "/join",
          "label": "💪 Rejoindre la communauté",
          "className": "button button--secondary button--lg button-navbar",
          "position": "right"
        },
        {
          "to": "/propose",
          "label": "💡 Proposer un projet",
          "className": "button button--secondary button--lg button-navbar",
          "position": "right"
        },
        {
          "to": "https://www.helloasso.com/associations/data-for-good/formulaires/1",
          "label": "👏 Faire un don",
          "className": "button button--secondary button--lg button-navbar",
          "position": "right"
        },
        {
          "href": "https://github.com/dataforgoodfr",
          "className": "header-github-link",
          "position": "right",
          "aria-label": "GitHub repository"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "links": [
        {
          "title": "Pages",
          "items": [
            {
              "label": "L'association Data For Good",
              "to": "https://dataforgood.notion.site"
            },
            {
              "label": "Serment d'Hippocrate",
              "to": "/hippocrate"
            },
            {
              "label": "FAQ",
              "to": "https://dataforgood.notion.site/f58df2b6f02849a4ae94d8cb9ce49e5f?v=c165effdeeb140ea9fe964ca966485a6"
            },
            {
              "label": "Politique de confidentialité",
              "to": "/confidentialite"
            }
          ]
        },
        {
          "title": "Liens externes",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/dataforgoodfr"
            },
            {
              "label": "Youtube",
              "href": "https://www.youtube.com/channel/UCA_utdbmVhAOFujulWlaaCQ"
            },
            {
              "label": "Meetup",
              "href": "https://www.meetup.com/Data-for-Good-FR"
            },
            {
              "label": "Hugging Face",
              "href": "https://huggingface.co/DataForGood"
            },
            {
              "label": "Twitch",
              "href": "https://twitch.tv/dataforgood"
            }
          ]
        },
        {
          "title": "Mais aussi",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "Notion",
              "href": "https://dataforgood.notion.site"
            },
            {
              "label": "Linkedin",
              "href": "https://www.linkedin.com/company/dataforgood"
            },
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/dataforgoodfr/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/dataforgood_fr"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2025 Data For Good - Avec amour depuis 2014 ❤ - contact à contact@dataforgood.fr"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};