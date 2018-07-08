const category = 'function';

module.exports = {
  add: async (context, providerName, service) => {
    const options = {
      service,
      providerPlugin: providerName,
      build: true,
    };
    const providerController = require(`./provider-utils/${providerName}/index`);
    if (!providerController) {
      context.print.error('Provider not confgiured for this category');
      return;
    }
    return providerController.addResource(context, category, service, options);
  },
};
