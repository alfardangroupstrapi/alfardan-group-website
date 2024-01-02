import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCeoMessage extends Schema.Component {
  collectionName: 'components_blocks_ceo_messages';
  info: {
    displayName: 'CEO Message';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Name: Attribute.String;
    Description: Attribute.Blocks;
    link: Attribute.Component<'elements.button-link'>;
    ceoBgImage: Attribute.Media & Attribute.Required;
  };
}

export interface BlocksContentBlocks extends Schema.Component {
  collectionName: 'components_blocks_content_blocks';
  info: {
    displayName: 'Content Block';
    description: '';
  };
  attributes: {
    primaryTitle: Attribute.String;
    SecondaryTitle: Attribute.Text;
    fullDescription: Attribute.Blocks;
    featuredImage: Attribute.Media;
  };
}

export interface BlocksExploreOurLineOfBusinesses extends Schema.Component {
  collectionName: 'components_blocks_explore_our_line_of_businesses';
  info: {
    displayName: 'Explore Our Line of Businesses';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    subTitle: Attribute.String;
    contentTitle: Attribute.String;
    contentDescription: Attribute.Blocks;
    buttonLink: Attribute.Component<'elements.button-link'>;
  };
}

export interface BlocksFacts extends Schema.Component {
  collectionName: 'components_section_facts';
  info: {
    displayName: 'Facts';
    description: '';
  };
  attributes: {
    item: Attribute.Component<'elements.fact', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    video: Attribute.Media;
  };
}

export interface BlocksLatestNews extends Schema.Component {
  collectionName: 'components_blocks_latest_news';
  info: {
    displayName: 'Latest News';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    buttonLink: Attribute.Component<'elements.button-link'>;
  };
}

export interface BlocksLetSGetSocial extends Schema.Component {
  collectionName: 'components_blocks_let_s_get_socials';
  info: {
    displayName: 'Let\u2019s Get Social';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface BlocksOurPartners extends Schema.Component {
  collectionName: 'components_blocks_our_partners';
  info: {
    displayName: 'Our Partners';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface BlocksScholarshipProgram extends Schema.Component {
  collectionName: 'components_elements_scholarship_programs';
  info: {
    displayName: 'Tariqi';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    subTitle: Attribute.String;
    buttonLink: Attribute.Component<'elements.button-link'>;
  };
}

export interface BlocksTheEvolution extends Schema.Component {
  collectionName: 'components_blocks_the_evolutions';
  info: {
    displayName: 'The Evolution';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    sectionBgImage: Attribute.Media;
  };
}

export interface ElementsBusinessLineCountries extends Schema.Component {
  collectionName: 'components_elements_business_line_countries';
  info: {
    displayName: 'Business Line Countries';
    description: '';
  };
  attributes: {
    businessLineCountry: Attribute.Enumeration<
      ['Qatar', 'Saudi Arabia', 'Oman']
    > &
      Attribute.DefaultTo<'Qatar'>;
    Title: Attribute.String;
    titleSubtitle: Attribute.String;
    Description: Attribute.Text;
    comapnyDetails: Attribute.Component<'elements.company-details', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<
      ['Primary', 'Primary Outline', 'Secondary', 'Secondary Outline', 'Link']
    >;
  };
}

export interface ElementsCompanyDetails extends Schema.Component {
  collectionName: 'components_elements_company_details';
  info: {
    displayName: 'Company Details';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.Blocks;
  };
}

export interface ElementsEvolutionTimeLine extends Schema.Component {
  collectionName: 'components_elements_evolution_time_lines';
  info: {
    displayName: 'Time Line Item';
    description: '';
  };
  attributes: {
    Year: Attribute.BigInteger &
      Attribute.SetMinMax<{
        min: '4';
      }>;
    Description: Attribute.Component<'elements.time-line-content', true>;
  };
}

export interface ElementsFact extends Schema.Component {
  collectionName: 'components_elements_facts';
  info: {
    displayName: 'Fact Item';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media;
    Number: Attribute.BigInteger;
    Description: Attribute.Text;
  };
}

export interface ElementsFileAttachmentLinks extends Schema.Component {
  collectionName: 'components_elements_file_attachment_links';
  info: {
    displayName: 'File Attachment Links';
    description: '';
  };
  attributes: {
    fileAttachmentLinks: Attribute.Component<'elements.file-link', true>;
  };
}

export interface ElementsFileLink extends Schema.Component {
  collectionName: 'components_elements_file_links';
  info: {
    displayName: 'File Attachment Link';
    icon: 'folder';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Attachment: Attribute.Media;
    linkType: Attribute.Enumeration<
      ['Primary', 'Primary Outline', 'Secondary', 'Secondary Outline', 'Link']
    >;
  };
}

export interface ElementsFontTypeStyle extends Schema.Component {
  collectionName: 'components_elements_font_type_styles';
  info: {
    displayName: 'Font Type Style';
  };
  attributes: {
    fontTypeStyle: Attribute.Enumeration<['Light', 'Regular', 'Bold']>;
  };
}

export interface ElementsIconWithTextLink extends Schema.Component {
  collectionName: 'components_elements_icon_with_text_links';
  info: {
    displayName: 'Vision Mission Grid Item';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    link: Attribute.String;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 130;
      }>;
  };
}

export interface ElementsLineOfBusinesses extends Schema.Component {
  collectionName: 'components_elements_line_of_businesses';
  info: {
    displayName: 'Line of Businesses List';
    description: '';
  };
  attributes: {
    lineOfBusinessesList: Attribute.Enumeration<
      [
        'Jewellery',
        'Properties',
        'Exchange',
        'Investment',
        'Automotive',
        'Marine Services',
        'Hospitality',
        'Medical'
      ]
    >;
  };
}

export interface ElementsPartnerLogo extends Schema.Component {
  collectionName: 'components_elements_partner_logos';
  info: {
    displayName: 'Partner Logo';
  };
  attributes: {
    Logo: Attribute.Media & Attribute.Required;
    webLink: Attribute.String;
    Title: Attribute.String;
  };
}

export interface ElementsProfileFigureItem extends Schema.Component {
  collectionName: 'components_elements_profile_figure_items';
  info: {
    displayName: 'Profile Figure Item';
    icon: 'user';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

export interface ElementsTimeLineContent extends Schema.Component {
  collectionName: 'components_elements_time_line_contents';
  info: {
    displayName: 'Time Line Desc Row';
    description: '';
  };
  attributes: {
    descText: Attribute.String;
    fontTypeStyle: Attribute.Enumeration<['Light', 'Regular', 'Bold']> &
      Attribute.DefaultTo<'Regular'>;
  };
}

export interface NavigationMenuButtonLink extends Schema.Component {
  collectionName: 'components_navigation_menu_button_links';
  info: {
    displayName: 'Menu Button Link';
    icon: 'server';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    URL: Attribute.String;
    Target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_self'>;
    buttonStyle: Attribute.Enumeration<
      ['Primary', 'Primary Outline', 'Secondary', 'Secondary Outline', 'Link']
    > &
      Attribute.DefaultTo<'Primary Outline'>;
  };
}

export interface NavigationMenuItem extends Schema.Component {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'Menu Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    Path: Attribute.String & Attribute.Required;
  };
}

export interface NavigationSocialMedia extends Schema.Component {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    socialMediaIcon: Attribute.Enumeration<
      ['Facebook', 'X', 'Instagram', 'YouTube', 'LinkedIn']
    >;
    socialLink: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'manyWays';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    keywords: Attribute.Text;
    canonicalURL: Attribute.String;
  };
}

export interface SharedWebsiteLink extends Schema.Component {
  collectionName: 'components_shared_website_links';
  info: {
    displayName: 'Website Link';
    icon: 'link';
  };
  attributes: {
    websiteURL: Attribute.String;
    Name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.ceo-message': BlocksCeoMessage;
      'blocks.content-blocks': BlocksContentBlocks;
      'blocks.explore-our-line-of-businesses': BlocksExploreOurLineOfBusinesses;
      'blocks.facts': BlocksFacts;
      'blocks.hero': BlocksHero;
      'blocks.latest-news': BlocksLatestNews;
      'blocks.let-s-get-social': BlocksLetSGetSocial;
      'blocks.our-partners': BlocksOurPartners;
      'blocks.scholarship-program': BlocksScholarshipProgram;
      'blocks.the-evolution': BlocksTheEvolution;
      'elements.business-line-countries': ElementsBusinessLineCountries;
      'elements.button-link': ElementsButtonLink;
      'elements.company-details': ElementsCompanyDetails;
      'elements.evolution-time-line': ElementsEvolutionTimeLine;
      'elements.fact': ElementsFact;
      'elements.file-attachment-links': ElementsFileAttachmentLinks;
      'elements.file-link': ElementsFileLink;
      'elements.font-type-style': ElementsFontTypeStyle;
      'elements.icon-with-text-link': ElementsIconWithTextLink;
      'elements.line-of-businesses': ElementsLineOfBusinesses;
      'elements.partner-logo': ElementsPartnerLogo;
      'elements.profile-figure-item': ElementsProfileFigureItem;
      'elements.time-line-content': ElementsTimeLineContent;
      'navigation.menu-button-link': NavigationMenuButtonLink;
      'navigation.menu-item': NavigationMenuItem;
      'navigation.social-media': NavigationSocialMedia;
      'shared.seo': SharedSeo;
      'shared.website-link': SharedWebsiteLink;
    }
  }
}
