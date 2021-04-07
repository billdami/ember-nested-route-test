import Application from 'ember-nested-route-test/app';
import config from 'ember-nested-route-test/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
