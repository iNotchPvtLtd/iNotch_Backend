import type { Schema, Struct } from '@strapi/strapi';

export interface BenefitListBenefitList extends Struct.ComponentSchema {
  collectionName: 'components_benefit_list_benefit_lists';
  info: {
    displayName: 'benefitList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ButtonListButton extends Struct.ComponentSchema {
  collectionName: 'components_button_list_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    color: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    description: '';
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    description: '';
    displayName: 'socialLinks';
  };
  attributes: {
    heading: Schema.Attribute.String;
    socialLink: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface FantaSectionButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_button_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    color: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FantaSectionSecSection extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_sec_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    content: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FantaSectionAboutContentProps extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_about_content_props';
  info: {
    displayName: 'AboutContentProps';
  };
  attributes: {
    icon: Schema.Attribute.String;
    section: Schema.Attribute.Component<'fanta-section-sec.section', true>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FantaSectionContact extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    chattitle: Schema.Attribute.String;
    description: Schema.Attribute.String;
    email: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FantaSectionContentData extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_content_data';
  info: {
    displayName: 'ContentData';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FantaSectionIntroContentProps extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_intro_content_props';
  info: {
    description: '';
    displayName: 'IntroContentProps';
  };
  attributes: {
    button: Schema.Attribute.Component<'fanta-section-button.button', true>;
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FantaSectionLanguageSwitch extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_language_switches';
  info: {
    displayName: 'languageSwitch';
  };
  attributes: {
    footericon: Schema.Attribute.String;
    icon1: Schema.Attribute.String;
    icon2: Schema.Attribute.String;
  };
}

export interface FantaSectionLinks extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    links: Schema.Attribute.String;
  };
}

export interface FantaSectionPolicy extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_policies';
  info: {
    displayName: 'policy';
  };
  attributes: {
    links: Schema.Attribute.Component<'fanta-section.links', true>;
    title: Schema.Attribute.String;
  };
}

export interface FantaSectionSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_fanta_section_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
  };
}

export interface FlynowData extends Struct.ComponentSchema {
  collectionName: 'components_flynow_data';
  info: {
    displayName: 'data';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface FlynowFooter extends Struct.ComponentSchema {
  collectionName: 'components_flynow_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    colOneLinks: Schema.Attribute.Component<'elements.item', true>;
    description: Schema.Attribute.Text;
    logoLink: Schema.Attribute.Component<'elements.logo-link', true>;
    socialLinks: Schema.Attribute.Component<'elements.social-links', false>;
  };
}

export interface FlynowItem extends Struct.ComponentSchema {
  collectionName: 'components_flynow_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface FlynowQuestions extends Struct.ComponentSchema {
  collectionName: 'components_flynow_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    data: Schema.Attribute.Component<'flynow.data', true>;
  };
}

export interface HeaderFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_header_feature_lists';
  info: {
    displayName: 'featureList';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderRouteList extends Struct.ComponentSchema {
  collectionName: 'components_header_route_lists';
  info: {
    description: '';
    displayName: 'routeList';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface LayoutBottomNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_bottom_navs';
  info: {
    description: '';
    displayName: 'Bottom Nav';
  };
  attributes: {
    colOneLinks: Schema.Attribute.Component<'elements.link', true>;
    description: Schema.Attribute.String;
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
    socialLinks: Schema.Attribute.Component<'elements.social-links', false>;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    link: Schema.Attribute.Component<'elements.link', true>;
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
  };
}

export interface SectionIconSectionIcon extends Struct.ComponentSchema {
  collectionName: 'components_section_icon_section_icons';
  info: {
    displayName: 'sectionIcon';
  };
  attributes: {
    content: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFooter extends Struct.ComponentSchema {
  collectionName: 'components_section_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    address: Schema.Attribute.Component<'fanta-section.policy', false>;
    company: Schema.Attribute.Component<'fanta-section.policy', false>;
    contact: Schema.Attribute.Component<'fanta-section.contact', false>;
    languageSwitch: Schema.Attribute.Component<
      'fanta-section.language-switch',
      false
    >;
    policy: Schema.Attribute.Component<'fanta-section.policy', false>;
    socialLinks: Schema.Attribute.Component<'fanta-section.social-links', true>;
  };
}

export interface SectionsAboutContentProps extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_content_props';
  info: {
    displayName: 'AboutContentProps';
  };
  attributes: {
    icon: Schema.Attribute.String;
    section: Schema.Attribute.Component<'sections.section', true>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SectionsFaqList extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_lists';
  info: {
    displayName: 'FAQList';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsFaqsdata extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqsdata';
  info: {
    description: '';
    displayName: 'faqsdata';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

export interface SectionsFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_lists';
  info: {
    displayName: 'FeatureList';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHours extends Struct.ComponentSchema {
  collectionName: 'components_sections_hours';
  info: {
    description: '';
    displayName: 'hours';
  };
  attributes: {
    operatingDays: Schema.Attribute.String;
    operatingTime: Schema.Attribute.String;
  };
}

export interface SectionsHowItWorksList extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_it_works_lists';
  info: {
    displayName: 'HowItWorksList';
  };
  attributes: {
    badgeTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMiddleContentProp extends Struct.ComponentSchema {
  collectionName: 'components_sections_middle_content_props';
  info: {
    displayName: 'MiddleContentProp';
  };
  attributes: {
    button: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPositions extends Struct.ComponentSchema {
  collectionName: 'components_sections_positions';
  info: {
    displayName: 'positions';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SectionsProduct extends Struct.ComponentSchema {
  collectionName: 'components_sections_products';
  info: {
    displayName: 'product';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsQuestions extends Struct.ComponentSchema {
  collectionName: 'components_sections_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    data: Schema.Attribute.Component<'sections.faqsdata', true>;
  };
}

export interface SectionsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    content: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSectionWithImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_section_with_images';
  info: {
    description: '';
    displayName: 'section-with-image';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageRight: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

export interface SectionsServiceList extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_lists';
  info: {
    displayName: 'ServiceList';
  };
  attributes: {
    description: Schema.Attribute.String;
    pro: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSocialNetworks extends Struct.ComponentSchema {
  collectionName: 'components_sections_social_networks';
  info: {
    displayName: 'SocialNetworks';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsSponsorList extends Struct.ComponentSchema {
  collectionName: 'components_sections_sponsor_lists';
  info: {
    displayName: 'SponsorList';
  };
  attributes: {
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SectionsTeamList extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_lists';
  info: {
    description: '';
    displayName: 'teamList';
  };
  attributes: {
    firstName: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    positions: Schema.Attribute.String;
    socialNetworks: Schema.Attribute.Component<
      'sectionssn.social-network',
      true
    >;
  };
}

export interface SectionsTestimonialList extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_lists';
  info: {
    description: '';
    displayName: 'testimonialList';
  };
  attributes: {
    comment: Schema.Attribute.Text;
    image: Schema.Attribute.String;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.String;
    userName: Schema.Attribute.String;
  };
}

export interface SectionssnSocialNetwork extends Struct.ComponentSchema {
  collectionName: 'components_sectionssn_social_networks';
  info: {
    displayName: 'socialNetwork';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface VideoVideo extends Struct.ComponentSchema {
  collectionName: 'components_video_videos';
  info: {
    description: '';
    displayName: 'Video';
  };
  attributes: {
    videoId: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'benefit-list.benefit-list': BenefitListBenefitList;
      'button-list.button': ButtonListButton;
      'elements.item': ElementsItem;
      'elements.link': ElementsLink;
      'elements.logo-link': ElementsLogoLink;
      'elements.social-links': ElementsSocialLinks;
      'fanta-section-button.button': FantaSectionButtonButton;
      'fanta-section-sec.section': FantaSectionSecSection;
      'fanta-section.about-content-props': FantaSectionAboutContentProps;
      'fanta-section.contact': FantaSectionContact;
      'fanta-section.content-data': FantaSectionContentData;
      'fanta-section.intro-content-props': FantaSectionIntroContentProps;
      'fanta-section.language-switch': FantaSectionLanguageSwitch;
      'fanta-section.links': FantaSectionLinks;
      'fanta-section.policy': FantaSectionPolicy;
      'fanta-section.social-links': FantaSectionSocialLinks;
      'flynow.data': FlynowData;
      'flynow.footer': FlynowFooter;
      'flynow.item': FlynowItem;
      'flynow.questions': FlynowQuestions;
      'header.feature-list': HeaderFeatureList;
      'header.route-list': HeaderRouteList;
      'layout.bottom-nav': LayoutBottomNav;
      'layout.top-nav': LayoutTopNav;
      'section-icon.section-icon': SectionIconSectionIcon;
      'section.footer': SectionFooter;
      'sections.about-content-props': SectionsAboutContentProps;
      'sections.card': SectionsCard;
      'sections.contact': SectionsContact;
      'sections.cta': SectionsCta;
      'sections.faq-list': SectionsFaqList;
      'sections.faqsdata': SectionsFaqsdata;
      'sections.feature-list': SectionsFeatureList;
      'sections.hours': SectionsHours;
      'sections.how-it-works-list': SectionsHowItWorksList;
      'sections.middle-content-prop': SectionsMiddleContentProp;
      'sections.positions': SectionsPositions;
      'sections.product': SectionsProduct;
      'sections.questions': SectionsQuestions;
      'sections.section': SectionsSection;
      'sections.section-with-image': SectionsSectionWithImage;
      'sections.service-list': SectionsServiceList;
      'sections.social-networks': SectionsSocialNetworks;
      'sections.sponsor-list': SectionsSponsorList;
      'sections.team-list': SectionsTeamList;
      'sections.testimonial-list': SectionsTestimonialList;
      'sectionssn.social-network': SectionssnSocialNetwork;
      'video.video': VideoVideo;
    }
  }
}
