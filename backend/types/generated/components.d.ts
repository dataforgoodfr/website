import type { Schema, Struct } from '@strapi/strapi';

export interface CallToActionCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_call_to_action_call_to_actions';
  info: {
    description: '';
    displayName: 'call_to_action';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface CallToActionCallToActionWithImage
  extends Struct.ComponentSchema {
  collectionName: 'components_call_to_action_call_to_action_with_images';
  info: {
    displayName: 'Call_to_action_with_image';
    icon: 'cursor';
  };
  attributes: {
    content: Schema.Attribute.Text;
    cta: Schema.Attribute.Component<'call-to-action.call-to-action', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    icon: 'brush';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    talk: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface KpiKpi extends Struct.ComponentSchema {
  collectionName: 'components_kpi_kpis';
  info: {
    displayName: 'KPI';
    icon: 'chartPie';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stat: Schema.Attribute.String;
  };
}

export interface TestimonialTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'emotionHappy';
  };
  attributes: {
    author: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'call-to-action.call-to-action': CallToActionCallToAction;
      'call-to-action.call-to-action-with-image': CallToActionCallToActionWithImage;
      'hero.hero': HeroHero;
      'kpi.kpi': KpiKpi;
      'testimonial.testimonial': TestimonialTestimonial;
    }
  }
}
