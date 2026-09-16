import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/nextjs-vite';
import nextIntlAnnotations from 'storybook-next-intl/preview';
import * as projectAnnotations from './preview';

// Ce fichier est indispensable : sans lui, les tests echouent sur
// « NoRenderFunctionError: No render function available », car les annotations
// de preview ne sont pas appliquees automatiquement dans cette configuration.
//
// `storybook-next-intl` doit y etre liste EXPLICITEMENT : `setProjectAnnotations`
// remplace les annotations fournies par les addons au lieu de les completer.
// Sans cette ligne, 67 tests echouent sur
// « Failed to call `useTranslations` because the context from
//   `NextIntlClientProvider` was not found ».
setProjectAnnotations([a11yAddonAnnotations, nextIntlAnnotations, projectAnnotations]);
