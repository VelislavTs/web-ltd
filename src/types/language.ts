export type Language = 'en' | 'bg';

export interface Translation {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    process: string;
    pricing: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    customWebsites: {
      title: string;
      description: string;
    };
    webApps: {
      title: string;
      description: string;
    };
    digitalMarketing: {
      title: string;
      description: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string[];
    stats: {
      years: string;
      projects: string;
      clients: string;
      satisfaction: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    perMonth: string;
    oneTime: string;
    contact: string;
    upfront: string;
    monthly: string;
    monthlyIncludes: string;
    starter: {
      name: string;
      description: string;
      monthlyPrice: string;
      features: string[];
    };
    professional: {
      name: string;
      description: string;
      monthlyPrice: string;
      features: string[];
    };
    enterprise: {
      name: string;
      description: string;
      monthlyPrice: string;
      features: string[];
    };
  };
  nonprofit: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    note: string;
    cta: string;
  };
  process: {
    title: string;
    subtitle: string;
    timeline: string;
    steps: {
      inquiry: {
        title: string;
        description: string;
      };
      meeting: {
        title: string;
        description: string;
      };
      information: {
        title: string;
        description: string;
      };
      prototype: {
        title: string;
        description: string;
      };
      delivery: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}
