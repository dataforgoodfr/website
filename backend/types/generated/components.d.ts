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

export interface EditoEdito extends Struct.ComponentSchema {
  collectionName: 'components_edito_editos';
  info: {
    displayName: 'edito';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_text: Schema.Attribute.String;
  };
}

export interface GoalGoal extends Struct.ComponentSchema {
  collectionName: 'components_goal_goals';
  info: {
    displayName: 'goal';
  };
  attributes: {
    color: Schema.Attribute.String;
    goal_cta: Schema.Attribute.Component<
      'call-to-action.call-to-action-with-image',
      false
    >;
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

export interface InformationInformationBlock extends Struct.ComponentSchema {
  collectionName: 'components_information_information_blocks';
  info: {
    displayName: 'information_block';
  };
  attributes: {
    content: Schema.Attribute.Component<'information.information-text', true>;
    title: Schema.Attribute.String;
  };
}

export interface InformationInformationText extends Struct.ComponentSchema {
  collectionName: 'components_information_information_texts';
  info: {
    displayName: 'information_text';
  };
  attributes: {
    link: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
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

export interface KpiKpiWithCta extends Struct.ComponentSchema {
  collectionName: 'components_kpi_kpi_with_ctas';
  info: {
    displayName: 'kpi_with_cta';
  };
  attributes: {
    cta: Schema.Attribute.Component<'call-to-action.call-to-action', false>;
    kpi: Schema.Attribute.Component<'kpi.kpi', false>;
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
    quote: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'call-to-action.call-to-action': CallToActionCallToAction;
      'call-to-action.call-to-action-with-image': CallToActionCallToActionWithImage;
      'edito.edito': EditoEdito;
      'goal.goal': GoalGoal;
      'hero.hero': HeroHero;
      'information.information-block': InformationInformationBlock;
      'information.information-text': InformationInformationText;
      'kpi.kpi': KpiKpi;
      'kpi.kpi-with-cta': KpiKpiWithCta;
      'testimonial.testimonial': TestimonialTestimonial;
    }
  }
}
