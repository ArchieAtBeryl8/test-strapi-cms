import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCompanySectionOne extends Struct.ComponentSchema {
  collectionName: 'components_sections_company_section_ones';
  info: {
    displayName: 'company_section_one';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCustomersSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_customers_sections';
  info: {
    displayName: 'customers-section';
  };
  attributes: {
    logos: Schema.Attribute.Component<'shared.customer-logo', true>;
    title_highlight: Schema.Attribute.String;
    title_normal: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    headline_line_1: Schema.Attribute.String;
    headline_line_2: Schema.Attribute.String;
  };
}

export interface SectionsNewsandinsightsComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_newsandinsights_components';
  info: {
    displayName: 'newsandinsights_component';
    icon: 'command';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    newandinsights: Schema.Attribute.Component<'shared.newsandinsight', true>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SectionsNewsandinsightsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_newsandinsights_sections';
  info: {
    displayName: 'newsandinsights-section';
    icon: 'command';
  };
  attributes: {
    newandinsight_component: Schema.Attribute.Component<
      'sections.newsandinsights-component',
      true
    >;
    title_highlight: Schema.Attribute.String;
    title_normal: Schema.Attribute.String;
  };
}

export interface SectionsProvidedServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_provided_services';
  info: {
    displayName: 'provided-services';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_services_sections';
  info: {
    displayName: 'services-section';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    services: Schema.Attribute.Component<'shared.service-item', true>;
    title_highlight: Schema.Attribute.String;
    title_normal: Schema.Attribute.String;
  };
}

export interface SectionsStrengthComponent extends Struct.ComponentSchema {
  collectionName: 'components_sections_strength_components';
  info: {
    displayName: 'strength_component';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsStrengths extends Struct.ComponentSchema {
  collectionName: 'components_sections_strengths';
  info: {
    displayName: 'strengths';
  };
  attributes: {
    strength_component: Schema.Attribute.Component<
      'sections.strength-component',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedCustomerLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_customer_logos';
  info: {
    displayName: 'customer-logo';
  };
  attributes: {
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNewsandinsight extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsandinsights';
  info: {
    displayName: 'newsandinsight';
    icon: 'command';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    displayName: 'service-item';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.company-section-one': SectionsCompanySectionOne;
      'sections.customers-section': SectionsCustomersSection;
      'sections.hero': SectionsHero;
      'sections.newsandinsights-component': SectionsNewsandinsightsComponent;
      'sections.newsandinsights-section': SectionsNewsandinsightsSection;
      'sections.provided-services': SectionsProvidedServices;
      'sections.services-section': SectionsServicesSection;
      'sections.strength-component': SectionsStrengthComponent;
      'sections.strengths': SectionsStrengths;
      'shared.customer-logo': SharedCustomerLogo;
      'shared.media': SharedMedia;
      'shared.newsandinsight': SharedNewsandinsight;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.service-item': SharedServiceItem;
      'shared.slider': SharedSlider;
    }
  }
}
