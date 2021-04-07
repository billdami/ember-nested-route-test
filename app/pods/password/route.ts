import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import PageLayout from 'ember-nested-route-test/mixins/page-layout';

export default class Password extends PageLayout(Route.extend(UnauthenticatedRouteMixin)) {}
