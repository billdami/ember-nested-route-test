// Types for compiled templates
declare module 'ember-nested-route-test/templates/*' {
    import { TemplateFactory } from 'htmlbars-inline-precompile';
    const tmpl: TemplateFactory;
    export default tmpl;
}
