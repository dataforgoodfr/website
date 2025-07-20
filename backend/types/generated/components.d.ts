import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'kpi.kpi': KpiKpi;
    }
  }
}
