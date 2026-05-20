import type { Core } from '@strapi/strapi';

const PUBLIC_ACTIONS = [
  'api::home.home.find',
  'api::about.about.find',
  'api::services.services.find',
  'api::contact.contact.find',
  'api::portfolio-item.portfolio-item.find',
  'api::portfolio-item.portfolio-item.findOne',
  'api::navigation-item.navigation-item.find',
  'api::navigation-item.navigation-item.findOne',
];

export default {
  register({ strapi }: { strapi: Core.Strapi }) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) return;

    for (const action of PUBLIC_ACTIONS) {
      const existing = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({ where: { action, role: publicRole.id } });

      if (existing) {
        if (!existing.enabled) {
          await strapi
            .query('plugin::users-permissions.permission')
            .update({ where: { id: existing.id }, data: { enabled: true } });
        }
      } else {
        await strapi
          .query('plugin::users-permissions.permission')
          .create({ data: { action, enabled: true, role: publicRole.id } });
      }
    }
  },
};
