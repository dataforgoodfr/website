import { describe, expect, it, vi } from 'vitest';

import { resolveCmsOutcome } from './cms-outcome';

describe('resolveCmsOutcome', () => {
  describe('quand le CMS repond', () => {
    it('demande le rendu sur une page singleton pourvue de contenu', () => {
      expect(resolveCmsOutcome({ data: { data: { title: 'Accueil' } } }, 'singleton')).toBe('render');
    });

    it('demande le rendu sur une page de detail dont l\'entree existe', () => {
      expect(resolveCmsOutcome({ data: { data: [{ slug: '2-tonnes' }] } }, 'detail')).toBe('render');
    });

    it('demande le rendu d\'une liste vide sur une page singleton', () => {
      expect(resolveCmsOutcome({ data: { data: [] } }, 'singleton')).toBe('render');
    });

    it('demande le rendu meme sans contenu imbrique, des lors que la reponse est la', () => {
      expect(resolveCmsOutcome({ data: { data: false } }, 'singleton')).toBe('render');
    });
  });

  describe('quand l\'adresse ne correspond a rien', () => {
    it('renvoie vers un 404 sur une page de detail vide', () => {
      expect(resolveCmsOutcome({ data: { data: [] } }, 'detail')).toBe('not-found');
    });

    it('ne confond pas une liste vide et une panne, quel que soit l\'appelant', () => {
      expect(resolveCmsOutcome({ data: { data: [] } }, 'detail')).not.toBe('error');
    });
  });

  describe('quand le CMS ne repond pas', () => {
    it('signale une erreur des que la reponse en porte une', () => {
      const error = { error: { status: 400, message: 'Invalid key' } };

      expect(resolveCmsOutcome({ data: { data: [] }, error }, 'detail')).toBe('error');
    });

    it('donne la priorite a l\'erreur sur un contenu par ailleurs present', () => {
      const error = { error: { status: 500 } };

      expect(resolveCmsOutcome({ data: { data: { title: 'Accueil' } }, error }, 'singleton')).toBe('error');
    });

    it('signale une erreur quand le contenu est explicitement nul', () => {
      expect(resolveCmsOutcome({ data: { data: null } }, 'singleton')).toBe('error');
    });

    it('signale une erreur quand l\'enveloppe de reponse est vide', () => {
      expect(resolveCmsOutcome({ data: {} }, 'singleton')).toBe('error');
    });

    it('signale une erreur quand il n\'y a aucune donnee du tout', () => {
      expect(resolveCmsOutcome({}, 'singleton')).toBe('error');
      expect(resolveCmsOutcome({ data: undefined }, 'detail')).toBe('error');
    });

    it('signale une erreur sur une enveloppe de forme inattendue', () => {
      expect(resolveCmsOutcome({ data: 'reponse illisible' }, 'singleton')).toBe('error');
      expect(resolveCmsOutcome({ data: null }, 'singleton')).toBe('error');
    });

    it('ne journalise rien de lui-meme, pour rester une fonction pure', () => {
      const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

      resolveCmsOutcome({ error: { status: 403 } }, 'singleton');
      resolveCmsOutcome({ data: { data: [] } }, 'detail');

      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });
  });
});
