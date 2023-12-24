"use strict";

/**
 * `landing-page-populate` middleware
 */

const populate = {
  pageSEO: {
    populate: {
      metaImage: {
        populate: true,
        fields: ["name", "alternativeText", "url"],
      },
    },
  },
  heroSlide: {
    populate: {
      video: {
        populate: true,
        fields: ["name", "alternativeText", "url"],
      },
    },
  },
  facts: {
    populate: {
      item: {
        populate: {
          Icon: {
            populate: true,
            fields: ["alternativeText", "url"],
          },
        },
      },
    },
  },
  ceoMessage: {
    populate: {
      link: {
        populate: true,
      },
      ceoBgImage: {
        populate: true,
        fields: ["alternativeText", "url"],
      },
    },
  },
  vmShortLinks: {
    populate: {
      icon: {
        populate: true,
        fields: ["alternativeText", "url"],
      },
    },
  },
  theEvolution: {
    populate: true,
  },
  evolutionTimeLineItem: {
    populate: {
      Description: {
        populate: true,
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In landing-page-populate middleware.");
    ctx.query = { populate, ...ctx.query };
    await next();
  };
};
