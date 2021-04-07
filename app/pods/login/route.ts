// REMOVE COMMENTS TO USE WITH EMBER-VALIDATIONS/CHANGESET ADDONS
// import ChangesetRoute from '@gavant/ember-validations/mixins/changeset-route';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import LoginController from 'ember-nested-route-test/pods/login/controller';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import SessionService from 'ember-simple-auth/services/session';
// import Validations from 'rudie/validations/login';

export default class Login extends Route.extend(UnauthenticatedRouteMixin) {
    @service session!: SessionService;
    classNames = ['login'];
    routeIfAlreadyAuthenticated = 'landing-route-here';
    // validations = Validations;

    /**
     * Creates a POJO for the login form changeset
     *
     * @return {Object}
     */
    model() {
        return {
            emailAddress: null,
            password: null
        };
    }

    /**
     * Reset controller state when leaving the route
     *
     * @param {Controller} controller
     * @param {boolean} isExiting
     * @param {any} transition
     */
    resetController(controller: LoginController, isExiting: boolean, transition: any): void {
        super.resetController(controller, isExiting, transition);
        if (isExiting) {
            this.session.set('isAuthenticating', false);
        }
    }
}
