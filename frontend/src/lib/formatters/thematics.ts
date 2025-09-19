export function transformPartners(partners: any) {
  return partners.map(
    (partner: {
      name: any;
      description: any;
      logo: any;
      website_link: any;
    }) => ({
      name: partner.name,
      description: partner.description,
      image: partner.logo,
      link: partner.website_link,
    })
  );
}

export function transformKpis(kpis: any) {
  return kpis.map((kpi: { id: any; stat: string; description: string }) => ({
    id: kpi.id,
    title: kpi.stat,
    description: kpi.description,
  }));
}

export function transformProjects(projects: any) {
  return projects.map(project => ({
    id: project.id,
    name: {
      children: project.title || '',
    },
    link: project.website_link || '',
    description: project.short_description || '',
    images: [project.thumbnail?.url || ''],
    baseline: 'Baseline du projet 1',
    company: project.related_partners[0].name || '',
    kpis: [
      {
        name: project.value_1,
        description: project.explanation_1,
      },
      {
        name: project.value_2,
        description: project.explanation_2,
      },
      {
        name: project.value_3,
        description: project.explanation_3,
      },
    ],
  }));
}

